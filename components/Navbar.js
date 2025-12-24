import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-purple-700 flex justify-between items-center text-white px-12 py-3 fixed top-0 w-full'>
        <div className="logo font-bold text-2xl">
            <Link href="/">BitLinks</Link>
        </div>
        <ul className='flex justify-center items-center gap-4 '>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                <Link href="/shorten"><button className='cursor-pointer bg-purple-500 shadow-lg rounded-lg px-3 py-1 text-[16px] font-semibold'>Try Now</button></Link>
                <Link href="/github" target='_blank' rel="noopener noreferrer"><button className='cursor-pointer bg-purple-500 shadow-lg rounded-lg px-3 py-1 text-[16px] font-semibold'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
