import { data } from "@/data/data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Perspective() {
  const perspectiveRef = useRef(null);
  const triggerRef = useRef(null);

  // Initialize an array with the same length as your data array, filled with null
  const [refs, setRefs] = useState(Array(data.length).fill(null));

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Check if refs have been assigned
    if (refs[0] === null || refs[1] === null) return;

    const firstAnim = refs[0];
    const secondAnim = refs[1];

    let ctx = gsap.context(() => {
      gsap.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2500 bottom",
          scrub: 1,
          pin: true,
          snap: 1 / (data.length),
        }
      })
      .to(perspectiveRef.current, {
        transform: "translate3d(0px, 0px, 35rem)",
      })
      .set(firstAnim, {
        opacity: 0,
      }, 0.250)
      .set(secondAnim, {
        opacity: 0,
      }, 0.400);
    });
    return () => ctx.revert();
  }, [refs]); // Add refs as a dependency

  // Function to assign refs
  const setRef = (el, index) => {
    refs[index] = el;
  };

  return (
    <div>
      <div className='spacer'></div>
      <div ref={triggerRef} className="perspective">
        <div ref={perspectiveRef} className="perspective-inner">
          {data.map((project, index) => (
            <div ref={el => setRef(el, index)} key={index} className={project.class}>
              <img src={project.image} alt={project.text} />
              <div className="perspective-desc">
                <h2>{project.text}</h2>
                <Link href={project.url}>
                  <span>Read more</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='spacer'></div>
    </div>
  )
}

export default Perspective;
