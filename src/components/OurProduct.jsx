import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { useState,useRef,useEffect  } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "swiper/modules";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from "react-router-dom";
import { fetchApi_OurProducts,addToCart,addToLike } from "../features/ecommerceStore";
import { useSelector,useDispatch } from "react-redux";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function OurProduct() {
            const [activeColors, setActiveColors] = useState({})


      const product=useSelector((state)=>state.ecommerce.OurProducts)
    const dispatch=useDispatch()
        useEffect(()=>{
        dispatch(fetchApi_OurProducts())
    },[dispatch])

    const handleAddToCart = async (product) => {
    dispatch(addToCart(product))

}
function handleAddToLike(product){
  dispatch(addToLike(product))
}
    const prevRef = useRef(null);
    
    const nextRef = useRef(null);

const handleColor = (productId, index) => {
  setActiveColors(prev => ({
    ...prev,
    [productId]: index 
  }))
}

    
return (
    <div className="ourProduct" >
        <div className="header">
            <div className="detailsHeader">
                <p style={{marginBottom:'20px'}}>Our Products</p>
                <h2>Explore Our Products</h2>
            </div>
             <div className="arrows">
          <button ref={prevRef}><ArrowBackIosNewIcon/></button>
          <button ref={nextRef}><ArrowForwardIosIcon/></button>
        </div>
    
    </div>
     <Swiper
        modules={[Navigation,Grid]}
        navigation
        grid={{
          rows:2,
          fill:'row',
        }}
        spaceBetween={40}
        slidesPerView={4}
        
        onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
  0: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 4,
  },
}}
        >
        {product.map((d,productIndex) => {
              const uniqueKey = `${d.id}-${productIndex}` 
                const activeIndex = activeColors[uniqueKey] ?? 0
            return  <SwiperSlide className="slide"  key={uniqueKey}>
            <div className="img" style={{background:'#F5F5F5',width:'100%',height:'250px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div onClick={()=>{handleAddToLike(d)}}> <FavoriteBorderIcon o  style={{cursor:'pointer',color:'black',position:'absolute',top:'30px',right:'25px',zIndex:'11111111111'}}/></div>
            <div><VisibilityOutlinedIcon  style={{color:'black',position:'absolute',top:'70px',right:'25px',cursor:'pointer',zIndex:'111111111111'}}  /></div>          
                <Link style={{textDecoration:'none',color:"#DB4444"}}  to={`/ProductDetails/${d.id}`}>
                <img style={{objectFit:'contain'}} src={d.img_url} alt="" />
                </Link>
                <button className='btnHide' onClick={()=>{handleAddToCart(d)}}  > add to cart</button>
            </div>
            <div className="details">
                <p>{d.details}</p>
            </div>
            <div className="salary&Star" style={{display:'flex',gap:'20px'}}>
                <p style={{color:'#DB4444'}}>$ {d.salary}</p>
                <div className="stars">
                {Array.from({length:d.startNumberYellow}).map(()=>{
                    return <StarIcon  sx={{color:'#FFAD33'}}/>
                })}
                {Array.from({length:d.startNumberempty}).map(()=>{
                    return <StarOutlineIcon/>
                })}
                {Array.from({length:d.numberStarmaybe}).map(()=>{
                    return <StarHalfIcon sx={{color:'#FFAD33'}}/>
                })}
                </div>
                <p style={{color:'#00000093'}}>({d.evaluation})</p>
            </div>
            <div className="colors" style={{display:'flex',gap:'20px',padding:'5px'}}>
                {d.colors.map((c, index) => (
                <div
                    key={index}
                    onClick={() => handleColor(uniqueKey, index)}
                    style={{
                    width: '20px',
                    height: '20px',
                    background: c === "primary" ? '#DB4444' : c,
                    borderRadius: '50%',
                    outline: activeIndex === index ? '1px solid black' : 'none',
                    outlineOffset: '3px',
                    cursor: 'pointer'
                    }}
                ></div>
                ))}
            </div>
          </SwiperSlide>
        })}
    </Swiper>
    <div style={{textAlign:'center'}}> 
        <Link to={'/showAll'} style={{textDecoration:'none'}}>
        <button style={{width:'234px',height:'56',padding:'16px 48px',background:'#DB4444',border:'none',color:'white',textAlign:'center',marginTop:'30px'}}>View All Products</button>
        </Link>           
    </div>
    </div>
    
)
}

export default OurProduct