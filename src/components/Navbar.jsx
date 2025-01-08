import { navigation } from '../constants/index.js';
import t from '../assets/t.png';

const Navbar = () => {
    return (
        <header className='flex justify-center items-center w-full'>
            <nav className='flex justify-between items-center w-11/12'>
                <img src={t} alt="logo" className='w-24 h-24' />
                <ul className="flex space-x-4">
                    {navigation.map((links) => (
                        <li key={links.url} className="relative group">
                            <a
                                href={links.url}
                                className="text-lg font-normal text-[#2B2826] transition-all duration-300 ease-out flex group-hover:text-[#918D8D]"
                            >
                                {links.title}
                            </a>
                            {/* Underline div for hover effect */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-[#918D8D] transition-all duration-700 ease-in-out group-hover:w-1/2"></div>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
