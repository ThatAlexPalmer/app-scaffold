import Navbar from "./Navbar";
import { FullWidthContainer, Main, FooterContent, FooterWrapper, FooterAside } from "./wrappers";
import { P } from "./typography";
interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function Layout({ children }: Props) {
	return (
		<FullWidthContainer>
			<Navbar />
			<Main>{children}</Main>
			<FooterWrapper>
				<FooterContent>
					<P>
						These
					</P>
					<P>
						Can
					</P>
					<P>
						Be
					</P>
					<P>
						Links
					</P>
				</FooterContent>
				<FooterAside>
					<span>
						© {new Date().getFullYear()} Poet Network Inc.
						<br />
					</span>
				</FooterAside>
			</FooterWrapper>
		</FullWidthContainer>
	);
}