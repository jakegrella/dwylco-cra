import React from 'react';
import StyledProjectCard from './ProjectCardStyles';
import { FaLink, FaGithub, FaJsSquare, FaReact } from 'react-icons/fa';

export default function ProjectCard(props) {
	const { imgURL, imgAlt, title, description, demoLink, gitHubLink } = props;
	return (
		<>
			<StyledProjectCard className='project-card'>
				<img src={imgURL} alt={imgAlt} />
				<div className='project-card-words'>
					<h3>{title}</h3>
					<div className='link-stack-container'>
						<div className='links'>
							<h4>Links</h4>
							<a href={demoLink} target='blank'>
								<FaLink />
							</a>
							<a href={gitHubLink} target='blank'>
								<FaGithub />
							</a>
						</div>
						<div className='tech'>
							<h4>Tech</h4>
							<FaReact />
							<FaJsSquare />
						</div>
					</div>
					<p>{description}</p>
				</div>
			</StyledProjectCard>
		</>
	);
}
