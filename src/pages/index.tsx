import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<>
				<Header />
				<Flex backgroundImage="Background.svg" w="100%" minH="335px">
					<Box>
						<Heading color="white">5 Continentes, infinitas possibilidades</Heading>
						<Text color="gray.400">
							Chegou a hora de você tirar o papel a viagem que você sempre sonhou
						</Text>
					</Box>

					<Image src="Airplane.svg" alt="airplane" />
				</Flex>
				<Box>
					<Flex justify="space-evenly">
						<Flex flexDir="column" align="center">
							<Image alt="cocktail" src="cocktail.png" w="85px" h="85px" />
							<Text color="gray.700">vida noturna</Text>
						</Flex>
						<Flex flexDir="column" align="center">
							<Image alt="surf" src="surf.png" w="85px" h="85px" />
							<Text color="gray.700">praia</Text>
						</Flex>
						<Flex flexDir="column" align="center">
							<Image alt="building" src="building.png" w="85px" h="85px" />
							<Text color="gray.700">moderno</Text>
						</Flex>
						<Flex flexDir="column" align="center">
							<Image alt="museum" src="museum.png" w="85px" h="85px" />
							<Text color="gray.700">classico</Text>
						</Flex>
						<Flex flexDir="column" align="center">
							<Image alt="earth" src="earth.png" w="85px" h="85px" />
							<Text color="gray.700">e mais...</Text>
						</Flex>
					</Flex>
				</Box>
				<Box textAlign="center" color="gray.700">
					<Heading>Vamos nessa?</Heading>
					<Heading>Então escolha seu continente</Heading>
				</Box>
				<Carousel />
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
