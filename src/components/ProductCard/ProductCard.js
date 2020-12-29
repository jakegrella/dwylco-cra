import React from 'react';
import StyledProductCard from './ProductCardStyles';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
	const { imgSrc, productName, price } = props;
	return (
		<StyledProductCard>
			<Link to='/shop'>
				<img src={imgSrc} alt='' />
				<h3>{productName}</h3>
				<p>{price}</p>
			</Link>
		</StyledProductCard>
	);
}
