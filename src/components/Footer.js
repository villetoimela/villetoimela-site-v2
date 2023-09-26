import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const imageDivFirst = useRef(null);
  const imageDivSecond = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    tl.to(imageDivFirst.current.querySelector('img'), { x: '8%' })
      .to(imageDivSecond.current.querySelector('img'), { x: '-8%' }, "<");

  }, []);

  function handleMouseEnter(e) {
    gsap.fromTo(
      e.currentTarget,
      { y: 0, color: "" },
      { y: -10, color: "#fe330a", duration: 0.2 }
    );
  }

  function handleMouseLeave(e) {
    gsap.to(e.currentTarget, { y: 0, color: "white", duration: 0.2 });
  }

  return (
    <footer className="footer">
      <div className="image-container">
        <div ref={imageDivFirst} className="image-div image-div-first"><img src="/vasen-käsi-sivulle.svg" alt="Kuva 1" /></div>
        <div ref={imageDivSecond} className="image-div image-div-second"><img src="/oikea-käsi-sivulle.svg" alt="Kuva 2" /></div>
      </div>
      <div className="contact-div">
        <span>LETS CONTACT</span>
      </div>
      <div className="links-container">
        <a href="#whatsapp-link" className="social-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>WHATSAPP</a>
        <a href="#linkedin-link" className="social-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>LINKEDIN</a>
        <a href="#github-link" className="social-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>GITHUB</a>
      </div>
    </footer>
  );
}

export default Footer;
