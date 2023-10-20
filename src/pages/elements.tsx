import Head from "next/head";
import { Content, Heading } from "../components/wrappers";
import { H1, H2, H3, P, Blockquote, } from "../components/typography";
import { FormWrapper, FormInput, FormTextArea, } from "../components/forms";

export default function Join() {
	return (
		<Content>
			<Head>
				<title>Join page</title>
			</Head>
			<Heading>
				<H1>H1 Element</H1>
				<H2>H2 Element</H2>
				<H3>H3 Element</H3>
			</Heading>
			<Blockquote>
				This is a blockquote. It is used to highlight a quote or a citation.
			</Blockquote>
			<P>Paragraph looks like this.</P>
			<FormWrapper>
				<label htmlFor="name">These are form wrappers and fields</label>
				<FormInput type="text" placeholder="Form Input" />
				<FormTextArea placeholder="Form Text Area" />
			</FormWrapper>
		</Content>
	);
}
