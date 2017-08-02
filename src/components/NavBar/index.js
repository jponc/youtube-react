import React, { Component } from 'react';
import SearchBar from '../SearchBar'

class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Youtube Box</a>
          </div>
          <div className="collapse navbar-collapse">
            <SearchBar />
          </div>
        </div>{/* /.container-fluid */}
      </nav>
    )
  }
}

export default NavBar
