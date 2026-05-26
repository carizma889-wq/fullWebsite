import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FreeMode,Navigation  } from 'swiper/modules';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,addToLike } from '../features/ecommerceStore';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityIcon from '@mui/icons-material/Visibility';
function Products({PRODUCTS_CAROUSEL,prevRef,nextRef}) {
  const data=useSelector((state)=>state.ecommerce.cartItems)
  const dispatch=useDispatch()
 const handleAddToCart = async (product) => {
    dispatch(addToCart(product))

}
function handleAddToLike(product){
  dispatch(addToLike(product))
}
 return (

      <Swiper
         spaceBetween={20}
          breakpoints={{
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
onSwiper={(swiper) => {
    setTimeout(() => {
    if (swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  });
  }}
        loop={data.length >= 4}
        loopAdditionalSlides={4}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper myProducts"
      >
       {PRODUCTS_CAROUSEL.map((data)=>(
         <SwiperSlide key={data.id} className='item'  >
           
            <div  className="BoxImg" >
              <div onClick={()=>{handleAddToLike(data)}}><FavoriteBorderIcon   style={{cursor:'pointer',color:'black',position:'absolute',top:'30px',right:'25px',zIndex:'11111111111'}}  /></div>
              <div><VisibilityOutlinedIcon  style={{color:'black',position:'absolute',top:'70px',right:'25px',cursor:'pointer',zIndex:'111111111111'}}  /></div>
           <Link style={{textDecoration:'none',color:"#DB4444"}}  to={`/ProductDetails/${data.id}`}>
                <img className='img' src={`${data.img_url}`} alt="" />
                 </Link>
                <button className='btnHide' onClick={()=>{handleAddToCart(data)}}  > add to cart</button>
            </div>
            <div className="details">
              <p>{data.details}</p>
              <div className="price">
                <span>${data.salaryOffer}</span> <span>${data.salary}</span>

               <div className="stars">
                {Array.from({ length: data.startNumberYellow }).map((_, index) => {
                  return <StarIcon key={index} sx={{ color: '#FFAD33' }} />
                })}
                {Array.from({length:data.startNumberempty}).map(()=>{
                  return <StarOutlineIcon sx={{color:'#FFAD33'}}/>
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
  );
  
}



export default Products