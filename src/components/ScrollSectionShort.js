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
        translateX: "-100vw",
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

    const kissaImg = document.querySelector('.kissa-img');
    gsap.to(kissaImg, {
      y: -20,
      rotation: 3, 
      duration: 3, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut" 
    });
  
    const lappariImg = document.querySelector('.lappari-img');
    gsap.to(lappariImg, {
      y: -20, 
      rotation: 3, 
      duration: 3, 
      repeat: -1,
      yoyo: true, 
      ease: "power1.inOut" 
    });

    const pilviukkeliImg = document.querySelector('.pilviukkeli-img');
    gsap.to(pilviukkeliImg, {
      y: -20, 
      rotation: 3, 
      duration: 3, 
      repeat: -1, 
      yoyo: true,
      ease: "power1.inOut" 
    });
    
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
        
        <svg className="mutkitteleva-viiva" width="600vw" height="auto" viewBox="0 0 4000 100">
          <path className="path" d="M0,-160 C500,-300 1000,200 1500,-50 C2000,-200 2500,400 3000,-50 C3500,-400 4000,100" fill="none" stroke="var(--red-color)" strokeWidth="5" />
        </svg>

        <svg className="mutkitteleva-viiva2" width="600vw" height="auto" viewBox="0 0 4000 100">
          <path className="path" d="M0,130 C500,100 1000,300 1500,100 C2000,-150 2500,0 3000,0 C3500,300 4000,-400" fill="none" stroke="var(--red-color)" strokeWidth="5" />
        </svg>

          <div className="scroll-section first-section">
            <div className="short-section-1">
              <h2>SOME MORE ABOUT ME</h2>
              <h3>
                Hello! I'm a 28-years-old eager Web Developer with about three years of active coding experience. While I've always been intrigued by programming, I officially embarked on my learning journey only three years ago. During this time, I learned many different skills and made some digital ideas real!
                <br/> <br/>
                I've logged tens of thousands of hours playing video games. The passion and commitment I once dedicated to gaming have now transitioned into software development. My aim is to accumulate atleast an equal number of hours in coding and continue expanding my knowledge.
              </h3>
              <img src="/pilvi-ukkeli-sivulle.svg" className="pilviukkeli-img" />

            </div>
            
          </div>
          
          <div className="scroll-section fourth-section">
            <div className="section-4">
              <h2>What next?</h2>
              <h3>All in all, I aim to be a versatile software developer, and I possess a strong passion for embracing new technologies! I plan to continue growing in software development even outside of work, and my ultimate goal is to someday be DA TECH GOD.</h3>
              
              
            </div>
            <InfiniteScroll />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ScrollSectionShort;