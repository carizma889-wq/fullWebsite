import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
function NotFound() {
  return (
    <>
    <Header/>
    <div className='contentNotFound'>
       <div  className='Link' >
         <Link to={'/Home'} className='LinkHome' ><span>Home  / </span> </Link>
         <Link to={'*'} className='LinkNotFound' ><span> 4O4 Found</span></Link>
       </div>
       <div className="content">
         <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to={'/Home'}>
        <Button className='btns' variant="contained">Back to home page</Button>
        </Link>
       </div>
    </div>
    </>

  )
}

export default NotFound