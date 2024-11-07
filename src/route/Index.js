import React, { useLayoutEffect } from "react";
import { Routes,Route, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Sales from "../pages/Sales";
import Analytics from "../pages/Analytics";
import Blank from "../pages/others/Blank";
import Error404Classic from "../pages/error/404-classic";
import Error404Modern from "../pages/error/404-modern";
import Error504Modern from "../pages/error/504-modern";
import Error504Classic from "../pages/error/504-classic";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Success from "../pages/auth/Success";

import Layout from "../layout/Index";
import LayoutNoSidebar from "../layout/Index-nosidebar";

const Router = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
      <Routes>
        {/*Panel */}
        {/* <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/index`} component={EcomDashboard}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/orders`} component={EcomOrder}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/products`} component={EcomProducts}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/support`} component={EcomSupport}></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/ecommerce/customer`}
          render={() => (
            <CustomerProvider>
              <EcomCustomer />
            </CustomerProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/ecommerce/customer-details/:id`}
          render={(props) => (
            <CustomerProvider>
              <EcomCustomerDetails {...props} />
            </CustomerProvider>
          )}
        ></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/settings`} component={EcomSettings}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/integration`} component={EcomIntegration}></Route> */}

        {/* <Route path={`${process.env.PUBLIC_URL}`} element={<Layout />}> */}
        <Route path={`/`} element={<Layout />}>

          
          {/*Dashboards*/}
          <Route index element={<Homepage />}></Route>
          <Route path="sales" element={<Sales />}></Route>
          <Route path="analytics" element={<Analytics />}></Route>
          <Route path="_blank" element={<Blank />}></Route>

          <Route path="ecommerce" >
          </Route>
        </Route>

        <Route path={`/`} element={<LayoutNoSidebar />}>
          <Route path="auth-success" element={<Success />}></Route>
            <Route path="auth-reset" element={<ForgotPassword />}></Route>
            <Route path="auth-register" element={<Register />}></Route>
            <Route path="auth-login" element={<Login />}></Route>

            <Route path="errors">
              <Route path="404-modern" element={<Error404Modern />}></Route>
              <Route path="404-classic" element={<Error404Classic />}></Route>
              <Route path="504-modern" element={<Error504Modern />}></Route>
              <Route path="504-classic" element={<Error504Classic />}></Route>
            </Route>
            <Route path="*" element={<Error404Modern />}></Route>
            
        </Route>
      </Routes>
  );
};
export default Router;
