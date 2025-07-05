'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
// import logo from '/icon/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { HiBars3CenterLeft } from "react-icons/hi2";



const Navbar = () => {
    const [isOpenProduct, setIsOpenProduct] = useState(false)
    const [isOpenResources, setIsOpenResources] = useState(false)
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)
    return (
        <div className='relative'>

            {/* for desktop */}
            <nav className={`flex justify-between items-center absolute top-0 left-0 bg-purple-100 h-16 pt-3 w-full z-20`}>
                {/* left side */}
                <div>
                    {/* <Image src={logo} className='w-full h-full' alt='logo' /> */}
                    <h2 className='text-2xl font-bold'>Diversekit</h2>
                </div>
                {/* center  */}
                <div className='hidden lg:flex'>
                    <ul className='flex gap-8 text-sm text-gray-700 relative'>
                        <li>
                            <Link href="">Explore</Link>
                        </li>
                        <li className=''>
                            <button onClick={() => {
                                setIsOpenProduct(!isOpenProduct)
                                setIsOpenResources(false)
                            }} className='flex items-center gap-2 cursor-pointer'>Product <span className={`duration-200 ${isOpenProduct && 'rotate-180'}`}><IoIosArrowDown /></span></button>
                            {/* overflow menu  */}
                            <div className={` rounded-xl bg-white shadow-2xl absolute left-0 top-10 flex gap-16 p-10 text-gray-700 ${!isOpenProduct && 'hidden'}`}>
                                {/* left  */}
                                <ul className='space-y-2'>
                                    <li className='font-semibold mb-6'>Browse Products</li>
                                    <li className='flex items-center gap-4'><TiTick />Components</li>
                                    <li className='flex items-center gap-4'><TiTick />Wireframes</li>
                                    <li className='flex items-center gap-4'><TiTick />Illustrations</li>
                                    <li className='flex items-center gap-4'><TiTick /> UI Elements</li>
                                    <li className='flex items-center gap-4'><TiTick />Icons</li>
                                </ul>
                                {/* right  */}
                                <ul className='space-y-2'>
                                    <li className='font-semibold mb-6'>
                                        <button className='py-1 px-3 -mt-2 rounded-md border border-gray-800/50'>Get Started</button>
                                    </li>
                                    <li className='flex items-center gap-4'><TiTick />Templates</li>
                                    <li className='flex items-center gap-4'><TiTick />Wireframes</li>
                                    <li className='flex items-center gap-4'><TiTick />Boosters</li>
                                    <li className='flex items-center gap-4'><TiTick /> Pricing</li>
                                    <li className='flex items-center gap-4'><TiTick />Icons</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button onClick={() => {
                                setIsOpenResources(!isOpenResources)
                                setIsOpenProduct(false)
                            }} className='flex items-center gap-2 cursor-pointer'>Resources <span className={`duration-200 ${isOpenResources && 'rotate-180'}`}><IoIosArrowDown /></span></button>
                            {/* overflow menu  */}
                            <div className={` rounded-xl bg-white shadow-2xl absolute left-0 top-10 flex gap-16 p-10 text-gray-700 ${!isOpenResources && 'hidden'}`}>
                                {/* left  */}
                                <ul className='space-y-2'>
                                    <li className='font-semibold mb-6'>Browse Products</li>
                                    <li className='flex items-center gap-4'><TiTick />Components</li>
                                    <li className='flex items-center gap-4'><TiTick />Wireframes</li>
                                    <li className='flex items-center gap-4'><TiTick />Illustrations</li>
                                    <li className='flex items-center gap-4'><TiTick /> UI Elements</li>
                                    <li className='flex items-center gap-4'><TiTick />Icons</li>
                                </ul>
                                {/* right  */}
                                <ul className='space-y-2'>
                                    <li className='font-semibold mb-6'>
                                        <button className='py-1 px-3 -mt-2 rounded-md border border-gray-800/50'>Get Started</button>
                                    </li>
                                    <li className='flex items-center gap-4'><TiTick />Templates</li>
                                    <li className='flex items-center gap-4'><TiTick />Wireframes</li>
                                    <li className='flex items-center gap-4'><TiTick />Boosters</li>
                                    <li className='flex items-center gap-4'><TiTick /> Pricing</li>
                                    <li className='flex items-center gap-4'><TiTick />Icons</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="">Pricing</Link>
                        </li>
                    </ul>
                </div>
                {/* right side */}
                <div className='flex items-center gap-5'>
                    <div className='items-center gap-5 text-sm hidden sm:flex'>
                        <button className='px-4 py-2 rounded-lg  cursor-pointer hover:bg-gray-100'>Log in</button>
                        <button className='px-4 py-2 rounded-lg bg-white border border-purple-900/20 hover:shadow-lg cursor-pointer'>Sign Up</button>
                    </div>

                    <div className='relative z-50'>
                        <div onClick={() => {
                            setIsOpenMobileNav(!isOpenMobileNav)
                            setIsOpenProduct(false)
                            setIsOpenResources(false)
                        }} className={`p-2 rounded border-purple-900/30 active:scale-90 duration-100 hover:shadow-gray-600 shadow  cursor-pointer lg:hidden ${isOpenMobileNav ? 'bg-purple-500 text-white' : 'bg-purple-50 text-gray-700  shadow-purple-300'}`}>
                            <HiBars3CenterLeft size={20} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* mobile menu  */}
            <div className={`w-[90%] rounded-2xl border border-gray-600/30 shadow-xl shadow-gray-900/50 h-fit bg-white absolute duration-600 left-1/2 -translate-x-1/2 z-10 overflow-hidden lg:hidden ${isOpenMobileNav ? 'top-20' : '-top-96'}`}>
                <ul className='text-gray-600 p-3 space-y-2'>
                    {/* menu item 1 */}
                    <li className='flex items-center gap-3 p-2 w-full rounded-lg bg-purple-100 cursor-pointer hover:bg-purple-200 active:scale-[99%]'>
                        <div className={`p-2 w-fit rounded border-purple-900/30 shadow lg:hidden bg-white text-gray-700`}>
                            <HiBars3CenterLeft size={20} />
                        </div>
                        <div>
                            <h5 className='text-[16px]'>Explore</h5>
                            <p className='text-[14px]'>See our collection of assets</p>
                        </div>
                    </li>
                    {/* menu item 2 */}
                    <li className=' w-full rounded-lg bg-purple-100 '>
                        <div onClick={() => {
                            setIsOpenProduct(!isOpenProduct)
                            setIsOpenResources(false)
                        }} className='flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-purple-200 active:scale-[99%]'>
                            <div className="flex items-center gap-3 ">
                                <div className={`p-2 w-fit rounded border-purple-900/30 shadow lg:hidden bg-white text-gray-700`}>
                                    <HiBars3CenterLeft size={20} />
                                </div>
                                <div>
                                    <h5 className='text-[16px]'>Products</h5>
                                    <p className='text-[14px]'>See our collection of assets</p>
                                </div>
                            </div>
                            <div className={`mr-2 duration-200 ${isOpenProduct && 'rotate-180'}`}>
                                <IoIosArrowDown />
                            </div>
                        </div>

                        <div className={`transition-all duration-300 ease-in-out text-sm  space-y-2 grid mx-4 ${isOpenProduct ? ' mt-6 pb-3 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <ul className='overflow-hidden'>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* menu item 3 */}
                    <li className=' w-full rounded-lg bg-purple-100 '>
                        <div onClick={() => {
                            setIsOpenResources(!isOpenResources)
                            setIsOpenProduct(false)
                        }} className='flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-purple-200 active:scale-[99%]'>
                            <div className="flex items-center gap-3 ">
                                <div className={`p-2 w-fit rounded border-purple-900/30 shadow lg:hidden bg-white text-gray-700`}>
                                    <HiBars3CenterLeft size={20} />
                                </div>
                                <div>
                                    <h5 className='text-[16px]'>Resourse</h5>
                                    <p className='text-[14px]'>See our collection of assets</p>
                                </div>
                            </div>
                            <div className={`mr-2 duration-200 ${isOpenProduct && 'rotate-180'}`}>
                                <IoIosArrowDown />
                            </div>
                        </div>

                        <div className={`transition-all duration-300 ease-in-out text-sm  space-y-2 grid mx-4 ${isOpenResources ? ' mt-6 pb-3 grid-rows-[1fr]' : 'grid-rows-[0fr] duration-300'}`}>
                            <ul className='overflow-hidden'>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                                <li className='flex items-center gap-3 p-2 rounded-lg  hover:bg-purple-200 cursor-pointer active:scale-[98%]'>
                                    <div><TiTick /></div>
                                    <p>Components</p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* menu item 4 */}
                    <li className='flex items-center gap-3 p-2 w-full rounded-lg bg-purple-100 cursor-pointer hover:bg-purple-200 active:scale-[99%]'>
                        <div className={`p-2 w-fit rounded border-purple-900/30 shadow lg:hidden bg-white text-gray-700`}>
                            <HiBars3CenterLeft size={20} />
                        </div>
                        <div>
                            <h5 className='text-[16px]'>Explore</h5>
                            <p className='text-[14px]'>See our collection of assets</p>
                        </div>
                    </li>
                </ul>

                <div className='flex items-center gap-4 px-3 my-5 sm:hidden'>
                    <button className='w-full rounded-lg text-center bg-indigo-500 shadow-lg border border-gray-700/10  cursor-pointer text-white font-semibold py-1 active:scale-95 hover:bg-white hover:text-gray-700 duration-200'>Login</button>

                    <button className='w-full rounded-lg text-center bg-white cursor-pointer text-gray-700 border border-gray-700/10 shadow-lg font-semibold py-1 active:scale-95 hover:bg-indigo-500 hover:text-white duration-200'>Sign up</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar