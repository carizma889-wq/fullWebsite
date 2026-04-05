import { NAV_LINKS } from "../assets/assets.jsx"
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
function Header() {
  return (
    <>
    <div style={{width:'100%',borderBottom:'1px solid black'}}>
      
    <nav className="navbar navbar-expand-lg " style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0 20px'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <Link style={{textDecoration:'none',color:'black'}} to={'/Home'}>
      <h1>Exclusive</h1>
      </Link>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={{margin:'0 auto',display:'flex',justifyContent:'center',alignItems:'center',listStyle:'none',gap:'50px',paddingTop:"10px"}} className="navbar-nav me-auto mb-2 mb-lg-0">
        {NAV_LINKS.map((data)=>{
         if (data) {
         return <Link key={data} to={data==="Sign Up"?"/":`/${data}`} style={{border:'none',textDecoration:'none'}}>
            <li style={{letterSpacing:'0',color:"black",border:'none',textDecoration:'none'}} key={data}>{data}</li>
          </Link>
         }
        })}
        
      </ul>
    <TextField style={{paddingBottom:'15px'}} id="standard-basic" label="What are you looking for?" variant="filled" />      
    </div>
  </div>
</nav>
    </div>
    </>
)
}

export default Header