import React from 'react'
import { useContext } from 'react';
import { WishlistContext } from '../context/WishListContext';
import Header from '../components/Header'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Container from '@mui/material/Container';
import { ForYou } from '../assets/assets';
import DeleteIcon from '@mui/icons-material/Delete';
// 
function Wishlist() {
  const { wishlist } = useContext(WishlistContext);
  console.log(wishlist)
  return (
    <div className='SectionWishlist'>
      <Header/>
      <Container fixed>
        <div className="Wishlist " style={{margin:'100px 0'}}>
          <div className="title" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'60px'}}>
            <h1 style={{fontSize:'20px'}}>Wishlist ({wishlist.length})</h1>
            <Link to={'/showAll'}>
          <button style={{padding:'16px 48px',background:'none',border:'1px solid black',borderRadius:'5px'}} disabled={wishlist.length==0?true:false}>Move All To Bag</button>
          </Link>
          </div>
          <div className="content" style={{display:'grid',gridTemplateColumns:`repeat(${wishlist.length},1fr)`,gap:'10px'}}>
            {wishlist.length==0?<h1 style={{textAlign:'center'}}>empty</h1>:wishlist.map((data)=>{
            return <div key={data.id}>
              <div className="img" style={{background:'#F5F5F5',width:'270px',height:'250px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                <DeleteIcon style={{position:'absolute',top:'10px',right:'20px',cursor:'pointer'}} />
                  {data.salary==0?'':<p style={{ position: 'absolute',top:'10px',left:'20px',background:'#DB4444',color:'white',height:'26px',width:'55px',textAlign:'center',borderRadius:'5px' }} >-${(((data.salary - data.salaryOffer) / data.salary) * 100).toFixed(0)}%</p>}
                  {data.salaryOffer===560?<p style={{ position: 'absolute',top:'10px',left:'20px',background:'#00FF66',color:'white',height:'26px',width:'55px',textAlign:'center',borderRadius:'5px' }} >New</p>:''}
                <img  style={{objectFit:'contain'}} src={data.img} alt="" />
                <p style={{cursor:'pointer',position:'absolute',bottom:'0',background:'black',color:'white',width:'100%',textAlign:'center',borderEndEndRadius:'5px',borderEndStartRadius:'5px',height:'31px'}}>Add To Cart</p>
              </div>
              <div className="details">
                <p style={{marginTop:'15px'}}>{data.name}</p>
                <div className="salary" style={{display:'flex',gap:'20px'}}>
                  <p style={{color:'#DB4444'}}>${data.salaryOffer}</p>
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
          })}
          </div>
        </div>
        {/*  */}
        <div className="ForYou" style={{margin:'100px 0'}} >
          <div className="title" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'60px'}}>
            <h1 style={{fontSize:'20px'}}>Just For You</h1>
            <Link to={'/showAll'}>
          <button style={{height:'56px',width:'150px',background:'none',border:'1px solid black',borderRadius:'5px'}}>See All</button>
          </Link>
          </div>
          <div className="content" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}} >
            {ForYou.map((data)=>{
            return <div key={data.id}>
              <div className="img" style={{background:'#F5F5F5',width:'270px',height:'250px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                <VisibilityIcon style={{position:'absolute',top:'10px',right:'20px',cursor:'pointer'}} />
                  {data.salary==0?'':<p style={{ position: 'absolute',top:'10px',left:'20px',background:'#DB4444',color:'white',height:'26px',width:'55px',textAlign:'center',borderRadius:'5px' }} >-${(((data.salary - data.salaryOffer) / data.salary) * 100).toFixed(0)}%</p>}
                  {data.salaryOffer===560?<p style={{ position: 'absolute',top:'10px',left:'20px',background:'#00FF66',color:'white',height:'26px',width:'55px',textAlign:'center',borderRadius:'5px' }} >New</p>:''}
                <img  style={{objectFit:'contain'}} src={data.img} alt="" />
                <p style={{cursor:'pointer',position:'absolute',bottom:'0',background:'black',color:'white',width:'100%',textAlign:'center',borderEndEndRadius:'5px',borderEndStartRadius:'5px',height:'31px'}}>Add To Cart</p>
              </div>
              <div className="details">
                <p style={{marginTop:'15px'}}>{data.name}</p>
                <div className="salary" style={{display:'flex',gap:'20px'}}>
                  <p style={{color:'#DB4444'}}>${data.salaryOffer}</p>
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
          })}
          </div>
         
        </div>
      </Container>
    </div>
  )
}

export default Wishlist