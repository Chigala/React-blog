import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer__container'>
        <div className="footer__row">
            <div className="blog__name">
                <p>Gala.dev</p>
            </div>
            <div className="footer__links">
                <ul className='list'>
                    <li>About</li>
                    <li>Science</li>
                    <li>Tech</li>
                    <li>Programming</li>
                    <li>Phone reviews</li>
                </ul>
            </div>
        </div>
        <div className="footer__copyright">
            <p>Gala.dev</p>
        </div>
    </div>
  )
}

export default Footer