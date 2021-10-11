import React, { useEffect, useSelector, useDispatch } from 'react';
import './menu.scss';
import Navbar from '../Navbar/Navbar';
import { fetchFoodList } from '../../reducers/foodSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const { foodList } = useSelector((state) => state.foodList);
  useEffect(() => {
    dispatch(fetchFoodList());
  }, [dispatch]);

  return (
    <div className="menu">
      <Navbar />
      {foodList.map((food) => (
        <div className="wrapper mx-auto p-4 d-flex justify-content-between align-items-center rounded">
          <div className="item d-flex">
            <img src="./background-tree.jpg" className="rounded" alt="" />

            <div className="description d-flex flex-column justify-content-center">
              <h5>{food.name}</h5>
              <p>descrition of the food</p>

            </div>
          </div>
          <div className="itemPrice d-flex flex-column justify-content-center">
            <p className="fw-bold fs-4">$56</p>
          </div>
        </div>
      ))}

    </div>
  );
};
export default Menu;
