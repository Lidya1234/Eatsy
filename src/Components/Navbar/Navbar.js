import React from 'react';
import { Link } from 'react-router-dom';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import './navbar.scss';

const Navbar = () => (
  <div className="navbar d-flex justify-content-center">
    <div className="wrapper d-flex justify-content-between align-items-center p-4">
      <Link to="./Home" className="links"><ChevronLeft className="back" /></Link>
      <h4 className="links"> Menu </h4>
      <Link to="./Logout" className="links ">Logout</Link>
    </div>
  </div>
);

export default Navbar;
