import "swiper/css";
import "swiper/css/navigation";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from "react-router-dom";
import {useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { fetchApi_Best_Selling_Products,addToCart,addToLike } from "../features/ecommerceStore";
import { useSelector,useDispatch } from "react-redux";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function BestProducts() {
  const product=useSelector((state)=>state.ecommerce.BEST_SELLING_PRODUCTS)
    const dispatch=useDispatch()

     const handleAddToCart = async (product) => {
    dispatch(addToCart(product))

}
function handleAddToLike(product){
  dispatch(addToLike(product))
}
        useEffect(()=>{
        dispatch(fetchApi_Best_Selling_Products())
    },[dispatch])

  return (
    <div className="BestProductsSection">
      <div className="header">
        <div className="detailsHeader">
            <p style={{marginBottom:'20px'}}>This Month</p>
            <h2>Best Selling Products</h2>
        </div>
        <Link style={{textDecoration:'none'}} to={'/showAll'}>
        <button className="btnView">View All</button>
        </Link>
      </div>
      <div className="BestProduct" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}} >
          {product.map((data)=>(
        <div key={data.id}>
          <div  className="img" style={{background:'#F5F5F5',width:'270px',height:'250px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
            <div onClick={()=>{handleAddToLike(data)}}> <FavoriteBorderIcon o  style={{cursor:'pointer',color:'black',position:'absolute',top:'30px',right:'25px',zIndex:'11111111111'}}/></div>
            <div><VisibilityOutlinedIcon  style={{color:'black',position:'absolute',top:'70px',right:'25px',cursor:'pointer',zIndex:'111111111111'}}  /></div>          
              <Link style={{textDecoration:'none',color:"#DB4444"}}  to={`/ProductDetails/${data.id}`}>
            <img className='img'  src={data.img_url} alt="" />
            </Link>
            <button className='btnHide' onClick={()=>{handleAddToCart(data)}}  > add to cart</button>
          </div>
          <div className="details">
            <p style={{marginTop:'15px'}}>{data.details}</p>
            <div className="salary" style={{display:'flex',gap:'20px'}}>
              <p  style={{color:'#DB4444'}}>${data.salaryOffer}</p>
              <p style={{color:'#000000a1',textDecoration:'line-through'}}>${data.salary}</p>
            </div>
            <div className="stars">
              {Array.from({length:data.startNumberYellow}).map(()=>{
                return <StarIcon  sx={{color:'#FFAD33'}}/>
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
      ))}
      </div>
    </div>
  )
}

export default BestProducts