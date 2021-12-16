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
		<Link href={linkUrl}>
			<a>
				<Flex
					backgroundImage={imageUrl}
					backgroundSize="cover"
					flexDir="column"
					align="center"
					justify="center"
					w="100%"
					h="400px"
				>
					<Heading color="white">{title}</Heading>
					<Text color="white">{description}</Text>
				</Flex>
			</a>
		</Link>
	);
}
