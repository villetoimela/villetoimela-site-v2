import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const banner1Ref = useRef(null);
  const banner2Ref = useRef(null);
  const banner3Ref = useRef(null);
  const banner4Ref = useRef(null);

  useEffect(() => {
    const xOffset = 50;

    gsap.timeline({
      scrollTrigger: {
        trigger: ".works-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
      .fromTo(banner1Ref.current,
        { x: xOffset + 'vw', autoAlpha: 1 },
        { x: -xOffset + 'vw', autoAlpha: 1, ease: "none" }
      )
      .fromTo(banner3Ref.current,
        { x: xOffset + 'vw', autoAlpha: 1 },
        { x: -xOffset + 'vw', autoAlpha: 1, ease: "none" },
        "<"
      );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".works-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
      .fromTo(banner2Ref.current,
        { x: -xOffset + 'vw', autoAlpha: 1 },
        { x: xOffset + 'vw', autoAlpha: 1, ease: "none" }
      )
      .fromTo(banner4Ref.current,
        { x: -xOffset + 'vw', autoAlpha: 1 },
        { x: xOffset + 'vw', autoAlpha: 1, ease: "none" },
        "<"
      );
  }, []);


  return (
    <section className="section-wrapper">
      <div className="works-container">
        <img ref={banner1Ref} src="/project-roihu.png" alt="Banner 1" className="banner-image" />
        <img ref={banner2Ref} src="/project-kissakahvila.png" alt="Banner 2" className="banner-image" />
        <img ref={banner3Ref} src="/project-magister.png" alt="Banner 3" className="banner-image" />
        <img ref={banner4Ref} src="/project-tammermatic.png" alt="Banner 4" className="banner-image" />
      </div>
    </section>
  );
};


export default Banner;