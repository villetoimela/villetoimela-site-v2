import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Index({ data, isActive, setSelectedIndicator, onClick }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="nav-link"
      onMouseEnter={() => { setSelectedIndicator(href) }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="nav-indicator"></motion.div>
      <NextLink href={href} passHref>
        <div onClick={(e) => {
          e.preventDefault();
          if (onClick) onClick(e); 
        }}>{title}</div>
      </NextLink>
    </motion.div>
  );
}
