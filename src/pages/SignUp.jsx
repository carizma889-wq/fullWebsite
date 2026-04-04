import TextField from '@mui/material/TextField';
import Header from '../components/Header'
import Button from '@mui/material/Button';
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Header/>
      {/*  */}
      <div className='mainSignUp'>
        <div className="img"><img style={{}} src={'/img/shopping.png'} alt="" /></div>
        <div className="createAccount">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <form onSubmit={(e)=>{e.preventDefault()}}>
            <TextField id="standard-basic" label="name" variant="standard" />
            <TextField id="standard-basic" label="email or phone number" variant="standard" />

           <TextField
      type={showPassword ? "text" : "password"} 
      label="Password"
      variant="filled"
      InputProps={{
        endAdornment: (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{marginLeft: '10px',cursor:'pointer',border:'none',overflow:'none'}}
          >
            {showPassword ?< VisibilityOffIcon/> : <VisibilityIcon/>}
          </button>
        ),
      }}
    />
                  <Button id="btn"  variant="contained">Create Account</Button>
                  <Button id="btnGoogle" variant="contained"><img src={'/img/iconGoogle.png'} alt="" /> Sign up with Google</Button>
                  
                  <p>Already have account?<Link to={'/LogIn'}><a href="#">log in</a>  </Link></p>
                  

          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp