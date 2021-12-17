import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

interface ContinentDataProps {
	description: string;
	countriesQuantity: string | number;
	languagesQuantity: string | number;
	mostVisitedCitiesQuantity: string | number;
}

export function ContinentData({
	description,
	countriesQuantity,
	languagesQuantity,
	mostVisitedCitiesQuantity,
}: ContinentDataProps) {
	return (
		<Grid gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))" gap="1rem">
			<Text textAlign="justify" fontSize={["14px", "19px", "24px"]}>
				{description}
			</Text>
			<Flex
				justify={["space-between", "space-between", "space-around"]}
				alignItems="center"
				textAlign={["start", "start", "center"]}
			>
				<Box>
					<Heading
						color="yellow.400"
						fontSize={["24px", "36px", "48px"]}
						fontWeight="semibold"
					>
						{countriesQuantity}
					</Heading>
					<Text fontSize={["18px", "21px", "24px"]}>países</Text>
				</Box>
				<Box>
					<Heading
						color="yellow.400"
						fontSize={["24px", "36px", "48px"]}
						fontWeight="semibold"
					>
						{languagesQuantity}
					</Heading>
					<Text fontSize={["18px", "21px", "24px"]}>línguas</Text>
				</Box>
				<Box>
					<Heading
						color="yellow.400"
						fontSize={["24px", "36px", "48px"]}
						fontWeight="semibold"
					>
						{mostVisitedCitiesQuantity}
					</Heading>
					<Text fontSize={["18px", "21px", "24px"]}>cidades +100</Text>
				</Box>
			</Flex>
		</Grid>
	);
}
