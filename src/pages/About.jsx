import Header from '../components/Header'
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom'
import { Property ,detailsPeopleAbout,propertyAbout} from '../assets/assets.jsx'
function About() {
  const show=Property.map((data)=>(
    <div key={data.id} className="item" >
          <div className='img' ><img  src={data.img} alt="" /></div>
          <h4 >{data.number}</h4>
          <p >{data.details}</p>
        </div>
  ))
  const showDetailsPeopleAbout=detailsPeopleAbout.map((data)=>{
    return <div key={data.id}>
      <div className="img" ><img src={data.img} alt={data.img} /></div>
      <div >
        <h2 >{data.name}</h2>
        <p>{data.details}</p>
        {data.iconsSocial.map((d)=>{
          return <span className='icon' >{d}</span>
        })}
      </div>
    </div>
  })
   const showProperty=propertyAbout.map((data)=>(
    <div key={data.id} className='main' >
      <img src={data.img} alt="icon" />
      <p>{data.title}</p>
      <p>{data.details}</p>

    </div>
  ))
  return (
<>
     <Header/>
    
    <div className='mainAbout' >
       <div  className='Link' >
         <Link to={'/Home'} className='LinkHome' ><span>Home  / </span> </Link>
         <Link to={'/About'} className='LinkAbout' ><span> About</span></Link>
       </div>

       {/* end link */}
       <div className="contentAbout" >
         <Container fixed>
         <div className='DetailsAbout' >
           <h1 className='title' >Our Story</h1>
           <p className='first-detailsAbout'>
             Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
           </p>
           <p className="lastDetails">
             Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
           </p>
         </div>
       </Container>
        <div className='imgAbout'>
           <img  src={'/img/soppingWoman.png'} alt="" />
         </div>
         </div>
         {/* end detailsAbout */}
        
         {/* end imgAbout */}
       </div>
       {/* end details about */}
  <Container fixed>
 
       <div className="propertyAbout" >
        {show}
       </div>
 {/*end propertyAbout  */}
       <div className='propertyAboutShow'>
         {showDetailsPeopleAbout}
       </div>
       <div className='Property' >
         {showProperty}
       </div>
          
  </Container>
      
</>
  )
}

export default About