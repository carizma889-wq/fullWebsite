import "swiper/css";
import "swiper/css/navigation";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from "react-router-dom";
import { useContext,useEffect } from "react";
import { WishlistContext } from "../context/WishListContext";
import { CartContext } from "../context/CartContext";

import { fetchApi } from "../features/ecommerceStore";
import { useSelector,useDispatch } from "react-redux";
function BestProducts() {
  const product=useSelector((state)=>state.ecommerce.products)
    const dispatch=useDispatch()
        useEffect(()=>{
        console.log('redux fetching')
        dispatch(fetchApi())
    },[dispatch])
  
  const { toggleWishlist } = useContext(WishlistContext);
  const {toggleCart} =useContext(CartContext)
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
          <div onClick={() => toggleWishlist(data)} className="img" style={{background:'#F5F5F5',width:'270px',height:'250px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img  style={{objectFit:'contain'}} src={data.img_url} alt="" />
          </div>
          <div className="details">
            <p style={{marginTop:'15px'}}>{data.details}</p>
            <div className="salary" style={{display:'flex',gap:'20px'}}>
              <p onClick={() => toggleCart(data)} style={{color:'#DB4444'}}>${data.salaryOffer}</p>
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