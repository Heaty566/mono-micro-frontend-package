import * as React from 'react';
import { Logo } from './logo';
interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <div className="mx-2 ">
            <div className="flex items-center justify-between px-4 py-1 mx-auto mt-4 space-x-4 bg-white border rounded-md shadow-lg md:w-4/5">
                <a href="https://github.com/MonoInfinity" target="_blank">
                    <Logo />
                </a>
                <div className="text-black">
                    <p className="">
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
        </div>
    );
};

export default App;
