import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const[email,setEmail]=useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})


 const submitHandler=(e) =>{
  e.preventDefault();
  setUserData({
    email:email,
    password:password
  })

 setEmail('')
 setPassword('')

 }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
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
        <p className='text-center'>New here ? <Link to='/signup' className='text-blue-600 '>Create new Account</Link></p>
      </div>
       
       <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
       </div>

     
    </div>
  )
}

export default UserLogin
