import { Box, Flex, Heading, Text, Image, Grid } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../components/Header";

interface ContinentProps {
	title: string;
}

function Continent() {
	return (
		<>
			<Head>
				<title>Europa</title>
			</Head>
			<>
				<Header />
				<Flex
					backgroundImage="Europe/europe-banner.svg"
					backgroundSize="cover"
					backgroundRepeat="no-repeat"
					w="100%"
					h={["150px", "500px"]}
					align={["center", "end"]}
					justify={["center", "left"]}
					px={["0", "8rem"]}
					py={["0", "4rem"]}
				>
					<Heading color="white" fontWeight="semibold" fontSize={["28px", "48px"]}>
						Europa
					</Heading>
				</Flex>
				<Flex
					mx={["1rem", "8.5rem"]}
					my={["2rem", "4rem"]}
					flexDir="column"
					gap={["2rem", "5rem"]}
				>
					<Grid
						gridTemplateColumns="repeat(auto-fit, minmax(325px, 1fr))"
						gap={["1rem", "0"]}
					>
						<Text textAlign="justify" fontSize={["14px", "24px"]}>
							A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a
							península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a
							leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o
							Cáucaso, e o mar Negro a sudeste
						</Text>
						<Flex
							justify={["space-between", "space-around"]}
							alignItems="center"
							textAlign={["start", "center"]}
						>
							<Box>
								<Heading
									color="yellow.400"
									fontSize={["24px", "48px"]}
									fontWeight="semibold"
								>
									50
								</Heading>
								<Text fontSize={["18px", "24px"]}>países</Text>
							</Box>
							<Box>
								<Heading
									color="yellow.400"
									fontSize={["24px", "48px"]}
									fontWeight="semibold"
								>
									60
								</Heading>
								<Text fontSize={["18px", "24px"]}>línguas</Text>
							</Box>
							<Box>
								<Heading
									color="yellow.400"
									fontSize={["24px", "48px"]}
									fontWeight="semibold"
								>
									27
								</Heading>
								<Text fontSize={["18px", "24px"]}>cidades +100</Text>
							</Box>
						</Flex>
					</Grid>

					<Box>
						<Heading mb={["1.25rem", "2.5rem"]}>Cidades +100</Heading>
						<Grid
							justifyItems="center"
							alignItems="center"
							rowGap="3rem"
							gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))"
						>
							<Flex w="256px" h="279px" flexDir="column" borderRadius="1rem">
								<Image src="Europe/London.svg" alt="London" w="100%" h="173px" />
								<Flex
									justify="space-between"
									align="center"
									px="1.5rem"
									h="100%"
									borderColor="yellow.500"
									borderWidth="1px"
									borderTop={0}
									borderBottomRadius="0.5rem"
								>
									<Box>
										<Text fontSize="20px" fontWeight="semibold">
											Londres
										</Text>
										<Text>Reino Unido</Text>
									</Box>
									<Image
										src="Europe/uk-flag.png"
										alt="UK"
										borderRadius="100%"
										w="30px"
										h="30px"
									/>
								</Flex>
							</Flex>
							<Flex w="256px" h="279px" flexDir="column" borderRadius="1rem">
								<Image src="Europe/Paris.svg" alt="Paris" w="100%" h="173px" />
								<Flex
									justify="space-between"
									align="center"
									px="1.5rem"
									h="100%"
									borderColor="yellow.500"
									borderWidth="1px"
									borderTop={0}
									borderBottomRadius="0.5rem"
								>
									<Box>
										<Text fontSize="20px" fontWeight="semibold">
											Paris
										</Text>
										<Text>França</Text>
									</Box>
									<Image
										src="Europe/fr-flag.png"
										alt="France"
										borderRadius="100%"
										w="30px"
										h="30px"
									/>
								</Flex>
							</Flex>
							<Flex w="256px" h="279px" flexDir="column" borderRadius="1rem">
								<Image src="Europe/Rome.svg" alt="Rome" w="100%" h="173px" />
								<Flex
									justify="space-between"
									align="center"
									px="1.5rem"
									h="100%"
									borderColor="yellow.500"
									borderWidth="1px"
									borderTop={0}
									borderBottomRadius="0.5rem"
								>
									<Box>
										<Text fontSize="20px" fontWeight="semibold">
											Roma
										</Text>
										<Text>Itália</Text>
									</Box>
									<Image
										src="Europe/it-flag.png"
										alt="Italy"
										borderRadius="100%"
										w="30px"
										h="30px"
									/>
								</Flex>
							</Flex>
							<Flex w="256px" h="279px" flexDir="column" borderRadius="1rem">
								<Image src="Europe/Prague.svg" alt="Prague" w="100%" h="173px" />
								<Flex
									justify="space-between"
									align="center"
									px="1.5rem"
									h="100%"
									borderColor="yellow.500"
									borderWidth="1px"
									borderTop={0}
									borderBottomRadius="0.5rem"
								>
									<Box>
										<Text fontSize="20px" fontWeight="semibold">
											Praga
										</Text>
										<Text>República Tcheca</Text>
									</Box>
									<Image
										src="Europe/czk-flag.png"
										alt="República Tcheca"
										borderRadius="100%"
										w="30px"
										h="30px"
									/>
								</Flex>
							</Flex>
							<Flex w="256px" h="279px" flexDir="column" borderRadius="1rem">
								<Image src="Europe/Amsterdan.svg" alt="Amsterdan" w="100%" h="173px" />
								<Flex
									justify="space-between"
									align="center"
									px="1.5rem"
									h="100%"
									borderColor="yellow.500"
									borderWidth="1px"
									borderTop={0}
									borderBottomRadius="0.5rem"
								>
									<Box>
										<Text fontSize="20px" fontWeight="semibold">
											Amsterdã
										</Text>
										<Text>Holanda</Text>
									</Box>
									<Image
										src="Europe/ne-flag.png"
										alt="Holanda"
										borderRadius="100%"
										w="30px"
										h="30px"
									/>
								</Flex>
							</Flex>
						</Grid>
					</Box>
				</Flex>
			</>
		</>
	);
}

export default Continent;

/* export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { name: "europe" } }, { params: { name: "south-america" } }],
		fallback: true,
	};
}; */
/* 
export const getStaticProps: GetStaticProps<ContinentProps> = async ({ params }) => {
	// const { name } = params;
	const name = "Europa";

	return {
		props: {
			title: name,
		},
	};
}; */
