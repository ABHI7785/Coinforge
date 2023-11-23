import React from 'react'
import './Style/Mapgogle.css'

const Mapgoogle = () => {
  return (

         <div className='gmap'>
            <h2>LOCATION</h2>
      <iframe
        title="Embedded Google Map"
        width=""
        height=""
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7824.694580214603!2d75.75143428674176!3d11.30930670549462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65fac66f6cd55%3A0xdf5caf4c829c92a1!2sPavangad%2C%20Kerala%20673021!5e0!3m2!1sen!2sin!4v1695467900543!5m2!1sen!2sin"
        allowfullscreen=""
      ></iframe>
    </div>
    
  )
}

export default Mapgoogle