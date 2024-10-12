"use client"
import React from 'react'
import { styles } from '../main-page/page'

const Contact = () => {
  return (
    <div>
        <div className="">
            <h1 style={styles.heading}>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br />industry.</p>
        </div>
        <div className="bg-[#1C140F] p-8 rounded-xl flex justify-between items-center mt-10">
  <div>
    <h1 style={styles.heading}>Stay in the loop</h1>
    <p>
      Subscribe to receive the latest news and updates about TDA. <br /> We
      promise not to spam you!
    </p>
  </div>

  <div className="flex items-center bg-gray-100 p-2.5 rounded-lg w-full max-w-sm">
    <input
      type="email"
      placeholder="Enter email address"
      className="bg-transparent outline-none flex-grow p-2 text-gray-800 placeholder-gray-400"
    />
    <button className="bg-orange-600 text-white py-2 px-4 ml-2 rounded-lg hover:bg-orange-700 transition-colors">
      Continue
    </button>
  </div>
</div>

    </div>
  )
}

export default Contact