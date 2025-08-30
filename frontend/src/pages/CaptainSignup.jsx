import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainsignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

const submitHandler= (e) =>{
  e.preventDefault();

  setUserData({
    fullName:{
      firstName:firstName,
      lastName:lastName
    },
    email:email,
    password:password
  })
  

  setEmail('')
  setFirstName('')
  setLastName('')
  setPassword('')
}


  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-20 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}  >
        <h3 className='text-base mb-2 font-medium'>What's your name</h3>
       <div className=' flex gap-3 mb-5'> 
        <input required type="text" className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border   text-sm placeholder:text-sm ' placeholder='First name' value={firstName} onChange={(e)=>{
         setFirstName(e.target.value)
        }} />
       
        <input required type="text" className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-sm placeholder:text-sm' placeholder='Last name' value={lastName} onChange={(e)=>{
          setLastName(e.target.value);
        }} />
       </div>
        <h3 className='text-base mb-2 font-medium'>What's your  email?</h3>
         <input required type="email" className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' placeholder='email@example.com' value={email} onChange={(e)=>{
          setEmail(e.target.value);
         }} />
         <h3 className='text-base mb-2 font-medium'>Enter Password</h3>
         <input required type="password"      className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' placeholder='password' value={password} onChange={(e)=>{
          setPassword(e.target.value);
         }} />
         <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
        
       
        
        </form>
        <p className='text-center'>Already have account ? <Link to='/captain-login' className='text-blue-600 '>Sign In</Link></p>
      </div>
       
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google policy</span> and <span className='underline'>Terms of services apply</span> </p>
       </div>

     
    </div>
  )
}

export default Captainsignup
