import styled from 'styled-components';

const StyledProductCard = styled.div`
	/* border: 1px solid red; */
	img {
		width: 30rem;
		margin-bottom: 1rem;
	}

	@media (max-width: ${(pr) => pr.theme.tablet}) {
	}
`;

export default StyledProductCard;
