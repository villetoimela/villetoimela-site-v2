/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useEffect, useState } from 'react';
import Nav from './Nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = forwardRef(({ projects, home, contact, textsection }, ref) => {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname]);

  return (
    <>
      <div ref={ref} className="nav-main">
        <div className="nav-header">
          <div onClick={() => { setIsActive(!isActive) }} className="nav-button">
            <div className={`${"burger"} ${isActive ? "burgerActive" : ""}`}></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav projects={projects} home={home} contact={contact} textsection={textsection} />}
      </AnimatePresence>
    </>
  );
});

export default Header;
