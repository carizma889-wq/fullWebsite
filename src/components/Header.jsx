import { NAV_LINKS } from "../assets/assets.jsx"
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';

function Header({isSignUpOrLogIN,isUser}) {
  
  return (
    <>
    <div style={{width:'100%',borderBottom:'1px solid black'}}>
      
    <nav className="navbar navbar-expand-lg " style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0 20px'}}>
  <div className="container-fluid">
      <Link className="navbar-brand" style={{textDecoration:'none',color:'black'}} to={'/Home'}>
      <h1>Exclusive</h1>
      </Link>
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
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px'}}>
        <TextField style={{marginBottom:'0px'}} id="standard-basic" label="What are you looking for?" variant="filled" InputProps={{
        startAdornment: (
          <InputAdornment position="end" sx={{position:'absolute', right:'15px'}}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}/>
        <Link to={'/Wishlist'}>
        <FavoriteBorderIcon   sx={{color:'black',marginBottom:'0px',cursor:'pointer',display:isSignUpOrLogIN==true?isUser==true?'':'':'block'}}/>
      </Link>
      <Link to={'/Cart'}>
        <LocalGroceryStoreOutlinedIcon sx={{color:'black',marginBottom:'0px',cursor:'pointer' ,display:isSignUpOrLogIN==true?'none':'block'}}/>
      </Link>
        <PersonOutlineOutlinedIcon sx={{marginBottom:'0px',cursor:'pointer',display:isSignUpOrLogIN==true?'none':'block'}}/>
      </div>
      </div>
  </div>
</nav>
    </div>
    </>
)
}

export default Header