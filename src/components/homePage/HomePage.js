import React from 'react';
import { Link } from 'react-router-dom';
import StyledHomePage from './HomePageStyles';

import ProductCard from '../ProductCard/ProductCard';
import CommunityCard from '../CommunityCard/CommunityCard';

export default function HomePage() {
	return (
		<StyledHomePage>
			<section className='home-banner'>
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
			</section>
			<section className='featured-products'>
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
			</section>
			<section className='featured-community'>
				<CommunityCard
					title={`Eminem's Machine Gun Kelly 'Gnat' Subliminal Sets Twitter Ablaze`}
					author={`Kyle Eustice`}
					date={`Dec 17, 2020`}
					imgSrc={`https://static.hiphopdx.com/2020/12/201217-Eminem-900x506.jpg`}
				/>
				<CommunityCard
					title={`Best Rappers of 2020`}
					author={`Kenan Draughorne`}
					date={`Dec 24, 2020`}
					imgSrc={`https://static.hiphopdx.com/2020/12/DX_2020_DXAwards_Best_Rappers_1a-1-640x360.png`}
				/>
				<CommunityCard
					title={`Instagram Flexin: Rich the Kid Sends Famous Dex off to Rehab`}
					author={`Daniela`}
					date={`Dec 27, 2020`}
					imgSrc={`https://static.hiphopdx.com/2016/07/Rich-The-Kid-Famous-Dex-827x620.jpg`}
				/>
				<CommunityCard
					title={`Too $Hort, Ice Cube, Snoop Dogg & E-40 Have Formed a Supergroup`}
					author={`Kyle Eustice`}
					date={`Dec 4, 2020`}
					imgSrc={`https://static.hiphopdx.com/2020/12/201203-Snoop-Dogg-Too-Short-900x506.jpg`}
				/>
			</section>
		</StyledHomePage>
	);
}
