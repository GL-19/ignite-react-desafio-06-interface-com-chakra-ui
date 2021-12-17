import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselElementProps {
	title: string;
	description: string;
	imageUrl: string;
	linkUrl: string;
}

export function CarouselElement({
	title,
	description,
	imageUrl,
	linkUrl,
}: CarouselElementProps) {
	return (
		<Flex
			backgroundImage={imageUrl}
			backgroundSize="cover"
			flexDir="column"
			align="center"
			justify="center"
			w="100%"
			h={["250px", "375px", "400px"]}
		>
			<Link href={linkUrl}>
				<a>
					<Heading
						textAlign="center"
						color="gray.50"
						fontSize={["24px", "36px", "48px"]}
						fontWeight="bolder"
						mb={["0.4rem", "0.8rem", "1.2rem"]}
					>
						{title}
					</Heading>
					<Text
						color="gray.100"
						textAlign="center"
						fontSize={["14px", "19px", "24px"]}
						fontWeight="bolder"
					>
						{description}
					</Text>
				</a>
			</Link>
		</Flex>
	);
}
