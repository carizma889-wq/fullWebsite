import { Container } from "@mui/material"
import Header from '../components/Header'
function User() {
  const lists=[
    {Manage:['My Profile','Address Book','My Payment Options']},
    {MyOrders:['My Returns','My Cancellations']},
    {MyWishList:[]}
  ]
  const showManage=lists[0].Manage.map(((data,index)=>{
    return <li  style={{color:data==='My Profile'?'#db4444af':'#00000057'}} key={index}>{data}</li>
  }))
    const showMyOrders=lists[1].MyOrders.map(((data,index)=>{
    return <li style={{color:'#00000057'}} key={index}>{data}</li>
  }))
      const ShowMyWishList=lists[2].MyWishList.map(((data,index)=>{
    return <li style={{color:'#00000057'}} key={index}>{data}</li>
  }))
  return (
    <>
    <Header/>
    <Container fixed>
      <div className="section" style={{margin:'100px 0'}} >
          <div className="link" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p style={{color:'#0000008a'}}>Home / <span style={{color:'black'}}>My Account</span></p>
            <p>welcome! <span style={{color:'#DB4444'}}>Md Rimel</span></p>
          </div>
        <div className="content" style={{marginTop:'70px',display:'flex',justifyContent:'space-between',alignItems:'start'}}>
          <div className="lists">
          <div className="manage">
            <p style={{color:'#000000',fontSize:'16px'}}>Manage My Account</p>
          <ul style={{listStyle:'none'}}>
            {showManage}
          </ul>
          </div>
          <div className="myOrder">
            <p style={{color:'#000000',fontSize:'16px'}}>My Orders</p>
            <ul style={{listStyle:'none'}}>
              {showMyOrders}
            </ul>
          </div>
          <div className="MyWishList">
            <p style={{color:'#000000',fontSize:'16px'}}>My WishList</p>
            <ul style={{listStyle:'none'}}>
            {ShowMyWishList} {/*if the important the list to wishlist */}
            </ul>
          </div>
        </div>
        <div className="showLists" style={{width:'fit-content',marginTop:'25px'}}>
          <div className="fullName" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'50px'}}>
            <div className="firstName" style={{display:'flex',flexDirection:'column',marginBottom:'20px'}}>
              <label htmlFor="first" style={{fontSize:'13px',marginBottom:'8px'}}>First Name</label>
              <input id="first" type="text" placeholder="Md" style={{borderRadius:'5px',paddingLeft:'10px',background:'#F5F5F5',outline:'none',border:'none',width:'330px',height:'50px'}} />
            </div>
            <div className="LastName" style={{display:'flex',flexDirection:'column'}}>
              <label htmlFor="Last" style={{fontSize:'13px',marginBottom:'8px'}}>Last Name</label>
              <input id="Last" type="text" placeholder="Rimel" style={{borderRadius:'5px',paddingLeft:'10px',background:'#F5F5F5',outline:'none',border:'none',width:'330px',height:'50px'}} />
            </div>
          </div>
          <div className="fullDetails" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'50px',marginBottom:'20px'}}>
            <div className="email" style={{display:'flex',flexDirection:'column'}}>
              <label htmlFor="email" style={{fontSize:'13px',marginBottom:'8px'}}>Email</label>
              <input  type="email" name="" placeholder="rimel1111@gmail.com" id="email"  style={{borderRadius:'5px',paddingLeft:'10px',background:'#F5F5F5',outline:'none',border:'none',width:'330px',height:'50px'}}/>
            </div>
            <div className="address" style={{display:'flex',flexDirection:'column'}}>
              <label htmlFor="address" style={{fontSize:'13px',marginBottom:'8px'}}>Address</label>
              <input type="text" name="" style={{background:'#F5F5F5',outline:'none',border:'none',width:'330px',height:'50px',borderRadius:'5px',paddingLeft:'10px'}} id="address" placeholder="Kingston, 5236, United State" />
            </div>
          </div>
          <div className="password" style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              <label>Password Changes</label>
              <input style={{width:'710px',height:'50px',outline:'none',border:'none',background:'#F5F5F5',borderRadius:'5px',paddingLeft:'10px'}} type="password" name="" id=""  placeholder="Current Password"/>
              <input style={{width:'710px',height:'50px',outline:'none',border:'none',background:'#F5F5F5',borderRadius:'5px',paddingLeft:'10px'}} type="password" placeholder="New Password" />
              <input style={{width:'710px',height:'50px',outline:'none',border:'none',background:'#F5F5F5',borderRadius:'5px',paddingLeft:'10px'}} type="text" placeholder="Confirm New Password" />
            </div>
            <div className="save" style={{display:'flex',justifyContent:'end',marginTop:'20px',gap:'32px',alignItems:'center'}}>
              <button style={{border:'none',color:'black',background:'none',cursor:'pointer',width:'57px',height:'24px',fontSize:'16px'}}>Cancel</button>
              <button style={{width:'214px',height:'56px',background:'#DB4444',color:'white',padding:'16p 48px',border:'none'}}>Save Changes</button>
            </div>
        </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default User