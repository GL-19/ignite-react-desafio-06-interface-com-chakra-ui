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
			h={["150px", "325px", "500px"]}
			align={["center", "end"]}
			justify={["center", "left"]}
			px={["0", "4rem", "8rem"]}
			py={["0", "2rem", "4rem"]}
		>
			<Heading color="gray.50" fontWeight="semibold" fontSize={["28px", "38px", "48px"]}>
				{name}
			</Heading>
		</Flex>
	);
}
