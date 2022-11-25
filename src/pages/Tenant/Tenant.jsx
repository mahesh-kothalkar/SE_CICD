import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Tenant.css'
const Tenant = () => {

    const [getprop, setprop] = useState([]);

    useEffect(() => {
        axios.get("https://semern.herokuapp.com/property")
            .then((res) =>
                setprop(res.data),
                console.log(getprop)
            )
    }, [])

    return (
        <>
            <div className='Hello Tenant'>
                <h2 className='name'>Welcome Tenant</h2>
                {getprop.map((property) => {
                    return (
                        <>
                            <div className="item" key={property.name}>
                                <div className='card'>{property.name}</div>
                                <br/>
                                <div className='address'>property Address<br/> {property.address}</div>
                                <img className='tenantpageimg' src={property.photo} />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Tenant