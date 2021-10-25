import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { logout } from '../../reducers/userSlice';
import './navbar.scss';

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    history.push('./');
  };

  return (
    <div className="navb d-flex justify-content-center fixed-top">
      <div className="nav-wrap d-flex justify-content-between align-items-center p-4">
        <Link to="./menu" className="links"><ChevronLeft className="back" /></Link>
        <h4 className="links"> Eatsy </h4>
        <button type="submit" className="links" onClick={handleClick}> Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
