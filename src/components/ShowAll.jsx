import Header from './Header'
import { Container } from '@mui/material'
import { useEffect  } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { fetchShowAll } from '../features/ecommerceStore';
import StarRating from './StarRating'
function ShowAll() {
   const data=useSelector((state)=>state.ecommerce.showAll)
     const dispatch=useDispatch()
         useEffect(()=>{
         dispatch(fetchShowAll())
     },[dispatch,data])
  return (
      <div>
        <Header/>
        <Container fixed>
        <div className="show_product" >
            {data.map((data)=>{
                return <div key={data.id} className='itemShow' style={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column',}}>
                  <div  className="BoxImg"  >
                <img className='img'  src={data.img_url} alt="" />
                <button className='btnHide' > add to card</button>
            </div>
            <div className="details">
              <p>{data.details}</p>
              <div className="price">
                <span>${data.salaryOffer}</span> <span>${data.salary}</span>
                <div className="stars">
                      <StarRating
                        fullStars={data.startNumberYellow}
                        halfStars={data.numberStarmaybe}
                        emptyStars={data.startNumberempty}
                      />
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