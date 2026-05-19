import { CATEGORIES } from "../assets/assets"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState,useRef  } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Category() {
    const [active, setActive] = useState(CATEGORIES[3].id);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <div className="categorySection">
      
      <div className="header">
        <div className="detailsHeader">
            <p>Categories</p>
            <h2>Browse By Category</h2>
        </div>

        <div className="arrows">
          <button ref={prevRef}><ArrowBackIosNewIcon/></button>
          <button ref={nextRef}><ArrowForwardIosIcon/></button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        
        spaceBetween={20}
        slidesPerView={6}
        
          onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1},
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6},
        }}
      >
        {CATEGORIES.map((cat) => (
          <SwiperSlide  key={cat.id}>
            <div className={`categoryCard ${active === cat.id ? "active" : ""}`} onClick={() => setActive(cat.id)}>
              <span className="icon">{cat.icon}</span>
              <p >{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Category