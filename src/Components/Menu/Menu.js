import React from 'react';
import './menu.scss';

const Menu = () => (
  <div className=" menu d-flex justify-content-between align-items-center">
    <div className="item d-flex ">
      <img src="./background-tree.jpg" className="" alt="" />

      <div className="description">
        <h5>Name</h5>
        <p>descrition of the food</p>

      </div>
    </div>
    <div className="itemPrice" />
    <p>$56</p>
  </div>
);
export default Menu;
