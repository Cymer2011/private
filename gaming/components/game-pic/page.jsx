"use client"
import React from 'react'
import { styles } from '../main-page/page'


const GameImg = () => {
  return (
    <div style={{textAlign:'center',marginTop:'50px',textShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',}}>
        <div style={{textAlign:'center',marginTop:'50px',textShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',}}>
        <h2 style={styles.heading}>Our Recent Projects</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'1vw',marginTop:'10vh',marginBottom:'5vw'}}>
           <img src="/gaming-room.png" alt="" />
           <img src="/gaming-comp.png" alt="" />
           <img src="/comp.png" alt="" />
           <img src="/play.png" alt="" />
           <img src="/games.png" alt="" />
           <img src="/game-part.png" alt="" />
        </div>
        <button className="mb-20 bg-gray-900 border text-md border-gray-900 transition-all duration-500 hover:bg-transparent hover:border-white p-2 hover:text-[#E87D0E] px-6 rounded-xl">
          SEE ALL
        </button>
    </div>
  )
}

export default GameImg