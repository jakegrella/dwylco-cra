import React from 'react';
import StyledCommunityCard from './CommunityCardStyles';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
	const { title, author, date, imgSrc } = props;
	return (
		<StyledCommunityCard>
			<img src={imgSrc} alt='' />
			<h3>{title}</h3>
			<p>
				By {author} - {date}
			</p>
			{/* <p>description</p> */}
		</StyledCommunityCard>
	);
}
