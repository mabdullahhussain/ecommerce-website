import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../../config/firebase'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../Store/cartSlice'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Detail = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const getSingleProductData = async () => {
      const productData = await getSingleProduct(productId)
      setProduct(productData || {})
    }
    getSingleProductData()
  }, [productId])

  const onBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <Navbar />
      <h1 className='flex justify-center text-6xl font-bold'>Product Detail</h1>
      <div className=' mt-4 card-actions justify-center'>
      <button className=' bg-black text-white p-5 px-10  rounded-lg' onClick={onBack}>Back</button>
      </div>
      <div className="flex justify-center gap-20 flex-wrap mt-6">
      <div className="card bg-base-100  shadow-xl p-4">
        <figure>
        <img className='h-72' src={product.image || 'default-image-url'} width="400" alt={product.title || 'Product'} />

        </figure>
        <div className="card-body p-4">
          <h1 className="card-title  text-5xl font-bold ">{product.title || 'Product Title'}</h1>
          <h4 className='text-2xl'>{product.description || 'Product Description'}</h4>
          <h2 className='text-3xl font-medium'>Rs{product.price || 'Product Price'}</h2>
        </div>
        <div className="card-actions justify-center">
          <button onClick={() => dispatch(addToCart(product))}  className="btn bg-blue-600 text-white p-3">Add To Cart</button>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Detail