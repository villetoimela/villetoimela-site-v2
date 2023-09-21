import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
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

export default function Home() {

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
    <Hero />
    <ScrollSection />
    <TitleSection title ="SOME OF MY PROJECTS" />
    <ParallaxSection />
    <TitleSection title ="LINK TO GITHUB HERE" link="https://github.com/villetoimela" linkTitle="> github" />
    <Footer />
    </main>
  )
}
