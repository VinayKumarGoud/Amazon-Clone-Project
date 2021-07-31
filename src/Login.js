 import React from 'react'
 import './Login.css'
 import { Link } from 'react-router-dom'
import { blue } from '@material-ui/core/colors'
 
 function Login() {
     return (
         <div className="login">
          <Link to="/">
          <img className="login__logo" alt="" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
          </Link>
   
          <div className="login__container">
          <h1>Signin</h1>
          <form><h5>Email Id</h5>
          <input type="text" />
          </form>
          <form><h5>Password</h5>
          <input type="password" />
          </form>
          <button type="submit" className="login__SignInButton">Sign in</button>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          <div  style={{paddingTop: '2em', color: 'blue'}}>
          <p>* Need Help?</p>
          </div>
          </div>
          <div className="ptag">
          <p>New to Amazon?</p>
          </div>
          <div>
           
          <button className="login__CreateButton">Create Your Amazon Account</button>
          </div>
         </div>
     )
 }
 
 export default Login
 