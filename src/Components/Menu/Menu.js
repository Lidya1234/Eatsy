import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './menu.scss';
import Navbar from '../Navbar/Navbar';
import Food from '../Food/Food';
import { fetchFoodList } from '../../reducers/foodSlice';

const Menu = ({ dispatch, food }) => {
  useEffect(() => {
    dispatch(fetchFoodList());
  }, []);

  return (
    <div className="menu">
      <>
        <Navbar />
        { food.foodList.length > 0 && food.foodList.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </>
    </div>
  );
};

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  food: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ food }) => ({
  food,
});

export default connect(mapStateToProps)(Menu);
