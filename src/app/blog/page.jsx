import React from 'react'
import Navbar from '../components/global/Navbar'
import TagText from '../components/reuseable/TagText'
import H2 from '../components/reuseable/H2'
import P from '../components/reuseable/P'
import H5 from '../components/reuseable/H5'
import SmP from '../components/reuseable/SmP'
import Link from 'next/link'
import H6 from '../components/reuseable/H6'
import H1 from '../components/reuseable/H1'
import H4 from '../components/reuseable/H4'
import GrayText from '../components/reuseable/GrayText'
import GraySm from '../components/reuseable/GraySm'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import Divider from '../components/small-components/Divider'
import FlowbaseBlogCard from '../components/home/FlowbaseBlogCard'
import EmailSubmit from '../components/home/EmailSubmit'
import Footer from '../components/global/Footer'

export default function page() {
  return (
    <div className='mx-1 md:mx-2 rounded-t-3xl  bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)]'>

      <section className='px-4 sm:px-10'>
        <div className='h-fit mt-3 rounded-3xl pb-3 relative overflow-hidden '>

          {/* nav  */}
          <Navbar />

          {/* hero  */}
          <section className='flex flex-col gap-16 max-w-[1040px] mx-auto  pt-12'>

            <div className='flex flex-col items-center text-center justify-center pb-4' >
              <TagText>Flowbase Blogs & Resources</TagText>
              <div className='md:w-[80%] mx-auto mt-5'>
                <H1>
                  Discover articles and tutorials to help you build better.
                </H1>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-10 px-8 lg:py-8 py-10 rounded-3xl bg-white shadow border border-gray-600/10  max-w-[800px]  mx-auto">
              <div>
                <img src="/image/flowbaseThumbnail1.png" className='rounded-3xl ' alt="" />
              </div>

              <div className='flex flex-col gap-3'>
                <div className='flex items-center'>
                  <div className='py-[2px] px-2 rounded-full bg-indigo-200/30 text-xs'>
                    <p>Resources</p>
                  </div>
                  <GrayText> . June 2, 2025</GrayText>
                </div>
                <H4>Introducing the Flowbase Icon Library</H4>
                <GraySm>
                  The ultimate icon resource for designers — all the best open-source icon libraries combined in one powerful, easy-to-use platform.
                </GraySm>
                <ButtonPrimary>Read Article</ButtonPrimary>
              </div>
            </div>

          </section>
        </div>
      </section>

      <div className='max-w-[800px] mx-auto'>
        <Divider />
      </div>

      <div className="max-w-[800px] mx-auto px-8">

        {/* buttons  */}
        <div className='flex gap-5 items-center justify-center mb-16 text-nowrap flex-wrap'>
          <button className='py-[5px] px-[13px] rounded-full  border border-indigo-600/20 bg-indigo-50 cursor-pointer hover:shadow active:scale-95'><H6>All Topic</H6></button>
          <button className='py-[5px] px-[13px] rounded-full  border border-transparent cursor-pointer hover:shadow active:scale-95'><H6>Articles</H6></button>
          <button className='py-[5px] px-[13px] rounded-full  border border-transparent cursor-pointer hover:shadow active:scale-95'><H6>Resources</H6></button>
          <button className='py-[5px] px-[13px] rounded-full  border border-transparent cursor-pointer hover:shadow active:scale-95'><H6>Tutorials</H6></button>
        </div>

        {/* cards  */}
        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          <FlowbaseBlogCard />
          <FlowbaseBlogCard />
          <FlowbaseBlogCard />
          <FlowbaseBlogCard />
          <FlowbaseBlogCard />
          <FlowbaseBlogCard />
        </div>

        <div className='mx-auto flex justify-center'>
          <ButtonPrimary>Next</ButtonPrimary>
        </div>


        <div className='my-20 mx-auto'>
          <EmailSubmit />
        </div>
      </div>

      <Footer />

    </div>
  )
}
