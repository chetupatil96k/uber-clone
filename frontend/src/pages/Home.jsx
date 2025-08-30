import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
        <div className=' bg-[url(https://plus.unsplash.com/premium_photo-1736908586532-f77ba6c66d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHRyYWZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] flex justify-between flex-col pt-5   h-screen w-full bg-red-400 bg-bg-cover bg-center'>
           <img className='w-16 ml-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
           <div className='bg-white py-4 px-4 pb-4'>
                <h2 className='text-3xl font-bold'>Get Started with uber</h2>
                <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default home
