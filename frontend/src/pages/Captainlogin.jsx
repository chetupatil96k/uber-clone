
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Captainlogin = () => {
  const[email,setEmail]=useState('');
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})


 const submitHandler=(e) =>{
  e.preventDefault();
  setCaptainData({
    email:email,
    password:password
  })

 setEmail('')
 setPassword('')

 }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-20 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}  >
        <h3 className='text-lg mb-2 font-medium'>What's your  email?</h3>
         <input required type="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
         }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' placeholder='email@example.com' />
         <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
         <input required type="password"  value={password}  onChange={(e)=>{
          setPassword(e.target.value)
         }}     className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' placeholder='password' />
         <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
        
       
        
        </form>
        <p className='text-center'>Join a fleet ? <Link to='/captain-signup' className='text-blue-600 '>Register as captain</Link></p>
      </div>
       
       <div>
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
       </div>

     
    </div>
  )
}

export default Captainlogin
