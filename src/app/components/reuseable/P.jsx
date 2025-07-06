import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
})

export default function P({ children }) {
    return (
        <p className={`text-[16px] leading-[24px] -tracking-[0.16px] text-[#262556] ${inter.className}`}>
            {children}
        </p>
    )
}
