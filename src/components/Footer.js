/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = forwardRef((props, ref) => {
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
      { y: 0, color: "#eee9db" },
      { y: -3, color: "#fe330a", duration: 0.2 }
    );
  }

  function handleMouseLeave(e) {
    gsap.to(e.currentTarget, { y: 0, color: "#eee9db", duration: 0.2 });
  }

  return (
    <footer ref={ref} className="footer">
      <div className="image-container">
        <div ref={imageDivFirst} className="image-div image-div-first"><img src="/vasen-käsi-sivulle.svg" alt="Kuva 1" /></div>
        <div ref={imageDivSecond} className="image-div image-div-second"><img src="/oikea-käsi-sivulle.svg" alt="Kuva 2" /></div>
      </div>
      <div className="contact-div">
        <span>Lets work together</span>
      </div>
      <div className="links-container">
        <a href="tel:0405137883" className="social-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Phone</a>
        <a href="https://wa.me/358405137883" className="social-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Whatsapp</a>
        <a href="https://www.linkedin.com/in/villetoimela/" className="social-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>LinkedIn</a>
        <a href="https://github.com/villetoimela" className="social-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Github</a>
      </div>
      <div className="copyright">
        <p>© Ville Toimela - 2024</p>
      </div>
    </footer>
  );
});

export default Footer;
