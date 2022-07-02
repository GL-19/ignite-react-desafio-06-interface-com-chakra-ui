import { Flex, Image, Text } from "@chakra-ui/react";

interface TripsInfoElementProps {
	imageUrl: string;
	children: string;
}

export function TripsInfoElement({ imageUrl, children }: TripsInfoElementProps) {
	return (
		<Flex flexDir="column" align="center" justify="center">
			<Image
				alt=""
				src={imageUrl}
				w={["45px", "55px", "85px"]}
				h={["45px", "55px", "85px"]}
				display={["none", "block", "block"]}
				mb="1.5rem"
			/>
			<Text
				color="gray.600"
				fontWeight={["medium", "medium", "semibold"]}
				fontSize={["18px", "19px", "23px"]}
			>
				<Text
					as="span"
					color="yellow.500"
					fontWeight="bolder"
					fontSize="50px"
					lineHeight="34px"
					display={["inline", "none"]}
				>
					.
				</Text>
				{"  "}
				{children}
			</Text>
		</Flex>
	);
}
