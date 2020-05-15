import React, {ChangeEvent, useState} from 'react';
import firebase from "firebase/app";
import {connect} from "react-redux";
import {isAuthenticated} from "../../../redux/actios/user"

type IProps = MDTP

const Login = ({isAuthenticated}: IProps) => {
  const [form, setForm] = useState({email: '', password: ''})
  const [dis, setDis] = useState(false)
  const onLoginClick = async () => {
    try {
      setDis(true)
      const response = await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
      setDis(false)
      console.log(response.user?.getIdToken());
      isAuthenticated(true);
    } catch (e) {
      setDis(false)
      throw e
    }
  }
  const formHandler = (e: ChangeEvent<HTMLInputElement>) => setForm({...form, [e.target.name]: e.target.value})
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
            <button onClick={onLoginClick} disabled={dis}>LogIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}

type MDTP = {
  isAuthenticated: (isAuth: boolean) => void;
}

export default connect<{}, MDTP, {}, {}>(null, {isAuthenticated})(Login);