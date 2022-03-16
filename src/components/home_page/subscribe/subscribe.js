import React from 'react'
import "./subscribe.css"

function Subscribe() {
  return (
    <div className='main'>
        <div className="brief__container">
            <p>Reso Coder is the place for your professional growth as a developer. Learn from project-based tutorials that are not afraid to cover important, yet often overlooked, topics such as good code architecture, testing and even deployment.</p>
        </div>
        <div className="subscribe__container">
              <div className="subscribe__text">
                  <p>Join and subscribe to the newsletter to receive weekly programming news and resources.</p>
              </div>
              <div className="subscribe__data">
                  <input className='subscribe__input' type="text" placeholder='Email' />
                  <button className='subscribe__button'>submit</button>
              </div>

        </div>
    </div>
  )
}

export default Subscribe