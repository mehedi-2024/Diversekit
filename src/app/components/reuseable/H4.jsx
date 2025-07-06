import React from 'react'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({
    weight: '500',
    subsets: ['latin'],
})

export default function H4({ children }) {
    return (
        <h4 className={`text-[28px] leading-[32px] text-[#11023B] ${publicSans.className}`}>
            {children}
        </h4>
    )
}
