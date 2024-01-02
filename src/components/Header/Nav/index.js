import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

export default function Nav({ projects, home, contact, textsection }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const scrollToProjects = () => projects.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToHome = () => home.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contact.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToTextsection = () => textsection.current?.scrollIntoView({ behavior: 'smooth' });
  

  const navItems = [
    {
      title: "Home",
      href: "#",
      onClick: scrollToHome,
    },
    {
      title: "About me",
      href: "#",
      onClick: scrollToTextsection,
    },
    {
      title: "Work",
      href: "#",
      onClick: scrollToProjects,
    },
    {
      title: "Contact",
      href: "#",
      onClick: scrollToContact,
    },
  ];

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="nav-menu">
       <div className="nav-body">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="nav-nav">
                    <div className="nav-header">
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map((data, index) => {
                        return (
                          <Link
                            key={index}
                            data={data}
                            onClick={data.onClick}
                            isActive={selectedIndicator === data.href}
                            setSelectedIndicator={setSelectedIndicator}
                          />
                        );
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  );
}
