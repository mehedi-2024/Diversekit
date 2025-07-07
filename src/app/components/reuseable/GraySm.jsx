import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
})

export default function GraySm({ children }) {
    return (
        <p className={`text-[14px] leading-[20px] -tracking-[0.14px] text-gray-500 ${inter.className}`}>
            {children}
        </p>
    )
}
