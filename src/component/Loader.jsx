import React from 'react'
import './Loader.css'

export default function Loader({displayMessage}) {

  
  return (
    <div className='loading-div'>{displayMessage}</div>
  )
}
