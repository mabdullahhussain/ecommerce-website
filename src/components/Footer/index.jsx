import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold mb-2">E-commerce Store</h1>
            <p className="text-gray-400">Your one-stop shop for everything you need.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <ul>
                <li><Link to="#" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Shop</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">Customer Service</h2>
              <ul>
                <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns</Link></li>
                <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Info</Link></li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M22 12.1C22 5.4 17.6 0 12 0S2 5.4 2 12.1c0 5.7 4.4 10.4 9.9 10.9v-7.7H8.5v-3h3.4V9.7c0-3.4 2-5.3 5.1-5.3 1.5 0 3.1.3 3.1.3v3.4h-1.8c-1.8 0-2.3.9-2.3 2.3v2.6h4.2l-.6 3H14v7.7c5.5-.5 9.9-5.2 9.9-10.9z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M23.9 4.3c-.8.4-1.6.7-2.5.8 1-.6 1.7-1.7 2.1-3-.9.6-1.8 1-2.8 1.3C19.6 2.8 18.3 2 16.8 2c-2.8 0-5.1 2.3-5.1 5.1 0 .4 0 .8.1 1.2-4.3-.2-8.1-2.3-10.6-5.5-.4.6-.6 1.3-.6 2 0 1.4.7 2.7 1.7 3.5-.6 0-1.3-.2-1.9-.5v.1c0 2.1 1.5 3.8 3.5 4.2-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.3 3.2 4.4 3.2-1.6 1.3-3.7 2.1-5.9 2.1-.4 0-.8 0-1.2-.1 2.1 1.3 4.5 2.1 7.1 2.1 8.5 0 13.2-7 13.2-13.1 0-.2 0-.5-.1-.7.9-.7 1.7-1.6 2.4-2.6z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2.2c2.2 0 2.4 0 3.3.1.8.1 1.5.3 2.2.7.7.4 1.2.9 1.7 1.7.4.7.6 1.4.7 2.2.1.9.1 1.1.1 3.3s0 2.4-.1 3.3c-.1.8-.3 1.5-.7 2.2-.4.7-.9 1.2-1.7 1.7-.7.4-1.4.6-2.2.7-.9.1-1.1.1-3.3.1s-2.4 0-3.3-.1c-.8-.1-1.5-.3-2.2-.7-.7-.4-1.2-.9-1.7-1.7-.4-.7-.6-1.4-.7-2.2-.1-.9-.1-1.1-.1-3.3s0-2.4.1-3.3c.1-.8.3-1.5.7-2.2.4-.7.9-1.2 1.7-1.7.7-.4 1.4-.6 2.2-.7.9-.1 1.1-.1 3.3-.1zm0 3.7c-1.7 0-3 1.4-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm6.6-2.1c-.4 0-.8 0-1.2.1-.5.1-1 .2-1.4.5-.4.2-.8.5-1.1.9-.2.4-.4.9-.5 1.4-.1.5-.1.7-.1 1.2v2.3h3.2v-2.3c0-.5 0-.8-.1-1.2-.1-.5-.3-1-.5-1.4-.3-.4-.7-.7-1.1-.9-.4-.2-.9-.4-1.4-.5-.4-.1-.8-.1-1.2-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} ShopName. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer