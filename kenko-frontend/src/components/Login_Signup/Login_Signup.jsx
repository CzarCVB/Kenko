import React from "react";

import Login from "../Login/Login";
import Signup from "../Signup/Signup";

import "./Login_Signup.css";

const LoginSignup = () => {
  return (
    <div className='section_login'>
      <div className='container'>
        <div className='row full-height justify-content-center'>
          <div className='col-12 text-center align-self-center py-5'>
            <div className='section pb-5 pt-5 pt-sm-2 text-center'>
              <h6 className='mb-0 pb-3'>
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className='checkbox'
                type='checkbox'
                id='reg-log'
                name='reg-log'
              />
              <label htmlFor='reg-log'></label>
              <div className='card-3d-wrap mx-auto'>
                <div className='card-3d-wrapper'>
                  <Login />
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
