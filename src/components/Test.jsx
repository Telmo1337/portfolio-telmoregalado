import GsapBoxes from "./GSAPBOXES";
import Quotes from "./Quotes";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
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
                    start: "top 90%",
                    end: "center center",
                    scrub: 1,
                
                    
                }
            });

    
        }

        gsap.fromTo('#test', {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '#test',
                start: "top 90%",
                end: "center center",
                scrub: 1,
            }
        })
    }, []);
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex flex-col justify-start items-start w-full h-full px-6 sm:px-10 md:px-20" >
                <hr className="w-10/12 mx-auto mb-10 sm:mb-20 " />
                <h1 className="text-lg sm:text-xl font-medium text-center">
                    About me
                </h1>
                <hr className="w-16 sm:w-24  my-2" />

                <div className="flex flex-col justify-center items-center w-full" >
                    <p className="text-lg sm:text-2xl md:text-4xl font-medium text-center max-w-3xl md:max-w-7xl" ref={footerRef}>
                        Hi, I’m <span className="text-xl sm:text-4xl md:text-6xl">Telmo Regalado</span>, a 29-year-old aspiring front-end developer and UI/UX designer. My journey into the tech world didn’t start conventionally. For years, I worked in fields that didn’t inspire or fulfill me. Less than a year, I made the decision to change my path and dive into a world I’m passionate about—web development and design.
                    </p>
                    <p id="test" className="text-sm sm:text-lg md:text-xl font-medium text-center max-w-xl sm:max-w-4xl md:max-w-6xl mt-5">
                        Since then, I’ve dedicated myself to learning and growing as a front-end developer. I’ve gained experience with technologies like HTML, CSS, JavaScript, React, Tailwind CSS, and tools like Figma and Adobe Illustrator. Every day, I strive to combine my technical skills with creative problem-solving to build engaging and user-friendly digital experiences.
                    </p>
                    <p id="test" className="text-sm sm:text-lg md:text-xl font-medium text-center max-w-xl sm:max-w-4xl md:max-w-6xl mt-5">
                        I’m eager to continue growing, learning, and creating. This career shift has not only changed my professional life but also reignited my passion for learning and achieving meaningful goals.
                    </p>
                    <p id="test" className="text-sm sm:text-lg md:text-xl font-medium text-center max-w-xl sm:max-w-4xl md:max-w-6xl mt-5">
                        Right now, I’m a Web and Multimedia Development Student at IPVC-ESTG.
                    </p>
                </div>
                <div>
                    <GsapBoxes  />
                </div>
                <div className="flex flex-col justify-center items-center w-full ">
                    <p className="text-xs font-semibold underline mb-2 text-center">Important daily quotes made with Node.js by me</p>
                    <Quotes />
                </div>
            </div>
        </div>
    );
};

export default Test;
