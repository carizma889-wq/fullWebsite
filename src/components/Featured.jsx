import { featured,propertyAbout } from "../assets/assets"
function Featured() {
       const showProperty=propertyAbout.map((data)=>(
    <div key={data.id} className='main' >
      <img src={data.img} alt="icon" />
      <p>{data.title}</p>
      <p>{data.details}</p>

    </div>
  ))
  return (
   <>
    <div className="Featured" style={{margin:'100px 0'}}>
      <div className="content">
          <div  className="PlayStation" style={{backgroundImage:`url(${featured[0].img})`}}>
           <div className="details">
             <h1>{featured[0].name}</h1>
            <p>{featured[0].details}</p>
            <p className="shop">shop now</p>
           </div>
        </div>
        <div  className="Women’sandOthers">
        <div  className="Women’s" style={{backgroundImage:`url(${featured[1].img})`}}>
           <div className="details">
             <h1>{featured[1].name}</h1>
            <p>{featured[1].details}</p>
             <p className="shop">shop now</p>
           </div>
        </div>
        
        <div className="others" >
            <div className="cards">
            <div  className="Speakers" style={{backgroundImage:`url(${featured[2].img})`}}>
            <div className="details">
                <h1>{featured[2].name}</h1>
            <p>{featured[2].details}</p>
             <p className="shop">shop now</p>
            </div>
            </div>
            <div  className="Perfume" style={{backgroundImage:`url(${featured[3].img})`}}>
            <div className="details">
                <h1>{featured[3].name}</h1>
                <p>{featured[3].details}</p>
                 <p className="shop">shop now</p>
            </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div className="Property">
        {showProperty}
    </div>
   </>
  )
}

export default Featured