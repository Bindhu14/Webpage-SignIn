import React, { useState } from 'react';
import './ForgotPassword.css';
import { FaRegUser } from 'react-icons/fa6';
import { FaMobileAlt } from "react-icons/fa";


const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAccountFound = false;

    if (!isAccountFound) {
      setShowErrorMessage(true);
    } else {
      console.log('Submit:', email, mobileNumber);
    }
  };

  return (
    <div className='wrapper forgot-password'>
      <form onSubmit={handleSubmit}>
        <h1>FORGOT PASSWORD?</h1>
        <p>Reset password with IBuilder</p>

        <div className='input-box'>
          <h4>Email</h4>
          <div className='email'>
            <FaRegUser className='icon' />
            <input
              type='text'
              placeholder='Enter email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='input-box'>
          <h4>Mobile Number</h4>
          <div className='number'>
          <FaMobileAlt className='icon'/>
            <input
              type='number'
              placeholder='Enter mobile number'
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
        </div>
         
         
        {showErrorMessage && (
          <div className='error-message'>
            No account found for above details!
          </div>
        )}
        <button type='submit'>SEND RESET LINK</button>


        <div className='wait'>
          <p>
            Wait, I remember my password...<a href="#" onClick={onBackToLogin}>Click here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
