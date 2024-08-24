import React, { useState } from 'react'
import { addProduct } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const AddProduct = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const addPost = async () => {
    try {
      await addProduct({ title, description, price, image })
      navigate('/')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          placeholder="Description"
          onChange={e => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows="4"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
        <input
          type="number"
          placeholder="Price"
          onChange={e => setPrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
        <input
          type="file"
          onChange={e => setImage(e.target.files ? e.target.files[0] : null)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
        onClick={addPost}
        className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </div>
    </>
  )
}


export default AddProduct


