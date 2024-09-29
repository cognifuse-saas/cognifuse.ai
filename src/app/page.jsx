"use client";

import { LanguageIcon, CogIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import NavEl from "./components/navbar"
import Hero from "./components/hero"
import OurServices from "./components/Services"
import { ArrowPathIcon, CloudArrowUpIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const iconComponents = {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LightBulbIcon,
};

const features = [
  {
    name: 'AI Creation',
    description: 'Launch your first AI agent in less than a day without coding. Use our intuitive drag-and-drop interface.',
    icon: CogIcon,
  },
  {
    name: 'Professional Marketplace',
    description: 'Get on-demand access to expert help from 15+ industries within hours through our network of vetted African professionals.',
    icon: UserGroupIcon,
  },
  {
    name: 'Multi-Channel Integration',
    description: 'Integrate with over 100+ popular African and global business tools. Access via web, mobile, USSD, or SMS.',
    icon: ChartBarIcon,
  },
  {
    name: 'Localized AI Solutions',
    description: 'Our software is trained on local data and able to process local African languages for easier adoption.',
    icon: LanguageIcon,
  },
]

export default function Web() {
  const handleBooking = () => {
    window.open('https://calendly.com/cognifuse1/30min', '_blank');
  };

  return (
    <main>
      <NavEl />
      <Hero />

      {/* Brand Partnerships */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight leading-snug text-gray-900 sm:text-4xl mb-16">
            Trusted by Industry Leaders
          </h2>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="brand-container animate-scroll">
                {['ZAZELLA', 'EACCC', 'MILLENIUM SOLUTIONS', 'SIGNVRSE', 'KENYA PORTS AUTHORITY', 'ZAZELLA', 'EACCC', 'MILLENIUM SOLUTIONS', 'SIGNVRSE', 'KENYA PORTS BOARD'].map((brand, index) => (
                  <div key={index} className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                    <span className="text-gray-700 text-lg font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
          </div>
        </div>
      </section>

      <OurServices />

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-snug tracking-tight text-indigo-600">Comprehensive Solutions</h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight leading-snug text-gray-900 sm:text-4xl">
              Features
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed tracking-wide text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <section className="bg-gradient-to-br from-indigo-800 to-indigo-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-snug tracking-tight text-indigo-200">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight leading-snug text-white sm:text-4xl">
              Empowering African Businesses with AI
            </p>
            <p className="mt-6 text-lg leading-relaxed tracking-wide text-indigo-200">
              We bring cutting-edge AI solutions tailored for the unique needs of African markets.
            </p>
          </div>
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {[
                {
                  name: 'All-in-One Platform',
                  description: 'Reduce complexity with our unified platform, eliminating the need for multiple software solutions.',
                },
                {
                  name: 'Localized AI',
                  description: 'Our AI is trained on local data and processes African languages for seamless adoption.',
                },
                {
                  name: 'Cost-Effective',
                  description: 'Optimize your operations and reduce expenses with our efficient AI-driven solutions.',
                },
              ].map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                      <CheckCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed tracking-wide text-indigo-200">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 flex justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleBooking();
              }}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Discover More About Our Approach
            </a>
          </div>
        </div>
      </section>

      {/* Transition Support */}
      <section className="bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-24 sm:py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="absolute -top-52 -left-52 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-52 -right-52 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-snug tracking-tight text-indigo-600 uppercase">Seamless Integration</h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight leading-snug text-gray-900 sm:text-4xl lg:text-5xl">
              We&apos;ll Help You Make The Transition
            </p>
            <p className="mt-6 text-xl leading-relaxed tracking-wide text-gray-600">
              Our dedicated support team ensures a smooth transition to our AI-powered platform,
              with personalized assistance every step of the way.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <dl className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "System Synchronization",
                  description: "We'll help you sync all your existing systems with ours, ensuring a seamless transition.",
                  icon: 'ArrowPathIcon',
                },
                {
                  name: "Quick Training",
                  description: "Get up to speed with our systems through a quick 10-minute training session.",
                  icon: 'LightBulbIcon',
                },
                {
                  name: "User-Friendly Interface",
                  description: "Our intuitive interface requires only basic computer skills to operate effectively.",
                  icon: 'CloudArrowUpIcon',
                },
              ].map((feature) => {
                const Icon = iconComponents[feature.icon];
                return (
                  <div key={feature.name} className="relative bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base leading-relaxed tracking-wide text-gray-500">{feature.description}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
          <div className="mt-16 flex justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleBooking();
              }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
            >
              Start Your Transition Today
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-tl from-indigo-100 via-white to-purple-100 py-24 sm:py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-xl text-center mb-16">
            <h2 className="text-base font-semibold leading-snug tracking-tight text-indigo-600 uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight leading-snug text-gray-900 sm:text-4xl">
              Hear from Our Satisfied Clients
            </p>
          </div>

          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-0 left-0 text-indigo-200 h-16 w-16 -translate-x-6 -translate-y-8 transform opacity-50">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
            </svg>
            <blockquote className="relative">
              <div className="max-w-3xl mx-auto text-center text-xl font-medium leading-9 text-gray-900">
                <p>
                  Cognifuse AI has significantly improved legal operations at the Kenya Ports Board by rapidly analyzing maritime documents and cross-referencing them with Kenyan regulations. The system has increased efficiency by 40%, allowing for more cases to be handled with greater accuracy.
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">Elijah Kitur</div>
                    <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
                    <div className="text-base font-medium text-gray-500">Legal Division, Kenya Ports Board</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <h3 className="text-lg font-semibold tracking-tight leading-snug text-gray-900 mb-4">Cognifuse AI</h3>
              <p className="text-sm text-gray-600 tracking-wide leading-relaxed mb-4">Build AI tools in minutes. Copyright © 2024</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-tight leading-snug text-gray-900 mb-4">Use Cases</h3>
              <ul className="space-y-2">
                <li><span className="text-sm text-gray-600">Respond to RFPs Instantly</span></li>
                <li><span className="text-sm text-gray-600">Draft replies to customers</span></li>
                <li><span className="text-sm text-gray-600">Convert Blog Posts to Social Media</span></li>
                <li><span className="text-sm text-gray-600">Draft On-Brand Content</span></li>
                <li><span className="text-sm text-gray-600">Analyze Competitor Offerings</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-tight leading-snug text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                <li><span className="text-sm text-gray-600">Knowledge Base</span></li>
                <li><span className="text-sm text-gray-600">Assistants</span></li>
                <li><span className="text-sm text-gray-600">Workflows</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-200 pt-8 flex justify-center">
            <div className="flex items-center">
            <Image
      src="/images/logo-2-removebg-preview.png"  // Ensure the image is in the "public/images" folder
      alt="Cognifuse AI Logo"
      width={48}  // You need to provide a width
      height={48} // You need to provide a height
      className="h-12 w-auto"
    />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
