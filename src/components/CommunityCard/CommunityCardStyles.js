import styled from 'styled-components';

const StyledCommunityCard = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	width: 45rem;
	margin: 1rem;
	img {
		width: 45rem;
		height: 25rem;
		object-fit: cover;
		margin-bottom: 1rem;
	}
	h3 {
		margin-bottom: 0.5rem;
	}

	@media (max-width: ${(pr) => pr.theme.tablet}) {
	}
`;

export default StyledCommunityCard;
