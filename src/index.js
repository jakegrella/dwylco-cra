import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//reset
import './styles/reset.css';
//general styles
import './styles/App.css';
//styled-components
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import App from './App';

render(
	<Router>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Router>,
	document.querySelector('#root')
);
