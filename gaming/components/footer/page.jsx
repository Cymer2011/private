import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#070707] text-white py-12">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h1 className="text-4xl font-extrabold mb-4">LOGO</h1>
        <p className="text-gray-400 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="text-gray-400">@logo</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-gray-300 transition">Zeux</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="mt-2 text-gray-400">+908 89097 890</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300 transition"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-300 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-300 transition"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-300 transition"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div className="text-center mt-8">
      <p className="text-sm text-gray-400">Copyright © 2021 Lorem. All rights reserved.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer