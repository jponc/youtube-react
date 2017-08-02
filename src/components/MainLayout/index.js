import React from 'react';
import { Route } from 'react-router-dom'
import NavBar from '../NavBar'
import Footer from '../Footer'

const MainLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <NavBar />
          <div className="container-fluid">
            <Component {...matchProps} />
            <Footer />
          </div>
      </div>
    )} />
  )
};

export default MainLayout
