import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, name, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/signup", {
        email,
        name,
        password,
      })
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setUserCredentials({
          name: "",
          email: "",
          password: "",
        });
        alert("Invalid Details");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='card-back'>
      <div className='center-wrap'>
        <div className='section_login text-center'>
          <h4 className='mb-4 pb-3'>Sign Up</h4>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                className='form-style'
                placeholder='Your Full Name'
                id='logname'
                autoComplete='off'
                value={name}
                onChange={handleChange}
              />
              <Icon className='input-icon uil uil-user' icon='uil:user' />
            </div>
            <div className='form-group mt-2'>
              <input
                type='email'
                name='email'
                className='form-style'
                placeholder='Your Email'
                id='logemail'
                autoComplete='off'
                value={email}
                onChange={handleChange}
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
                autoComplete='off'
                value={password}
                onChange={handleChange}
              />
              <Icon
                className='input-icon uil uil-lock-alt'
                icon='mdi:password'
              />
            </div>
            <button type='submit' className='btn mt-4' onSubmit={handleSubmit}>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
