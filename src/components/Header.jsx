import { motion } from 'framer-motion';

import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { id: uuidv4(), name: 'Home', href: '#home' },
  { id: uuidv4(), name: 'About', href: '#about' },
  { id: uuidv4(), name: 'Skills', href: '#skills' },
  { id: uuidv4(), name: 'Projects', href: '#projects' },
  { id: uuidv4(), name: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <header className='px-2 fixed top-2 w-full'>
      <section className='max-w-[1200px] mx-auto bg-gray-100/10 shadow-md rounded-md text-gray-50 flex items-center justify-between px-4 py-1'>
        <span className='logo text-[1.5rem] font-bold font-dancingScript'>
          Salman
        </span>
        <nav>
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
        <div className='flex items-center gap-2'>
          <motion.a
            whileHover={{
              scale: 1.11,
            }}
            className='text-2xl text-gray-50'
            href='https://github.com/Salman-sajib'
            target='_blank'
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.11,
            }}
            className='text-2xl text-gray-50'
            href=''
            target='_blank'
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </section>
    </header>
  );
};

export default Header;
