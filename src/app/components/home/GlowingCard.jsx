import React from 'react'
import H5 from '../reuseable/H5'

export default function GlowingCard() {
    return (
        <div className='relative w-full border border-gray-700/20 cursor-pointer h-64 rounded-lg overflow-hidden flex justify-center'>
            {/* Background image */}
            <div className='absolute inset-0 bg-[url("/image/phone.avif")] bg-cover bg-center'></div>

            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-white to-transparent from-15%'></div>

            {/* Content */}
            <div className='relative z-10 flex items-end h-full p-5'>
                <div className='text-center mb-4'>
                    <H5>Wireframes</H5>
                    <p className='text-gray-500 text-sm'>Browse Chalk System</p>
                </div>
            </div>
        </div>

    )
}
