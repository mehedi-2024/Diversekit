
import React from 'react'

import Navbar from '../components/global/Navbar';
import TagText from '../components/reuseable/TagText';
import H1 from '../components/reuseable/H1';
import EmailSubmit from '../components/home/EmailSubmit';
import P from '../components/reuseable/P';
import Footer from '../components/global/Footer';
import H5 from '../components/reuseable/H5';
import GraySm from '../components/reuseable/GraySm';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';




export default function page() {

    return (
        <div className='mx-1 md:mx-2 rounded-t-3xl  bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)]'>

            <section>
                <div className='h-fit  mt-3 rounded-3xl pb-3 overflow-hidden px-5 lg:px-10'>

                    {/* nav  */}
                    <Navbar />

                    {/* hero  */}
                    <section className='flex flex-col items-center mt-10 pb-4 mb-16' >
                        <div>
                            <img src="/image/ring.png" alt="" />
                        </div>
                        <div>
                            <div className='w-fit mx-auto mb-4'>
                                <TagText>License & Notices</TagText>
                            </div>
                            <H1>
                                Flowbase Licences
                            </H1>
                            <div className='text-center mt-2'>
                                <P className='text-center w-[80%] lg:w-[48%] mt-2'>
                                    Have a specific question? Contact us at support(@)flowbase.co
                                </P>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <div className='px-6 sm:px-10 max-w-[1440px] mx-auto'>

                <section>
                    <div className='space-y-4 max-w-[585px] mx-auto'>
                        {/* link  */}
                        <div className='p-6 rounded-xl bg-white shadow flex justify-between items-center cursor-pointer hover:shadow-md'>
                            <div className='space-y-[4px]'>
                                <H5>Licence</H5>
                                <GraySm>Read before using our products. Happy creating!</GraySm>
                            </div>
                            <FaArrowRightLong size={17} className='text-gray-500'/>
                        </div>
                        {/* link  */}
                        <div className='p-6 rounded-xl bg-white shadow flex justify-between items-center cursor-pointer hover:shadow-md'>
                            <div className='space-y-[4px]'>
                                <H5>Licence</H5>
                                <GraySm>Read before using our products. Happy creating!</GraySm>
                            </div>
                            <FaArrowRightLong size={17} className='text-gray-500'/>
                        </div>
                        {/* link  */}
                        <div className='p-6 rounded-xl bg-white shadow flex justify-between items-center cursor-pointer hover:shadow-md'>
                            <div className='space-y-[4px]'>
                                <H5>Licence</H5>
                                <GraySm>Read before using our products. Happy creating!</GraySm>
                            </div>
                            <FaArrowRightLong size={17} className='text-gray-500'/>
                        </div>
                        {/* link  */}
                        <div className='p-6 rounded-xl bg-white shadow flex justify-between items-center cursor-pointer hover:shadow-md'>
                            <div className='space-y-[4px]'>
                                <H5>Licence</H5>
                                <GraySm>Read before using our products. Happy creating!</GraySm>
                            </div>
                            <FaArrowRightLong size={17} className='text-gray-500'/>
                        </div>
                        {/* link  */}
                        <div className='p-6 rounded-xl bg-white shadow flex justify-between items-center cursor-pointer hover:shadow-md'>
                            <div className='space-y-[4px]'>
                                <H5>Licence</H5>
                                <GraySm>Read before using our products. Happy creating!</GraySm>
                            </div>
                            <FaArrowRightLong size={17} className='text-gray-500'/>
                        </div>
                    </div>
                </section>

                {/* email submit  */}
                <section className='my-28'>
                    <EmailSubmit />
                </section>
            </div>

            {/* footer  */}
            <section>
                <Footer />
            </section>
        </div>
    )
}


