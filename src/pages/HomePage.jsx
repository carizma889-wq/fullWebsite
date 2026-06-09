import Header from '../components/Header'
import HeroSection from '../components/HeroSection';
import Container from '@mui/material/Container';
import FlashSalesSection from '../components/FlashSalesSection';
import Category from '../components/Category';
import BestProducts from '../components/BestProducts';
import Categories from '../components/Categories';
import OurProduct from '../components/OurProduct';
import Featured from '../components/Featured';
function HomePage() {

  return (
    <div >
      <Header />
      <Container fixed>
        <HeroSection/>  {/*done*/}
        <FlashSalesSection/>    {/*done*/}
          <Category/> {/*done*/}
          <BestProducts/>  {/*done*/}
          <Categories/> {/*done*/}
          <OurProduct/>  {/*done*/}
          <Featured/>  {/*done*/}
        </Container>
    </div>
  )
}

export default HomePage