import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import {useEffect } from "react";
import { fetchApi_Best_Selling_Products,addToCart,addToLike } from "../features/ecommerceStore";
import { useSelector,useDispatch } from "react-redux";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRating from "./StarRating";
function RelatedItem() {
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
        <div className="detailsHeader" style={{marginTop:'20px'}}>
            <p style={{}}>Related Item</p>
        </div>
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
            <StarRating
              fullStars={data.startNumberYellow}
              halfStars={data.numberStarmaybe}
              emptyStars={data.startNumberempty}
            />
              </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default RelatedItem