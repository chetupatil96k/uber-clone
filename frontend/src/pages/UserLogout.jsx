import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const UserLogout = () => {

    const token=localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITR_API_URL}/users/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
            
        }
        
    }).then((Response) =>{
        if (Response.status ===200){
            localStorage.removeItem('token')
            
            navigate('/login') 
        }
    })
    console.log(token)

  return (
    <div>
      User logout
    </div>
  )
}

export default UserLogout
