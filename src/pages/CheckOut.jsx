import img1 from '/img/products3.png'
import Header from '../components/Header'
import img2 from '/img/products4.png'
import Frame from '/img/Frame834.png'
import Container from '@mui/material/Container';
import { useState } from 'react';
function CheckOut() {
const [value, setValue] = useState("cash");
  const titlesInputs=[
      {title:'First Name',isImportant:true},
      {title:'Company Name',isImportant:false},
      {title:'Street Address',isImportant:true},
      {title:'Apartment, floor, etc. (optional)',isImportant:false},
      {title:'Town/City',isImportant:true},
      {title:'Phone Number',isImportant:true},
      {title:'Email Address',isImportant:true},
    ];
    const dataVisa=[
      {img:img1,title:'LCD Monitor',salary:'650'},
      {img:img2,title:'H1 Gamepad',salary:'1100'},
    ]
    const title=[
        {title:'Subtotal:'},
        {title:'Shipping:'},
        {title:'Total:'},
      ]
      const detailsVisa = [
  { id: 1, value: 'bank', label: 'Bank', img: Frame },
  { id: 2, value: 'cash', label: 'Cash on delivery', img: '' }
];
  return (
    <>
    <Header/>
    
  <Container fixed>
    <div className="section" style={{margin:'100px 0',}}>
    <p style={{marginBottom:'50px',color:'#00000062'}}>Account / My Account / Product / View Cart / <span style={{color:'black'}}>CheckOut</span> </p>
    <h1 style={{marginBottom:'30px',color:'#000000'}}>Billing Details</h1>
      <div className="" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div className="Billing">
        
      {titlesInputs.map((data)=>{
        return <div key={data.title} className={data.title}>
          <p style={{color:'#0000006c',fontSize:'16px',marginBottom:'8px'}}>{data.title} <span style={{color:'#db444462'}}>{data.isImportant==true?'*':''}</span> </p> 
          <input required={data.isImportant} style={{background:'#F5F5F5',color:'black',width:'470px',height:'50px',border:'none',outline:'none'}} type={data.title==='Phone Number'?'number':'text'} name="" id="" />
        </div>
      })}
    <div style={{marginTop:'24px',display:'flex',alignItems:'center',gap:'16px'}}>
      <input type="checkbox" defaultChecked style={{accentColor:'#DB4444',width:'24px',height:'24px'}} id="check"/> <label htmlFor="check" style={{cursor:'pointer'}}>Save this information for faster check-out next time</label>
    </div>
    </div>
    {/*  */}
    <div className="Visa" style={{width:'570px'}}>
      <ul style={{display:'flex',justifyContent:'space-between',flexDirection:'column',listStyle:'none'}}>
        {dataVisa.map((data)=>{
          return <>
          <li style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'25px'}} key={data.title}>
                  <div style={{width:'45px',height:'45px',display:'flex',gap:'20px'}}>
                    <img src={data.img} style={{width:'45px'}} alt="" /><p>{data.title}</p>
                  </div>
                  <p>${data.salary}</p>
          </li>
          </>
          
        })}
         {title.map((data)=>{
           return <li style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'5px',borderBottom:data.title==='Total:'?'none':'1px solid black'}} key={data.title}>
              <p style={{fontSize:'16px'}}>{data.title}</p> <p>{data.title==='Subtotal:'||data.title==='Total:'?Number(dataVisa[0].salary)+Number(dataVisa[1].salary):'Free'}</p>
            </li>
          })}
        
{detailsVisa.map((data) => {
  return (
    <li key={data.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'10px 0'}}>
      <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
        <input
        style={{accentColor:'#DB4444',width:'20px',height:'20px'}}
            type="radio"
            name="payment" 
            value={data.value} 
            checked={value === data.value}
            
            onChange={(e) => setValue(e.target.value)}
            id={data.value}
          />
          <label htmlFor={data.value}>{data.label}</label>
      </div>
      <img src={data.img} alt="" />
      </li>
    );
    })}
    {value === "cash" && (
  <div>
    <div className="coupon">
      <input type="text" name="" id="" placeholder='Coupon Code' style={{width:'300px',height:'56px'}} /> <button style={{border:'none',cursor:'pointer',marginLeft:'15px',padding:'16px 48px',background:'#DB4444',color:'white'}}>Apply Coupon</button>
    </div>
    <button style={{border:'none',cursor:'pointer',marginTop:'15px',padding:'16px 48px',background:'#DB4444',color:'white'}}>Place Order</button>
  </div>
)}
    </ul>
    </div>

    </div>
    </div>
  </Container>
  </>
  )
}

export default CheckOut