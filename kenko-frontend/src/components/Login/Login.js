import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Login() {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='card-front'>
      <div className='center-wrap'>
        <div className='section text-center'>
          <h4 className='mb-4 pb-3'>Log In</h4>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-style'
                placeholder='Your Email'
                id='logemail'
                onChange={handleChange}
                autoComplete='off'
              />
              <Icon
                className='input-icon uil uil-at'
                icon='material-symbols:alternate-email'
              />
            </div>
            <div className='form-group mt-2'>
              <input
                type='password'
                name='password'
                className='form-style'
                placeholder='Your Password'
                id='logpass'
                onChange={handleChange}
                autoComplete='off'
              />
              <Icon
                className='input-icon uil uil-lock-alt'
                icon='mdi:password'
              />
            </div>
            <button type='submit' className='btn mt-4'>
              submit
            </button>
            <p className='mb-0 mt-4 text-center'>
              <a href='#' className='link'>
                Forgot your password?
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
