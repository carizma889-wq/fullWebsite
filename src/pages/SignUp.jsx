/* eslint-disable no-unused-vars */
import TextField from '@mui/material/TextField';
import Header from '../components/Header'
import Button from '@mui/material/Button';
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { authSlice } from '../features/logicProgramm';
import { Password } from '@mui/icons-material';
function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [inputs,setInput]=useState({
        name: "",
        email: "",
        password: ""
    })
    const dispatch=useDispatch()
  return (
    <div>
      <Header isSignUpOrLogIN={false}/>
      {/*  */}
      <div className='mainSignUp'>
        <div className="img"><img style={{}} src={'/img/shopping.png'} alt="" /></div>
        <div className="createAccount">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <form onSubmit={(e)=>{e.preventDefault()}}>
            <TextField id="standard-basic" label="name" variant="standard" value={inputs.name} onChange={(e)=>{setInput({...inputs,name:e.target.value})}} />
            <TextField id="standard-basic" label="email" variant="standard"  value={inputs.email} onChange={(e)=>{setInput({...inputs,email:e.target.value})}} />

           <TextField
           value={inputs.Password}
               onChange={(e) =>
          setInput({
          ...inputs,
          password: e.target.value
               })}
      type={showPassword ? "text" : "password"} 
      label="Password"
      variant="filled"
      InputProps={{
        endAdornment: (
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword)
              
            }}
            style={{marginLeft: '10px',cursor:'pointer',border:'none',overflow:'none'}}
            
          >
            {showPassword ?< VisibilityOffIcon/> : <VisibilityIcon/>}
          </button>
        ),
      }}
    />
                  <Button id="btn"  onClick={()=>{
                    dispatch(authSlice({...inputs})) 
                    setInput({name:'',email:'',password:''})}} variant="contained">Create Account</Button>
                  <Button id="btnGoogle" variant="contained"><img src={'/img/iconGoogle.png'} alt="" /> Sign up with Google</Button>
                  <p>Already have account?<Link to={'/LogIn'}><a href="#">log in</a>  </Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp