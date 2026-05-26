/* eslint-disable no-unused-vars */
import { NAV_LINKS } from "../assets/assets.jsx"
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState,useRef } from "react";
import { checkUserSession } from "../features/logicProgramm.js";
import { fetchShowAll } from "../features/ecommerceStore.js";
function Header({isSignUpOrLogIN,isUser}) {
    const [searchValue, setSearchValue] = useState('')
    const [showResults, setShowResults] = useState(false)
    const searchRef = useRef(null)

  const user = useSelector(
  state => state.signup.user
);
    const dispatch = useDispatch();
    const showAll = useSelector((state) => state.ecommerce.showAll)
    useEffect(() => {
      dispatch(checkUserSession());
    }, []);
    useEffect(()=>{
      if(showAll.length===0)dispatch(fetchShowAll())
    })
  const filteredProducts = searchValue.length > 0
    ? showAll.filter(product =>
        product.details.toLowerCase().includes(searchValue.toLowerCase())
      ).slice(0, 5) // أول 5 نتايج بس
    : []
    useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return (
 
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
         return <Link key={data} to={data==="Home"?"/":`/${data}`} style={{border:'none',textDecoration:'none'}}>
            <li style={{letterSpacing:'0',color:"black",border:'none',textDecoration:'none'}} key={data}>{data}</li>
          </Link>
         }
        })}
        
      </ul>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px'}}>
        
      {/*  */}
      <div ref={searchRef} style={{ position: 'relative' }}>
      
      {/* Input */}
             <TextField 
             value={searchValue}
              onChange={(e) => {
          setSearchValue(e.target.value)
          setShowResults(true)
        }} 
        onFocus={() => setShowResults(true)}
        style={{marginBottom:'0px'}} id="standard-basic" label="What are you looking for?" variant="filled"  InputProps={{
        startAdornment: (
          <InputAdornment position="end" sx={{position:'absolute', right:'15px'}}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}/>

      {/* نافذة النتايج */}
      {showResults && filteredProducts.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '110%',
          left: 0,
          width: '100%',
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          zIndex: 9999
        }}>
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/ProductDetails/${product.id}`}
              onClick={() => {
                setShowResults(false)
                setSearchValue('')
              }}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 10px',
                cursor: 'pointer',
                borderBottom: '1px solid #f0f0f0',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={e => e.currentTarget.style.background = 'white'}
              >
                {/* صورة المنتج */}
                <img
                  src={product.img_url}
                  alt={product.details}
                  style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                />
                {/* اسم المنتج والسعر */}
                <div>
                  <p style={{ margin: 0, fontSize: '14px' }}>{product.details}</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#DB4444' }}>
                    ${product.salaryOffer}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* لو مفيش نتايج */}
      {showResults && searchValue.length > 0 && filteredProducts.length === 0 && (
        <div style={{
          position: 'absolute',
          top: '110%',
          left: 0,
          width: '100%',
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '10px',
          textAlign: 'center',
          color: '#999'
        }}>
           not found
        </div>
      )}
    </div>
      {/*  */}
        <Link to={user?.email_confirmed_at ? '/Wishlist' : '/SignUp'}>
        <FavoriteBorderIcon   sx={{color:'black',marginBottom:'0px',cursor:'pointer',display:isSignUpOrLogIN==true?isUser==true?'':'':'block'}}/>
      </Link>
      <Link to={user?.email_confirmed_at ? '/Cart':'/SignUp'}>
        <LocalGroceryStoreOutlinedIcon  sx={{color:'black',marginBottom:'0px',cursor:'pointer' ,display:isSignUpOrLogIN==true?'none':'block'}}/>
      </Link>
      <Link to={'/User'}>
      {user?.email_confirmed_at ?(
        <PersonOutlineOutlinedIcon  sx={{color:'black',marginBottom:'0px',cursor:'pointer',display:isSignUpOrLogIN==true?'none':'block'}}/>
      ):null}
      </Link>
      </div>
      </div>
  </div>
</nav>
    </div>
   
)
}

export default Header