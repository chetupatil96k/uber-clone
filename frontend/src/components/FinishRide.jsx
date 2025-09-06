import React from 'react'
import { Link } from 'react-router-dom'



const FinishRide = (props) => {
  return (
    <div>
    <h5 onClick={()=>{
      props.setFinishRidePanel(false)
    }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-5 '>Finish this Ride </h3>
    
    <div className='flex items-center justify-between rounded-lg border-2 border-yellow-400 p-2 mt-4'>
      <div className='flex items-center gap-3 ' >
          <img className='w-12 h-12 rounded-full object-cover' src="data:image/jpeg;base64,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" alt="" />
          <h2 className='text-lg font-medium '>Chetan Pawar</h2>
      </div>
      <h5 className='text-lg font-semibold'>2.2 km</h5>
    </div>


   <div className='flex gap-2 flex-col justify-between items-center'>
       
       <div className='w-full mt-5'>
         <div className='flex items-center gap-5 p-3 border-b-1 border-gray-500 '>
         <i className=" text-2xl ri-map-pin-fill"></i>
         <div>
          <h3 className='font-semibold text-lg'>562/11-A</h3>
          <p className='text-base -mt-1 text-gray-600'>Kaikondrahalli,Bengluru,Karnataka</p>
         </div>
         </div>
         
         
         <div className='flex items-center gap-5 p-3 border-b-1 border-gray-500'>
         <i className="text-md ri-checkbox-blank-fill"></i>
         <div>
          <h3 className='font-semibold text-lg'>Third Wave Coffe</h3>
          <p className='text-base -mt-1 text-gray-600'>17th Cross Rd,PWD Quarters,1st Sector,HSR Layout,Bengluru,Karnat</p>
         </div>
         </div>

         <div className='flex items-center gap-5 p-3 '>
         <i className="ri-currency-line text-2xl"></i>
         <div>
          <h3 className='font-semibold text-lg'>193.20</h3>
          <p className='text-base -mt-1 text-gray-600'>cash Cash</p>
         </div>
         </div>
       </div>
       
     <div>
    

        
       <div className=' mt-10 gap-5  w-full'>
       
        <Link to='/captain-home' className='w-full text-lg flex justify-center px-10 p-4 rounded-lg font-semibold text-white bg-green-600'>Finish Ride</Link> 

        <p className='text-gray-500 font-base text-xs mt-10 '>click on finish ride button if you complate the payment. </p>
        
       
       </div>

     </div>
   
   </div>
  </div>
  )
}

export default FinishRide
