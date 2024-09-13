import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const NavEl = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <nav aria-label="Global" className={`mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 ${
          isScrolled ? 'text-gray-900' : 'text-white'
        } transition-colors duration-300`}>
          <div className="flex flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cognifuse AI</span>
              <img alt="Cognifuse AI Logo" src="/images/logo-2-removebg-preview.png" className="h-10 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`inline-flex items-center justify-center rounded-md p-2.5 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } transition-colors duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors duration-300">
              Book A Call To Get Started
            </a>
          </div>
        </nav>
      </header>

      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <Dialog.Panel className="fixed inset-x-0 bottom-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between mb-4">
                <Dialog.Title className="text-lg font-semibold leading-6 text-gray-900">
                  Ready to get started?
                </Dialog.Title>
                <button
                  type="button"
                  className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="block w-full rounded-lg px-3 py-2.5 text-center text-base font-semibold leading-7 text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    // Add your booking logic here
                  }}
                >
                  Book A Call To Get Started
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavEl;
