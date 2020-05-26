import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const Body = () => {
  return (
    <div className='body'>
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}

export default Body