import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '500',
    subsets: ['latin'],
})

export default function H5({ children }) {
    return (
        <h5 className={`text-[16px] leading-[24px] text-[#11023B] ${inter.className}`}>
            {children}
        </h5>
    )
}
