import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import InfiniteScroll from "./InfiniteScroll";


function ScrollSectionShort() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="short-scroll-section-inner">
        
        {/* <svg className="mutkitteleva-viiva" width="600vw" height="auto" viewBox="0 0 4000 100">
          <path className="path" d="M0,-160 C500,-300 1000,200 1500,-50 C2000,-200 2500,400 3000,-50 C3500,-400 4000,100" fill="none" stroke="var(--red-color)" strokeWidth="5" />
        </svg>

        <svg className="mutkitteleva-viiva2" width="600vw" height="auto" viewBox="0 0 4000 100">
          <path className="path" d="M0,130 C500,100 1000,300 1500,100 C2000,-150 2500,0 3000,0 C3500,300 4000,-400" fill="none" stroke="var(--red-color)" strokeWidth="5" />
        </svg> */}

          <div className="scroll-section">
            <div className="text-wrapper">
              <h2>Just throw me a message if you have job or project for me</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSectionShort;