'use babel';

import React from 'react';
import './App.css';
import logo from './logo.svg';
import Framed from './Framed';
import USMap from './USMap';
import Kiwi from './Kiwi';

export default class Example extends React.Component {

  render() {
    const {something} = this.props;

    const top = 300;
    const left = 120;
    const h2st = { float: 'right', marginRight: 20 }

    return (
        <div>
          <h2 style={h2st}>Welcome to React<br/>2nd window (prop 'something': {something})</h2>
          <img src={logo} className="App-logo" alt="logo" height={60} />

          <USMap height={250} />
          <Kiwi left={300} height={70} />

          <Framed bgColor='blue'   opacity={0.70}  top={top}     left={left+60}  z={20} />
          <Framed bgColor='yellow' opacity={0.70}  top={top+100} left={left}     z={30} />
          <Framed bgColor='green'  opacity={0.70}  top={top+60}  left={left+120} z={10} />


        </div>
    );
  }
}
