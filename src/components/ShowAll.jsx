import Header from './Header'
import { showAllProduct } from '../assets/assets'
import { Container } from '@mui/material'
function ShowAll() {

  return (
    <div>
        <Header/>
        <Container fixed>
        <div className="show_product" style={{width:"100%",height:"100%",background:'red'}}>
            {showAllProduct.map((data)=>{
                return <h1>{data.title} <img src={data.img} alt="" /></h1>
            })}
        </div>
            </Container>
    </div>
  )
}

export default ShowAll