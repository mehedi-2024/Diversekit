import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '500',
    subsets: ['latin'],
})

export default function H6({ children }) {
    return (
        <h6 className={`text-[14px] leading-[20px] text-[#11023B] ${inter.className}`}>
            {children}
        </h6>
    )
}
