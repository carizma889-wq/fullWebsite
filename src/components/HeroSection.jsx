import { SIDEBAR_LINKS } from "../assets/assets"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import required modules
import Carousel from "./Carousel"
function HeroSection() {
   
  return (
    <div className="heroSection">
        <ul className="sidebar">
          {
            SIDEBAR_LINKS.map((category )=>(
              <div key={category .id} className="sidebarContent">
                <li className="item">{category .title}
                </li>
                <span >{category .isCollapse===true?<ArrowForwardIosIcon className="arrowRight" />:''}
                </span>
              </div>
            ))
          }
        </ul>
      <div className="carousel">
        <Carousel/>
      </div>
    </div>
  )
}

export default HeroSection