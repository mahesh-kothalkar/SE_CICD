import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './EditProperty.css'
const EditProperty = (id) => {

    const [name, nameChange] = useState();
    const [address, addChange] = useState();
    const [photo, photochange] = useState();
    const navigate = useNavigate()

    const ID = localStorage.getItem("getid");

    const handelsubmit = (e) => {
        e.preventDefault();
        const userdata = { name, address, photo };
        axios.put(`https://semern.herokuapp.com/property/${ID}`, userdata)
            .then((res) => {
                navigate('/owner')
            }).catch((err) => {
                console.log(err)
            })
            }

    return (
        <>
        <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='constainer' onSubmit={handelsubmit}>
                        <div className='card' >
                            <div className='card-title'>
                                <h2>Edit Property Data</h2>
                            </div>
                            <div className='card-body'>
                                <div className='rows'>
                                    <div className='names'>
                                        <div className='form-group'>
                                            <label>NAME : </label>
                                            <input value={name} onChange={e => nameChange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>

                                    <div className='address'>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ADDRESS : </label>
                                            <input value={address} onChange={e => addChange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>PHOTO : </label>
                                            <input value={photo} onChange={e => photochange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>


                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button className='save' type='checked'>Save</button>
                                            <Link to="/owner" className='links'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </>
    )
}

export default EditProperty