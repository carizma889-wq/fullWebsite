import TextField from '@mui/material/TextField';
import Header from '../components/Header'
import Button from '@mui/material/Button';
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LogIn() {
      const [showPassword, setShowPassword] = useState(false);

  return (
      <div>
      <Header isSignUpOrLogIN={false}/>
      {/*  */}
      <div className='mainLogIn'>
        <div className="img"><img style={{}} src={'/img/shopping.png'} alt="" /></div>
        <div className="logInAccount">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <form onSubmit={(e)=>{e.preventDefault()}}>
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
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Button id="btn"  variant="contained">Log In</Button>
                  <Button id="forget" variant="contained"> Forget Password?</Button>
                </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn