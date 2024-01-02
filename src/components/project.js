import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const anim = {
    initial: { width: 0 },
    open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
    closed: { width: 0 }
};

export default function Index({ project, index }) {
    const { title1, title2, src } = project;
    const [isActive, setIsActive] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const direction = index % 2 === 0 ? -1 : 1;

        gsap.fromTo(containerRef.current, 
            { x: -100 * direction, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", 
              scrollTrigger: {
                trigger: containerRef.current,
                start: "center 90%", // Animoinnin aloituskohta
                end: "center 20%", // Animoinnin loppumiskohta
                scrub: true
              } 
            });
    }, [index]);

    return (
        <div ref={containerRef} onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="project">
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className="imgContainer">
                <img src={src} alt="" />
            </motion.div>
            <p>{title2}</p>
        </div>
    );
}
