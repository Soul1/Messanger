import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import {connect} from 'react-redux'

const Body = () => {
  return (
    <div className='body'>
     <Header/>
     <Main/>
     <Footer/>
    </div>
  )
}

const mSTP = () => {

}

export default connect() (Body)