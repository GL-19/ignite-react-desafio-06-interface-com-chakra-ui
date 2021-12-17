import { Flex, Image, Text, ListItem, UnorderedList } from "@chakra-ui/react";

interface TripsInfoElementProps {
	imageUrl: string;
	children: string;
}

export function TripsInfoElement({ imageUrl, children }: TripsInfoElementProps) {
	return (
		<Flex flexDir="column" align="center">
			<Image
				alt=""
				src={imageUrl}
				w={["45px", "65px", "85px"]}
				h={["45px", "65px", "85px"]}
				display={["none", "block", "block"]}
				mb="1.5rem"
			/>
			<Text
				color="gray.600"
				fontWeight={["medium", "semibold", "semibold"]}
				fontSize={["18px", "21px", "24px"]}
				listStyleType={["circle", "none", "none"]}
			>
				{children}
			</Text>
		</Flex>
	);
}
