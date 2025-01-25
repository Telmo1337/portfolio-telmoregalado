import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const GsapBoxes = () => {
    const scrollRef = useRef();

  useGSAP(
    () => {
      
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 1400,
          rotation: 360,
          borderRadius: "100%",
          scale: 0.8,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom", 
            end: "top top", 
            scrub: true, 
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );
  return (
    <div className="w-full -z-10" ref={scrollRef}>
    <div
        id="scroll-pink"
        className="scroll-box w-14 h-14 md:w-32 md:h-32 rounded-lg bg-[#2b2826b0]"
    />
    <div
        id="scroll-orange"
        className="scroll-box w-14 h-14 md:w-32 md:h-32 rounded-lg bg-[#2b2826ce]"
    />
</div>
  )
}

export default GsapBoxes
