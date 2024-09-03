import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';


const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Team', href: '#', current: false },
    { name: 'Agents', href: '#', current: false },
    { name: 'Flows', href: '#', current: false },
    { name: 'Templates', href: '#', current: false },
    { name: 'Integrations', href: '#', current: false },
    { name: 'Marketplace', href: '/marketplace', current: true },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Help', href: '#' },
    { name: 'Sign out', href: '#' },
]

const products = [
    { id: 1, name: 'Frozen Freebies', description: 'The premier Amazon freebies checkout bot', price: 20, image: '/api/placeholder/300/200', rating: 5, tags: ['Sports betting', 'General', 'Software', 'Discord'] },
    { id: 2, name: 'eStock', description: 'Automated checkout software', price: 20, image: '/api/placeholder/300/200', rating: 5, tags: ['Sports betting', 'General', 'Software', 'Discord'] },
    { id: 3, name: 'AK CHEFS', description: 'THE ULTIMATE RESELLING GROUP', price: 20, image: '/api/placeholder/300/200', rating: 5, tags: ['Sports betting', 'General', 'Software', 'Discord'] },
    { id: 4, name: 'Extra Product', description: 'Another product for scrolling', price: 20, image: '/api/placeholder/300/200', rating: 4, tags: ['Extra', 'Product'] },
    { id: 5, name: 'More Items', description: 'Even more to scroll', price: 20, image: '/api/placeholder/300/200', rating: 4, tags: ['More', 'Items'] },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        className="h-8 w-8"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? 'page' : undefined}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon aria-hidden="true" className="h-6 w-6" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                            </MenuButton>
                                        </div>
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                        <div className="border-t border-gray-700 pb-3 pt-4">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>

                {/* <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Marketplace</h1>
                    </div>
                </header> */}
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{
                        <section className="bg-gray-100 dark:bg-gray-800 py-16" aria-label="Video Demo">
                            <div className="container mx-auto px-4">
                                <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">See The Marketplace in Action</h2>
                                <div className="max-w-3xl mx-auto">
                                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                        <iframe
                                            src="https://player.vimeo.com/video/your-video-id?h=your-hash&autoplay=0&title=0&byline=0&portrait=0"
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <script src="https://player.vimeo.com/api/player.js"></script>
                                </div>
                            </div>
                        </section>
                    }</div>
                    <section>
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-lg p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold">Lawyers</h2>
                                    <div className="flex items-center">
                                        <button className="mr-2"><ChevronLeft /></button>
                                        <button className="mr-2"><ChevronRight /></button>
                                        <a href="#" className="text-blue-500">See all</a>
                                    </div>
                                </div>

                                <div className="overflow-x-auto pb-4">
                                    <div className="flex space-x-4" style={{ width: 'max-content' }}>
                                        {products.map(product => (
                                            <div key={product.id} className="w-80 flex-shrink-0 border rounded-lg overflow-hidden">
                                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                                <div className="p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-bold">{product.name}</h3>
                                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${product.price}/month</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                                                    <div className="flex items-center mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} className={`text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                                                        ))}
                                                        <span className="text-sm text-gray-600 ml-1">(392)</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {product.tags.map((tag, index) => (
                                                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-lg p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold">Financial</h2>
                                    <div className="flex items-center">
                                        <button className="mr-2"><ChevronLeft /></button>
                                        <button className="mr-2"><ChevronRight /></button>
                                        <a href="#" className="text-blue-500">See all</a>
                                    </div>
                                </div>

                                <div className="overflow-x-auto pb-4">
                                    <div className="flex space-x-4" style={{ width: 'max-content' }}>
                                        {products.map(product => (
                                            <div key={product.id} className="w-80 flex-shrink-0 border rounded-lg overflow-hidden">
                                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                                <div className="p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-bold">{product.name}</h3>
                                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${product.price}/month</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                                                    <div className="flex items-center mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} className={`text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                                                        ))}
                                                        <span className="text-sm text-gray-600 ml-1">(392)</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {product.tags.map((tag, index) => (
                                                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-lg p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold">Customer Support</h2>
                                    <div className="flex items-center">
                                        <button className="mr-2"><ChevronLeft /></button>
                                        <button className="mr-2"><ChevronRight /></button>
                                        <a href="#" className="text-blue-500">See all</a>
                                    </div>
                                </div>

                                <div className="overflow-x-auto pb-4">
                                    <div className="flex space-x-4" style={{ width: 'max-content' }}>
                                        {products.map(product => (
                                            <div key={product.id} className="w-80 flex-shrink-0 border rounded-lg overflow-hidden">
                                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                                <div className="p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-bold">{product.name}</h3>
                                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${product.price}/month</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                                                    <div className="flex items-center mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} className={`text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                                                        ))}
                                                        <span className="text-sm text-gray-600 ml-1">(392)</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {product.tags.map((tag, index) => (
                                                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
