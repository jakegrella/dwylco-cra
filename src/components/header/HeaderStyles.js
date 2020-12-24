import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	margin: 0 0 15rem 0;
	/* background-color: ${(pr) => pr.theme.white}; */
	.web-nav {
		display: initial;
		/* border: 1px solid red; */
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		text-transform: lowercase;
		a {
			/* border: 1px solid blue; */
			margin-right: 1.5rem;
		}
	}
	.mobile-nav {
		display: none;
	}
	.mobile-nav-button {
		display: none;
		border: none;
		background: none;
		font-size: 5rem;
	}
	.mobile-nav-button:hover {
		cursor: pointer;
	}
	img {
		width: 20rem;
	}
	@media (max-width: ${(pr) => pr.theme.tablet}) {
		.web-nav {
			display: none;
		}
		.mobile-nav {
			position: absolute;
			right: 0;
			top: 10rem;
			li {
				list-style-type: none;
				line-height: 1.3;
			}
		}
		.mobile-nav-button {
			display: initial;
		}
		.inactive {
			display: none;
		}
		.active {
			display: initial;
		}
	}
`;

export default StyledHeader;
