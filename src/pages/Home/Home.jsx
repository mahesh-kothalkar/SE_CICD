import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import user from '../../images/users.png'

const Home = () => {
  const navigate = useNavigate();
  const handleTenant = () => {
    navigate('/tenant')
  }
  const handleOwner = () => {
    navigate('/owner')
  }
  return (
    <div className='container'>
      <div className="tenant-container">
        
        <img className='tenantimg' src={user} alt='Tenant' />
        <button type='submit' onClick={handleTenant} >Tenant page</button>
      </div>
      <div className="owner-container">
        
        <img className='ownerimg' src={user} alt='Owner' />
        <button type='submit' onClick={handleOwner} >Owner page</button>
      </div></div>
  )
}

export default Home