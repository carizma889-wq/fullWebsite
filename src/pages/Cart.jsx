import Header  from '../components/Header'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
const titleList=['Product','Price','Quantity','Subtotal']
import ListCart from '../components/ListCart'
import CheckOut from './CheckOut'
function Cart() {
  const {Cart}=useContext(CartContext)
  console.log(Cart)
  const show=titleList.map((d,i)=>{
    return (
      <>
      <li key={i}>{d}</li>
      </>
    )
    
  })

  
  return (
  <>
  <Header/>
  <div className="mainCart">
     <Container fixed>
    <div  className='Link' >
      <Link to={'/Home'} className='LinkHome' ><span>Home  / </span> </Link>
      <Link to={'/Cart'} className='LinkCart' ><span> Cart</span></Link>
    </div>
    <ul className='ListCart' style={{marginTop:'100px',listStyle:'none',display:'grid',gridTemplateColumns:'repeat(4,1fr)',textAlign:'center'}}>
      {show}
      
    </ul >
    <ul style={{display:'flex',listStyle:'none',flexDirection:'column',gap:'10px'}}>
      {Cart.map((data)=>{
        return <ListCart  data={data} key={data.id}/>
      })}
    </ul>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0 100px',marginTop:'50px'}}>
      <button style={{border:'1px solid black',cursor:'pointer',padding:'16px 48px',background:'none'}}>Return To Shop</button>
      <button style={{border:'1px solid black',cursor:'pointer',padding:'16px 48px',background:'none'}} >Update Cart</button>
    </div>
    <div style={{marginTop:'80px',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
      <div className="inputs">
        <input type="text" style={{height:'56px',width:'300px',border:'1px solid black',marginRight:'20px'}} name="" id="" placeholder='Coupon Code' />
        <button style={{background:'#DB4444',color:'white',padding:'16px 48px',cursor:'pointer',border:'0'}}>Apply Coupon</button>
      </div>
      <div className="boxDetails" style={{width:'470px',flexDirection:'row',border:'2px solid black'}}>
        <h3 style={{margin:"15px 0px 15px 15px"}}>Cart Total</h3>
        <ul style={{display:'flex',listStyle:'none',flexDirection:'column',margin:'0 30px',padding:'0'}}>
          <li style={{width:'100%',margin:'20px 0',height:'20px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0',marginLeft:'0',borderBottom:'1px solid',paddingBottom:'20px'}}>
            <p>Subtotal:</p>
            <p>$1750</p>
          </li>
          <li style={{width:'100%',margin:'20px 0',height:'20px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0',marginLeft:'0',borderBottom:'1px solid',paddingBottom:'20px'}}>
            <p>Shipping:</p>
            <p>Free</p>
          </li> 
          <li style={{width:'100%',margin:'20px 0',height:'20px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0',marginLeft:'0'}}>
            <p>Total:</p>
            <p>$1750</p>
          </li>
        </ul>
        <Link to={'/CheckOut'} style={{textDecoration:'none'}}>
        <div style={{display:'flex',justifyContent:'center',marginBottom:'30px'}}>   
          <button style={{padding:'16px 48px',border:'0',background:'#DB4444',color:'white'}}>Procees to checkout</button>
        </div>
        </Link>
      </div>
    </div>
    </Container>
    </div>
    </>
  )
}

export default Cart