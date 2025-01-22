import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const GsapBoxes = () => {
    const scrollRef = useRef();

  useGSAP(
    () => {
      // get all the boxes in the scrollRef
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 1400,
          rotation: 360,
          borderRadius: "100%",
          scale: 0.8,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom", // when the bottom of the box hits the bottom of the viewport
            end: "top top", // end when the top of the box hits 20% from the top of the viewport
            scrub: true, // scrubbing makes the animation smooth
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
        className="scroll-box w-32 h-32 rounded-lg bg-[#2b2826b0]"
    />
    <div
        id="scroll-orange"
        className="scroll-box w-32 h-32 rounded-lg bg-[#2b2826ce]"
    />
</div>
  )
}

export default GsapBoxes
