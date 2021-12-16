import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function TripsInfo() {
	return (
		<Box>
			<Flex justify="space-evenly">
				<Flex flexDir="column" align="center">
					<Image alt="cocktail" src="Home/cocktail.png" w="85px" h="85px" />
					<Text color="gray.700">vida noturna</Text>
				</Flex>
				<Flex flexDir="column" align="center">
					<Image alt="surf" src="Home/surf.png" w="85px" h="85px" />
					<Text color="gray.700">praia</Text>
				</Flex>
				<Flex flexDir="column" align="center">
					<Image alt="building" src="Home/building.png" w="85px" h="85px" />
					<Text color="gray.700">moderno</Text>
				</Flex>
				<Flex flexDir="column" align="center">
					<Image alt="museum" src="Home/museum.png" w="85px" h="85px" />
					<Text color="gray.700">classico</Text>
				</Flex>
				<Flex flexDir="column" align="center">
					<Image alt="earth" src="Home/earth.png" w="85px" h="85px" />
					<Text color="gray.700">e mais...</Text>
				</Flex>
			</Flex>
		</Box>
	);
}
