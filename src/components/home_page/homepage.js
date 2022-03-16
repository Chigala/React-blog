import React from 'react'
import Header from './header/header'
import NavBar from './nav_bar/nav_bar'
import SearchField from './search_field/search_field'
import Headline from './headline/headline'
import Modal from '../modal/modal'
import BlogPost from './blog_post/blog_post'
import Subscribe from './subscribe/subscribe'
import Footer from './footer/footer'
import { useState } from 'react'

const HomePage = () => {
    const [showModal, setshowModal] = useState(false);
const [showSearchField, setshowSearchField] = useState(false);
  return (
    <div>
        <Header/>
      <NavBar modal={setshowModal} searchField={setshowSearchField} searchFieldValue={showSearchField}/>
      {showSearchField&&<SearchField/>}
      {showModal&&<Modal modal={setshowModal}/>}
      <Headline/>
      <BlogPost/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default HomePage