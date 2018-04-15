/*eslint-disable import/default*/

import React from 'react';
import {render} from 'react-dom';
import App from './App';
require('./favicon.ico'); //Tell webpack to load favicon.ico
require('normalize-css');
import './styles/styles.scss';

const appEl = document.getElementById('app');
appEl.className = "fade-out";

setTimeout(() => {
    render(<App />, appEl);
}, 1000);