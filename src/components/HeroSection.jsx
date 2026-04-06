import { SIDEBAR_LINKS } from "../assets/assets"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import required modules
import Carousel from "./Carousel"
function HeroSection() {
  let showSIDEBAR_LINKS=SIDEBAR_LINKS.map((data)=>(
    <div key={data.id} className="sidebarContent">
      <li className="item">{data.title}</li><span >{data.isCollapse==true?<ArrowForwardIosIcon className="arrowRight" />:''}</span>
    </div>
  ))
  return (
    <div className="heroSection">
        <ul className="sidebar">
        {showSIDEBAR_LINKS}
        </ul>
      <div className="carousel">
        <Carousel/>
      </div>
    </div>
  )
}

export default HeroSection