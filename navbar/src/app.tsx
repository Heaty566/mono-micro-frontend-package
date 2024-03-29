import * as React from 'react';
import { Logo } from './logo';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <div className="mx-2 ">
            <div className="flex items-center justify-between px-4 py-1 mx-auto mt-4 space-x-4 bg-white border rounded-md shadow-lg md:w-4/5">
                <a href="https://github.com/MonoInfinity" target="_blank">
                    <Logo />
                </a>
                <div className="text-black">
                    <p className="spinner title">
                        This page is using Micro-Fontend by {` `}
                        <a
                            href="https://github.com/MonoInfinity"
                            target="_blank"
                            className="font-semibold text-indigo-800 underline duration-500 decoration-pink-500 hover:decoration-indigo-800 hover:text-pink-500"
                        >
                            Mono Infinity Team
                        </a>
                    </p>
                </div>
            </div>

            <div className="relative py-16 overflow-hidden bg-gray-900 isolate sm:py-24 lg:py-32">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.
                            </p>
                            <div className="flex max-w-md mt-6 gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 py-1.5 px-3.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                                    <CalendarDaysIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                                    <HandRaisedIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <svg className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6" viewBox="0 0 1155 678" fill="none">
                    <path
                        fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9089FC" />
                            <stop offset={1} stopColor="#FF80B5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default App;
