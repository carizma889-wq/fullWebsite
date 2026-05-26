import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductById } from '../features/ecommerceStore'
function ProductDetails() {
     const dispatch = useDispatch()
  const { id } = useParams()
  const product = useSelector((state) => state.ecommerce.selectedProduct)
  console.log("id من الـ URL:", id)
  console.log("product:", product)

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <div>
      <div className="ProductDetails">
      <img src={product.img_url} alt={product.details} />
      <h2>{product.details}</h2>
      <p>السعر: ${product.salaryOffer||product.salary}</p>
    </div>
    </div> 
  )
}

export default ProductDetails