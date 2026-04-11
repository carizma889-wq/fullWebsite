import Header from '../components/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSection from '../components/HeroSection';
import Container from '@mui/material/Container';
import FlashSalesSection from '../components/FlashSalesSection';
import Category from '../components/Category';
import BestProducts from '../components/BestProducts';
import Categories from '../components/Categories';

function HomePage() {
  return (
    <div >
      <Header />
      <Container fixed>
        <HeroSection/>
      </Container>
        <FlashSalesSection/>
        <Container fixed>
          <Category/>
          <BestProducts/>
          <Categories/>
        </Container>
    </div>
  )
}

export default HomePage