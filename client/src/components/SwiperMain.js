
import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperMain = () => {
  return (
    <Swiper
     className="h-[20rem] lg:h-[25rem]   w-full "
      // install Swiper modules
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      
      loop={true}
      Autoplay={{ delay: 500}}
      

      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
        className="  bg-center   bg-cover lg:bg-cover bg-no-repeat lg:bg-[url(https://img.lojasrenner.com.br/banner/01-home/P04_230725_HOME_CARROSSEL_ALFAIATARIA_DESK_FEMININO.jpg)] bg-[url(https://img.lojasrenner.com.br/banner/01-home/P02_230719_HOME_CARROSSEL_PROGRESSIVO_MOB_GERAL.jpg)]"

      ></SwiperSlide>
       <SwiperSlide
        className="  bg-center bg-[url(https://img.lojasrenner.com.br/banner/01-home/P06_230725_HOME_CARROSSEL_PREVIEW-MASC_MOB_MASCULINO.jpg)]   bg-cover lg:bg-cover bg-no-repeat lg:bg-[url(https://img.lojasrenner.com.br/banner/01-home/P06_230725_HOME_CARROSSEL_PREVIEW-MASC_DESK_MASCULINO.jpg)]"

      ></SwiperSlide>
    </Swiper>
  );
};

export default SwiperMain;
