import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../../assets/img/banner1.png"
import banner2 from "../../assets/img/banner2.jpg"
import banner3 from "../../assets/img/banner3.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Banners.css"

const Banners =()=>{
    return(
        <div className="banners-block">
            <h1>It’s Time To <br/>
                Explore The World</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop ={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide><img src={banner1} alt="banner"/></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="banner"/></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="banner"/></SwiperSlide>


            </Swiper>


        </div>
    )
}
export default Banners