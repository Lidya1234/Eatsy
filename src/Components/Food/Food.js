import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
  const { name, price, description } = food;
  return (
    <div className="wrapper mx-auto p-4 d-flex justify-content-between align-items-center rounded mt-3">
      <div className="item d-flex">
        <img src="./background-tree.jpg" className="rounded" alt="" />
        <div className="fs-5 description d-flex flex-column justify-content-center">
          <h5>{name}</h5>
          <p>{description}</p>
          <Link to={{
            pathname: './foodDetail',
            state: { data: food },
          }}
          >
            {' '}
            See Details
          </Link>
        </div>
      </div>
      <div className="itemPrice d-flex flex-column justify-content-center">
        <p className="fw-bold fs-2  ">{`$ ${price}`}</p>
      </div>
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Food;
