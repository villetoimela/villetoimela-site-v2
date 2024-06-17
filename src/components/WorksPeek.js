import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
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
        <div ref={banner1Ref} className="banner-image">
          <Image src="/project-roihu.png" alt="Banner image 1" layout="fill" objectFit="contain" priority={true} />
        </div>
        <div ref={banner2Ref} className="banner-image">
          <Image src="/project-kissakahvila.png" alt="Banner image 2" layout="fill" objectFit="contain" priority={true} />
        </div>
        <div ref={banner3Ref} className="banner-image">
          <Image src="/project-magister.png" alt="Banner image 3" layout="fill" objectFit="contain" priority={true} />
        </div>
        <div ref={banner4Ref} className="banner-image">
          <Image src="/project-tammermatic.png" alt="Banner image 4" layout="fill" objectFit="contain" priority={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
