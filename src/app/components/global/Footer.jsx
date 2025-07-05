import Link from 'next/link'
import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWebflow } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



export default function Footer() {
    return (
        <div className='w-full bg-white px-10 md:px-16 py-14 text-gray-600 mx-auto'>

            <div className='mb-14 flex flex-col gap-6 items-center md:flex-row'>
                <h3 className='text-xl text-gray-800 font-semibold'>Diversekit</h3>
                <p className='md:mx-3 md:px-6 md:border-x-2 border-gray-700/30'>Build Better, Faster</p>

                <div className='flex items-center gap-6 '>
                    <Link href={''}><FaGithubAlt size={20} /></Link>
                    <Link href={''}><FaXTwitter size={20} /></Link>
                    <Link href={''}><FaWebflow size={20} /></Link>
                    <Link href={''}><FaDribbble size={20} /></Link>
                    <Link href={''}> <FaInstagram size={20} /></Link>
                    <Link href={''}> <FaLinkedin size={20} /></Link>
                    <Link href={''}><FaFacebookF size={20} /></Link>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-3 md:grid-cols-4">
                <ul className='flex flex-col gap-5 text-sm'>
                    <li className='mb-3 text-[16px] font-semibold'>Explore</li>
                    <li><Link href={''} >All Components</Link></li>
                    <li><Link href={''} >Wireframes</Link></li>
                    <li><Link href={''} >UI Elements</Link></li>
                    <li><Link href={''} >Illustrations</Link></li>
                    <li><Link href={''} >Icons</Link></li>
                </ul>
                <ul className='flex flex-col gap-5 text-sm'>
                    <li className='mb-3 text-[16px] font-semibold'>Explore</li>
                    <li><Link href={''} >All Components</Link></li>
                    <li><Link href={''} >Wireframes</Link></li>
                    <li><Link href={''} >UI Elements</Link></li>
                    <li><Link href={''} >Illustrations</Link></li>
                    <li><Link href={''} >Icons</Link></li>
                </ul>
                <ul className='flex flex-col gap-5 text-sm'>
                    <li className='mb-3 text-[16px] font-semibold'>Explore</li>
                    <li><Link href={''} >All Components</Link></li>
                    <li><Link href={''} >Wireframes</Link></li>
                    <li><Link href={''} >UI Elements</Link></li>
                    <li><Link href={''} >Illustrations</Link></li>
                    <li><Link href={''} >Icons</Link></li>
                </ul>
                <ul className='flex flex-col gap-5 text-sm'>
                    <li className='mb-3 text-[16px] font-semibold'>Explore</li>
                    <li><Link href={''} >All Components</Link></li>
                    <li><Link href={''} >Wireframes</Link></li>
                    <li><Link href={''} >UI Elements</Link></li>
                    <li><Link href={''} >Illustrations</Link></li>
                    <li><Link href={''} >Icons</Link></li>
                </ul>
            </div>
        </div>
    )
}
