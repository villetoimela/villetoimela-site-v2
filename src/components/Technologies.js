import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "HTML",
    color: "#F06318"
  },
  {
    title: "CSS",
    color: "#DCF018"
  },
  {
    title: "JAVASCRIPT",
    color: "#18F0E8"
  },
  {
    title: "TAILWIND",
    color: "#8C0CF0"
  },
  {
    title: "REACT",
    color: "#F0183C"
  },
  {
    title: "PHP",
    color: "#F0BA18"
  },
  {
    title: "SCSS",
    color: "#0C34F0"
  },
  {
    title: "NEXTJS",
    color: "#0CBCF0"
  },
  {
    title: "GIT",
    color: "#91F018"
  },
  {
    title: "WORDPRESS",
    color: "#F06318"
  },
  {
    title: "JQUERY",
    color: "#DCF018"
  },
  {
    title: "TYPESCRIPT",
    color: "#18F0E8"
  },
  {
    title: "SQL",
    color: "#8C0CF0"
  },
  {
    title: "C#",
    color: "#F0183C"
  },
  {
    title: "BOOTSTRAP",
    color: "#F0BA18"
  },
  {
    title: "GSAP",
    color: "#0C34F0"
  },
  {
    title: "NPM",
    color: "#0CBCF0"
  },
  {
    title: "YARN",
    color: "#91F018"
  },
  {
    title: "ACF",
    color: "#F06318"
  },
  {
    title: "CSS",
    color: "#DCF018"
  },
  {
    title: "WEB DESIGN",
    color: "#18F0E8"
  },
  {
    title: "FIGMA",
    color: "#8C0CF0"
  },
]

export default function Technologies() {
  const containerRefs = useRef([]);

  useEffect(() => {
    containerRefs.current.forEach((el, index) => {      
      gsap.fromTo(el, 
        { x: -75, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom+=100", // Aloituspiste skrollauksessa
            scrub: true
          } 
        });
    });
  }, []);

  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, { top: "-1vw", backgroundColor: projects[index].color, duration: 0.3 })
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, { top: "0", backgroundColor: "#eee9db", duration: 0.3, delay: 0.1 })
  }

  return (
    <div className="tech-container">
      <div className="tech-projectContainer">
        {
          projects.map((project, index) => {
            return (
              <div 
                onMouseEnter={(e) => manageMouseEnter(e, index)} 
                onMouseLeave={(e) => manageMouseLeave(e, index)} 
                ref={el => containerRefs.current[index] = el} 
                key={index}
              >
                <p>{project.title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}