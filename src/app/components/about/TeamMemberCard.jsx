import React from 'react'

export default function TeamMemberCard() {
    return (
        <div className='p-6 rounded-xl border border-gray-700/20 shadow flex items-center gap-4 bg-white group '>

            
                <img src="/image/man1.jpeg" className='w-16 h-16 rounded-lg' alt="" />
            


            <div>
                <h4 className='text-lg '>Tom Bekkers</h4>
                <p className='text-sm text-gray-600'>Founder at <span className='text-indigo-500'>@flowbase</span></p>
            </div>
        </div>
    )
}
