import TextField from '@mui/material/TextField';
import Header from '../components/Header'
import Button from '@mui/material/Button';
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginUser } from '../features/logicProgramm';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function LogIn() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
const user = useSelector(
    (state) => state.ecommerce
  );
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
      const [showPassword, setShowPassword] = useState(false);
const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({...inputs}));
    // لو نجح login
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  }
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
                  <Button id="btn"  variant="contained" onClick={handleSubmit }>Log In</Button>
                  <Button id="forget" variant="contained"> Forget Password?</Button>
                </div>
          </form>
        </div>
      </div>
    </div>
  )
   
}

export default LogIn