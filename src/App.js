import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './global/store';
import Movies from './containers/';
import data from './global/data';
import './App.css';
const store = configureStore();
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Movies/>
      </Provider>
    </div>
  );
}

export default App;
