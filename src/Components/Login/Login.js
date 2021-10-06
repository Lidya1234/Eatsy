import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logUserIn } from '../../reducers/userSlice';
import './login.scss';

const Login = ({ dispatch }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleOnChange = (e) => {
    if (e.target.tagName === 'INPUT') {
      if (e.target.type === 'email') {
        setUserEmail(e.target.value);
      } else if (e.target.type === 'password') {
        setUserPassword(e.target.value);
      }
    }
  };

  const handleSubmit = () => {
    const params = { email: userEmail, password: userPassword };
    dispatch(logUserIn(params));
  };

  return (
    <div className="login d-flex align-items-center justify-content-center">
      <div className="form d-flex align-items-center justify-content-center flex-column rounded">
        <h1>Login</h1>
        <div className="logindetails d-flex align-items-center flex-column" onChange={handleOnChange}>
          <input type="email" className="inputs rounded p-2" placeholder="Email" />
          <input type="password" className="inputs rounded p-2 mt-3" placeholder="Password" />
          <button type="button" className="button mt-4 rounded" onClick={handleSubmit}>Log in</button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
