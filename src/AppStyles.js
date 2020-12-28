import styled from 'styled-components';

const StyledApp = styled.div`
	/* border: 1px solid blue; */
	padding: 5rem 2rem;
	max-width: 120rem;
	margin: 0 auto;

	h1 {
		font-size: 3.6rem;
		font-weight: 600;
	}
	h2 {
		font-size: 2.4rem;
		font-weight: 600;
	}
	h3 {
		font-size: 1.8rem;
		font-weight: 600;
	}
	h4 {
		font-size: 1.6rem;
		font-weight: 600;
	}
	p {
		font-size: 1.6rem;
		font-weight: 500;
	}
	a {
		font-size: 1.8rem;
		font-weight: 600;
		text-decoration: none;
		color: ${(pr) => pr.theme.black};
		&:hover {
			color: ${(pr) => pr.theme.babyBlue};
		}
	}

	button {
		font-size: 1.8rem;
		font-weight: 600;
	}
	svg {
		font-size: 1.8rem;
		&:hover {
			color: ${(pr) => pr.theme.babyBlue};
		}
	}
`;

export default StyledApp;
