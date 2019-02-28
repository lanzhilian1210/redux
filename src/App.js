import React, { Component } from 'react';
import {Provider} from 'react-redux';  //引入redux容器
import {store} from './store'   // 
import './App.css';
import Demo from './demo1';
import Demo2 from './demo2';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Demo></Demo>
          <Demo2></Demo2>
        </div>
      </Provider>
    );
  }
}

export default App;
