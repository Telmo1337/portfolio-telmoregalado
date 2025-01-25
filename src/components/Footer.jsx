import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger); 

const Footer = () => {
     const footerRef = useRef(null);

    useEffect(() => {
        if (footerRef.current) {
            gsap.fromTo(footerRef.current, {
                opacity: 0,
                y: -100,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 70%",
                    end: "bottom 50%",
                    scrub: 1,

                }
            });
        }
    }, []); 

    return (
        <footer className="flex flex-col justify-between md:h-screen bg-[#2B2826] text-[#F5F5F5] relative mt-64" id="contact">
            <div  ref={footerRef}  className="flex flex-col items-start justify-center w-full px-20 pb-20 pt-52 space-y-10">
                <p className="text-lg lg:text-2xl font-light">
                    Thank you for visiting my portfolio. <br />
                    I hope you liked it!
                </p>
                <h1 className="w-12/12 lg:w-10/12 text-sm sm:text-xl lg:text-4xl font-medium pb-10 md:pb-0">
                    If you want to contact me for work, feedback, or suggestions, feel free to do so! <br />
                    Learning is a never-ending journey, and I am always looking for new opportunities to grow.
                </h1>

                <h2>
                    You can contact me at:
                    <a href="mailto:telmoregalado@gmail.com" className="text-sm md:text-lg font-semibold underline ml-2">
                        telmoregalado@gmail.com
                    </a>
                </h2>

                <div className="pb-10">
                    <p className="text-lg font-light">
                        You can also find me on:
                    </p>
                    <a href="#" target="_blank" rel="noreferrer" className="text-xs md:text-lg font-light underline">
                        LinkedIn
                    </a>
                    <a href="https://github.com/Telmo1337" target='_blank' className="text-xs md:text-lg font-light underline ml-2 ">
                        GitHub
                    </a>
                </div>
            </div>

          
            <div className="flex flex-col md:flex-row space-y-2 justify-between items-center w-full absolute bottom-0 left-0 px-4 py-2 ">
              
                <p className="text-xs md:text-lg font-light">
                    Made with <span className="text-[#F5F5F5] text-2xl">&hearts;</span> by Telmo
                </p>
                <p className="sm:text-[10px] font-light text-[8px]">
                    Font used: Absans, Copyright © 2023, Collletttivo. Licensed under the
                    <a href="https://scripts.sil.org/OFL" target="_blank" className='ml-1 underline  transition-colors duration-300 ease-in-out hover:text-[#918D8D] '>SIL Open Font License, Version 1.1</a>.
                </p>
                
                <a href="#" className="text-lg font-medium underline">
                    Go back to top
                </a>
            </div>
        </footer>
    );
};

export default Footer;
