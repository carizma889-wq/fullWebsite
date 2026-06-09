import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector,useDispatch } from "react-redux";
import { fetchApi_Products_Carousel } from "../features/ecommerceStore";
import {useRef , useEffect,useState } from "react";
import Products from './Products';
import { Link } from 'react-router-dom';

const FLASH_SALE_END = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) 

function FlashSalesSection() {
    //--- Refs ---
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    //--- Redux ---
    const product=useSelector((state)=>state.ecommerce.products)
    const dispatch=useDispatch()

    //--- Countdown State ---
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    
    // --- Effects ---
    useEffect(()=>{
        dispatch(fetchApi_Products_Carousel())
    },[dispatch])

    useEffect(() => {
            const timer = setInterval(() => {
                const diff = FLASH_SALE_END - Date.now()
                if (diff <= 0) return clearInterval(timer)
                    
                setTimeLeft({
                    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / (1000 * 60)) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                })
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  const showTime=[
                { label: 'Days',    value: timeLeft.days,className:'days' },
                { label: 'Hours',   value: timeLeft.hours ,className:'Hours' },
                { label: 'Minutes', value: timeLeft.minutes ,className:'Minutes' },
            ]
  return (
    <div className="FlashSalesSection" >
        <div className="sectionName">
            <p className="title">Today’s</p>
            <div className="details" >
                <div className="NameAndNumbers">
                    <h1 className="name">Flash Sales</h1>
                    <div className="numbers">
                        {showTime.map(({ label, value,className }) => (
                <div key={label} className={className}>
                  <span>{label}</span>
                  <span className="number">
                    {String(value).padStart(2, '0')}
                  </span>
                </div>
              ))}
                    </div>
                </div>
                {/* end name  */}
                <div className="arrows">
                    <button ref={prevRef}><ArrowBackIosNewIcon/></button>
                    <button ref={nextRef}><ArrowForwardIosIcon/></button>
                </div>
            </div>
        </div>
        {/* end  */}
        <div className="products">
            <Products   PRODUCTS_CAROUSEL={product} nextRef={nextRef} prevRef={prevRef} />
        </div>
       <div className="btns">
        <Link to={'/ShowAll'}>
         <button className='btn'>View All Products</button>
        </Link>
       </div>
    </div>
  )
}

export default FlashSalesSection