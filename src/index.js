import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './scss/index.scss';


ReactDOM.render(
	<App questionCount={10} randomise={true} />, 
	document.getElementById('root')
);
