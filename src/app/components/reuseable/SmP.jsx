import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
})

export default function SmP({ children }) {
    return (
        <p className={`text-[14px] leading-[20px]  text-[#262556] ${inter.className}`}>
            {children}
        </p>
    )
}
