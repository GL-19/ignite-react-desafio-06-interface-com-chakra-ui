import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselElement } from "./CarouselElement";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
				<CarouselElement
					linkUrl="/continent/europa"
					imageUrl="/Home/Europe.svg"
					title="Europa"
					description="O continente mais antigo"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<CarouselElement
					linkUrl="/continent/asia"
					imageUrl="/Home/Europe.svg"
					title="Ásia"
					description="O maior continente"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<CarouselElement
					linkUrl="/continent/africa"
					imageUrl="/Home/Europe.svg"
					title="África"
					description="Berço da humanidade"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<CarouselElement
					linkUrl="/continent/oceania"
					imageUrl="/Home/Europe.svg"
					title="Oceania"
					description="O continente mais novo"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<CarouselElement
					linkUrl="/continent/america"
					imageUrl="/Home/Europe.svg"
					title="América"
					description="Novo Mundo"
				/>
			</SwiperSlide>
		</Swiper>
	);
}
