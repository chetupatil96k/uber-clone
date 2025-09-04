import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const Captainsignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const {captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const captainData = {
        fullname: {
          firstname: firstName,  // ✅ fixed
          lastname: lastName     // ✅ fixed
        },
        email,
        password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType      // ✅ better to keep key name consistent with backend
        }
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message)
      alert(error.response?.data?.message || "Signup failed!")
    }

    // reset fields
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />

        <form onSubmit={submitHandler}>
          {/* Name */}
          <h3 className='text-base mb-2 font-medium'>What's your name?</h3>
          <div className='flex gap-3 mb-5'>
            <input required type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-sm placeholder:text-sm'
              placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input required type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-sm placeholder:text-sm'
              placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          {/* Email */}
          <h3 className='text-base mb-2 font-medium'>What's your email?</h3>
          <input required type="email"
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-sm placeholder:text-sm'
            placeholder='email@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />

          {/* Password */}
          <h3 className='text-base mb-2 font-medium'>Enter Password</h3>
          <input required type="password"
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-sm placeholder:text-sm'
            placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />

          {/* Vehicle Details */}
          <h3 className='text-base mb-2 font-medium'>Vehicle Details</h3>
          <div className='flex gap-3 mb-5'>
            <input required type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-sm placeholder:text-sm'
              placeholder='Vehicle Color' value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} />
            <input required type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-sm placeholder:text-sm'
              placeholder='Vehicle Plate' value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} />
          </div>

          <div className='flex gap-3 mb-5'>
            <input required type="number"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-sm placeholder:text-sm'
              placeholder='Vehicle Capacity' value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} />

            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-sm'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motor">Motorbike</option>
            </select>
          </div>

          {/* Submit */}
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>
            Create Captain Account
          </button>
        </form>

        <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Sign In</Link></p>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google policy</span> and <span className='underline'>Terms of services apply</span>
        </p>
      </div>
    </div>
  )
}

export default Captainsignup
