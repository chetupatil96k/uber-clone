import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        { email, password }
      );
      
  
      if (response.status === 201) {
        const data = response.data;
        console.log("Login success:", data); // Debug
  
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
  
        navigate("/captain-home"); // Redirect
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert("Login failed! Please check credentials.");
    } finally {
      setEmail("");
      setPassword("");
    }
  };
  

  // 👇 return is INSIDE the function now
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          className='w-20 mb-2'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s'
          alt=''
        />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg mb-2 font-medium'>What's your email?</h3>
          <input
            required
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            placeholder='email@example.com'
          />

          <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
          <input
            required
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            placeholder='password'
          />

          <button
            type='submit'
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'
          >
            Login
          </button>
        </form>

        <p className='text-center'>
          Join a fleet?{' '}
          <Link to='/captain-signup' className='text-blue-600'>
            Register as captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin
