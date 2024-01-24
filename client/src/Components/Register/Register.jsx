import React from 'react'
import './Register.css'
import '../../Home.css'
import { Link } from 'react-router-dom'

import logo from '../../LoginAssets/logo.png'
import vid from '../../LoginAssets/vid1.mp4'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineSwapRight } from "react-icons/ai";

const Register = () => {
  return (
    <div>
      <div className="registerPage flex">
        <div className="container flex">
          <div className="vidDiv">
            <video src={vid} autoPlay loop muted className='vid'></video>

            <div className="txtDiv">              

              <div className="footerDiv">
                <span className="text">Already a user?</span>
                <Link to='/'>
                <button className="btn">Log In</button></Link>
              </div>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Img" className='logoimg'/>
              <h3>Let Us Know You!</h3>
            </div>

            <form action="" className='form grid'>

              <div className="inputDiv">
                <label htmlFor="email">Email Id</label>
                <div className="input flex">
                  <AiOutlineMail className='icon'/>
                  <input type="text" id='email' placeholder='Enter email'/>
                </div>
              </div>

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
                    <span>Sign In as Organization</span>
                    <AiOutlineSwapRight className='icon'/>
                  </button>
                </Link>

                <Link to='/donor'>
                  <button className="btn flex" type='submit'>
                    <span>Sign In as Donor</span>
                    <AiOutlineSwapRight className='icon'/>
                  </button>
                </Link>
              </div>

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
    // <div>
    //     <div className="">
    //         <a href="/">Login</a>
    //     </div>
    //     <div className="">
    //         <a href="/Donor">Donor</a>
    //     </div>
    //     <div className="">
    //         <a href="/Org">Org</a>
    //     </div>
    // </div>
  )
}

export default Register