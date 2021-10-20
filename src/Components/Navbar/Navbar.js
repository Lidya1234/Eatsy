import React from 'react';
import { Link } from 'react-router-dom';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import './navbar.scss';

const Navbar = () => (
  <div className="navb d-flex justify-content-center fixed-top">
    <div className="nav-wrap d-flex justify-content-between align-items-center p-4">
      <Link to="./menu" className="links"><ChevronLeft className="back" /></Link>
      <h4 className="links"> Eatsy </h4>
      <Link to="./" className="links ">Logout</Link>
    </div>
  </div>
);

export default Navbar;
