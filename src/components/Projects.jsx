import { projects } from "../constants/index";
import { MdOutlineArrowForward } from "react-icons/md";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsContainerRef = useRef(null);

    useEffect(() => {
        if (projectsContainerRef.current) {
            const cards = projectsContainerRef.current.querySelectorAll(".project-card");

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power1.inOut",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 70%", 
                            end: "bottom 30%",
                            toggleActions: "play none none reverse",
                            
                            
                        },
                    }
                );

                
            });
        }
    }, []);

    return (
        <>
            <hr className="w-10/12 mx-auto mb-20 mt-20 " />
            <div ref={projectsContainerRef} className="flex flex-col justify-center items-center w-full" id="projects">
                <h1 className="text-6xl sm:text-9xl max-w-4xl text-center font-medium">Projects</h1>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline space-y-4 md:space-y-0 md:space-x-28 mx-6 px-8 sm:px-20 py-8 bg-[#2B2826] rounded-3xl shadow-lg mt-10">
                    <p className="text-center text-sm sm:text-lg md:text-xl font-medium text-[#F5F5F5] ">
                        Here are some of the projects that I&apos;ve made. I hope you like them!
                    </p>
                    <a
                        href="#"
                        className="text-center text-sm sm:text-lg md:text-xl font-medium text-[#F5F5F5] underline"
                    >
                        Go back to top
                    </a>
                </div>

                <hr className="w-10/12 mx-auto mt-20 mb-10 " />
                {/* Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full px-10 my-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card flex flex-col items-center justify-between gap-6 rounded-3xl p-6 shadow-[#2b28263a] shadow-lg text-[#2B2826] xl:h-[385px] bg-white"
                        >
                            {/* Title and Status */}
                            <div className="flex flex-col items-start justify-between w-full border-b-2 border-[#EBEAEA] pb-4">
                                <h1 className="text-2xl text-start font-semibold underline">{project.title}</h1>
                                <p className="text-[12px] font-semibold text-[#918D8D]">Finished</p>
                            </div>

                            {/* Description */}
                            <p className="flex-grow text-start text-md font-medium overflow-hidden">
                                {project.description}
                            </p>

                            {/* Technologies Used */}
                            <div className="flex justify-between items-center w-full border-y-2 border-[#EBEAEA] py-4">
                                <p className="text-md font-semibold text-start">Technologies used:</p>
                                <div className="flex flex-wrap justify-end gap-1">
                                    {project.icon.map((icon) => (
                                        <img
                                            key={icon}
                                            src={icon}
                                            alt="icon"
                                            className="h-8 w-8 lg:h-9 lg:w-9 xl:h-9 xl:w-9"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-row justify-between items-center w-full">
                                <a
                                    href="#"
                                    className="relative text-xl font-medium text-[#2B2826] transition-all duration-300 cursor-pointer group"
                                >
                                    View project
                                    {/* Static Gray Underline */}
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2B2826]"></span>
                                    {/* Hover Black Underline */}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B2ACA9] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a href="#">
                                    <MdOutlineArrowForward className="text-3xl text-[#2B2826] cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
