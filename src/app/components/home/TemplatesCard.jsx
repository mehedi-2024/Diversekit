import React from 'react'
import H5 from '../reuseable/H5'
import GraySm from '../reuseable/GraySm'

export default function TemplatesCard() {
    return (
        <div className='w-full'>
            <img src="/image/template1.png" className='rounded-xl' alt="" />

            <div className='flex items-center gap-1 mt-3 mb-1'>
                <H5>Luvy :</H5> <span className='text-gray-500'>$49.00</span>
            </div>

            <GraySm>Figma Webflow</GraySm>
        </div>
    )
}
