import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

interface CityData {
	name: string;
	country: string;
	cityImageUrl: string;
	countryFlagUrl: string;
}

interface CitiesListProps {
	cities: CityData[];
}

export function CitiesList({ cities }: CitiesListProps) {
	return (
		<Box>
			<Heading mb={["1.25rem", "2.5rem"]}>Cidades +100</Heading>
			<Grid
				justifyItems="center"
				alignItems="center"
				rowGap="3rem"
				gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))"
			>
				{cities?.map((city) => {
					return (
						<Flex
							w="256px"
							h="279px"
							flexDir="column"
							borderRadius="0.5rem"
							key={city.name}
							overflow="hidden"
						>
							<Image src={city.cityImageUrl} alt="city-photo" w="100%" minH="173px" />

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
										{city.name}
									</Text>
									<Text>{city.country}</Text>
								</Box>

								<Image
									src={city.countryFlagUrl}
									alt="country-flag"
									borderRadius="100%"
									w="30px"
									h="30px"
								/>
							</Flex>
						</Flex>
					);
				})}
			</Grid>
		</Box>
	);
}
