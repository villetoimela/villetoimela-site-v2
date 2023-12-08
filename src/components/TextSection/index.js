import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Index(props) {
    const { title, content, swap } = props;
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        // Vasemman osion animaatio, esiin alhaalta vasemmalta
        gsap.fromTo(leftSectionRef.current, 
            { y: 80, x: -100, opacity: 0, scale: 0.9 }, // Alkutila
            { y: 0, x: 0, opacity: 1, scale: 1,          // Lopputila
              duration: 1.5,
              ease: "power2.out", // Sujuvampi ja vähemmän pompottava liike
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
              ease: "power2.out", // Sujuvampi ja vähemmän pompottava liike
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
            <h4>{title}</h4>
        </div>
    );

    const rightSection = swap ? (
        <div className="right-section" ref={rightSectionRef}>
            <h4>{title}</h4>
        </div>
    ) : (
        <div className="right-section" ref={rightSectionRef}>
            <p>{content}</p>
        </div>
    );

    return (
        <div className="text-section">
            <div className="text-section-body">
                {leftSection}
                {rightSection}
            </div>
        </div>
    );
}
