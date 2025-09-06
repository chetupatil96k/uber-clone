import React from 'react'
import { Link } from 'react-router-dom'
import CaptainDetail from '../components/CaptainDetail'
import RidePopUp from '../components/RidePopUp'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
const CaptainHome = () => {

const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)


const ridePopUpPanelRef = useRef(null)
const confirmRidePopUpPanelRef = useRef(null)


useGSAP(() => {
  if (ridePopUpPanel) {
    gsap.to(ridePopUpPanelRef.current, {
      y: 0,            // slide up
      duration: 0.5,
      ease: "power3.out"
    });
  } else {
    gsap.to(ridePopUpPanelRef.current, {
      y: "100%",       // slide down
      duration: 0.5,
      ease: "power3.in"
    });
  }
}, [ridePopUpPanel]);


useGSAP(() => {
  if (confirmRidePopUpPanel) {
    gsap.to(confirmRidePopUpPanelRef.current, {
      y: 0,            // slide up
      duration: 0.5,
      ease: "power3.out"
    });
  } else {
    gsap.to(confirmRidePopUpPanelRef.current, {
      y: "100%",       // slide down
      duration: 0.5,
      ease: "power3.in"
    });
  }
}, [confirmRidePopUpPanel]);


  return (
    <div className='h-screen'>
   
      <div className='fixed  w-screen p-6  top-0 flex items-center justify-between '>
        <img className='w-20 ' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <Link to='/captain-login' className='   h-10 w-10 bg-white flex items-center justify-center rounded-full'>
    <i className="text-2xl font-medium ri-logout-box-line"></i>
    </Link>
      </div>
   


      <div className='h-3/5'>
      <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      
          <div className='h-2/5 p-6'>
                
                <CaptainDetail />
    
          </div>

          <div ref={ridePopUpPanelRef}  className='fixed w-full z-10 bottom-0 translate-y-full  p-3 bg-white px-3 py-10 pt-12'>
           <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
          </div>


          <div ref={confirmRidePopUpPanelRef}  className='fixed w-full h-screen z-10 bottom-0 translate-y-full  p-3 bg-white px-3 py-10 pt-12'>
           <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel} />
          </div>


    </div>
  )
}

export default CaptainHome
