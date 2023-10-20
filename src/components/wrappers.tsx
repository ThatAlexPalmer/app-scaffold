import styled from "styled-components";

const FullWidthContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    align-self: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    max-width: 2450px;
    min-height: 100%;
    margin: auto;
    padding: 0 4%;
`;

const Nav = styled.nav`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    width: 100%;
    height: 4rem;
`;

const Logotype = styled.span`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	text-align: left;
	font-size: ${({ theme }) => theme.fontSizes.baseline};
	font-weight: 600;
	width: 8rem;
`;

const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    align-self: flex-start;
    justify-content: flex-start;
    flex: 1;
    width: 100%;
    height: auto;

    @media only screen and (max-width: 820px) {
        width: 100%;
    }
    /** Generic tablet and equivalent devices */
    @media only screen and (max-width: 768px) {
        margin: 0;
    }
    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 512px) {
        margin: 0 auto;
    }

    & mark {
        color: ${({ theme }) => theme.colors.main};
        background-color: transparent;
    }
`;

const Heading = styled.div`
    display: flex;
    flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	margin: 8rem 0 2rem 0;
  

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 768px) {
        margin: 4rem 0;
    }

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 512px) {
        margin: 2rem 0;
    }
`;

const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
	justify-content: flex-start;
`;

const Article = styled.article`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    align-self: flex-start;
    justify-content: flex-start;
    flex: 1;
    width: auto;
    max-width: 46rem;
    height: auto;
    margin: 0 auto;
    text-align: left;

    /** iPad Air and equivalent devices */
    @media (max-width: 820px) {
        width: 100%;
    }
    /** Generic tablet and equivalent devices */
    @media (max-width: 768px) {
        width: 98%;
        align-items: center;
    }
    /** iPhone portrait mode and equivalent devices */
    @media screen and (max-width: 512px) {
        width: 96%;
    }
`;

const Credits = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	font-size: ${({ theme }) => theme.fontSizes.large};
	margin-bottom: 4rem;

	a, span {
        padding: 0 1rem 0 0;
        /** iPhone portrait mode and equivalent devices */
		@media only screen and (max-width: 512px) {
			font-size: ${({ theme }) => theme.fontSizes.baseline};
			padding: 0 0.3rem 0 0;
		}
    }

	a:hover {
		color: ${({ theme }) => theme.colors.background} !important;
		background: ${({ theme }) => theme.colors.main} !important;
	}
`;

const FooterWrapper = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    flex-shrink: 0;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: flex-start;
    width: 100%;
    margin: 8rem 0 4rem 0;
    padding: 4rem 0 4rem 0;
    border-top: 0.5px dashed ${({ theme }) => theme.colors.outline};
`;

const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.618rem;
    width: 60%;
    align-items: start;
    justify-items: start;
    justify-content: start;

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 475px) {
        grid-template-columns: repeat(1, 1fr);
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.baseline};
        margin: 0;

        /** iPad portrait mode and equivalent devices */
        @media only screen and (max-width: 768px) {
            font-size: ${({ theme }) => theme.fontSizes.baseline};
        }
    }
`;

const FooterAside = styled.aside`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    width: 100%;
    margin: 0;

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 475px) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    span {
        position: relative;
        font-size: ${({ theme }) => theme.fontSizes.baseline};
        margin: 0;

        /** iPhone portrait mode and equivalent devices */
        @media only screen and (max-width: 475px) {
            font-size: ${({ theme }) => theme.fontSizes.small};
        }
    }
`;

export { FullWidthContainer, Nav, Logotype, Main, Heading, Content, Article, Credits, FooterWrapper, FooterContent, FooterAside };