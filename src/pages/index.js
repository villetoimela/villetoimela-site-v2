import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero'
import ScrollSection from '@/components/ScrollSection'
import Footer from '@/components/Footer'
import Projects1 from '@/components/Projects1'
import Projects2 from '@/components/Projects2'
import TitleSection from '@/components/TitleSection'
import Preloader from '@/components/Preloader'
import ParallaxSection from '@/components/ParallaxSection';
import InfiniteScroll from '@/components/InfiniteScroll';
import Header from '@/components/Header';
import ScrollSectionShort from '@/components/ScrollSectionShort';
import Technologies from '@/components/Technologies';
import TextSection from '@/components/TextSection';
import FloatingGallery from '@/components/FloatingGallery';
import WorksPeek from '@/components/WorksPeek';
import ProjectGallery from '@/components/ProjectGallery';

export default function Home() {

  const projects = useRef();
  const home = useRef();

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
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

      <Header projects={projects} home={home} />
      <Hero ref={home} />
      <TextSection 
        title = "Who am i"
        content ="Hello! I'm a 28-years-old eager Web Developer with about three years of active coding experience. While I've always been intrigued by programming, I officially embarked on my learning journey only three years ago. During this time, I learned many different skills and made some digital ideas real! I've logged tens of thousands of hours playing video games. The passion and commitment I once dedicated to gaming have now transitioned into software development. My aim is to accumulate atleast an equal number of hours in coding and continue expanding my knowledge."
      />
      <TextSection
        title = "What i do"
        content ="After an intensive two-year Software Developer training, I had the privilege of working at one of Finland's most influential marketing agencies. There, I've been involved in creating various websites tailored to meet the specific needs of clients. Most of these projects involved building custom WordPress themes. In addition to coding, this role has provided me with invaluable experience in teamwork and interacting effectively with clients.
          During my studies, a fellow student and I co-founded a company. Through this venture, we had the chance to work on several exciting projects! If you're interested, check out <a href='https://www.hiisi.digital/'>hiisi.digital</a>."
      />
      <TitleSection title ="Sneak peek to some of my projects" />
      <WorksPeek />
      <TitleSection textAlignRight={true} title ="Link to " link="https://github.com/villetoimela" linkTitle="> github" />
      {/* <FloatingGallery /> */}
      <TextSection
        title = "What i know"
        content ="For me, it's not just about mastering specific programming languages or technologies; it's about embracing the entirety of web development. I've garnered a wealth of experience across a range of technologies over the years."
      />
      <TextSection
        title = "Techs and tools"
        content ="Over the years, my journey as a web developer has been both vast and fulfilling. I've mastered the art of creating seamless user interfaces using tools like HTML, CSS, JavaScript, and React. Venturing further, PHP, Next.js, TailwindCSS, and WordPress became trusted companions in my toolkit, allowing me to shape visions into digital realities.
          Of course, I'm accustomed to using version control in my projects, and in addition, I've had a glimpse into the world of databases and servers."
      />
      <ProjectGallery />
      {/* <ScrollSection /> */}
      {/* <ParallaxSection /> */}
      {/* <ScrollSectionShort /> */}
      <TitleSection title ="Tech & tools i have been using lately" />
      <Technologies />
      <Footer />
      <div className="noise"></div>
    </main>
  )
}
