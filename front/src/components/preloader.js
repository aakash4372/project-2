import React from 'react'
import Lottie from 'lottie-react'
import loader from '../Animation - 1731770743239.json'
import './preloader.css'

export default function Preloader() {
  return (
    <div>
        <Lottie animationData={loader} loop={true} className='lottie'/>    
    </div>
  )
}
