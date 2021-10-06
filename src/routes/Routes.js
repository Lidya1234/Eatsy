import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from '../Components/Login/Login';

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
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
