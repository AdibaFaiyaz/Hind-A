"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 

const Navbar = () => {
    return (
        <div className="top-0  w-full bg-transparent lg:relative z-50 dark:bg-neutral-300">
            <nav className="z-10 sticky top-0 left-0 right-0 lg:border-none mx-12">
        
                <div className="flex items-center justify-between">
                        <div className="">
                            <Image src={"/logo.png"} height={150} width={150} alt='logo'/>
                        </div>
                    
                    <div className="hidden lg:block">
                        <ul className="flex space-x-10 text-md font-bold text-black/60 dark:text-orange-950">
                            <li
                                className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link href='/'>Home</Link>
                            </li>
                            <li
                                className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <a href="#">Impact</a>
                            </li>
                            <li
                                className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link href='/about'>About</Link>
                            </li>
                            <li
                                className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex lg:items-center">
                        <Link href='/donate'><button type="button" className="text-white bg-[#63361c] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">DONATE</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
