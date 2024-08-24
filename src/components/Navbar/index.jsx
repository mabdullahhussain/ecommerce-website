import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../Store/cartSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const cart = useSelector(state => state.cartStore.cart);
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user ", user);
      } else {
        console.log("user logged out");
      }
    });
    return () => unsubscribe(); // Clean up subscription
  }, []);

  const logoutUser = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const deleteItem = (index) => {
    dispatch(removeFromCart(index));
  };

  const increaseItemQuantity = (index) => {
    dispatch(increaseQuantity({ index }));
  };

  const decreaseItemQuantity = (index) => {
    dispatch(decreaseQuantity({ index }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
  };

  return (
    <div className="bg-blue-300 p-4 flex flex-wrap items-center justify-between">

      <div className="flex-1 flex items-center">
        <a className="text-3xl font-bold">E-Commerce Store</a>
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden ml-auto p-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className={`lg:flex lg:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <button className='bg-blue-200 p-3 text-black rounded' onClick={() => navigate('/')}>Dashboard</button>
        <button className='bg-blue-200 p-3 text-black rounded' onClick={() => navigate('/login')}>Login</button>
        <button className='bg-blue-200 p-3 text-black rounded' onClick={logoutUser}>Logout</button>
        <button className='bg-blue-600 p-3 text-white rounded' onClick={() => navigate('/Addproduct')}>Add Product</button>
      </div>

      {/* Cart Icon and Dropdown */}
      <div className="relative flex-none mt-2 lg:ml-5">
        <button onClick={toggleDropdown} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item bg-red-500 text-white">{cart.length}</span>
          </div>
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-72 bg-white border border-gray-300 z-10 shadow-lg rounded-lg"
          >
            <div className="p-4">
              {cart.length === 0 ? (
                <p className="text-gray-700">Your cart is empty</p>
              ) : (
                <>
                  <ul className="space-y-4">
                    {cart.map((product, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img src={product.image} width="40" alt={product.title} className="rounded-md" />
                          <div className="text-sm">
                            <div className="font-medium text-gray-900">{product.title}</div>
                            <div className="text-gray-600">Rs:{product.price}</div>
                            <div className="text-gray-600">Quantity: {product.quantity || 1}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            className="bg-gray-200 p-2 rounded text-gray-700"
                            onClick={() => decreaseItemQuantity(index)}
                          >
                            -
                          </button>
                          <button
                            className="bg-gray-200 p-2 rounded text-gray-700"
                            onClick={() => increaseItemQuantity(index)}
                          >
                            +
                          </button>
                          <button
                            className="bg-red-500 text-white p-2 rounded ml-2"
                            onClick={() => deleteItem(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="font-bold text-gray-900">Total: Rs:{calculateTotal()}</div>
                    <button 
                      className="bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Checkout Now
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
