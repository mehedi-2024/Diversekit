import React from 'react'
import H6 from '../reuseable/H6'
import SmP from '../reuseable/SmP'
import GraySm from '../reuseable/GraySm'
import { FaRegCheckCircle } from "react-icons/fa";
import ButtonPrimary from '../buttons/ButtonPrimary'


export default function PriceCardFree() {
    return (
        <div className='max-w-[500px] w-full mx-auto bg-white px-1 py-1 rounded-2xl overflow-hidden shadow border border-gray-700/10'>
            <div className='px-6 py-7 flex flex-col'>
                <div className='flex items-center gap-[6px] mb-3'>
                    <H6>Starter</H6>
                </div>

                <div className='text-[#36364A] flex items-end gap-2 mb-2'>
                    <h2 className="text-4xl leading-[40px] font-medium">Free</h2>                </div>

                <div className="mb-4">
                    <GraySm>
                        A free account grants you access to exclusive free content. Sign up and start copying from our free collection.
                    </GraySm>
                </div>

                <ButtonPrimary>Get started with Free</ButtonPrimary>

                {/* bashed  */}
                <p className='mt-6 mb-5 border-t border-dashed border-gray-300'></p>


                {/* all list  */}
                <div>
                    <GraySm>Components:</GraySm>
                    <ul className="pt-3 flex flex-col gap-3 mb-5">
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Premium Components</SmP> <GraySm>3,500+</GraySm>
                            </div>
                        </li>
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Chalk Wireframes</SmP> <GraySm></GraySm>
                            </div>
                        </li>
                    </ul>

                    <GraySm>Other Products:</GraySm>
                    <ul className="pt-3 flex flex-col gap-3 mb-5">
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Premium Illustrations</SmP> <GraySm>100+</GraySm>
                            </div>
                        </li>
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Premium Icons</SmP> <GraySm>15,000+</GraySm>
                            </div>
                        </li>
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Premium Boosters</SmP> <GraySm></GraySm>
                            </div>
                        </li>
                    </ul>

                    <GraySm>App & Tools:</GraySm>
                    <ul className="pt-3 flex flex-col gap-3 mb-5">
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Chrome Extension</SmP> <GraySm></GraySm>
                            </div>
                        </li>
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Booster Application</SmP> <GraySm></GraySm>
                            </div>
                        </li>
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Figma Plugin</SmP> <GraySm></GraySm>
                            </div>
                        </li>
                    </ul>

                    <GraySm>Other:</GraySm>
                    <ul className="pt-3 flex flex-col gap-3 mb-5">
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Priority Support</SmP> <GraySm></GraySm>
                            </div>
                        </li>
                        <li className="flex items-center gap-[10px]">
                            <FaRegCheckCircle size={15} className='text-gray-600' />
                            <div className="flex items-center gap-1">
                                <SmP>Discounts to Partner Tools</SmP> <GraySm></GraySm>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
