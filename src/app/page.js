import Footer from "./components/global/Footer";
import BrowseWireframes from "./components/home/BrowseWireframes";
import EmailSubmit from "./components/home/EmailSubmit";
import FlowbaseBlogCard from "./components/home/FlowbaseBlogCard";
import GlowingCard from "./components/home/GlowingCard";
import Hero from "./components/home/Hero";
import JoinClub from "./components/home/JoinClub";
import LatestComponentCard from "./components/home/LatestComponentCard";
import TemplatesCard from "./components/home/TemplatesCard";
import WireframesCard from "./components/home/WireframesCard";
import Divider from "./components/small-components/Divider";


export default function Home() {
  return (
    <div className="px-1">
      <Hero />

      <section className='grid max-w-[1440px] px-10 md:px-20 grid-cols-2 mt-6 lg:grid-cols-4 gap-4 mx-auto'>
        <GlowingCard />
        <GlowingCard />
        <GlowingCard />
        <GlowingCard />
      </section>

      <Divider />

      {/* latest components section  */}
      <section className="max-w-[1440px] mx-auto px-10 md:px-16 -mt-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Letest Copmonents</h2>
          <button className="cursor-pointer py-1 px-3 border rounded-md border-gray-700/20 shadow-lg text-gray-600">Browse all</button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
          <LatestComponentCard />
          <LatestComponentCard />
          <LatestComponentCard />
          <LatestComponentCard />
          <LatestComponentCard />
          <LatestComponentCard />
          <LatestComponentCard />
          <LatestComponentCard />
        </div>
      </section>

      <Divider />

      <div className="max-w-[1440px] mx-auto px-10 md:px-16">
        <section>
          <BrowseWireframes />
        </section>

        <Divider />

        {/* latest Wireframes section  */}
        <section className="max-w-[1440px] mx-auto -mt-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Latest Wireframes</h2>
              <p className="text-gray-500">Discover the perfect foundation for any project.</p>
            </div>
            <button className="cursor-pointer py-1 px-3 border rounded-md border-gray-700/20 shadow-lg text-gray-600">Browse all</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
            <WireframesCard />
            <WireframesCard />
            <WireframesCard />
            <WireframesCard />
            <WireframesCard />
            <WireframesCard />
            <WireframesCard />
            <WireframesCard />
          </div>
        </section>

        <Divider />


        {/* Premium templates section  */}
        <section className="-mt-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Premium Templates</h2>
            <button className="cursor-pointer py-1 px-3 border rounded-md border-gray-700/20 shadow-lg text-gray-600">Browse all</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
            <TemplatesCard />
            <TemplatesCard />
            <TemplatesCard />
            <TemplatesCard />
          </div>
        </section>

        <Divider />

        <section>
          <JoinClub />
        </section>

        <Divider />

        {/* latest Wireframes section  */}
        <section className="max-w-[1440px] mx-auto -mt-6">
          <div className="flex justify-between sm:items-end items-start mb-12">
            <div>
              <h2 className="text-3xl font-bold">Flowbase Blog</h2>
              <p className="text-gray-500 text-sm sm:text-md">Discover articles and tutorials to help you build better</p>
            </div>
            <button className="cursor-pointer text-sm sm:text-[16px] py-1 px-3 border rounded-md border-gray-700/20 shadow-lg text-gray-600 text-nowrap">Browse all</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
            <FlowbaseBlogCard />
            <FlowbaseBlogCard />
            <FlowbaseBlogCard />
          </div>
        </section>

        <Divider />

        {/* Email submit section  */}
        <section className="max-w-[1440px] mx-auto -mt-6">
          <EmailSubmit />
        </section>

        <Divider />
      </div>

    <Footer />
    </div>
  );
}
