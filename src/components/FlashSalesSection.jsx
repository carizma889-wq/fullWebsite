import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useRef , useEffect,useState } from "react";
import supabase from '../../supabase'
import Products from './Products';
import { Link } from 'react-router-dom';


function FlashSalesSection() {
    const [data, setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const { data, error } = await supabase
    .from("PRODUCTS")
    .select("*")
    .eq("category", "PRODUCTS_CAROUSEL");
    if (error) {
        console.log(error);
    } else {
    console.log(data)
    setData(data)
    }
        }
        fetchData()
    },[])
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <div className="FlashSalesSection" >
        <div className="sectionName">
            <p className="title">Today’s</p>
            <div className="details" >
                <div className="NameAndNumbers">
                    <h1 className="name">Flash Sales</h1>
                    <div className="numbers">
                        <div className="days">
                            <span>Days</span>
                            <span className="number">03</span>
                        </div>
                        <div className="Hours">
                            <span>Hours</span>
                            <span className="number">23</span>
                        </div>
                        <div className="Minutes">
                            <span>Minutes</span>
                            <span className="number">19</span>
                        </div>
                        <div className="Seconds">
                            <span>Seconds</span>
                            <span className="number">56</span>
                        </div>
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
            <Products   PRODUCTS_CAROUSEL={data} nextRef={nextRef} prevRef={prevRef} />
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