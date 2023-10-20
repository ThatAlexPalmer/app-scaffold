import { Content, Heading } from "../components/wrappers";
import { H1, P } from "../components/typography";
import Link from 'next/link';

export default function Home() {
	return (
		<Content>
			<Heading>
				<H1>Poet's frontend scaffold.</H1>
			</Heading>
			<P>
				Used to quickly setup frontend projects. See <Link href="/elements">Elements</Link> for examples of what components and forms look like. This scaffold comes with:
			</P>
			<P>
				<Link href="https://nextjs.org/">Next.js</Link> as the framework.
			</P>
			<P>
				<Link href="https://styled-components.com/">Styled Components</Link> for styling and structure using `DefaultTheme` and semantically meaningful components.
			</P>
			<P>
				<Link href="https://eslint.org/">ESLint</Link> for linting.
			</P>
			<P>
				<Link href="https://prettier.io/">Prettier</Link> for code formatting.
			</P>
			<P>
				<Link href="https://next-sitemap.lamvishnusankar.com">Next Sitemap</Link> for generating sitemaps.
			</P>
		</Content>
	);
}