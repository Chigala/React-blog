import React from 'react'
import "./headline.css"

function Headline() {

    const blogTitle = "Magic leap 2 is a small but welcome step for AR";
    const author = "Chigala Kingsley";
    const imageUrl = "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  return (
    <div className='headline__container'>
        <div className="headlinePost__container">
             <img src={imageUrl} alt="" />
             <div className="blog__text">
             </div>
             <p>{blogTitle}</p>
             <p><strong>BY</strong> <span className='blog__author'>{author.toUpperCase()} </span></p>
             

        </div>
        <div className="headlinePost__container">
             <img src={imageUrl} alt="" />
             <div className="blog__text">
             </div>
             <p>{blogTitle}</p>
             <p><strong>BY</strong> <span className='blog__author'>{author.toUpperCase()} </span></p>
             

        </div>
        <div className="headlinePost__container">
             <img src={imageUrl} alt="" />
             <div className="blog__text">
             </div>
             <p>{blogTitle}</p>
             <p><strong>BY</strong> <span className='blog__author'>{author.toUpperCase()} </span></p>
             

        </div>
        <div className="headlinePost__container">
             <img src={imageUrl} alt="" />
             <div className="blog__text">
             </div>
             <p>{blogTitle}</p>
             <p><strong>BY</strong> <span className='blog__author'>{author.toUpperCase()} </span></p>
             

        </div>
        <div className="headlinePost__container">
             <img src={imageUrl} alt="" />
             <div className="blog__text">
             </div>
             <p>{blogTitle}</p>
             <p><strong>BY</strong> <span className='blog__author'>{author.toUpperCase()} </span></p>
             

        </div>
        <div className="headlinePost__container">
             <img src={imageUrl} alt="" />
             <div className="blog__text">
             </div>
             <p>{blogTitle}</p>
             <p><strong>By</strong> <span className='blog__author'>{author.toUpperCase()} </span></p>
             

        </div>
        



    </div>
  )
}

export default Headline