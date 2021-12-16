import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperCore, { Pagination, Navigation } from "swiper";
import Link from "next/link";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function HomeCarousel() {
	return (
		<Swiper
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide>
				<Link href="/continent/europa">
					<a>
						<Flex
							backgroundImage="Europe.svg"
							backgroundSize="cover"
							flexDir="column"
							align="center"
							justify="center"
							w="100%"
							h="400px"
						>
							<Heading>Europa</Heading>
							<Text>O continente mais antigo</Text>
						</Flex>
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href="/continent/america-do-norte">
					<a>
						<Flex
							backgroundImage="Europe.svg"
							backgroundSize="cover"
							flexDir="column"
							align="center"
							justify="center"
							w="100%"
							h="400px"
						>
							<Heading>América do Norte</Heading>
							<Text>O continente mais antigo</Text>
						</Flex>
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href="/continent/america-do-sul">
					<a>
						<Flex
							backgroundImage="Europe.svg"
							backgroundSize="cover"
							flexDir="column"
							align="center"
							justify="center"
							w="100%"
							h="400px"
						>
							<Heading>América do Sul</Heading>
							<Text>O continente mais antigo</Text>
						</Flex>
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href="/continent/asia">
					<a>
						<Flex
							backgroundImage="Europe.svg"
							backgroundSize="cover"
							flexDir="column"
							align="center"
							justify="center"
							w="100%"
							h="400px"
						>
							<Heading>Ásia</Heading>
							<Text>O continente mais antigo</Text>
						</Flex>
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href="/continent/africa">
					<a>
						<Flex
							backgroundImage="Europe.svg"
							backgroundSize="cover"
							flexDir="column"
							align="center"
							justify="center"
							w="100%"
							h="400px"
						>
							<Heading>África</Heading>
							<Text>O continente mais antigo</Text>
						</Flex>
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href="/continent/oceania">
					<a>
						<Flex
							backgroundImage="Europe.svg"
							backgroundSize="cover"
							flexDir="column"
							align="center"
							justify="center"
							w="100%"
							h="400px"
						>
							<Heading>Oceania</Heading>
							<Text>O continente mais antigo</Text>
						</Flex>
					</a>
				</Link>
			</SwiperSlide>
		</Swiper>
	);
}
