import {FooterData} from '../assets/assets.js'

function Footer() {
  return (
    <>
  <div className="footer_content">
     <div className='Exclusive'>
     {FooterData.Exclusive.map((data)=>{
        return <div key={data.name} >
            <h3>{data.name}</h3>
            <nav>
                <ul>
                    <li>{data.details}</li>
                    <li>{data.list}</li>
                </ul>
            </nav>
        </div>
    })}
   </div>

   <div className='Support'>
     {FooterData.Support.map((data)=>{
        return <div key={data.name} >
            <h3>{data.name}</h3>
            <nav>
                <ul>
                    {data.list.map((d)=>{
                        return <li  key={d}>{d}</li>
                    })}
                </ul>
            </nav>
        </div>
    })}
   </div>
   <div className='Account'>
    {FooterData.Account.map((data)=>{
        return <div key={data.name} >
            <h3>{data.name}</h3>
            <nav>
                <ul>
                    {data.list.map((d)=>{
                        return <li key={d}>{d}</li>
                    })}
                </ul>
            </nav>
        </div>
    })}
   </div>
   <div className='QuickLink'>
      {FooterData.QuickLink.map((data)=>{
        return <div key={data.name} >
            <h3>{data.name}</h3>
            <nav>
                <ul>
                    {data.list.map((d)=>{
                        return <li key={d}>{d}</li>
                    })}
                </ul>
            </nav>
        </div>
    })}
   </div>
     <div className='DownloadApp'>
        {FooterData.DownloadApp.map((data)=>{
        return <div key={data.name}>
            <h3>{data.name}</h3>
            <p>{data.details}</p>
            <div>
                
            </div>
        </div>
    })}
     </div>
  </div>
    </>
  )
}

export default Footer