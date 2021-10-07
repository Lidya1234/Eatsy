import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { signUserIn } from '../../reducers/userSlice';
import { toastDark } from '../../toast/toastSetup';
import './signup.scss';

const Signup = ({ dispatch }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirm, setUserConfirm] = useState('');

  const handleOnChange = (e) => {
    const elem = e.target;
    if (elem.tagName === 'INPUT') {
      switch (elem.name) {
        case 'name':
          setUserName(elem.value);
          break;
        case 'email':
          setUserEmail(elem.value);
          break;
        case 'password':
          setUserPassword(elem.value);
          break;
        default:
          setUserConfirm(elem.value);
          break;
      }
    }
  };

  const handleSubmit = () => {
    const params = {
      name: userName,
      email: userEmail,
      password: userPassword,
      password_confirmation: userConfirm,
    };

    if (Object.values(params).some((j) => j === '')) {
      toast.warning('No field can be empty', toastDark);
    } else if (userPassword !== userConfirm) {
      toast.warning('Password is not equal to password confirm', toastDark);
    } else {
      dispatch(signUserIn(params));
    }
  };

  return (
    <div className="session d-flex align-items-center justify-content-center">
      <div className="form d-flex align-items-center justify-content-center flex-column rounded">
        <h1>Sign Up</h1>
        <form className="sessiondetails d-flex align-items-center flex-column" onChange={handleOnChange}>
          <input type="text" name="name" className="inputs rounded p-2" placeholder="Name" />
          <input type="email" name="email" className="inputs rounded p-2 mt-3" placeholder="Email" />
          <input type="password" name="password" className="inputs rounded p-2 mt-3" placeholder="Password" />
          <input type="password" name="confirmation" className="inputs rounded p-2 mt-3" placeholder="Password Confirm" />
          <Link to="/" className="mt-3">Already have an account? Log in!</Link>
          <button type="button" className="button mt-4 rounded" onClick={handleSubmit}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Signup);
