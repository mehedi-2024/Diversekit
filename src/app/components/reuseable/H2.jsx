import React from 'react'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({
    weight: '500',
    subsets: ['latin'],
})

export default function H2({ children }) {
    return (
        <h2 className={`text-[48px] leading-[60px] md:text-[56px] md:leading-[56px] text-[#11023B] ${publicSans.className}`}>
            {children}
        </h2>
    )
}
