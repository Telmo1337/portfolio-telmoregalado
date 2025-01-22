import { useState } from 'react';

import HamburguerMenu from './HamburguerMenu.jsx';
import { navigation } from '../constants/index.js';
import t from '../assets/t.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const ifBlack = isOpen ? 'z-20 ml-4' : 'md:hidden';

    return (
        <header className="flex justify-center items-center w-full">
            <nav className="flex justify-between items-center w-11/12">
                <a href="#">
                    <img src={t} alt="logo" className="w-16 h-16" />
                </a>
                {/* Desktop menu */}
                <ul className="hidden md:flex md:space-x-4">
                    {navigation.map((links) => (
                        <li key={links.url} className="relative group">
                            <a
                                href={links.url}
                                className="text-lg font-normal text-[#2B2826] transition-all duration-300 ease-out flex group-hover:text-[#918D8D]"
                            >
                                {links.title}
                            </a>
                            {/* underline div */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-[#918D8D] transition-all duration-700 ease-in-out group-hover:w-1/2"></div>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button className={ifBlack} onClick={toggleMobileMenu}>
                    <HamburguerMenu opened={isOpen}  />
                </button>

                {/* Mobile menu */}
                <div
                    className={`fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[#2B2826]  z-10 transform transition-all duration-500 ease-in-out
                                ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                    `}
                >
                    <ul className="flex flex-col items-center space-y-10">
                        {navigation.map((links) => (
                            <li key={links.url}>
                                <a
                                    href={links.url}
                                    className="text-2xl font-medium text-white"
                                    onClick={toggleMobileMenu} 
                                >
                                    {links.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
