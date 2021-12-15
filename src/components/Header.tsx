import { Flex, Image } from "@chakra-ui/react";

export function Header() {
	return (
		<Flex justify="center" margin="0 auto" padding="1rem 0">
			<Image src="logo.svg" alt="logo" w="192px" h="48px" />
		</Flex>
	);
}
