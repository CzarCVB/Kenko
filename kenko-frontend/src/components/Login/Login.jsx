import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";

import { useStateContext } from "../../contexts/ContextProvider";

export default function Login() {
  const { setLoggedIn } = useStateContext();
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/signin", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("isLoggedIn", res.data.token);
        setLoggedIn(true);
        navigate("/dashboard");
      })
      .catch((err) => {
        setUserCredentials({
          email: "",
          password: "",
        });
        alert("Invalid Details");
      });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='card-front'>
      <div className='center-wrap'>
        <div className='section_login text-center'>
          <h4 className='mb-4 pb-3'>Log In</h4>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-style'
                placeholder='Your Email'
                id='logemail'
                value={email}
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
                value={password}
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
              <a href='/' className='link'>
                Forgot your password?
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
