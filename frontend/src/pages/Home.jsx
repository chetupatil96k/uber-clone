import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import ConfirmRide from '../components/ConfirmedRide';


import {useGSAP} from '@gsap/react';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const WaitingForDriverRef = useRef(null)
  const panelClose = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const submitHandler = (e)=>{
   

       e.preventDefault()

  }

  useGSAP (function (){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        opacity:1,
        padding:24
      })
      gsap.to(panelClose.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        opacity:0,
        padding:0
      })
      gsap.to(panelClose.current,{
        opacity:0
      })
    }
  },[panelOpen,panelClose])

 
  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: 0,            // slide up
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: "100%",       // slide down
        duration: 0.5,
        ease: "power3.in"
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        y: 0,            // slide up
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        y: "100%",       // slide down
        duration: 0.5,
        ease: "power3.in"
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        y: 0,            // slide up
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        y: "100%",       // slide down
        duration: 0.5,
        ease: "power3.in"
      });
    }
  }, [vehicleFound]);


  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        y: 0,            // slide up
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        y: "100%",       // slide down
        duration: 0.5,
        ease: "power3.in"
      });
    }
  }, [waitingForDriver]);


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
      <div  className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div  className=' flex flex-col justify-end  absolute   top-0 h-screen w-full '>
        <div className='h-[30%] p-5 relative bg-white'>
        <h5 
        ref={panelClose}
        onClick={()=>{
          setPanelOpen(false)
        }}
        className='absolute opacity-0 top-6 right-6 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
        <h4 className='text-2xl font-semibold' >Find a trip</h4>
        <form action="" onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-600 rounded-full"></div>
          <input
          onClick={()=>{
            setPanelOpen(true)
          }} 
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 '
           type="text" 
           placeholder='Add a pick-up location' 
           />

          <input 
          onClick={()=>{
            setPanelOpen(true)
          }} 
          
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
           type="text" 
           placeholder='Enter your destination' 
           />

        </form>
        </div>
        <div ref={panelRef} className='h-0 opacity-0  bg-white'>
          
          <LocationSearchPanel  setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel}  />
        
        </div>
                          
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}  />
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef}  className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-12'>
        <LookingForDriver  setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={WaitingForDriverRef}   className='fixed w-full z-10 bottom-0  p-3 bg-white px-3 py-6 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver}   />
      </div>
      
      

    </div>
  )
}

export default Home
