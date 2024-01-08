import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // ... your existing useEffect code ...
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should always be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
        
        <svg className="mutkitteleva-viiva" width="600vw" height="auto" viewBox="0 0 4000 100">
          <path className="path" d="M0,-160 C500,-300 1000,200 1500,-50 C2000,-200 2500,400 3000,-50 C3500,-400 4000,100" fill="none" stroke="var(--red-color)" strokeWidth="5" />
        </svg>

        <svg className="mutkitteleva-viiva2" width="600vw" height="auto" viewBox="0 0 4000 100">
          <path className="path" d="M0,130 C500,100 1000,300 1500,100 C2000,-150 2500,0 3000,0 C3500,300 4000,-400" fill="none" stroke="var(--red-color)" strokeWidth="5" />
        </svg>

          <div className="scroll-section first-section">
            <div className="section-1">
              <h2>Who am I</h2>
              <h3>
                Hello! I&apos;m a 28-years-old eager Web Developer with about three years of active coding experience. While I&apos;ve always been intrigued by programming, I officially embarked on my learning journey only three years ago. During this time, I learned many different skills and made some digital ideas real!
                <br/> <br/>
                I&apos;ve logged tens of thousands of hours playing video games. The passion and commitment I once dedicated to gaming have now transitioned into software development. My aim is to accumulate at least an equal number of hours in coding and continue expanding my knowledge.
              </h3>
              <img src="/kissa-sivulle.svg" className="kissa-img" />

            </div>
            
          </div>
          
          <div className="scroll-section second-section">
            <div className="section-2">
              <img src="/läppäri-sivulle.svg" className="lappari-img" />
              <h2>What I do</h2>
              <h3>
                After an intensive two-year Software Developer training, I had the privilege of working at one of Finland&apos;s most influential marketing agencies. There, I&apos;ve been involved in creating various websites tailored to meet the specific needs of clients. Most of these projects involved building custom WordPress themes. In addition to coding, this role has provided me with invaluable experience in teamwork and interacting effectively with clients.
              <br/> <br/>
                During my studies, a fellow student and I co-founded a company. Through this venture, we had the chance to work on several exciting projects! If you&apos;re interested, check out <a href='https://www.hiisi.digital/'>hiisi.digital</a>.
              </h3>
              
              
            </div>
          </div>

          <div className="scroll-section third-section">
            <div className="section-3">
              <h2>What I know</h2>
              <h3>For me, it&apos;s not just about mastering specific programming languages or technologies; it&apos;s about embracing the entirety of web development. I&apos;ve garnered a wealth of experience across a range of technologies over the years.</h3>
            </div>
            <div className="section-3">
              <h2 className="title">Technologies and tools</h2>
              <h3>
                Over the years, my journey as a web developer has been both vast and fulfilling. I&apos;ve mastered the art of creating seamless user interfaces using tools like HTML, CSS, JavaScript, and React. Venturing further, PHP, Next.js, TailwindCSS, and WordPress became trusted companions in my toolkit, allowing me to shape visions into digital realities.
              <br/> <br/>
                Of course, I&apos;m accustomed to using version control in my projects, and in addition, I&apos;ve had a glimpse into the world of databases and servers.
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
