import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';

import { useState } from 'react';

const navLinks = [
  { id: uuidv4(), name: 'Home', href: '#home' },
  { id: uuidv4(), name: 'About', href: '#about' },
  { id: uuidv4(), name: 'Skills', href: '#skills' },
  { id: uuidv4(), name: 'Projects', href: '#projects' },
  { id: uuidv4(), name: 'Contact', href: '#contact' },
];

const staggerVariant = {
  hidden: {
    y: '20px',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(true);
  };
  const handleCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <header className='px-2 py-2 w-full'>
      <section className='max-w-[1200px] mx-auto bg-gray-100/10 shadow-md rounded-md text-gray-50 flex items-center justify-between px-4 py-1'>
        <h1 className='logo text-[1.4rem] text-gray-50 font-bold font-dancingScript'>
          Salman
        </h1>
        <nav className=' hidden md:block'>
          <ul className='flex items-center gap-9'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className='text-[.92rem] text-gray-300 font-inter font-regular px-3 py-[2px] rounded-full  hover:text-gray-50  focus:text-gray-50  active:text-gray-50 transition-all'
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={handleOpenNav}
          className=' md:hidden cursor-pointer px-2 py-1 rounded-md hover:bg-gray-50/20 '
        >
          <RxHamburgerMenu className=' text-xl text-gray-50  ' />
        </button>
        <div className='flex items-center gap-2'>
          <motion.a
            whileHover={{
              scale: 1.11,
            }}
            className='text-[1.3rem] text-gray-50'
            href='https://github.com/Salman-sajib'
            target='_blank'
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.11,
            }}
            className='text-[1.3rem] text-gray-50'
            href='https://www.linkedin.com/in/salman-sajib-b2468b141/'
            target='_blank'
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </section>

      {/* ========== Mobile navigation ========== */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{
              x: '-100%',
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            exit={{
              x: '100%',
              opacity: 0,
              transition: { duration: 0.4 },
            }}
            style={{
              backdropFilter: 'blur(20px)',
            }}
            className=' min-h-dvh absolute top-0 left-0 w-full bg-zinc-950/10 z-40 '
          >
            <button
              onClick={handleCloseNav}
              style={{
                width: 'max-content',
              }}
              className=' h-[5vh] flex items-center justify-center text-2xl text-gray-300 hover:text-gray-50 cursor-pointer float-right '
            >
              <CgClose />
            </button>
            <ul className=' h-[95vh] flex flex-col items-center justify-center gap-10 '>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  variants={staggerVariant}
                  initial='hidden'
                  animate='visible'
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.1,
                  }}
                >
                  <a
                    onClick={() => setIsOpen(false)}
                    className=' text-2xl text-gray-300 font-playfairDisplay font-regular p-2 hover:text-gray-50 '
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
