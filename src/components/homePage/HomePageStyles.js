import styled from 'styled-components';

const StyledHomePage = styled.div`
	background: ${(pr) => pr.theme.white};
	.home-banner {
		/* border: 1px solid red; */
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h2 {
		/* border: 1px solid yellow; */
		color: ${(pr) => pr.theme.black};
		font-size: 7.2rem;
		margin: 0 auto;
	}
	.project-cards-section {
		/* border: 1px solid blue; */
		margin-top: 10rem;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		.all-projects-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid ${(pr) => pr.theme.black};
			border-radius: 4rem;
			height: 5rem;
			width: 24rem;
			background-color: ${(pr) => pr.theme.white};
			color: ${(pr) => pr.theme.black};
			&:hover {
				color: ${(pr) => pr.theme.seaGreen};
				border-color: ${(pr) => pr.theme.seaGreen};
			}
		}
	}
	.get-in-touch {
		/* border: 1px solid red; */
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		margin: 30rem 0;
		a {
			font-size: 7.2rem;
			text-decoration: underline;
			color: ${(pr) => pr.theme.black};
			&:hover {
				color: ${(pr) => pr.theme.seaGreen};
			}
		}
		p {
			width: 15%;
		}
	}
	@media (max-width: ${(pr) => pr.theme.tablet}) {
		/* border: 1px solid green; */
		.get-in-touch {
			flex-flow: column nowrap;
			align-items: center;
			a {
				margin-bottom: 2rem;
			}
			p {
				width: 100%;
			}
		}
	}
	@media (max-width: ${(pr) => pr.theme.phone}) {
		/* border: 1px solid green; */
		h2 {
			font-size: 4.8rem;
		}
		.get-in-touch {
			margin: 15rem 0;
			align-items: center;
			a {
				font-size: 4.8rem;
			}
		}
	}
`;

export default StyledHomePage;
