'use babel';

import React from 'react';
import './App.css';
import logo from './logo.svg';
import SimpleLineChart from './SimpleLineChart';
import Glucose from './Glucose';

import spreadTest from './spreadTest';

export default class App extends React.Component {
    render() {

      spreadTest();

      const h1st = { float: 'right', marginRight: 120 }


        return <div>
          <h1 style={h1st}>Electron App with React</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>ES6 in main thanks to webpack,babel !</li>
            <li>LiveReload thanks to gulp,electron-connect,webpack,babel !</li>
            <li>Ctrl+Shift+I to toggle the developer tools.</li>
          </ul>

          <SimpleLineChart />
          <Glucose />
        </div>
    }
}
