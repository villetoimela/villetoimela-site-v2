import React, { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import TitleSection from '@/components/TitleSection'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header';
import Technologies from '@/components/Technologies';
import TextSection from '@/components/TextSection';
import WorksPeek from '@/components/WorksPeek';
import ProjectGallery from '@/components/ProjectGallery';
import ZoomParallax from '@/components/ZoomParallax';

export default function Home() {

  const projects = useRef();
  const home = useRef();
  const contact = useRef();
  const textsection = useRef();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2500)
      }
    )()
  }, [])

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Siivoa kun komponentti unmountataan.
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Header projects={projects} home={home} contact={contact} textsection={textsection} />
      <Hero ref={home} />

      <TextSection ref={textsection}
        title="Who am i"
        content="Hello! I'm a 29-years-old eager Web Developer with about four years of active coding experience. While I've always been intrigued by programming, I officially embarked on my learning journey only five years ago. During this time, I learned many different skills and made some digital ideas real! I've logged tens of thousands of hours playing video games. The passion and commitment I once dedicated to gaming have now transitioned into software development. My aim is to accumulate atleast an equal number of hours in coding and continue expanding my knowledge."
      />
      <TextSection
        title="What i do"
        content={
          <>
            After an intensive two-year Software Developer training, I had the privilege of working at one of Finland&apos;s most influential marketing agencies. There, I&apos;ve been involved in creating various websites tailored to meet the specific needs of clients. Most of these projects involved building custom WordPress themes. In addition to coding, this role has provided me with invaluable experience in teamwork and interacting effectively with clients.
            <br />
            <br />
            During my studies, my brother and I co-founded a company. Through this venture, we had the chance to work on several exciting projects! If you&apos;re interested, check out <a href="https://www.hiisi.digital/" target="_blank" rel="noopener noreferrer">hiisi.digital</a>.
          </>
        }
      />
      <TitleSection title="Sneak peek to some of my projects" />
      <WorksPeek />
      <TitleSection textAlignRight={true} title="Link to " link="https://github.com/villetoimela" linkTitle="> github" />
      <TextSection
        title="What i know"
        content="For me, it's not just about mastering specific programming languages or technologies; it's about embracing the entirety of web development. I've garnered a wealth of experience across a range of technologies over the years."
      />
      <TextSection
        title="Techs and tools"
        content="Over the years, my journey as a web developer has been both vast and fulfilling. I've mastered the art of creating seamless user interfaces using tools like HTML, CSS, JavaScript, and React. Venturing further, PHP, Next.js, TailwindCSS, and WordPress became trusted companions in my toolkit, allowing me to shape visions into digital realities.
          Of course, I'm accustomed to using version control in my projects, and in addition, I've had a glimpse into the world of databases and servers."
      />
      <ZoomParallax />
      <TitleSection href="work" title="Some of my latest works" />
      <ProjectGallery ref={projects} />
      <TitleSection title="Tech & tools i have been using lately" />
      <Technologies />
      <Footer ref={contact} />
      <div className="noise"></div>
    </main>
  )
}
