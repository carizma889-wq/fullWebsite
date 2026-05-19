import { Route ,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./pages/layout"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Account from './pages/Account';
import CheckOut from "./pages/CheckOut"
import Contact from "./pages/Contact"
import LogIn from "./pages/LogIn"
import NotFound from "./pages/NotFound"
import ProductDetails from "./pages/ProductDetails"
import SignUp from "./pages/SignUp"
import ShowAll from "./components/showAll"
import Wishlist from "./pages/Wishlist"
import User from "./pages/User"
import './App.css'
function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="SignUp"   element={<SignUp/>}/>   
          <Route path="/LogIn" element={<LogIn/>}/>   
          <Route index element={<HomePage />} />  
          <Route path="/About" element={<About/>}/>   
          <Route path="/showAll" element={<ShowAll/>}/>
          <Route path="/Content" element={<Contact/>}/>   
          <Route path="/Cart" element={<Cart/>}/>   
          <Route path="/Account" element={<Account/>}/>   
          <Route path="/CheckOut" element={<CheckOut/>}/>   
          <Route path="*" element={<NotFound/>}/>   
          <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>   
          <Route path="/Wishlist" element={<Wishlist/>}/>   
          <Route path='/User' element={<User/>}/>
        </Route>
      </Routes>
  )
}

export default App