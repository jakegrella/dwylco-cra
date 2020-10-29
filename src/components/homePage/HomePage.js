import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StyledHomePage from './HomePageStyles';
import ProjectCard from '../projectCard/ProjectCard';

export default function HomePage() {
	return (
		<StyledHomePage>
			<div className='home-banner'>
				<h2>
					Full-stack software developer currently seeking a place to make a
					difference.
				</h2>
			</div>
			<section className='project-cards-section'>
				<ProjectCard
					imgURL='https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
					imgAlt='example project 1'
					title='Example Project 1'
					description='This project serves as a placeholder only. I did not take the image. Service as core &amp; innovations as power makes
					our brand post launch upstream selling staff, but turn the ship but
					out of scope.'
				/>
				<ProjectCard
					imgURL='https://images.unsplash.com/photo-1557683325-3ba8f0df79de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
					imgAlt='example project 2'
					title='Example Project 2'
					description='This project serves as a placeholder only. I did not take the image. Come up with something buzzworthy on-brand but completeley fresh back-end of third quarter for hit the ground running so we need to button up our approach.'
				/>
				<ProjectCard
					imgURL='https://images.unsplash.com/photo-1557682233-43e671455dfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
					imgAlt='example project 3'
					title='Example Project 3'
					description='This project serves as a placeholder only. I did not take the image. Come up with something buzzworthy on-brand but completeley fresh back-end of third quarter for hit the ground running so we need to button up our approach.'
				/>
				<Link to='/projects' className='all-projects-btn'>
					View All Projects
				</Link>
			</section>
			<section className='get-in-touch'>
				<Link to='/about'>Get in touch.</Link>
				<p>
					I currently live in Chicago, IL, but I am interested in relocating if
					it means I am part of something important or impactful.
				</p>
			</section>
		</StyledHomePage>
	);
}
