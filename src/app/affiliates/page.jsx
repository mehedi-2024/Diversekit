import React from 'react'
import H1 from '../components/reuseable/H1'
import P from '../components/reuseable/P'
import TagText from '../components/reuseable/TagText'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import H5 from '../components/reuseable/H5'
import ButtonSecondary from '../components/buttons/ButtonSecondary'
import H2 from '../components/reuseable/H2'
import H6 from '../components/reuseable/H6'

export default function page() {
    return (
        <div className=' mx-1 md:mx-2 pt-2 mt-1 '>
            <div className="bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)] rounded-t-3xl">

                {/* hero  */}
                <section className='overflow-hidden px-4 lg:px-10'>
                    <Navbar />

                    <div className='h-fit max-w-[1440px] mx-auto mt-3 pb-3 relative overflow-hidden '>

                        <img src="/image/ring.png" className='mx-auto mt-6 sm:mt-12 w-96' alt="" />

                        <div className='flex flex-col items-center mt-10 pb-4 mb-16' >
                            <TagText>Partner with Flowbase</TagText>
                            <div className="mt-6 mb-2">
                                <H1>
                                    Join our affiliates and <br className='hidden md:inline' /> let's grow together.
                                </H1>
                            </div>
                            <div className="text-center mb-6">
                                <P>
                                    Join Flowbase Affiliate Program. Partners earn a <span className='font-semibold'>20% commission</span>  for <br className='hidden md:inline' /> every payment by your referrals, learn more below.
                                </P>
                            </div>
                            <ButtonSecondary>Apply to be a Partner</ButtonSecondary>
                        </div>
                    </div>
                </section>

                {/* card section  */}
                <section>
                    <div className='px-10 max-w-[1180px] mx-auto mb-24'>
                        {/* sec head  */}
                        <div className='flex flex-col items-center mt-10 pb-4 mb-8 max-w-[650px] mx-auto' >
                            <TagText>Key Features</TagText>
                            <div className="mt-6 mb-2 text-center">
                                <H2>
                                    Why partner with us?
                                </H2>
                            </div>
                            <div className="text-center mb-6">
                                <P>
                                    We build top-tier tools for Webflow, Framer, and Figma creators. Share Flowbase with your customers, audience and earn easy, ongoing passive income.
                                </P>
                            </div>
                        </div>

                        {/* card container */}
                        <div className='grid lg:grid-cols-4 gap-5'>
                            {/* 1 */}
                            <div className='px-[33px] bg-indigo-50 border border-indigo-500/10 rounded-xl py-[45px]'>
                                <div className="w-10 h-10 mx-auto bg-white shadow rounded-full"></div>

                                <div>
                                    <h4 className='font-medium text-center text-lg leading-[28px] -tracking-[0.18px] mt-8 mb-2 text-[#11023B]'>Passive income</h4>
                                    <div className="text-center">
                                        <H6>Opportunity to generate passive income simply.</H6>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className='px-[33px] bg-indigo-50 border border-indigo-500/10 rounded-xl py-[45px]'>
                                <div className="w-10 h-10 mx-auto bg-white shadow rounded-full"></div>

                                <div>
                                    <h4 className='font-medium text-center text-lg leading-[28px] -tracking-[0.18px] mt-8 mb-2 text-[#11023B]'>Passive income</h4>
                                    <div className="text-center">
                                        <H6>Opportunity to generate passive income simply.</H6>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className='px-[33px] bg-indigo-50 border border-indigo-500/10 rounded-xl py-[45px]'>
                                <div className="w-10 h-10 mx-auto bg-white shadow rounded-full"></div>

                                <div>
                                    <h4 className='font-medium text-center text-lg leading-[28px] -tracking-[0.18px] mt-8 mb-2 text-[#11023B]'>Passive income</h4>
                                    <div className="text-center">
                                        <H6>Opportunity to generate passive income simply.</H6>
                                    </div>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className='px-[33px] bg-indigo-50 border border-indigo-500/10 rounded-xl py-[45px]'>
                                <div className="w-10 h-10 mx-auto bg-white shadow rounded-full"></div>

                                <div>
                                    <h4 className='font-medium text-center text-lg leading-[28px] -tracking-[0.18px] mt-8 mb-2 text-[#11023B]'>Passive income</h4>
                                    <div className="text-center">
                                        <H6>Opportunity to generate passive income simply.</H6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='flex flex-col items-center mt-10 pb-4 mb-16 max-w-[650px] mx-auto px-4' >
                        <TagText>Join Our Program</TagText>
                        <div className="mt-6 mb-2 text-center">
                            <H2>
                                Build a revenue stream!
                            </H2>
                        </div>
                        <div className="text-center mb-6">
                            <P>
                                Want to earn while you share Flowbase? Join our affiliate program and get 20% commission for every referral, paid out monthly for 12 months after they sign up. It’s completely free to apply, and it’s a great way to earn passive income by simply sharing something you already love.
                            </P>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    )
}
