import React from 'react'
import Navbar from '../components/global/Navbar'
import NumberCard from '../components/about/NumberCard'
import Footer from '../components/global/Footer'
import EmailSubmit from '../components/home/EmailSubmit'
import TeamMemberCard from '../components/about/TeamMemberCard'
import TagText from '../components/reuseable/TagText'
import H1 from '../components/reuseable/H1'
import P from '../components/reuseable/P'

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
                            <TagText>Answer your question!</TagText>
                            <div className="mt-6 mb-2">
                                <H1>
                                    We’re empowering <br />
                                    creators to build better
                                </H1>
                            </div>
                            <div className="text-center">
                                <P>
                                    Our mission is to empower designers, developers and agencies with <br className='hidden md:inline'/> the tools they need to build their digital products more efficiently.
                                </P>
                            </div>
                            <button className='p-1 px-4 mt-8 rounded-lg bg-indigo-500 text-white'>Explore our Components</button>
                        </div>


                    </div>
                </section>
                <div className='max-w-[1440px] mx-auto px-3 md:px-10'>

                    <div className=''>


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
                            <div className='flex flex-col items-center gap-1 mt-24 mb-16 text-center'>
                                <TagText>Community</TagText>

                                <h1 className="sm:text-5xl text-4xl w-[90%] md:w-[75%] xl:w-[60%] text-indigo-950 font-semibold md:leading-16 leading-10 tracking-tight -mb-1">
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

                        {/* our team*/}
                        <section>
                            <div className='flex flex-col items-center gap-1 mt-24 mb-16  text-center'>
                                <h4 className='text-indigo-950 w-fit font-[500] px-2  rounded-full border border-gray-400/50 mb bg-purple-50 text-sm'>Our Team</h4>

                                <h1 className="sm:text-5xl text-4xl w-[90%] md:w-[75%] xl:w-[60%] text-indigo-950 font-semibold leading-16 tracking-tight -mb-1">
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

        </div>
    )
}
