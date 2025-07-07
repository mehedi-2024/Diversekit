import React from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import EmailSubmit from '../components/home/EmailSubmit'
import TagText from '../components/reuseable/TagText'
import H1 from '../components/reuseable/H1'
import P from '../components/reuseable/P'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import FaqCompo from '../components/reuseable/component/FaqCompo'
import HelpTopics from '../components/support_page/HelpTopic'
import PluginSupport from '../components/support_page/PluginSupport'

export default function page() {
    return (
        <div className=' mx-1 md:mx-2 pt-2 mt-1 '>
            <div className="bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)] rounded-t-3xl">

                {/* hero  */}
                <section className='overflow-hidden px-4 lg:px-10'>
                    <Navbar />

                    <div className='h-fit max-w-[1440px] mx-auto mt-3 pb-3 relative overflow-hidden '>

                        <img src="/image/ring.png" className='mx-auto mt-6 sm:mt-12 w-96' alt="" />

                        <section className='flex flex-col items-center mt-10 pb-4 mb-16' >
                            <TagText>We're here to help!</TagText>
                            <div className="mt-5 mb-1">
                                <H1>
                                    Flowbase Help Center
                                </H1>
                            </div>
                            <div className="text-center mb-6">
                                <P>
                                    Welcome to our Support Centre. Please check our articles to find answers to common questions. <br className='hidden md:inline' /> Want to contact us directly? Please get in touch via our contact page
                                </P>
                            </div>
                            <ButtonPrimary>Browse Support Articles</ButtonPrimary>
                        </section>


                    </div>
                </section>

                <section className='mb-10'>
                    
                    <PluginSupport />
                </section>

                {/* helpTopic  */}
                <section className='max-w-[980px] mx-auto'>
                    <HelpTopics />
                </section>

                {/* faq  */}
                <div className='px-4 sm:px-10 max-w-[1440px] mx-auto'>
                    {/* FAQ  */}
                    <section>
                        <FaqCompo />
                    </section>

                    {/* email submit  */}
                    <section className='my-10 mb-16'>
                        <EmailSubmit />
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    )
}