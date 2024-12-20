/* eslint-disable react/display-name */
import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';

const Index = forwardRef((props, ref) => {
    const { title, content, swap } = props;
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        // Vasemman osion animaatio, esiin alhaalta vasemmalta
        gsap.fromTo(leftSectionRef.current, 
            { y: 80, x: -100, opacity: 0, scale: 0.9 }, // Alkutila
            { y: 0, x: 0, opacity: 1, scale: 1,          // Lopputila
              duration: 1.5,
              ease: "power2.out", 
              scrollTrigger: {
                trigger: leftSectionRef.current,
                start: "top bottom",
                end: "top center",
                scrub: 1,
              }
            }
        );

        // Oikean osion animaatio, esiin alhaalta oikealta
        gsap.fromTo(rightSectionRef.current, 
            { y: 80, x: 100, opacity: 0, scale: 0.9 }, // Alkutila
            { y: 0, x: 0, opacity: 1, scale: 1,         // Lopputila
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: rightSectionRef.current,
                start: "top bottom",
                end: "top center",
                scrub: 1,
              }
            }
        );
    }, []);

    const leftSection = swap ? (
        <div className="left-section" ref={leftSectionRef}>
            <p>{content}</p>
        </div>
    ) : (
        <div className="left-section" ref={leftSectionRef}>
            <h2>{title}</h2>
        </div>
    );

    const rightSection = swap ? (
        <div className="right-section" ref={rightSectionRef}>
            <h2>{title}</h2>
        </div>
    ) : (
        <div className="right-section" ref={rightSectionRef}>
            <p>{content}</p>
        </div>
    );

    return (
        <div ref={ref} className="text-section">
            <div className="text-section-body">
                {leftSection}
                {rightSection}
            </div>
        </div>
    );
});

export default Index;
