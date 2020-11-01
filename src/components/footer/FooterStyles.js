import styled from 'styled-components';

const StyledFooter = styled.footer`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	margin: 15rem 0 0 0;
	color: ${(pr) => pr.theme.black};
	text-transform: lowercase;
	div {
		/* border: 1px solid green; */
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-start;
	}
	a {
		font-size: 1.8rem;
		text-decoration: underline;
		font-weight: 500;
	}
	p {
		font-size: 1.8rem;
	}
	@media (max-width: ${(pr) => pr.theme.phone}) {
		flex-flow: column nowrap;
		line-height: 2;
	}
`;

export default StyledFooter;
