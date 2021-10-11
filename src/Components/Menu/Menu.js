import React from 'react';
import './menu.scss';

const Menu = () => (
  <div className="menu">
    <div className="wrapper mx-auto p-4 d-flex justify-content-between align-items-center rounded">
      <div className="item d-flex">
        <img src="./background-tree.jpg" className="rounded" alt="" />

        <div className="description d-flex flex-column justify-content-center">
          <h5>Name</h5>
          <p>descrition of the food</p>

        </div>
      </div>
      <div className="itemPrice d-flex flex-column justify-content-center">
        <p className="fw-bold fs-4">$56</p>
      </div>
    </div>
  </div>
);
export default Menu;
