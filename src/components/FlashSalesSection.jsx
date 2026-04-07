import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Products from './Products';
import { PRODUCTS_CAROUSEL } from '../assets/assets';
function FlashSalesSection() {
  return (
    <div className="FlashSalesSection">
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
                    <div className="left"><ArrowCircleLeftOutlinedIcon className='arrow'/></div>
                    <div className="right"><ArrowCircleRightOutlinedIcon className='arrow'/></div>
                </div>
            </div>
        </div>
        {/* end  */}
        <div className="products">
            <Products PRODUCTS_CAROUSEL={PRODUCTS_CAROUSEL} />
        </div>
    </div>
  )
}

export default FlashSalesSection