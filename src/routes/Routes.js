import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import Menu from '../Components/Menu/Menu';
import FoodDetail from '../Components/FoodDetail/FoodDetail';
import Navbar from '../Components/Navbar/Navbar';

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
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <>
          <Navbar />
          <Route path="/menu" component={Menu} />
          <Route path="/foodDetail" component={FoodDetail} />
        </>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
