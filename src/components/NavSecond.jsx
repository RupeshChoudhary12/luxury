import React from 'react'
import './css/navsecond.css'
import icon from '../image/MP_Logo_black-svg.png'
import cart from '../image/Cart-icon.png'
const NavSecond = () => {
  return (
    <>
   <div className='navbar'>
   <div class="container-fluid" >
      <img id='icon' src={icon}/>
      <div class="logo">
        <i class="bi bi-geo-alt"></i>
        <img src={cart} alt=""/>
        <i class="bi bi-person"></i>
        <i class="bi bi-search"></i>
      </div>
    </div>
   </div>
   <div class="nav">
    <span>
      <p>LIVING ROOM</p>
      <p>BEDROOM</p>
      <p>OCCASIONAL</p>
      <p>LEATHER</p>
      <p>LIGHTING</p>
      <p>HOME OFFICE</p>
      <p>DINING ROOM</p>
      <p>ACCESRIOS</p>
      <p>OUTDORE</p>
      <p>SHOOROOM</p>
      <p>DESIGN SERVISE</p>
    </span>

    <h1>SOUTHERN CALIFORNIA'S LARGEST LUXURY FURNITURE & INTERIOR DESIGN SHOWROOM</h1>

  </div>
      
    </>
  )
}

export default NavSecond
