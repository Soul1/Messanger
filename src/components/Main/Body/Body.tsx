import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import {connect} from 'react-redux'
import {appState} from "../../../redux/store";

const Body = () => {
  return (
    <div className='body'>
     <Header/>
     <Main/>
     <Footer/>
    </div>
  )
}

const mSTP = (state: appState) => {

}

export default connect() (Body)