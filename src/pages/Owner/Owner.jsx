import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Owner.css'

const SERVER_URL = process.env.REACT_APP_API_URL;
console.log(SERVER_URL)

const Owner = () => {

    const navigator = useNavigate();
    const [getid,setid] = useState('');

    function handleAdd(id) {
        localStorage.setItem("getid", id);
        navigator('/AddProperty', id)
    }
    const handleEdit = (id) => {
        localStorage.setItem("getid", id);
        navigator('/EditProperty',id)
    }
    const handleDelete = (id) => {
        axios.delete(`/property/${id}`);
        navigator("/owner")
    }

    const [getuser, setuser] = useState([]);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("https://semern.herokuapp.com/user")
            .then((res) =>
                setuser(res.data),
            )
            .catch((err) => console.log(err));
        getProperties();
    }, [])
    
    const getProperties = async () => {
        try {
            const response = await axios.get("https://semern.herokuapp.com/user/property/636f8fbd2eb849788e2bede4");
            setProperties(response.data);
            {localStorage.setItem("ID","636f8fbd2eb849788e2bede4")}
            console.log(response);
        }catch(err) {
            console.log(err)
        }
    }

    const [items, setItems] = useState([]);

    return (
        <>
            <div className='Owner'>
                <h2 className='owenername'>Owner Page</h2>
                {getuser.map((property) => {
                    return (
                        <>
                            <div className="items" key={property.email}>
                                <div className='propname'>Owner Name: {property.name}</div>
                                <div className='propemail'>Owner Email: {property.email}</div>
                                <div className='propaddress'>Owner Address: {property.address}</div>
                            </div>
                            <button onClick={()=>handleAdd(property._id)} >Add Property</button>
                        </>
                    )
                })}
                <div>
                    {
                        properties.map((property) => {
                            return (
                                <div className="item" key={property.name}>
                                    <div className='card'>Property Name: {property.name}</div>
                                    <div className='address'>property Address: {property.address}</div>
                                    <img className='img' src={property.photo} /><br/>
                                    <button onClick={()=>handleEdit(property._id)} >Edit Property</button>
                                    <button onClick={()=>handleDelete(property._id)} >Delete Property</button>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </>
    )
}

export default Owner