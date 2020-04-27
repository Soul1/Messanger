import React, {useState} from 'react';
import firebase from "firebase/app";


const Login = () => {
  const [form, setForm] = useState({email: '', password: ''})
  const onLoginClick = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
    } catch (e) {

    }
  }
  const formHandler = (e: any) => setForm({...form, [e.target.name]: e.target.value})
  return (
    <div className='login container'>
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
      <canvas id="canvas" width="400" height="400"/>
    </div>
  );
}

export default Login;