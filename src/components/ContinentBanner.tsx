import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
	name: string;
	bannerUrl: string;
}

export function ContinentBanner({ name, bannerUrl }: ContinentBannerProps) {
	return (
		<Flex
			backgroundImage={bannerUrl}
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			w="100%"
			h={["150px", "500px"]}
			align={["center", "end"]}
			justify={["center", "left"]}
			px={["0", "8rem"]}
			py={["0", "4rem"]}
		>
			<Heading color="white" fontWeight="semibold" fontSize={["28px", "48px"]}>
				{name}
			</Heading>
		</Flex>
	);
}
