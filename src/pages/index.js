import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Hero from '@/components/Hero'
import ScrollSection from '@/components/ScrollSection'
import Footer from '@/components/Footer'
import Projects1 from '@/components/Projects1'
import Projects2 from '@/components/Projects2'
import TitleSection from '@/components/TitleSection'
import Preloader from '@/components/Preloader'

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

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
    <Hero />
    <ScrollSection />
    <TitleSection title ="SOME WORDPRESS PROJECTS" />
    <Projects1 />
    <TitleSection title ="SOME REACT PROJECTS" />
    <Projects2 />
    <TitleSection title ="MORE PROJECTS IN GITHUB" link="https://github.com/villetoimela" linkTitle="> github" />
    <Footer />
    </main>
  )
}
