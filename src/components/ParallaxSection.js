// 'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';

const links = [
    "http://external-website.com/link1",
    "http://external-website.com/link2",
    "http://external-website.com/link3",
    "http://external-website.com/link4",
    "http://external-website.com/link5",
    "http://external-website.com/link7",
    "http://external-website.com/link8",
    "http://external-website.com/link9",
    "http://external-website.com/link10",
    "http://external-website.com/link11",
    "http://external-website.com/link12",
  ]
const images = [
  "project-roihu.png",
  "project-kissakahvila.png",
  "project-elijuomapeli.png",
  "project-villetoimela.png",
  "project-kampaamo.png",
  "project-kyocera.png",
  "project-tunturiretki.png",
  "project-tammermatic.png",
  "project-tatuointistudio.png",
  "project-elijuomapeli.png",
  "project-sleipner.png",
  "project-kampaamo.png",
]

export default function ParallaxSection() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.2])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5])

  useEffect(() => {
    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    resize();
    
    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className="parallax-main">
      <div className="parallax-spacer"></div>
      <div ref={gallery} className="parallax-gallery">
      <Column images={[images[0], images[1], images[2]]} links={[links[0], links[1], links[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} links={[links[3], links[4], links[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} links={[links[6], links[7], links[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} links={[links[9], links[10], links[11]]} y={y4}/>
      </div>
      <div className="parallax-spacer"></div>
    </main>
  )
}

const Column = ({images, links, y}) => {
    return (
      <motion.div 
        className="column"
        style={{y}}
        >
        {
          images.map( (src, i) => {
            return (
              <div key={i} className="imageContainer">
                <a href={links[i]} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={`/images/${src}`}
                    alt='image'
                    fill
                  />
                </a>
              </div>
            )
          })
        }
      </motion.div>
    )
  }