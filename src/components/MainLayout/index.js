import React from 'react';
import { Route } from 'react-router-dom'
import NavBar from '../NavBar'
import Footer from '../Footer'

const MainLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="MainLayout">
        <NavBar />
          <Component {...matchProps} />
        <Footer />
      </div>
    )} />
  )
};

export default MainLayout
