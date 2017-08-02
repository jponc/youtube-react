import React, { Component } from 'react';

import MainLayout from '../MainLayout'
import Home from '../Home'

class App extends Component {
  render() {
    return(
      <div>
        <main>
          <MainLayout exact path="/" component={Home} />
        </main>
      </div>
    )
  }
}

export default App;
