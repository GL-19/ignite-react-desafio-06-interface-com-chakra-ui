import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

interface ContinentDataProps {
	description: string;
	countriesQuantatity: string | number;
	languagesQuantatity: string | number;
	mostVisitedCitiesQuantatity: string | number;
}

export function ContinentData({
	description,
	countriesQuantatity,
	languagesQuantatity,
	mostVisitedCitiesQuantatity,
}: ContinentDataProps) {
	return (
		<Grid gridTemplateColumns="repeat(auto-fit, minmax(325px, 1fr))" gap={["1rem", "0"]}>
			<Text textAlign="justify" fontSize={["14px", "24px"]}>
				{description}
			</Text>
			<Flex
				justify={["space-between", "space-around"]}
				alignItems="center"
				textAlign={["start", "center"]}
			>
				<Box>
					<Heading color="yellow.400" fontSize={["24px", "48px"]} fontWeight="semibold">
						{countriesQuantatity}
					</Heading>
					<Text fontSize={["18px", "24px"]}>países</Text>
				</Box>
				<Box>
					<Heading color="yellow.400" fontSize={["24px", "48px"]} fontWeight="semibold">
						{languagesQuantatity}
					</Heading>
					<Text fontSize={["18px", "24px"]}>línguas</Text>
				</Box>
				<Box>
					<Heading color="yellow.400" fontSize={["24px", "48px"]} fontWeight="semibold">
						{mostVisitedCitiesQuantatity}
					</Heading>
					<Text fontSize={["18px", "24px"]}>cidades +100</Text>
				</Box>
			</Flex>
		</Grid>
	);
}
