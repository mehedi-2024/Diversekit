'use client'

import React, { useState } from 'react'
import Navbar from '../components/global/Navbar'
import TagText from '../components/reuseable/TagText'
import H1 from '../components/reuseable/H1'
import P from '../components/reuseable/P'
import PriceCard from '../components/pricing/PriceCardPaid'
import Footer from '../components/global/Footer'
import FaqCompo from '../components/reuseable/component/FaqCompo'
import EmailSubmit from '../components/home/EmailSubmit'
import ButtonGradient from '../components/buttons/ButtonGradient'
import H4 from '../components/reuseable/H4'
import GraySm from '../components/reuseable/GraySm'
import PriceCardFree from '../components/pricing/PricingCandFree'

export default function page() {

    const [isAnnually, setIsAnnually] = useState(false)
    return (
        <div className=' mx-1 md:mx-2 pt-2 mt-1 '>
            <div className="bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)] rounded-t-3xl">

                {/* hero  */}
                <section className='overflow-hidden px-4 lg:px-10'>
                    <Navbar />

                    <div className='h-fit max-w-[1440px] mx-auto mt-3 pb-3 relative overflow-hidden '>

                        <img src="/image/ring.png" className='mx-auto mt-6 sm:mt-12 w-96' alt="" />

                        <div className='flex flex-col items-center mt-10 pb-4 mb-16' >
                            <TagText>Join Flowbase Today</TagText>
                            <div className="mt-6 mb-2">
                                <H1>
                                    Start building today and <br className='hidden md:inline' /> save hours in the process
                                </H1>
                            </div>
                            <div className="text-center">
                                <P>
                                    Gain access to our complete library of components and tools. Unlimited <br className='hidden md:inline' /> combinations for you to build better, faster. New components and products <br className='hidden md:inline' /> added regularly, get started today!
                                </P>
                            </div>
                            <button className='p-1 px-4 mt-8 rounded-lg bg-indigo-500 text-white'>Learn about Pro</button>
                        </div>
                    </div>
                </section>

                <div className="px-6">

                    {/* pricing */}
                    <section className='py-[26px] px-[22px] max-w-[820px] mx-auto bg-white rounded-[42px]'>
                        {/* button  */}
                        <div className='max-w-[334px] w-full h-[39px] bg-[#F3F4FA] rounded-full p-[1px] flex gap-2 items-center justify-between mx-auto mb-6'>
                            {/* 1 */}
                            <button onClick={() => {
                                if (isAnnually) {
                                    setIsAnnually(!isAnnually)
                                }
                            }} className={`w-1/2 h-full text-sm flex justify-center items-center hover:text-gray-800 text-gray-500 rounded-full font-medium cursor-pointer duration-100 ${!isAnnually && 'bg-white text-gray-800 shadow'}`}>Monthly</button>

                            {/* 2 */}
                            <div onClick={() => {
                                if (!isAnnually) {
                                    setIsAnnually(!isAnnually)
                                }
                            }} className={`w-[163px] h-full text-sm flex justify-center items-center gap-2 hover:text-gray-800 text-gray-500 rounded-full font-medium cursor-pointer duration-100 ${isAnnually && 'bg-white text-gray-800 shadow'}`}>Annually <div className='cursor-pointer'><ButtonGradient>Save 30%</ButtonGradient></div></div>
                        </div>

                        {/* card  */}
                        <div className="grid lg:grid-cols-2 gap-5">
                            <PriceCardFree />
                            <PriceCard />
                        </div>

                        <div className='flex justify-center'>
                            <button className='py-[6px] px-[10px] bg-white border border-gray-600/20 shadow text-xs text-gray-400 leading-[16px] rounded-md font-medium mt-[28px] '>Payment Powered by <span className='text-sm font-bold text-gray-500'>stripe</span></button>
                        </div>
                    </section>


                    {/* browser card  */}
                    <section className='mt-[126px] mb-[148px]'>
                        <div className="max-w-[580px] rounded-2xl bg-indigo-50 border border-indigo-600/10 shadow pt-[37px] pb-[41px] px-5 mx-auto">
                            <img src="/image/browser.png" className='max-w-[312px] block mx-auto' alt="" />

                            <div className="text-center my-5">
                                <H4>Usage Limit & Compatibility</H4>
                            </div>

                            <div className='max-w-[419px] mx-auto flex flex-col gap-3'>
                                {/* 1 */}
                                <div className='py-[6px] px-[10px] rounded-md bg-gray-100/20 shadow flex flex-col sm:flex-row items-center gap-2 sm:gap-6'>
                                    <p className="w-6 h-6 flex justify-center items-center text-xs bg-gray-100 border border-gray-600/20  rounded-full font-medium text-gray-600">1</p>

                                    <GraySm>Copying components is not supported on Safari</GraySm>
                                </div>

                                {/* 2 */}
                                <div className='py-[6px] px-[10px] rounded-md bg-gray-100/20 shadow flex flex-col sm:flex-row items-center gap-2 sm:gap-6'>
                                    <p className="min-w-6 h-6 flex justify-center items-center text-xs bg-gray-100 border border-gray-600/20  rounded-full font-medium text-gray-600">2</p>

                                    <GraySm>Monthly accounts are limited to 200 component copies month. Resets available upon review.</GraySm>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* brand logos */}
                    <section>
                        <div className='max-w-[979px] mx-auto flex flex-col justify-center mb-[100px]'>
                            <div className='text-center mb-9'>
                                <H4>Trusted by the best people & brands</H4>
                            </div>

                            {/* logos  */}
                            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                                <div className='py-6 flex justify-center'>
                                    <img src="/brandLogo/brand1.svg" className='w-[100px]' alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <FaqCompo />
                    </section>

                    <section className='py-20'>
                        <EmailSubmit />
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    )
}
