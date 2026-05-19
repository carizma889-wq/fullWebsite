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
import { fetchApi } from "../features/ecommerceStore";
import { useSelector,useDispatch } from "react-redux";
function OurProduct() {
        const [activeColors,SetActiveColors]=useState({})

      const product=useSelector((state)=>state.ecommerce.products)
    const dispatch=useDispatch()
        useEffect(()=>{
        console.log('redux fetching')
        dispatch(fetchApi())
    },[dispatch])

   
    const prevRef = useRef(null);
    
    const nextRef = useRef(null);
    
return (
    <div className="" >
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
        0:     {slidesPerView: 1},
        480:   {slidesPerView: 3},
        768:   {slidesPerView: 4},
        1024:  {slidesPerView: 4},
        }}
        >
        {product.map((d) => {
            const activeIndex=activeColors[d.id]??0;
            return  <SwiperSlide  key={d.id}>
            <div className="img" style={{background:'#F5F5F5',width:'270px',height:'250px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img style={{objectFit:'contain'}} src={d.img_url} alt="" />
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
                
                {d.color?.map((c,index)=>(
                    <p  style={{width:'20px',height:'20px',background:c=="primary"?'#DB4444':c,borderRadius:'50%',outline:activeIndex?'1px solid black':'none',outlineOffset:'3px'}} className={activeIndex===index?'active':'none'} onClick={()=>{handle(d.id,index)}} ></p>
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
function handle(productId,index){
        SetActiveColors(prev=>({
            ...prev,
            [productId]:index
        }))
    }
}

export default OurProduct