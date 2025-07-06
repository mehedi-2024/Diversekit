import React from 'react'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({
    weight: '500',
    subsets: ['latin'],
})

export default function H3({ children }) {
    return (
        <h3 className={`text-[44px] leading-[44px] text-[#11023B] ${publicSans.className}`}>
            {children}
        </h3>
    )
}
