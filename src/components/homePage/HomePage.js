import React from 'react';
import { Link } from 'react-router-dom';
import StyledHomePage from './HomePageStyles';

import ProductCard from '../ProductCard/ProductCard';

export default function HomePage() {
	return (
		<StyledHomePage>
			<div className='home-banner'>
				<Link to='/shop'>
					SHOP
					{/* <img
						src='https://images.unsplash.com/photo-1606276969080-bf446209054a'
						alt='new apparel'
					/> */}
				</Link>
				<Link to='/community'>
					COMMUNITY
					{/* <img
						src='https://images.unsplash.com/photo-1606191027636-a5a286e8fd7a'
						alt='loading motorcycle'
					/> */}
				</Link>
			</div>
			<div className='featured-products'>
				<ProductCard
					productName='Twill Multi Pocket Shirt'
					imgSrc='https://assets.supremenewyork.com/194019/ma/PrTarCs0FTY.jpg'
					price='$138'
				/>
				<ProductCard
					productName='Waterproof Reflective Speckled Backpack'
					imgSrc='https://assets.supremenewyork.com/199586/ma/uSolE0y795k.jpg'
					price='$148'
				/>
				<ProductCard
					productName='Globe Zip Up Hooded Sweatshirt'
					imgSrc='https://assets.supremenewyork.com/200189/ma/DuSg3_t_eA8.jpg'
					price='$178'
				/>
				<ProductCard
					productName='Globe Zip Up Hooded Sweatshirt'
					imgSrc='https://assets.supremenewyork.com/194723/ma/bfFXNu5kYfo.jpg'
					price='$178'
				/>
			</div>
		</StyledHomePage>
	);
}
