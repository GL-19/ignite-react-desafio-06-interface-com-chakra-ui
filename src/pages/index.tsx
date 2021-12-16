import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { HomeCarousel } from "../components/HomeCarousel";
import { HomeBanner } from "../components/HomeBanner";
import { TripsInfo } from "../components/TripsInfo";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<>
				<Header />

				<HomeBanner />

				<TripsInfo />

				<Box textAlign="center" color="gray.700">
					<Heading>Vamos nessa?</Heading>
					<Heading>Então escolha seu continente</Heading>
				</Box>

				<HomeCarousel />
			</>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async ({}) => {
	return {
		props: {},
	};
};
