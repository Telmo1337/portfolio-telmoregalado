import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";

import Hero from "./landingpage/Hero";

import { motion, useScroll, useSpring } from "framer-motion";

const MainPage = () => {
  /* animação de progressão da barra lateral */
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
        <Navbar />
        <motion.div 
        className="fixed top-0 left-0 w-[1px] h-screen bg-yellow-500 origin-top"
        style={{ scaleY }} // Bind the scaleY animation to the bar's height
      />
      {/*import main landing page components*/}
        <Hero />
        <h1 className="flex justify-center items-center text-9xl h-screen">test</h1>
        <Footer />
    </>
  )
}

export default MainPage
