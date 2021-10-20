import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { toastDark } from '../../toast/toastSetup';
import { logUserIn } from '../../reducers/userSlice';
import './login.scss';

const Login = ({ dispatch, history, user }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    console.log(history);
    if (user.user && user.status === 'FULFILLED') {
      history.push('./menu');
    }
  }, [user]);

  const handleOnChange = (e) => {
    const elem = e.target;

    if (elem.tagName === 'INPUT') {
      if (elem.type === 'email') {
        setUserEmail(elem.value);
      } else if (elem.type === 'password') {
        setUserPassword(elem.value);
      }
    }
  };

  const handleSubmit = () => {
    const params = { email: userEmail, password: userPassword };

    if (Object.values(params).some((j) => j === '')) {
      toast.warning('No field can be empty', toastDark);
    } else {
      dispatch(logUserIn(params));
    }
  };

  return (
    <div className="session d-flex align-items-center justify-content-center">
      <div className="form d-flex align-items-center justify-content-center flex-column rounded">
        <h1>Log In</h1>
        <div className="sessiondetails d-flex align-items-center flex-column" onChange={handleOnChange}>
          <input type="email" className="inputs rounded p-2" placeholder="Email" />
          <input type="password" className="inputs rounded p-2 mt-3" placeholder="Password" />
          <Link to="/signup" className="mt-3">{'Don\'t have an account? Join us!'}</Link>
          <Link to="/menu" className="mt-3">Menu</Link>
          <button type="button" className="button mt-4 rounded" onClick={handleSubmit}>Log in</button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Login);
