import * as React from 'react';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <div className="https://monoinfinity.net">
            © {new Date().getFullYear()} {` `}
            <a href="https://github.com/MonoInfinity" target="_blank">
                Mono Infinity
            </a>
            . All Rights Reserved.
        </div>
    );
};

export default App;
