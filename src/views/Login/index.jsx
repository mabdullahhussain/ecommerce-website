import React, { useState } from 'react'
import { loginUser } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = async () => {
        try {
            await loginUser(email, password)
            navigate('/')
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <>
        <Navbar/>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter Your Email"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter Your Password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={login}
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-center">
                        Don't have an account?
                        <button onClick={()=>navigate('/register')} className="text-blue-700">Register</button>
                    </p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
