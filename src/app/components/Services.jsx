import { BeakerIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const OurServices = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Left Column: Heading and Introduction */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Transform Your Business</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Comprehensive Solutions</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                An All-in-one AI-first Platform Powered By The First Generation Of African Based AI Assistants Called Agents.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Service Image */}
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <Image
      className="w-full mt-50 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
      src="/images/ai-fusion.jpg"  // Make sure this image exists in the "public/images" folder
      alt="AI Solutions for Business"
      width={800}  // Example width, you can set it according to your design
      height={400} // Example height, adjust as necessary
    />
        </div>

        {/* Services and Details */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>We&apos;re breaking all the barriers to scale with our first generation of African AI assistants dedicated to:</p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BeakerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Automating business functions:</strong> Free up time and increase efficiency from end to end.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Improving work quality:</strong> Provide African nuanced expertise.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlobeAltIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Working in alignment:</strong> Cut down costs of hiring large specialized teams and increase productivity.
                  </span>
                </li>
              </ul>
              <p className="mt-8">Our platform provides a seamless integration experience with minimal context switching and cost efficiency.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Meet Our Agents</h2>
              <p className="mt-6">Current additions include Legal, Sales & Customer service agents. Our AI agents are designed to understand and adapt to the unique needs of African businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
