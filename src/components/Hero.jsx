import Loader from "./Loader";

import { BsArrow90DegLeft } from "react-icons/bs";


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';




const Hero = () => {

    const heroRef = useRef(null);

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(heroRef.current, {
                opacity: 0,
                y: -30,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.inOut",
                
            });
        }
    }, []);

    return (
        <div ref={heroRef} className="flex justify-center items-center lg:w-full h-screen">
            <div className="flex items-start transform -translate-y-24 justify-between gap-20 w-11/12 flex-col sm:flex-row">
                <div className="flex flex-col items-start lg:max-w-2xl xl:max-w-4xl max-w-xs">
                    <p className="lg:text-2xl font-light text-lg text-[#2B2826]">
                        👋 Hello, I&#39;m Telmo Regalado
                    </p>
                    <h1 className="lg:text-6xl xl:text-8xl font-normal text-4xl text-[#2B2826] mt-4">
                        An aspiring front-end Developer and UI/UX Designer
                    </h1>
                    <p className="lg:text-2xl font-light mt-4 text-xs sm:text-lg text-[#2B2826]">
                        Web and Multimedia Development Student at IPVC-ESTG. <br />
                        Passionate about learning new technologies and building projects.
                    </p>
                    <p className="text-sm font-light mt-4 text-[#918D8D]">
                        &#91;I am currently learning React.js and creating exciting projects to enhance my skills&#93;
                    </p>
                    <div className="mt-10 flex flex-row gap-4 items-center ">
                        <a
                            href="#contact"
                            className="lg:text-lg text-sm font-normal flex items-end px-4 py-2 lg:px-6 lg:py-4 rounded-full bg-[#2B2826] text-[#F5F5F5] shadow-lg blur-[0.6px]
                            transition-all duration-300 ease-out  hover:-translate-y-2 hover:blur-[0px]"
                        >
                            Contact me
                            <BsArrow90DegLeft className="ml-2" />
                        </a>
                    </div>
                    
                </div>
                <div className="flex flex-col items-end">
                    <h1 className="lg:text-lg text-sm font-light text-[#918D8D]">
                        &#91;Portfolio &#39;2025&#93;
                        
                    </h1>
                    <Loader />
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
