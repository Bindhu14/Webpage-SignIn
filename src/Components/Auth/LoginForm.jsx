import React, { useState } from 'react';
import './LoginForm.css';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineVpnKey } from 'react-icons/md';
import ForgotPassword from './ForgotPassword'; 
import { HiEye, HiEyeOff } from 'react-icons/hi';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    setForgotPasswordVisible(true);
  };

  const handleBackToLogin = () => {
    setForgotPasswordVisible(false);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const correctEmail = 'user@example.com';
    const correctPassword = 'password123';

    if (email === correctEmail && password === correctPassword) {
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <div className='mb-4 logo-div'>
        <h4 className='mb-0'>iBuilder</h4>
      </div>

      {forgotPasswordVisible ? (
        <ForgotPassword onBackToLogin={handleBackToLogin} />
      ) : (
        <div className='wrapper login-form'>
          <form onSubmit={handleSignIn}>
            <h1>WELCOME BACK!</h1>
            <p>Sign in to continue to IBuilder portal</p>

            <div className='input-box'>
              <h4>Email</h4>
              <div className='email'>
                <FaRegUser className='icon' />
                <input
                  type='text'
                  placeholder='Enter email address'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className='input-box'>
              <h4>Password<a href='#' onClick={handleForgotPasswordClick}>Forgot password</a></h4>
              <div className='pass'>
                <MdOutlineVpnKey className='icon' />
                <input
                  type={showPassword ? 'password' : 'text'}
                  placeholder='Enter password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <HiEyeOff className='icon' onClick={togglePasswordVisibility} />
                ) : (
                  <HiEye className='icon' onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>
            {loginError && (
              <div className='error-message'>
                Incorrect email or password! Try again.
              </div>
            )}
            <button type='submit'>SIGN IN</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
