import React from 'react';
import { Link } from 'react-router-dom';
//logo
import logo from '../../assets/jg-logo-svg.svg';
//style
import StyledHeader from './HeaderStyles';
//svg social icons
import {
	FaLinkedinIn as LinkedInIcon,
	FaTwitter as TwitterIcon,
} from 'react-icons/fa';

export default function Header() {
	return (
		<StyledHeader>
			{/* Logo */}
			{/* link is preventing logo from showing */}
			<Link to='/'>
				<img src={logo} className='logo' alt='Jake Grella' />
			</Link>
			{/* Nav */}
			<nav>
				{/* Projects Link */}
				<Link to='/projects'>Projects</Link>
				{/* About Link */}
				<Link to='/about'>About</Link>
				{/* Social Icons */}
				<div className='social-container'>
					{/* LinkedIn Icon */}
					<a href='https://www.linkedin.com/in/jakegrella/' target='blank'>
						<LinkedInIcon />
					</a>
					{/* Twitter Icon */}
					<a href='https://twitter.com/jakegrella' target='blank'>
						<TwitterIcon />
					</a>
				</div>
			</nav>
		</StyledHeader>
	);
}
