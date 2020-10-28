import React from 'react';
import { Route } from 'react-router-dom';
// components
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import HomePage from '../src/components/homePage/HomePage';
import ProjectsPage from '../src/components/projectsPage/ProjectsPage';
import AboutPage from '../src/components/aboutPage/AboutPage';

export default function App() {
	return (
		<div className='container'>
			<Header />

			<Route exact path='/about'>
				<AboutPage />
			</Route>
			<Route exact path='/projects'>
				<ProjectsPage />
			</Route>
			<Route exact path='/'>
				<HomePage />
			</Route>

			<Footer />
		</div>
	);
}
