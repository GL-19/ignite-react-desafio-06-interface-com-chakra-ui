import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface ContinentProps {}

function Continent() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<h1>Continent</h1>
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

	return {
		props: {},
	};
};
