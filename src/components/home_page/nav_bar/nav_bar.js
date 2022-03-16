import React from 'react'
import "./nav_bar.css"
import {BsPerson,BsSearch,BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs"

function NavBar({modal,searchField,searchFieldValue}) {
  return (
    <div className='navBar__container'>
        <div className="nav__links">
            <ul className='nav__links'>
              <li>Science</li>
              <li>Tech</li>
              <li>programming</li>
              <li>Phone reviews</li>
            </ul>
        </div>
        <div className="social__links">
             <p><BsFacebook/></p>
             <p><BsTwitter/></p>
             <p><BsInstagram/></p>
        </div>
        <div className="profile">
            <p className='profile__icon'><BsPerson onClick={()=> modal(true)} /></p>
            <p><BsSearch onClick={()=>searchField(!searchFieldValue) }/></p>
        </div>

    </div>
  )
}

export default NavBar