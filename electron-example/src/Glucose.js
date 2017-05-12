
import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
      {date: '2017-03-06', glucose: 153},
      {date: '2017-03-05', glucose: 113},
      {date: '2017-03-04', glucose: 152},
      {date: '2017-03-03', glucose: 126},
      {date: '2017-03-02', glucose: 125},
      {date: '2017-03-01', glucose: 108},
      {date: '2017-02-28', glucose:  96},
      {date: '2017-02-27', glucose: 135},
      {date: '2017-02-26', glucose: 120},
      {date: '2017-02-25', glucose: 181},
      {date: '2017-02-25', glucose: 144},
      {date: '2017-02-24', glucose: 167},
      {date: '2017-02-23', glucose: 188},
      {date: '2017-02-22', glucose: 136},
      {date: '2017-02-21', glucose: 159},
      {date: '2017-02-20', glucose: 131},
      {date: '2017-02-19', glucose: 110},
      {date: '2017-02-18', glucose: 128},
      {date: '2017-02-17', glucose: 126},
      {date: '2017-02-16', glucose: 142},
      {date: '2017-02-15', glucose: 128},
      {date: '2017-02-14', glucose: 125},
      {date: '2017-02-13', glucose: 100},
      {date: '2017-02-12', glucose: 113},
      {date: '2017-02-11', glucose: 111},
      {date: '2017-02-10', glucose:  84},
      {date: '2017-02-10', glucose: 100},
      {date: '2017-02-09', glucose: 143},
      {date: '2017-02-08', glucose: 147},
      {date: '2017-02-07', glucose: 155},
      {date: '2017-02-06', glucose: 157},
      {date: '2017-02-05', glucose: 130},
      {date: '2017-02-04', glucose: 126},
      {date: '2017-02-03', glucose: 147},
      {date: '2017-02-02', glucose: 150},
      {date: '2017-01-31', glucose: 134},
];

export default class Glucose extends React.Component {

	render () {
  	return (
    	<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="glucose" stroke="#8884d8" />
      </LineChart>
    );
  }

}
