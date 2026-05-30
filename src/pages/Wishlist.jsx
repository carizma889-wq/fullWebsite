import Header from '../components/Header'
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Container from '@mui/material/Container';
import { ForYou } from '../assets/assets';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { addToCart,fetchWishlistItems,deleteWishlistItems,fetchJustForYou } from '../features/ecommerceStore';
import { useDispatch,useSelector } from 'react-redux';
import StarRating from '../components/StarRating';
function Wishlist() {

  // --- Redux ---

const dispatch=useDispatch()
const wishlistItems=useSelector((state)=>state.ecommerce.wishlistItem);
const justForYou =useSelector((state)=>state.ecommerce.justForYou);

  // --- Effects ---
useEffect(()=>{
  dispatch(fetchWishlistItems())
  dispatch(fetchJustForYou())
},[dispatch])

  // --- Handlers  ---
    function handleDeleteItem(itemId) {
    dispatch(deleteWishlistItems(itemId))
  }

const moveAllToBag = () => {
  wishlistItems.forEach((item) => dispatch(addToCart(item)))
}

function handleAddToCart(item){
  dispatch(addToCart(item))
}


// --- Helpers ---
function getDiscountPercent(original, offer) {
  if (!original || original === 0) return null
  if (!offer || offer === 0) return null  // ✅ لو السعر بعد الخصم صفر مش هنحسب
  return (((original - offer) / original) * 100).toFixed(0)
}


  return (
    <div className='SectionWishlist'>
      <Header/>
      <Container fixed>
        {/* ===== Wishlist Section ===== */}
        <div className="Wishlist " style={{margin:'100px 0'}}>
          <div className="title" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'60px'}}>
            <h1 style={{fontSize:'20px'}}>Wishlist ({wishlistItems.length})</h1>
          <button style={{padding:'16px 48px',background:'none',border:'1px solid black',borderRadius:'5px'}} onClick={()=>{moveAllToBag(wishlistItems)}} >Move All To Bag</button>
          </div>
          <div className="content" style={{display:'grid',gridTemplateColumns:`repeat(3,1fr)`,gap:'15px',margin:'0 auto'}}>
            {wishlistItems.length==0?<h1 style={{textAlign:'center'}}>empty</h1>:wishlistItems.map((data)=>{
              const product=data.PRODUCTS
              const discount=getDiscountPercent(
                product.salary,
                product.salaryOffer,
              )
            return <div key={data.id}>
              <div className="img" style={{background:'#F5F5F5',width:'270px',height:'250px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                <DeleteIcon style={{position:'absolute',top:'10px',right:'20px',cursor:'pointer'}} onClick={()=>{handleDeleteItem(data.id)}} />
                  {discount && (
                        <span style={{ position: 'absolute',top:'10px',left:'20px',background:'#DB4444',color:'white',height:'26px',width:'55px',textAlign:'center',borderRadius:'5px' }} className="badgeDiscount">-{discount}%</span>
                      )}
                  {product.isNew && (
                        <span style={{ position: 'absolute',top:'10px',left:'20px',background:'#00FF66',color:'white',height:'26px',width:'55px',textAlign:'center',borderRadius:'5px' }} className="badgeNew">New</span>
                      )}
                <img  style={{objectFit:'contain'}} src={data.PRODUCTS.img_url} alt="" />
                <p style={{cursor:'pointer',position:'absolute',bottom:'0',background:'black',color:'white',width:'100%',textAlign:'center',borderEndEndRadius:'5px',borderEndStartRadius:'5px',height:'31px'}}>Add To Cart</p>
              </div>
              <div className="details">
                <p style={{marginTop:'15px'}}>{data.PRODUCTS.details}</p>
                <div className="salary" style={{display:'flex',gap:'20px'}}>
                
                  <p style={{color:'#DB4444'}}>${product.salary}</p>
                  <p style={{color:'#000000a1',textDecoration:'line-through'}}>${product.salaryOffer}</p>
                </div>
              </div>
            </div>
          })}
          </div>
        </div>
        {/* ===== Just For You Section ===== */}
        <div className="ForYou" style={{margin:'100px 0'}} >
          <div className="title" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'60px'}}>
            <h1 style={{fontSize:'20px'}}>Just For You</h1>
            <Link to={'/showAll'}>
          <button style={{height:'56px',width:'150px',background:'none',border:'1px solid black',borderRadius:'5px'}}>See All</button>
          </Link>
          </div>
          <div className="content" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}} >
            {justForYou.map((data)=>{
              const discount = getDiscountPercent(
                  data.salary,
                  data.salaryOffer
                )
            return <div key={data.id}>
              <div className="img" style={{background:'#F5F5F5',width:'270px',height:'250px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                <VisibilityIcon style={{position:'absolute',top:'10px',right:'20px',cursor:'pointer'}} />
                {discount && (
                        <span style={{ position: 'absolute',top:'10px',left:'20px',background:'#DB4444',color:'white',height:'26px',width:'55px',textAlign:'center',borderRadius:'5px' }} className="badgeDiscount">-{discount}%</span>
                )}
                  {data.salaryOffer===0 && (
                        <span style={{ position: 'absolute',top:'10px',left:'20px',background:'#00FF66',color:'white',height:'26px',width:'55px',textAlign:'center',borderRadius:'5px' }} className="badgeNew">New</span>
                      )}

                <img  style={{objectFit:'contain'}} src={data.img_url} alt="" />
                <p onClick={()=>{handleAddToCart(data)}} style={{cursor:'pointer',position:'absolute',bottom:'0',background:'black',color:'white',width:'100%',textAlign:'center',borderEndEndRadius:'5px',borderEndStartRadius:'5px',height:'31px'}}>Add To Cart</p>
              </div>
              <div className="details">
                <p style={{marginTop:'15px'}}>{data.name}</p>
                <div className="salary" style={{display:'flex',gap:'20px'}}>
                  <p style={{color:'#DB4444'}}>${data.salary}</p>
                  <p style={{color:'#000000a1',textDecoration:'line-through'}}>${data.salaryOffer}</p>
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
          })}
          </div>
         
        </div>
      </Container>
    </div>
  )
}

export default Wishlist