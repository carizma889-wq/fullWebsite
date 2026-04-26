import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import StarIcon from '@mui/icons-material/Star';
import { FreeMode, Pagination } from 'swiper/modules';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
function Products({PRODUCTS_CAROUSEL,prevRef,nextRef}) {
 return (
    <>
      <Swiper
         spaceBetween={20}
          breakpoints={{
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
onSwiper={(swiper) => {
    setTimeout(() => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.init();
      swiper.navigation.update();
    });
  }}
        loop={true}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper myProducts"
      >
       {PRODUCTS_CAROUSEL.map((data)=>(
        <SwiperSlide className='item' key={data.id} >
            <div  className="BoxImg" >
                <img className='img' src={`${data.img_url}`} alt="" />
                <button className='btnHide' onClick={()=>{handleClicked(data.id)}} > add to card</button>
            </div>
            <div className="details">
              <p>{data.details}</p>
              <div className="price">
                <span>${data.salaryOffer}</span> <span>${data.salary}</span>

               <div className="stars">
                 {Array.from({length:data.startNumberYellow}).map((index)=>{
                  return <StarIcon key={index} sx={{color:'#FFAD33'}}/>
                })}
                {Array.from({length:data.startNumberempty}).map(()=>{
                  return <StarOutlineIcon/>
                })}
                {Array.from({length:data.numberStarmaybe}).map(()=>{
                  return <StarHalfIcon sx={{color:'#FFAD33'}}/>
                })}
               </div>
              </div>
            </div>
        </SwiperSlide>
       ))}
      </Swiper>
    
    </>
  );
}

function handleClicked(id){
window.alert("hello"+id)
}

export default Products