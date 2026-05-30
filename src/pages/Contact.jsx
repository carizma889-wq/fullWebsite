import Header from '../components/Header'
import { Container } from '@mui/material' 
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { DataPageContact } from '../assets/assets'
function Contact() {
  const showData=DataPageContact.map((data)=>{
    return<div className="item" key={data.id}>
            <div className="title">
              <div className="img">
                <img src={data.img} alt="" /> 
              </div>
              <h2>{data.titleImg}</h2>
              </div>
            {data.details.map((d)=>{
              return <p key={d}>{d}</p>
            })}
          </div>
  })
  return (
    <>
    <Header/>
    <div className='mainContact'>
       <div  className='Link' >
         <Link to={'/'} className='LinkHome' ><span>Home  / </span> </Link>
         <Link to={'/Content'} className='LinkContact' ><span> Contact</span></Link>
       </div>
      
       <Container fixed>
       <div className="section">
        {/*  */}
        <div className="address">
          {showData}
        </div>
        {/*  */}
        <div className="messageMe">
          <div className="inputsContact">
            <TextField id="contact-name"  label="Your Name" />
            <TextField id="contact-email" label="Your Email" />
            <TextField id="contact-phone" label="Your Phone" />
          </div>
           <TextareaAutosize
      aria-label="minimum height"
      minRows={10}
      className='textarea'
      placeholder="your Massage"
      style={{ width: '100%' }}
    />
          <Button className='btns' variant="contained">Send Massage</Button>
        </div>

       </div>
       </Container>
       {/* end */}
    </div>


    </>
  )
}

export default Contact