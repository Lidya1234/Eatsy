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
      <div className="mt-4 container description d-flex flex-column">
        <div className="fs-1 title d-flex justify-content-between">
          <h2>{name}</h2>
          <h2>{`$ ${price}`}</h2>
        </div>
        <div className="mt-5 fs-4">
          {description}
        </div>
      </div>
      <div className="fixed-bottom add-btn w-100 d-flex justify-content-center">
        <button type="button" className="rounded text-white px-3 py-2 fs-4">
          Add to cart
          <span className="ms-4 fw-bold fs-3">{` $ ${price}`}</span>
        </button>
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
