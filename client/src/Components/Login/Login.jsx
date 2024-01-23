import React from 'react'
import './Login.css'
import '../../Home.css'
import { Link } from 'react-router-dom'

import logo from '../../LoginAssets/logo.png'
import vid from '../../LoginAssets/vid1.mp4'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  return (
    <div>
      <div className="loginPage flex">
        <div className="container flex">
          <div className="vidDiv">
            <video src={vid} autoPlay loop muted className='vid'></video>

            <div className="txtDiv">              

              <div className="footerDiv">
                <span className="text">Don't have an account?</span>
                <Link to='/register'>
                <button className="btn">Sign Up</button></Link>
              </div>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Img" className='logoimg'/>
              <h3>Welcome Back!</h3>
            </div>

            <form action="" className='form grid'>

              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className='icon'/>
                  <input type="text" id='username' placeholder='Enter username'/>
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className='icon'/>
                  <input type="password" id='username' placeholder='Enter password'/>
                </div>
              </div>

              <div className="buttons flex">
                <Link to='/org'>
                  <button className="btn flex" type='submit'>
                    <span>Log In as Organization</span>
                    <AiOutlineSwapRight className='icon'/>
                  </button>
                </Link>

                <Link to='/donor'>
                  <button className="btn flex" type='submit'>
                    <span>Log In as Donor</span>
                    <AiOutlineSwapRight className='icon'/>
                  </button>
                </Link>
              </div>

              <span className="forgotPassword">Forgot your password? <a href="">Click Here</a></span>

            </form>
          </div>


        </div>
      </div>

      <div className="">
          <a href="/Donor">Donor</a>
      </div>
      <div className="">
          <a href="/Org">Org</a>
      </div>
    </div>
  )
}

export default Login