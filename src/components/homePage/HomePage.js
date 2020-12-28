import React from 'react';
import { Link } from 'react-router-dom';
import StyledHomePage from './HomePageStyles';

export default function HomePage() {
	return (
		<StyledHomePage>
			<div className='home-banner'>
				<Link to='/'>
					<img
						src='https://images.unsplash.com/photo-1606276969080-bf446209054a'
						alt='new apparel'
					/>
				</Link>
				<Link to='/'>
					<img
						src='https://images.unsplash.com/photo-1606191027636-a5a286e8fd7a'
						alt='loading motorcycle'
					/>
				</Link>
			</div>
		</StyledHomePage>
	);
}
