'use client'

import React, { useState } from 'react'
import Navbar from '../global/Navbar'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiFramer } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";



export default function Hero() {

    return (
        <div className='h-fit bg-purple-100 max-w-[1440px] mx-auto mt-3 rounded-3xl pb-3 relative overflow-hidden'>

            <div className="h-16  px-5 lg:px-10">
                <Navbar />
            </div>

            <section className='flex flex-col items-center mt-10 pb-4' >
                <h4 className='text-indigo-950 w-fit font-[500] px-2  rounded-full border border-gray-400/50 mb-6 bg-purple-50'>Unlimited inspiration for creators</h4>
                <h1 className="md:text-6xl text-5xl w-[90%] md:w-[75%] xl:w-[60%] text-center text-indigo-950 font-semibold leading-16 tracking-tight
            ">
                    The creators library of components & templates
                </h1>
                <p className='text-center w-[80%] lg:w-[48%]'>
                    Flowbase is the world's largest premium library of Webflow, Figma & Framer components and tools. Build better, faster with Flowbase.
                </p>

                {/* searchbar */}
                <div className='w-[400px] mx-auto bg-white h-10 rounded-lg flex items-center gap-3 px-4 border-b border-purple-600/50 shadow-xl mt-6 hover:shadow-2xl focus-within:border-2 focus-within:border-purple-400'>
                    <FaMagnifyingGlass size={18} className='text-gray-700' />
                    <input type="text" className='bg-transparent outline-0 border-0 text-sm grow' name="" id="" placeholder='Search components (eg. Footer, Header)' />
                    <button className='p-2 rounded bg-purple-50 -m-2 hover:bg-purple-100 cursor-pointer active:scale-90'>
                        <FaArrowRightLong size={12} />
                    </button>
                </div>

                {/* web category */}
                <div className='flex gap-4 text-sm mt-6 mb-8'>
                    <div className='flex items-center gap-3 px-3 py-1 rounded-full bg-purple-50 border border-purple-300/70'>
                        <SiFramer />
                        <p className='font-semibold'>Framer</p>
                    </div>
                    <div className='flex items-center gap-3 px-3 py-1 rounded-full bg-purple-50 border border-purple-300/70'>
                        <FaWebflow />
                        <p className='font-semibold'>Webflow</p>
                    </div>
                    <div className='flex items-center gap-3 px-3 py-1 rounded-full bg-purple-50 border border-purple-300/70'>
                        <FaFigma />
                        <p className='font-semibold'>Figma</p>
                    </div>
                </div>

                {/* web sub-category  */}
                <div className='text-sm text-gray-600 flex flex-col gap-2 items-center '>
                    <div className='flex items-center gap-2'>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Components
                        </button>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Wireframes
                        </button>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Illustrations
                        </button>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            UI Elements
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Icons
                        </button>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Templates
                        </button>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Boosters
                        </button>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Pricing
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Chrome Extension
                        </button>
                        <button className="py-1 px-3 rounded-lg bg-white border border-purple-400/50 shadow cursor-pointer hover:shadow-xl active:scale-95">
                            Figma Plugin
                        </button>
                    </div>
                </div>
            </section>

            
        </div>
    )
}
