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
    <div className="login">
      <div className="form">
        <h1>Login</h1>
        <div className="logindetails" onChange={handleOnChange}>
          <input type="email" className="inputs " placeholder="Email" />
          <input type="password" className="inputs" placeholder="Password" />
          <button type="button" className="button" onClick={handleSubmit}>Log in</button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
