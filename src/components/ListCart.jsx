import { useState } from "react"
function ListCart({data}) {
    const [Subtotal,SetSubtotal]=useState(1)
    let salary=data.salary==0?data.salaryOffer:data.salary
    return( <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',textAlign:'center',}}>
    <li key={data.id} style={{textAlign:'start',display:'flex',justifyContent:'end',alignItems:'center',gap:'10px',width:'120px',marginLeft:'100px'}}>
      <img src={data.img} width={'30px'} alt="" /> <span style={{fontSize:'16px'}}>{data.name.split(" ").length>2?data.name.split(" ").slice(0, 2).join(" "):data.name}</span>
    </li>
    <li>${salary}</li>
    <li><input style={{height:'30px',width:'72px'}} value={Subtotal} onChange={(e)=>{SetSubtotal(e.target.value)}} type="number" name="" id="" /></li>
    <li>${Subtotal*salary}</li>
    </div>
  )
  
}

export default ListCart