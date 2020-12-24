import React, { useState } from 'react';
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
import { BiMenu } from 'react-icons/bi';

export default function Header() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		console.log(clicked);
		setClicked(!clicked);
	};

	return (
		<StyledHeader>
			{/* link is preventing logo from showing */}
			<Link to='/'>
				<img src={logo} className='logo' alt='Jake Grella' />
			</Link>
			<nav className='web-nav'>
				<Link to='/projects'>Projects</Link>
				<Link to='/about'>About</Link>
				<a href='https://www.linkedin.com/in/jakegrella/' target='blank'>
					<LinkedInIcon />
				</a>
				<a href='https://twitter.com/jakegrella' target='blank'>
					<TwitterIcon />
				</a>
			</nav>
			<nav
				className={
					clicked === true ? 'mobile-nav active' : 'mobile-nav inactive'
				}
			>
				<li>
					<Link to='/projects'>Projects</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/jakegrella/' target='blank'>
						<LinkedInIcon />
					</a>
				</li>
				<li>
					<a href='https://twitter.com/jakegrella' target='blank'>
						<TwitterIcon />
					</a>
				</li>
			</nav>
			<button onClick={handleClick} className='mobile-nav-button'>
				<BiMenu />
			</button>
		</StyledHeader>
	);
}
