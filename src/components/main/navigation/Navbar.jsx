import { useState, useEffect } from 'react';
import { navigation } from '../../../constants/index.js';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const nav = navigation.map((navItem) => (
        <li key={navItem.id} className="relative group">
            <a
                href={navItem.url}
                className="text-lg font-normal relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full"
                onClick={() => {
                    window.scroll({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
            >
                {navItem.title}
            </a>
        </li>
    ));

    return (
        <div className="py-3">
            <h1
                className={`text-center text-xs font-light transition-all duration-300 ease-in-out ${
                    isScrolled ? 'opacity-0 visibility-hidden' : 'opacity-100 visibility-visible'
                }`}
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">
                    This portfolio was made by Telmo Regalado
                </span>
            </h1>
            <div>
                <ul
                    className={`fixed top-0 z-50 left-0 right-0 flex flex-row justify-center items-center space-x-4 py-3 
                    transition-all duration-300 ease-in-out ${
                        isScrolled ? 'opacity-100 visibility-visible pointer-events-auto bg-white/5 backdrop-blur-md' : 'opacity-0 visibility-hidden pointer-events-none'
                    }`}
                >
                    {nav}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
