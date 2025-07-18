import Link from 'next/link'
import React from 'react'
import H5 from '../reuseable/H5'

export default function LatestComponentCard() {
    return (
        <div className='w-full'>
            <img src="/image/webpage.avif" className='rounded-xl' alt="" />

            <div className='flex gap-6 mt-4 items-baseline leading-4'>
                <H5>Sana Pricing 05</H5>
                <button className='cursor-pointer text-xs h-fit font-semibold text-purple-700 px-3 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-100 from-30% shadow'>Pro</button>
            </div>
            <div className="flex items-center flex-wrap mt-2">
                <p className="text-gray-500 text-sm">Added Jun 16,2025 in</p>
                <Link href={'#'} className='text-indigo-600 text-sm ml-1'>Pricing</Link>
            </div>
        </div>
    )
}
