import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import FinishRide from '../components/FinishRide'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)


    useGSAP(() => {
        if (finishRidePanel) {
          gsap.to(finishRidePanelRef.current, {
            y: 0,            // slide up
            duration: 0.5,
            ease: "power3.out"
          });
        } else {
          gsap.to(finishRidePanelRef.current, {
            y: "100%",       // slide down
            duration: 0.5,
            ease: "power3.in"
          });
        }
      }, [finishRidePanel]);



  return (
    <div className='h-screen relative'>
        
   
      <div className='fixed  w-screen p-6  top-0 flex items-center justify-between '>
        <img className='w-20 ' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <Link to='/captain-login' className='   h-10 w-10 bg-white flex items-center justify-center rounded-full'>
    <i className="text-2xl font-medium ri-logout-box-line"></i>
    </Link>
      </div>
   


      <div className='h-4/5'>
      <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      
          <div className='h-1/5 p-6 bg-yellow-300 items-center relative flex justify-between' onClick={()=>{
              setFinishRidePanel(true)
          }}>
                
          <h5 onClick={()=>{
     
    }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-400 ri-arrow-up-wide-line"></i></h5>


             <h4 className='text-xl font-semibold'>4 KM Away</h4> 
             <button className=' p-3 px-10 rounded-lg font-semibold text-white bg-green-300'>Complete Ride </button> 
                
          

     </div>

     <div ref={finishRidePanelRef}  className='fixed w-full z-10 bottom-0 translate-y-full  p-3 bg-white px-3 py-10 pt-12'>
           <FinishRide setFinishRidePanel={setFinishRidePanel}  />
          </div>

    </div>
  )
}

export default CaptainRiding
