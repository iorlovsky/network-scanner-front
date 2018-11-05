import React, { Component } from 'react';
import 'AppStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./router";

class App extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}

export default App;
