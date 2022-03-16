import React from 'react'
import "./modal.css"

function Modal({modal}) {
  return (
    <div className='modal__container' onClick={()=>modal(false)}>
        <button>login</button>
        <hr className='horizontal__line '/>
        <button className='signup'>signup</button>
    </div>
  )
}

export default Modal