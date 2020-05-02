import React, {useState} from 'react';
import firebase from "firebase/app";
import {connect} from "react-redux";
import {isAuthenticated} from "../../../redux/actios/user"

const Login = (props: {isAuthenticated: any} ) => {
  const [form, setForm] = useState({email: '', password: ''})
  const onLoginClick = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
      props.isAuthenticated(true)
    } catch (e) {
      throw e
    }
  }
  const formHandler = (e: any) => setForm({...form, [e.target.name]: e.target.value})
  return (
    <div className='login width'>
      <div className="login__inner">
        <h3 className="login-title">Login</h3>
        <div className="login--form">
          <div>
            <input type="email" value={form.email}
                   name="email" onChange={formHandler}/>
            <input type="password" value={form.password}
                   name="password" onChange={formHandler}/>
            <button onClick={onLoginClick}>LogIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {isAuthenticated}) (Login);