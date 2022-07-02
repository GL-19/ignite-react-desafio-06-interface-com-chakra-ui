import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";

export function Header() {
	return (
		<Flex justify="center" margin="0 auto" py={["1rem", "1.25rem", "1.5rem"]}>
			<Link href="/">
				<a>
					<Image
						src="/Logo.svg"
						alt="logo"
						w={["82px", "133px", "184px"]}
						h={["20px", "33px", "46px"]}
					/>
				</a>
			</Link>
		</Flex>
	);
}
