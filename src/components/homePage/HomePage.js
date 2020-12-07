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
					imgAlt='evnt'
					title='{evnt}'
					description='{evnt} is an event planning app that allows users to plan and join events, add items to a list, and declare if they are attending an event.'
					gitHubLink='https://github.com/Potluck-planner-bw/frontend/tree/main/potluck-planner'
				/>
				<ProjectCard
					imgURL='https://images.unsplash.com/photo-1557683325-3ba8f0df79de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
					imgAlt='expat journal'
					title='expat journal'
					description='Expat journal allows users to log in and share pictures and stories of their travels.'
				/>
				<ProjectCard
					imgURL='https://images.unsplash.com/photo-1557682233-43e671455dfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
					imgAlt='covid-19 statistics'
					title='covid-19 statistics'
					description='This app accesses corona-api.com to display up to date coronavirus statistics based on location.'
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
