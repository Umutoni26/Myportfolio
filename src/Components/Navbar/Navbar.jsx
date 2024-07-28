import React, { useRef, useState } from 'react'
import './Navbar.css'
import vns from '../../assets/vns.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const [menu,setMenu]= useState("home")
  const menuRef = useRef();

  const openMenu= ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu= ()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className="Navbar">
       <img className="logo" src={vns} alt="" />
       <IoMenuSharp onClick={openMenu} className='nav-mob-open'/>

       <ul ref={menuRef} className="nav-menu">
          <IoClose onClick={closeMenu} className='nav-mob-close' /> 
          <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <hr/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <hr/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <hr/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <hr/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <hr/>:<></>}</li>
       </ul>

       <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>

    </div>
  )
}

export default Navbar
