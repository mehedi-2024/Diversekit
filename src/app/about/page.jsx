import React from 'react'
import Navbar from '../components/global/Navbar'
import NumberCard from '../components/about/NumberCard'
import Footer from '../components/global/Footer'
import EmailSubmit from '../components/home/EmailSubmit'
import TeamMemberCard from '../components/about/TeamMemberCard'

export default function page() {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto rounded-t-3xl  bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)]'>

                <div className='px-4 sm:px-10'>
                    <section>
                        <div className='h-fit max-w-[1440px] mx-auto mt-3 rounded-3xl pb-3 relative overflow-hidden  px-5 lg:px-10'>

                            <div className="h-16">
                                <Navbar />
                            </div>

                            <img src="/image/ring.png" className='mx-auto mt-12 w-96' alt="" />

                            <section className='flex flex-col items-center mt-10 pb-4 mb-16' >
                                <h4 className='text-indigo-950 w-fit font-[500] px-2  rounded-full border border-gray-400/50 mb-6 bg-purple-50'>Answer your question!</h4>
                                <h1 className="md:text-6xl text-5xl w-[90%] md:w-[75%] xl:w-[60%] text-center text-indigo-950 font-semibold leading-16 tracking-tight">
                                    We’re empowering <br />
                                    creators to build better
                                </h1>
                                <p className='text-center w-[80%] lg:w-[48%] mt-2'>
                                    Our mission is to empower designers, developers and agencies with the tools they need to build their digital products more efficiently.
                                </p>
                                <button className='p-1 px-4 rounded-lg bg-indigo-500 text-white mt-4'>Explore our Components</button>
                            </section>


                        </div>
                    </section>

                    {/* number section  */}
                    <section>
                        <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 lg:w-[85%] mx-auto'>
                            <NumberCard />
                            <NumberCard />
                            <NumberCard />
                        </div>
                    </section>

                    {/* join the community */}
                    <section>
                        <div className='flex flex-col items-center gap-1 mt-24 mb-16'>
                            <h4 className='text-indigo-950 w-fit font-[500] px-2  rounded-full border border-gray-400/50 mb bg-purple-50 text-sm'>Community</h4>

                            <h1 className="sm:text-5xl text-4xl w-[90%] md:w-[75%] xl:w-[60%] text-center text-indigo-950 font-semibold leading-16 tracking-tight -mb-1">
                                Join the Community
                            </h1>
                            <p>
                                Ask questions, find answers and share knowledge.
                            </p>
                            <button className='p-1 px-4 rounded-lg hover:shadow-lg shadow mt-4 border border-gray-700/30 cursor-pointer'>Become a Club Member</button>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[85%] mx-auto'>
                            {/* card 1 */}
                            <div className='px-5 py-16 rounded-xl border border-gray-700/10 text-center flex flex-col items-center bg-indigo-50 '>

                                <div className='w-[70] h-[70] rounded-xl bg-white shadow border border-gray-700/10'>

                                </div>
                                <h3 className="text-3xl  font-semibold text-indigo-950 mt-6 mb-2">Latest Updates</h3>

                                <p>
                                    Check out our updates page to learn about our recent product improvements and features.
                                </p>
                            </div>
                            {/* card 2 */}
                            <div className='px-5 py-16 rounded-xl border border-gray-700/10 text-center flex flex-col items-center bg-indigo-50 '>

                                <div className='w-[70] h-[70] rounded-xl bg-white shadow border border-gray-700/10'>

                                </div>
                                <h3 className="text-3xl  font-semibold text-indigo-950 mt-6 mb-2">Latest Updates</h3>

                                <p>
                                    Check out our updates page to learn about our recent product improvements and features.
                                </p>
                            </div>
                            {/* card 3 */}
                            <div className='px-5 py-16 rounded-xl border border-gray-700/10 text-center flex flex-col items-center bg-indigo-50'>

                                <div className='w-[70] h-[70] rounded-xl bg-white shadow border border-gray-700/10'>

                                </div>
                                <h3 className="text-3xl  font-semibold text-indigo-950 mt-6 mb-2">Latest Updates</h3>

                                <p>
                                    Check out our updates page to learn about our recent product improvements and features.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='flex flex-col items-center gap-1 mt-24 mb-16'>
                            <h4 className='text-indigo-950 w-fit font-[500] px-2  rounded-full border border-gray-400/50 mb bg-purple-50 text-sm'>Our Team</h4>

                            <h1 className="sm:text-5xl text-4xl w-[90%] md:w-[75%] xl:w-[60%] text-center text-indigo-950 font-semibold leading-16 tracking-tight -mb-1">
                                Meet our Crew
                            </h1>
                            <p>
                                Meet some of the main faces behind the flowbase products!
                            </p>
                        </div>
                    </section>

                    <section>
                        <div className='grid gap-4 md:grid-cols-2 max-w-[800px] mx-auto'>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </div>
                    </section>

                    <section className='my-20'>
                        <EmailSubmit />
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    )
}
