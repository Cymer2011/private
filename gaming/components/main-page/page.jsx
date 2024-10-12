"use client"
import React, { useState } from 'react';

const Main = () => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const { clientX, clientY } = event;
    const rect = card.getBoundingClientRect();

    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    
    const rotateX = (-y / rect.height) * 50; // Adjust the 15 for more or less tilt
    const rotateY = (x / rect.width) * 50;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform(''); // Reset transform when mouse leaves
  };

  return (
    <div>
      <div style={{textAlign:'center',marginTop:'50px',textShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',}}>
      <h1 style={styles.heading}>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</h1>
      </div>
        <div style={styles.card}>
      <h2 style={styles.heading}>Lorem Ipsum</h2>
      <p style={styles.paragraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </p>
    </div>
        <img src="/group.png" alt="" style={{
            position:'absolute',
            right:'300px',
            top:'1500'
            
        }} />
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        margin:'auto',
        marginTop:'100px',
        width: '1146px',
        height: '462px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        perspective: '1000px', // Required for 3D effect
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease', // Smooth transition
        transform,
        backgroundImage: 'url("/spider.png")',
        backgroundSize: 'cover', // Ensures the image covers the entire card
        backgroundPosition: 'center',
        position:'relative'
      }}>
    </div>
    </div>
  );
};
export const styles = {
    card: {
      marginTop:'50px',
      color: 'white', // White text color
      borderRadius: '8px', // Rounded corners
      width: '45%', // Width adjusts based on content
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
      padding:'20px'
      
    },
    heading: {
      margin: '0 0 10px 0', // Space below the heading
      fontSize: '24px', // Font size for heading
      fontWeight: 'bold', // Bold text for heading
      lineHeight:'55px'
    },
    paragraph: {
      margin: '0', // No additional margin below paragraph
      fontSize: '16px', // Font size for paragraph
      lineHeight: '1.5', // Line height for better readability
    },
  };

export default Main;
