import React from 'react'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({
    weight: '500',
    subsets: ['latin'],
})

export default function H1({ children }) {
    return (
        <h1 className={`text-center text-[44px] leading-[52px] -tracking-[0.88px] md:text-[64px] md:leading-[68px] md:-tracking-[1.28px] sm:text-[52px] sm:leading-[58px] sm:-tracking-[1.04px] text-[#11023B] ${publicSans.className}`}>
            {children}
        </h1>
    )
}
