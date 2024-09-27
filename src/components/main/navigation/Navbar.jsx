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
        <li key={navItem.id}>
            <a
                href={navItem.url}
                className="text-xl font-normal "
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
        <div className="">
            <h1
                className={`text-center text-6xl font-normal transition-opacity duration-500 py-5 ${
                    isScrolled ? 'opacity-0' : 'opacity-100'
                }`}
            >
                Welcome to my website
            </h1>
            <div>
                <ul
                    className={`fixed top-0 z-50 left-0 right-0 flex flex-row justify-center items-center space-x-4 py-5 
                    transition-all duration-300 ease-in-out ${
                        isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {nav}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
