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

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  const titleSectionRef1 = useRef(); // ref for the first TitleSection
  const titleSectionRef2 = useRef(); // ref for the second TitleSection

  const scrollToTitleSection1 = () => titleSectionRef1.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToTitleSection2 = () => titleSectionRef2.current.scrollIntoView({ behavior: 'smooth' });

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
    <Header />
    <button onClick={scrollToTitleSection1}>Go to SOME OF MY PROJECTS</button> {/* example button for first TitleSection */}
    <button onClick={scrollToTitleSection2}>Go to LINK TO GITHUB HERE</button> {/* example button for second TitleSection */}
    <Hero />
    <ScrollSection />
    <TitleSection ref={titleSectionRef1} title ="SOME OF MY PROJECTS" />
    <ParallaxSection />
    <TitleSection ref={titleSectionRef2} title ="LINK TO GITHUB HERE" link="https://github.com/villetoimela" linkTitle="> github" />
    <Footer />
    
    </main>
  )
}
