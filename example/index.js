import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import '../App.css';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);