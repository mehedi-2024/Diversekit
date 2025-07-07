import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
})

export default function GrayText({ children }) {
    return (
        <p className={`text-[16px] leading-[24px] -tracking-[0.16px] text-gray-500 ${inter.className}`}>
            {children}
        </p>
    )
}
