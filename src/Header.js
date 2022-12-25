import React from 'react';
import styles from './css/style.css'

const Header = () => {
  return (
   
<header className="header" style={{background:"#dfdddd"}} >



<a data-aos="zoom-in-left" data-aos-delay="150" href="tel:5554280940"className="logo"> <img src='https://i.imgur.com/Cn0XDK9.png' style={{height:"auto",width:"100px"}}/> </a>

<nav className="navbar">
    <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">home</a>
    <a data-aos="zoom-in-left" data-aos-delay="450" href="#floorplan">About</a>
    <a data-aos="zoom-in-left" data-aos-delay="600" href="#pricelist">Gallery</a> 
    <a data-aos="zoom-in-left" data-aos-delay="1150" href="#video">Bhajans</a>
    <a data-aos="zoom-in-left" data-aos-delay="750" href="#features">Contact</a>
</nav>


<div >
  <div><h2 style={{marginLeft:"15px",color:"#3a3a3a",fontSize:"16px",textAlign:"center",marginTop:"8px",marginBottom:'-10px'}}>For Bookings</h2></div>
  <a href="tel:8130306040"><button className="neonbtn" style={{zIndex:'100',marginLeft:"3%",marginTop:"0px"}}><h4 className="neon" style={{zIndex:'110',position:'relative',textAlign:'center'}}>+91-81-3030-6040</h4></button></a>
</div>
</header>

    
  )
}

export default Header;