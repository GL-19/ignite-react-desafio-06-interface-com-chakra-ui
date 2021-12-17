import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { TripsInfoElement } from "./TripsInfoElement";

export function TripsInfo() {
	return (
		<Box>
			<Flex justify="space-evenly" py={["2.25rem", "3.75rem", "5rem"]}>
				<TripsInfoElement imageUrl="/Home/cocktail.png">vida noturna</TripsInfoElement>
				<TripsInfoElement imageUrl="Home/surf.png">praia</TripsInfoElement>
				<TripsInfoElement imageUrl="/Home/building.png">moderno</TripsInfoElement>
				<TripsInfoElement imageUrl="/Home/museum.png">clássico</TripsInfoElement>
				<TripsInfoElement imageUrl="/Home/earth.png">e mais...</TripsInfoElement>
			</Flex>
		</Box>
	);
}
