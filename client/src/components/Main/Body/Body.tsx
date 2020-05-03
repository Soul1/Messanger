import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {connect} from "react-redux";

const Body = () => {
  return (
    <>
     <Header/>
     <Main/>
     <Footer/>
    </>
  );
};

const mSTP = () => {

}

export default connect() (Body);