import React, { Component } from 'react';
import 'AppStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./app/router";
import {Provider} from "react-redux";
import {configure} from 'ConfigureStore';

export const store = configure();
console.log(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;
