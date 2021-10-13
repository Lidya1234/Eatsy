import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import Menu from '../Components/Menu/Menu';
import FoodDetail from '../Components/FoodDetail/FoodDetail';

const Routes = () => (
  <BrowserRouter>
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/menu" component={Menu} />
        <Route path="/foodDetail" component={FoodDetail} />

      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
