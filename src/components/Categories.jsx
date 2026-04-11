
import sound from '/img/Sound.png'
function Categories() {
  return (
    <div style={{position:'relative',margin:'100px 0',background:'#000000',color:'white'}}>
        <div className="content" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'60px',flexWrap:'wrap',padding:'50px '}}>
            <div className="details"style={{display:'flex',flexDirection:'column',gap:'35px'}}>
            <p  style={{color:'#00FF66'}}>Categories</p>
                <h1>Enhance Your <br /> Music Experience</h1>
            <div className="times" style={{display:'flex',gap:'24px',alignItems:'center'}}>
                <div className="Hours" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#FFFFFF',color:'black',borderRadius:'50%',width:'62px',height:'62px'}}> <p style={{margin:'0',marginTop:'18px'}}>23</p> <p style={{fontSize:'11px'}}>Hours</p>  </div>
                <div className="Days" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#FFFFFF',color:'black',borderRadius:'50%',width:'62px',height:'62px'}}> <p style={{margin:'0',marginTop:'18px'}}>05</p> <p style={{fontSize:'11px'}}>Days</p>  </div>
                <div className="Minutes" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#FFFFFF',color:'black',borderRadius:'50%',width:'62px',height:'62px'}}> <p style={{margin:'0',marginTop:'18px'}}>59</p> <p style={{fontSize:'11px'}}>Minutes</p>  </div>
                <div className="Seconds" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#FFFFFF',color:'black',borderRadius:'50%',width:'62px',height:'62px'}}> <p style={{margin:'0',marginTop:'18px'}}>35</p> <p style={{fontSize:'11px'}}>Seconds</p>  </div>
            </div>
            <button className="btnBayNow" style={{borderRadius:'5px',padding:'16px 48px',background:'#00FF66',border:'none',width:'171px',color:'white'}}>Buy Now!</button>
            </div>
            <div className="img" style={{position:'relative'}}>
                <div style={{position:'absolute',width:'450px',height:'450px',borderRadius:'50%',filter:'blur(120px)',background:'#D9D9D9',opacity:'0.3'}}></div>
                <img style={{position:'relative',maxWidth:'100%'}} src={sound} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Categories