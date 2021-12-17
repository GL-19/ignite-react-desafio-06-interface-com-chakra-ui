import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";

export function HomeBanner() {
	return (
		<Flex
			backgroundImage="Home/Background.svg"
			w="100%"
			minH={["165px", "245px", "335px"]}
			px={["1rem", "4rem", "8rem"]}
		>
			<Flex
				w={["100%", "100%", "50%"]}
				justify="center"
				align="center"
				flexDir="column"
				mr={["2.5rem", "3.75rem", "5rem"]}
			>
				<Text
					fontSize={["20px", "28px", "36px"]}
					fontWeight="medium"
					color="gray.50"
					mb="0.5rem"
				>
					5 Continentes, infinitas possibilidades
				</Text>
				<Text color="gray.300" fontSize={["14px", "17px", "20px"]}>
					Chegou a hora de você tirar do papel a viagem que você sempre sonhou
				</Text>
			</Flex>
			<Image
				src="Home/Airplane.svg"
				alt="airplane"
				display={["none", "none", "block"]}
				mb="-6.5rem"
			/>
		</Flex>
	);
}
