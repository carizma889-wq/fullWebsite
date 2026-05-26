import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { dataCarousel } from '../assets/assets';
function Carousel() {
  return (
      <Swiper pagination={{ clickable: true }} loop={true}  modules={[Pagination]} className="mySwiper">

        {dataCarousel.map((slide)=>{
          return <SwiperSlide key={slide.id} className='carouselSlide'>
            <div className='carouselContent' >
              <div className='carouselTextAndButton'>
                <h3 className='carouselBrand'  ><img src="/img/iconIphone.png" alt="" /> <span >{slide.brand}</span></h3>
                <h3 className='carouselTitle' >{slide.title}</h3>
              <div className="ShopNow" >
                <p >Shop Now</p> <span ><ArrowForwardIcon/></span>
              </div>
              </div>
            <div>
              <img src={slide.img} alt={slide.imgAlt} />
            </div>
          </div>
          </SwiperSlide>
        })}

      </Swiper>
  )
}

export default Carousel