import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function ScrollSection() {
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
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
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
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section ">
            <div className="section-1">
              <h2>Who am i</h2>
              <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h3>
              <img src="/project-1.jpg" />
            </div>
            
          </div>
          
          <div className="scroll-section ">
            <div className="section-2">
              <h2>Who am i</h2>
              <h3>Section 1</h3>
            </div>
          </div>

          <div className="scroll-section ">
            <div className="section-3">
              <h2>Who am i</h2>
              <h3>Section 1</h3>
            </div>
          </div>

          <div className="scroll-section ">
            <div className="section-4">
              <h2>Who am i</h2>
              <h3>Section 1</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ScrollSection;