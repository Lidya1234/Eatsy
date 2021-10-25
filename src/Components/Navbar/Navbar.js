import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { logout } from '../../reducers/userSlice';
import './navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    history.push('./');
    dispatch(logout);
    console.log('logedout');
  };

  return (
    <div className="navb d-flex justify-content-center fixed-top">
      <div className="nav-wrap d-flex justify-content-between align-items-center p-4">
        <Link to="./menu" className="links"><ChevronLeft className="back" /></Link>
        <h4 className="links"> Eatsy </h4>
        {/* <Link to="./" className="links ">Logout</Link> */}
        <button type="submit" className="links" onClick={handleClick}> Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
