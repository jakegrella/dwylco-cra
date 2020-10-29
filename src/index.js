import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
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
		<ScrollToTop>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ScrollToTop>
	</Router>,
	document.querySelector('#root')
);
