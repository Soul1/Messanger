import React, {useEffect, useState} from 'react';

const Login = () => {
  const [form, setForm] = useState({email:'', password:''})
  const formHandler = (e: any) => setForm({...form, [e.target.name]: e.target.value})
  return (
    <div className='login container'>
      <div className="login__inner">
        <h3 className="login-title">Login</h3>
        <div className="login--form">
          <form>
            <input type="email" value={form.email}
                   name="email" onChange={formHandler}/>
            <input type="password" value={form.password}
                   name="password" onChange={formHandler}/>
            <button>Submit</button>
          </form>
        </div>

      </div>
      <canvas id="canvas" width="400" height="400"/>
    </div>
  );
}

export default Login;