import { Swiper, SwiperSlide } from "swiper/react"
import '../../App.css'
import 'swiper/swiper-bundle.css';
function Slide({slideData}) {
    return(
        <div className="container">
            <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
            >
                
                {slideData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="Slide" className="slide-item"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Slide