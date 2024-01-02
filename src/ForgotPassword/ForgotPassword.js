// ForgotPassword.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reset-password');
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <p>
        Click the button below to reset your password. You will be redirected to
        the Reset Password page.
      </p>
      <button onClick={handleClick}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
