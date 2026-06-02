import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductById } from '../features/ecommerceStore'
import StarRating from '../components/StarRating'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Container } from '@mui/material'
import Header from '../components/Header'
import RelatedItem from '../components/RelatedItem'
function ProductDetails() {
  const [value,setValue]=useState(0)
  const [indexColor,setIndexColor]=useState(0)
  const color=['red','blue','green','yellow']
  const sizes=['XS','S','M','L','XL']
     const dispatch = useDispatch()
  const { id } = useParams()
  const product = useSelector((state) => state.ecommerce.selectedProduct)
  
  console.log("id من الـ URL:", id)
  console.log("product:", product)
  console.log(window.outerWidth)
  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [id])
  if (!product) return <div>Loading...</div>
  return (
    <> 
    <Header/>
    <div className="section" style={{margin:'120px 0'}}>
      {/* start */}
      <Container fixed>
     <div className="product" style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:'70px'}}>
       <div className="imgs" style={{display:'flex',alignItems:'start',justifyContent:'start',gap:'30px'}}>
        <div className="otherimgs" style={{margin:'0',padding:'0'}}>
          {Array.from({length:4}).map((index)=>{
            return <div key={index} style={{background:'#F5F5F5',margin:'18px 10px',width:'170px',height:'138px',display:'flex',justifyContent:'center',alignItems:'center'}}><img src={product.img_url} style={{width:'121px',height:'114px',objectFit:'contain'}} alt="" /></div>
          })}
        </div>
          <div className="imgShow" style={{width:'500px',height:'600px',background:'#F5F5F5',display:'flex',justifyContent:'center',alignItems:'center'}}><img src={product.img_url} style={{height:'315px',width:'446px',objectFit:'contain'}} alt="" /></div>
      </div>

      <div className="detailsProduct" >
        <div className="title">{product.details}</div>
        <div className="stars">
        <StarRating
          fullStars={product.startNumberYellow}
          halfStars={product.numberStarmaybe}
          emptyStars={product.startNumberempty}
        />
        </div>
        <div className="salary">
          <p style={{fontSize:'24px'}}>{product.salary.toFixed(2)}$ <span style={{color:'#0000007e',fontSize:'14px'}}>({product.evaluation} Reviews)</span></p>
        </div>
        <div className="detailsAll" style={{fontSize:'15px'}}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat id mollitia vitae placeat voluptatum fuga ipsam culpa sequi eius assumenda dolores praesentium maiores, perferendis ab rem at illum repellendus sint cupiditate impedit deleniti! Necessitatibus iste nisi natus veritatis ullam? Aut maxime asperiores amet iste tempora tempore natus voluptatem reprehenderit!</p>
        </div>
        <p className="line"><hr /></p>
        <div className="colors" style={{display:'flex',alignItems:'center',gap:'5px',fontSize:'20px',marginBottom:'30px'}}>Colors: {color.map((index)=>{
          return <div  onClick={()=>{setIndexColor(index)}}   key={index}  style={{background:index,width:'20px',height:'20px',borderRadius:'50%',margin:'10px 0',border:indexColor===index?'3px solid black':'none'}}></div>
        })}</div>
        <div className="size" style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'20px',marginBottom:'30px'}}>Size: {sizes.map((index)=>{
          return <div key={index} value={value}  style={{fontSize:'15px',width:'30px',textAlign:'center',background:index==value?'#DB4444':'white',border:index==value?'none':'1px solid black'}} onClick={()=>{setValue(index)}}>{index}</div>
        })}
        </div>
        <div className="Bay" style={{display:'flex',gap:'20px',marginBottom:'40px'}}>
          <input type="number" style={{width:'100px',padding:' 5px'}} />
          <button style={{background:'#DB4444',color:'white',border:'none',width:'100px',padding:'5px'}}>Buy Now</button>
          <span style={{border:'1px solid black',padding:'5px'}}><FavoriteBorderIcon /></span>
        </div>
        <div className="otherDetailsBay">
          <div style={{border:'1px solid black',padding:'20px',width:'450px',borderBottom:'none'}}>
            <h5>Free Delivery</h5>
            <p style={{textDecoration:'underline',cursor:'pointer'}}>Enter Your Postal code for Delivery Availability</p>
          </div>
          <div style={{border:'1px solid black',padding:'20px',width:'450px'}}>
            <h5>Return Delivery</h5>
            <p >Free 30 Days Delivery Returns. <a href="#" style={{textDecoration:'underline',cursor:'pointer',color:'black'}}>Details</a></p>
          </div>
        </div>
        </div>
     </div>
     
     {/* end */}
     <div className="relatedItem">
      <RelatedItem/>
     </div>
     </Container>
    </div>
    </>
  )
}

export default ProductDetails