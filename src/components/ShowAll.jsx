import Header from './Header'
import { showAllProduct } from '../assets/assets'
import { Container } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function ShowAll() {
  
  
  return (
    <div>
        <Header/>
        <Container fixed>
        <div className="show_product" style={{width:"100%",height:"100%",display:'grid', gridTemplateColumns:'repeat(3, 1fr)',gap:'30px'}}>
            {showAllProduct.map((data)=>{
                return <div key={data.id} className='itemShow' style={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column',}}>
                  <div  className="BoxImg"  >
                <img className='img'  src={data.img} alt="" />
                <button className='btnHide' > add to card</button>
            </div>
            <div className="details">
              <p>{data.title}</p>
              <div className="price">
                <span>${data.salaryOffer}</span> <span>${data.salary}</span>

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
                </div>
            })}
        </div>
            </Container>
    </div>
  )
}

export default ShowAll