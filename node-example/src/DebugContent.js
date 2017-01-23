import React, { Component } from 'react';

export default class DebugContent extends Component {


  render() {
    const obj = this.props.value;
    if (!obj)
       return <p></p>;

    const pretty = (obj) => { return (typeof obj === 'string') ? obj : JSON.stringify(obj); }

    var keys = Object.keys(obj);
    const st = {border: '1px solid #ccc'};

    if (this.props.horizontal)
        return      <table style={st}>
                        <thead><tr>{keys.map( k => <th key={k}>{k}</th>)}</tr></thead>
                        <tbody><tr>{keys.map( k => <td key={k} style={st}>{pretty(obj[k])}</td>)}</tr></tbody>
                      </table>
        else
                      // <thead><tr><th>Property</th><th>Value</th></tr></thead>
        return      <table style={st}>
                        <tbody>{keys.map( k => <tr key={k}><td><strong>{k}:</strong></td><td>{pretty(obj[k])}</td></tr>)}</tbody>
                      </table>

  }
}
