import styled from 'styled-components';

const StyledHeader = styled.header`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	margin: 0 0 15rem 0;
	background-color: ${(pr) => pr.theme.white};
	nav {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		a {
			color: ${(pr) => pr.theme.black};
			margin-right: 1rem;
			&:hover {
				color: ${(pr) => pr.theme.seaGreen};
			}
		}
		.social-container {
			margin-left: 2rem;
		}
	}
	img {
		width: 10rem;
	}
	.logo {
		/* border: 1px solid red; */
	}
`;

export default StyledHeader;
