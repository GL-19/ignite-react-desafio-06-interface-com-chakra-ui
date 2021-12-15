import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<h1>Home</h1>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async ({}) => {
	return {
		props: {},
	};
};
