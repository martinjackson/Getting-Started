import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';

import DebugContent  from './DebugContent.js';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {
    axios.get('/api/echo/Requested%20from%20React%20Front%20End')
      .then((response) => { this.setState({'hello': response.data}); })
      .catch((error) => {   this.setState({'error': error.message}); });
  }

  render() {

    const err = this.state.error ? <div><hr />{this.state.error}</div> : null

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React (with Node API backend)</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{display: 'inline-table'}}>
            <DebugContent value={this.state.hello} />
            {err}
        </div>
      </div>
    );
  }
}

export default App;
