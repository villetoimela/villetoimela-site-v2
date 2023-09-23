import { forwardRef, useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = forwardRef(({ projects, home }, ref) => {

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
        {isActive && <Nav projects={projects} home={home} />}
      </AnimatePresence>
    </>
  );
});

export default Header;
