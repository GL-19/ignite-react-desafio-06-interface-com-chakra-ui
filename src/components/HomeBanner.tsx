import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";

export function HomeBanner() {
	return (
		<Flex backgroundImage="Home/Background.svg" w="100%" minH="335px">
			<Box>
				<Heading color="white">5 Continentes, infinitas possibilidades</Heading>
				<Text color="gray.400">
					Chegou a hora de você tirar o papel a viagem que você sempre sonhou
				</Text>
			</Box>
			<Image src="Home/Airplane.svg" alt="airplane" display={["none", "block"]} />
		</Flex>
	);
}
