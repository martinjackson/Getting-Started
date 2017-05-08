import React from 'react';
import {render} from 'react-dom';

import App from './App';

var shell = document.createElement('div');
document.body.appendChild(shell);
render(<App />, shell);
