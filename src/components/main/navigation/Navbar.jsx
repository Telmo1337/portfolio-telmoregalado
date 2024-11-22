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
                className="text-md font-normal relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-[#1DB954] after:transition-all after:duration-300 group-hover:after:w-full"
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
                <span className="text-white/50 text-[8px]">
                    This was made by Telmo Regalado
                </span>
            </h1>
            <div className='fixed z-50 top-10 left-56 border-r-2 rounded-none border-r-[#424242]'>
                <ul className='space-y-1 p-4'>
                    {nav}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;


