import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductDetails() {
    const { id } = useParams()
      const products=useSelector((state)=>state.ecommerce.products)

  const product = products.find((item) => item.id === Number(id))
    if (!product) return <div>Loading...</div>

  return (
    <div>
      <div className="ProductDetails">
      <img src={product.img_url} alt={product.details} />
      <h2>{product.details}</h2>
      <p>السعر: ${product.salaryOffer}</p>
    </div>
    </div> 
  )
}

export default ProductDetails