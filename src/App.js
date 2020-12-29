import React from 'react';
import { Route } from 'react-router-dom';
// components
import StyledApp from './AppStyles';

import Header from '../src/components/header/Header';
// import Footer from '../src/components/footer/Footer';
import HomePage from '../src/components/homePage/HomePage';
import CommunityPage from '../src/components/CommunityPage/CommunityPage';
import AboutPage from '../src/components/AboutPage/AboutPage';
import ShopPage from '../src/components/ShopPage/ShopPage';

export default function App() {
	return (
		<StyledApp>
			<Header />

			<Route exact path='/community'>
				<CommunityPage />
			</Route>
			<Route exact path='/shop'>
				<ShopPage />
			</Route>
			<Route exact path='/about'>
				<AboutPage />
			</Route>
			<Route exact path='/'>
				<HomePage />
			</Route>

			{/* <Footer /> */}
		</StyledApp>
	);
}
