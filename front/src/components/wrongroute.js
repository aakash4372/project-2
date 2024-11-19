import React from 'react'
import Lottie from 'lottie-react'
import wrong from '../Animation - 1731771580317.json'
import './preloader.css'
export default function Wrongroute() {
  return (
    <div>
        <Lottie animationData={wrong} loop={true} className='wrong-lottie'/>                 
    </div>
  )
}
