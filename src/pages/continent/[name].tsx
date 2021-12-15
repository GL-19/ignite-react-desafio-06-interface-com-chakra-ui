import { Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";

interface ContinentProps {
	title: string;
}

function Continent({ title }: ContinentProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<>
				<Header />
				<Heading>Continent</Heading>
			</>
		</>
	);
}

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { name: "north-america" } }, { params: { name: "south-america" } }],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ContinentProps> = async ({ params }) => {
	// const { name } = params;
	const name = "teste";

	return {
		props: {
			title: name,
		},
	};
};
