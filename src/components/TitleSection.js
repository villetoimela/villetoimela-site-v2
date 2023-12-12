import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TitleSection = ({ title, link, linkTitle, textAlignRight }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, 
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        }
      }
    );
  }, []);

  // Apply the right alignment class conditionally based on the prop
  const sectionClassName = `title-section ${textAlignRight ? 'title-section-right' : ''}`;

  return (
    <div ref={sectionRef} className={sectionClassName}>
      <h3>{title}</h3>
      <h3><a href={link}>{linkTitle}</a></h3>
    </div>
  );
}

export default TitleSection;
