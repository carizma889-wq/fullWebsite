import { Swiper, SwiperSlide } from 'swiper/react';
import Frame from '/img/Frame.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Carousel() {
  return (
     <Swiper pagination={{ clickable: true }} loop={true}  modules={[Pagination]} className="mySwiper">
           <SwiperSlide  style={{background:'black'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'white'}}>
           <div style={{marginLeft:'50px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start',textAlign:'center'}}>
             <h1  style={{alignItems:'center',gap:"10px",display:'flex',justifyContent:'center'}}><img src="/img/iconIphone.png" alt="" style={{fontSize:'18px'}} /> <span style={{fontSize:'15px'}}>iPhone 14 Series</span></h1>
            <h1 >Up to 10% </h1>
            <h1>off Voucher</h1>
            <div className="text" style={{cursor:'pointer',borderBottom:'1px solid white'}}>
            <p style={{display:'inline'}}>Shop Now</p> <span style={{marginLeft:'5px'}}><ArrowForwardIcon/></span>
            </div>
           </div>
          <img src={Frame} alt="" />
          </div>
          </SwiperSlide>
          <SwiperSlide  style={{background:'black'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'white'}}>
           <div style={{marginLeft:'50px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start',textAlign:'center'}}>
             <h1  style={{alignItems:'center',gap:"10px",display:'flex',justifyContent:'center'}}><img src="/img/iconIphone.png" alt="" style={{fontSize:'18px'}} /> <span style={{fontSize:'15px'}}>iPhone 14 Series</span></h1>
            <h1 >Up to 10% </h1>
            <h1>off Voucher</h1>
            <div className="text" style={{cursor:'pointer',borderBottom:'1px solid white'}}>
            <p style={{display:'inline'}}>Shop Now</p> <span style={{marginLeft:'5px'}}><ArrowForwardIcon/></span>
            </div>
           </div>
          <div >
            <img src={Frame} alt="" />
          </div>
          </div>
          </SwiperSlide>
           <SwiperSlide  style={{background:'black'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'white'}}>
           <div style={{marginLeft:'50px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start',textAlign:'center'}}>
             <h1  style={{alignItems:'center',gap:"10px",display:'flex',justifyContent:'center'}}><img src="/img/iconIphone.png" alt="" style={{fontSize:'18px'}} /> <span style={{fontSize:'15px'}}>iPhone 14 Series</span></h1>
            <h1 >Up to 10% </h1>
            <h1>off Voucher</h1>
            <div className="text" style={{cursor:'pointer',borderBottom:'1px solid white'}}>
            <p style={{display:'inline'}}>Shop Now</p> <span style={{marginLeft:'5px'}}><ArrowForwardIcon/></span>
            </div>
           </div>
          <img src={Frame} alt="" />
          </div>
          </SwiperSlide>
           <SwiperSlide  style={{background:'black'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'white'}}>
           <div style={{marginLeft:'50px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start',textAlign:'center'}}>
             <h1  style={{alignItems:'center',gap:"10px",display:'flex',justifyContent:'center'}}><img src="/img/iconIphone.png" alt="" style={{fontSize:'18px'}} /> <span style={{fontSize:'15px'}}>iPhone 14 Series</span></h1>
            <h1 >Up to 10% </h1>
            <h1>off Voucher</h1>
            <div className="text" style={{cursor:'pointer',borderBottom:'1px solid white'}}>
            <p style={{display:'inline'}}>Shop Now</p> <span style={{marginLeft:'5px'}}><ArrowForwardIcon/></span>
            </div>
           </div>
          <img src={Frame} alt="" />
          </div>
          </SwiperSlide>
           <SwiperSlide  style={{background:'black'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'white'}}>
           <div style={{marginLeft:'50px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start',textAlign:'center'}}>
             <h1  style={{alignItems:'center',gap:"10px",display:'flex',justifyContent:'center'}}><img src="/img/iconIphone.png" alt="" style={{fontSize:'18px'}} /> <span style={{fontSize:'15px'}}>iPhone 14 Series</span></h1>
            <h1 >Up to 10% </h1>
            <h1>off Voucher</h1>
            <div className="text" style={{cursor:'pointer',borderBottom:'1px solid white'}}>
            <p style={{display:'inline'}}>Shop Now</p> <span style={{marginLeft:'5px'}}><ArrowForwardIcon/></span>
            </div>
           </div>
          <img src={Frame} alt="" />
          </div>
          </SwiperSlide>
      </Swiper>
  )
}

export default Carousel