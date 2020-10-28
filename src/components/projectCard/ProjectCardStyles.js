import styled from 'styled-components';

const StyledProjectCard = styled.div`
	/* border: 1px solid blue; */
	display: flex;
	justify-content: center;
	flex-flow: row nowrap;
	/* width: 70%; */
	margin-bottom: 5rem;
	img {
		width: 50rem;
		height: 40rem;
		object-fit: cover;
	}
	.project-card-words {
		/* border: 1px solid red; */
		display: flex;
		flex-flow: column nowrap;
		margin-top: 2rem;
		width: 40%;
		margin-left: 5rem;
		h3 {
			font-size: 4.8rem;
			margin-bottom: 1rem;
		}
		.link-stack-container {
			display: flex;
			flex-flow: row wrap;
			h4 {
				margin-bottom: 0.5rem;
			}
			svg {
				color: ${(pr) => pr.theme.black};
				margin-right: 1rem;
			}
			.links {
				/* border: 1px solid green; */
				margin-right: 4rem;
				svg:hover {
					color: ${(pr) => pr.theme.seaGreen};
				}
			}
			.tech {
				/* border: 1px solid red; */
				margin-bottom: 1rem;
			}
		}
	}
	@media (max-width: ${(pr) => pr.theme.tablet}) {
		/* border: 1px solid green; */
		flex-flow: column nowrap;
		align-items: center;
		.project-card-words {
			/* border: 1px solid red; */
			width: 100%;
			margin-left: 0;
		}
	}
`;

export default StyledProjectCard;
