import React from 'react'
import  "./header.css"

function Header() {
    const date = "saturday"; 
    const headerSubtitle = "the exist scam";
  return (
    <div className='header'>
        <div className="headerText">
           <p className='header__name'>Gala.dev</p>
           <div className="underDiv">
               <p className='header__date'>{date}</p>
               <p>{headerSubtitle}</p>
            </div>

        </div>
    </div>
  )
}

export default Header