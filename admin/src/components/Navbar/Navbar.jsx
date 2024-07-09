import React from 'react'
import './Navebar.css'

import {assets} from '../../assets/assets'
function Navbar() {
  return (
    <div className=' navbar'>
        <img className='logo' src={assets.logo} alt="logo" />
        <h5>Admin-Page</h5>
        <img className='profile' src={assets.profile_image} alt="admin img" />
      
    </div>
  )
}

export default Navbar
