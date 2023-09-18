import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import ScrollSection from '@/components/ScrollSection'
import Footer from '@/components/Footer'
import Projects1 from '@/components/Projects1'
import Projects2 from '@/components/Projects2'
import TitleSection from '@/components/TitleSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero />
    <ScrollSection />
    <TitleSection title ="SOME WORDPRESS PROJECTS" />
    <Projects1 />
    <Footer />
    <Projects2 />
    </>
  )
}
