import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function Carousel() {
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
			</SwiperSlide>
			<SwiperSlide>
				<Flex
					backgroundImage="Rome.svg"
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
			</SwiperSlide>
			<SwiperSlide>
				<Flex
					backgroundImage="Prague.svg"
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
			</SwiperSlide>
			<SwiperSlide>
				<Flex
					backgroundImage="London.svg"
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
			</SwiperSlide>
			<SwiperSlide>
				<Flex
					backgroundImage="London.svg"
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
			</SwiperSlide>
			<SwiperSlide>
				<Flex
					backgroundImage="London.svg"
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
			</SwiperSlide>
		</Swiper>
	);
}
