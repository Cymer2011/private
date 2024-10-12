import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around p-4'>
        <h1 className='font-bold text-3xl '>LOGO</h1>
        <div className='box flex items-center gap-10'>
        <Link href={""}>Home</Link>
        <Link href={""}>About us</Link>
        <Link href={""}>Portfolio</Link>
        <Link href={""}>News</Link>
        <Link href={""} className='bg-[#DC7000] rounded-lg border border-[#DC7000] hover:bg-transparent hover:text-[#DC7000] inline-block p-3 px-5'>Contact us</Link>
        </div>
    </div>
  )
}

export default Navbar