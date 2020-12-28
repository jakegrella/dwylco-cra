import styled from 'styled-components';

const StyledHomePage = styled.div`
	background: ${(pr) => pr.theme.white};

	.home-banner {
		display: flex;
		flex-flow: row nowrap;
		height: 85vh;
		/* border: 2px solid blue; */
		a {
			height: 100%;
			width: 100%;
			margin: 0 1rem 0 0;
		}
		a:not(:first-child) {
			margin: 0 0 0 1rem;
		}
		img {
			/* border: 2px solid green; */
			height: 100%;
			object-fit: cover;
		}
	}

	@media (max-width: ${(pr) => pr.theme.tablet}) {
		/* border: 1px solid green; */
	}
	@media (max-width: ${(pr) => pr.theme.phone}) {
		/* border: 1px solid green; */
		h2 {
			font-size: 4.8rem;
		}
	}
`;

export default StyledHomePage;
