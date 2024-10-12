"use client"
import React from 'react'
import { styles } from '../main-page/page'



const Services = () => {
  return (
    <div className="bg-[url(/mountain.png)] bg-cover p-10">
       <div className="container px-32 m-auto">
       <div className="writing">
        <div style={{textAlign:'center',marginTop:'50px',textShadow: '0 6px 10px rgba(0, 0, 0, 0.2)', display:'flex',flexDirection:'column',gap:'2vw'}}>
      <h1 style={styles.heading}>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,</p>
      </div>
            
        </div>
        <div className="service-icons">
           <div className="service-icon">
            <img src="/phone.png" alt="" className="bg-white p-4 rounded-full" />
            <p>Mobile Game Development</p>
            <img src="/arrow.png" alt="" />
           </div>
           <div className="service-icon">
            <img src="/computer.png" alt="" className="bg-white p-4 rounded-full" />
            <p>PC Game Development</p>
            <img src="/arrow.png" alt="" />
           </div>
           <div className="service-icon">
            <img src="/ps4.png" alt="" className="bg-white p-4 rounded-full" />
            <p>PS4 Game Development</p>
            <img src="/arrow.png" alt="" />
           </div>
           <div className="service-icon">
            <img src="/helmet.png" alt="" className="bg-white p-4 rounded-full" />
            <p>AR/VR Solutions</p>
            <img src="/arrow.png" alt="" />
           </div>
           <div className="service-icon">
            <img src="/ar-desing.png" alt="" className="bg-white p-4 rounded-full" />
            <p>AR/VR Solutions</p>
            <img src="/arrow.png" alt="" />
           </div>
           <div className="service-icon">
            <img src="/3D.png" alt="" className="bg-white p-4 rounded-full" />
            <p>3D Modelings</p>
            <img src="/arrow.png" alt="" />
           </div>
        </div>
       </div>
    </div>
  )
}

export default Services