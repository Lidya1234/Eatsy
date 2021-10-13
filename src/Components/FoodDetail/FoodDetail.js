import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import './FoodDetail.scss';

export default function FoodDetail() {
  const location = useLocation();
  const data = location.state?.data;
  const { name, price, description } = data;
  return (
    <div className="foodDetail d-flex justify-content-center ">
      <div className="imgWrapper">
        <img src="./background-tree.jpg" className="rounded" alt="" />
      </div>
      <div className="description d-flex flex-column">
        <div className="descrip d-flex justify-content-between">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <span>
          {price}
        </span>
      </div>
    </div>
  );
}

FoodDetail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
