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
        <footer  className="flex flex-col justify-between h-screen bg-[#2B2826] text-[#F5F5F5] relative">
            <div ref={footerRef} className="flex flex-col items-start justify-center w-full mx-20 pb-20 pt-52 space-y-10"> {/* Increased padding-bottom */}
                <p className="text-2xl font-light">
                    Thank you for visiting my portfolio. <br />
                    I hope you liked it!
                </p>
                <h1 className="text-4xl font-medium">
                    If you want to contact me for work, feedback, or suggestions, feel free to do so! <br />
                    Learning is a never-ending journey, and I am always looking for new opportunities to grow.
                </h1>

                <h2>
                    You can contact me at:
                    <a href="mailto:telmoregalado@gmail.com" className="text-lg font-semibold underline ml-2">
                        telmoregalado@gmail.com
                    </a>
                </h2>

                <div>
                    <p className="text-lg font-light">
                        You can also find me on:
                    </p>
                    <a href="#" target="_blank" rel="noreferrer" className="text-lg font-semibold underline">
                        LinkedIn
                    </a>
                    <a href="#" className="text-lg font-light underline ml-2">
                        GitHub
                    </a>
                </div>
            </div>

            {/* Absolute positioning for footer elements */}
            <div className="flex justify-between items-center w-full absolute bottom-0 left-0 px-4 py-2">
                {/* Made with love */}
                <p className="text-lg font-light">
                    Made with <span className="text-[#F5F5F5] text-2xl">&hearts;</span> by Telmo 
                </p>

                {/* Go back to top */}
                <a href="#" className="text-lg font-medium underline">
                    Go back to top
                </a>
            </div>
        </footer>
    );
};

export default Footer;
