import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
    <div className="layout">
      
    <div className="top_header">
      <p className="details">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  </p> <p>shopNow</p>

{/*  */}
<div className="dropdown">
  <button className="btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">English</button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item active" href="#">English</a></li>
    <li><a className="dropdown-item" href="#">Egypt</a></li>
    <li><a className="dropdown-item" href="#">French</a></li>
  </ul>
</div>
  {/*  */}
    </div >
        <div className="content" style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
       <div style={{flex:'1'}}>
           <Outlet />
       </div>
        </div>
        {/*  */}
        <div className="footer">
          <Footer/>
        </div>
    </div>
    </>
  );
};

export default Layout;