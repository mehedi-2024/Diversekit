import React from 'react'

export default function ButtonGradient({ children }) {
    return (
        <button className='bg-gradient-to-r from-[#e7d9fb] via-[#e5d2f5] to-[#fce1e5] text-xs font-medium leading-[16px] text-[#11023B] py-[2px] px-[9px] rounded-full'>
            <span className="bg-gradient-to-r from-[#7e24fa] via-[#ab46fe] to-[#fa67b3] text-transparent bg-clip-text">{children}</span>
        </button>
    )
}
