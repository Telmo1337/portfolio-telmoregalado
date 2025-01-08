import Loader from "./Loader";

import { BsArrow90DegLeft } from "react-icons/bs";


const Hero = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen ">
            <div className="flex items-start transform -translate-y-24 justify-between gap-20 w-11/12">
                <div className="flex flex-col items-start max-w-4xl">
                    <p className="text-2xl font-light">
                        👋 Hello, I&#39;m Telmo Regalado
                    </p>
                    <h1 className="text-8xl font-normal">
                        An aspiring frontEnd Developer and UI/UX Designer
                    </h1>
                    <p className="text-2xl font-light mt-4">
                        Web and Multimedia Development Student at IPVC ESTG. <br />
                        Passionate about learning new technologies and building projects.
                    </p>
                    <p className="text-sm font-light mt-4 text-[#918D8D]">
                        &#91;I am currently learning React.js and creating exciting projects to enhance my skills&#93;
                    </p>
                    <div className="mt-10 flex flex-row gap-4 items-center">
                        <a
                            href="#"
                            className="text-lg font-normal flex items-end px-6 py-4 rounded-full bg-[#2B2826] text-[#F5F5F5] shadow-lg blur-[0.6px]
                            transition-all duration-300 ease-out  hover:-translate-y-2 hover:blur-[0px]"
                        >
                            Contact me
                            <BsArrow90DegLeft className="ml-2" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <h1 className="text-xl font-light text-[#918D8D]">
                        &#91;Portfolio &#39;2025&#93;
                        
                    </h1>
                    <Loader />
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
