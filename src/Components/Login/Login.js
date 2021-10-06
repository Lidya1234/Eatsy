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
      <h1>Login</h1>
      <div onChange={handleOnChange}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button" onClick={handleSubmit}>Log in</button>
      </div>
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
