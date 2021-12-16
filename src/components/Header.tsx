import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";

export function Header() {
	return (
		<Flex justify="center" margin="0 auto" py={["1rem", "1.5rem"]}>
			<Link href="/">
				<a>
					<Image src="/logo.svg" alt="logo" w={["82px", "184px"]} h={["20px", "46px"]} />
				</a>
			</Link>
		</Flex>
	);
}
