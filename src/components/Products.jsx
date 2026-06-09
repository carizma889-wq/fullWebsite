import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FreeMode,Navigation  } from 'swiper/modules';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,addToLike } from '../features/ecommerceStore';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import StarRating from './StarRating';
function Products({PRODUCTS_CAROUSEL,prevRef,nextRef}) {
  // --- Redux ---
  const products =useSelector((state)=>state.ecommerce.products)
  const dispatch=useDispatch()
  
  // --- Handlers ---
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
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  });
}}
        loop={false}
        loopAdditionalSlides={4}
        freeMode={false}
        modules={[ Navigation]}
        className="mySwiper myProducts"
      >
       {PRODUCTS_CAROUSEL.map((product)=>(
         <SwiperSlide key={product.id} className='item'  >
            <div  className="BoxImg" >
              <div className='like' onClick={()=>{handleAddToLike(product)}}><FavoriteBorderIcon className='iconLike'  /></div>
              <div className='watch'><VisibilityOutlinedIcon className='iconWatch'  /></div>
              <Link className='linkProduct' to={`/ProductDetails/${product.id}`}>
                <img className='img' src={`${product.img_url}`} alt="" />
              </Link>
                <button className='btnHide' onClick={()=>{handleAddToCart(product)}}  > add to cart</button>
            </div>
            <div className="details">
              <p>{product.details}</p>
                <div className="price">
                <span>${product.salaryOffer}</span> <span>${product.salary}</span>
            </div>
            <StarRating
              fullStars={product.startNumberYellow}
              halfStars={product.numberStarmaybe}
              emptyStars={product.startNumberempty}
            />
            </div>
        </SwiperSlide>
       ))}
      </Swiper>
  );
  
}



export default Products