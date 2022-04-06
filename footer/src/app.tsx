import * as React from 'react';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <div className="px-2 py-4 font-medium text-center text-white">
            © {new Date().getFullYear()} {` `}
            <a href="https://github.com/MonoInfinity" target="_blank">
                Mono Infinity
            </a>
            . All Rights Reserved.
        </div>
    );
};

export default App;
