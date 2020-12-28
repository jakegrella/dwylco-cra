import React from 'react';
import { Route } from 'react-router-dom';
// components
import StyledApp from './AppStyles';

import Header from '../src/components/header/Header';
// import Footer from '../src/components/footer/Footer';
import HomePage from '../src/components/homePage/HomePage';
import ProjectsPage from '../src/components/projectsPage/ProjectsPage';
import AboutPage from '../src/components/aboutPage/AboutPage';

export default function App() {
	return (
		<StyledApp>
			<Header />

			<Route exact path='/community'>
				<ProjectsPage />
			</Route>
			<Route exact path='/shop'>
				<ProjectsPage />
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
