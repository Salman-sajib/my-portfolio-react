import { motion } from 'framer-motion';

import Header from './Header';
import Hero from './Hero';

const Main = () => {
  return (
    <main id='home' className='w-full min-h-dvh bg-zinc-950 '>
      <div
        className='grid-lines'
        style={{
          backgroundImage: `linear-gradient(
        to right,
        rgba(255, 255, 255, 0.15) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '27px 27px',
          position: 'absolute',
          inset: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(9,9,11,.3), rgba(9,9,11,0.95))`,
        }}
      />
      <motion.div
        initial={{ x: '-100%', y: '-600%', rotate: '40deg', opacity: 1 }} // Initial position outside the viewport with opacity 0
        animate={{ x: '0', y: 0, opacity: 1 }} // Animation to bring it inside the viewport with opacity 1
        transition={{ duration: 1.5, delay: 1, ease: 'easeIn' }} // Animation duration and easing
        className=' absolute top-[220px] -left-[100px] w-[400px] md:w-[600px] xl:w-[1000px] h-[120px] rounded-full bg-white/5 blur-2xl '
      />
      <Header />
      <div>
        <Hero />
      </div>
    </main>
  );
};

export default Main;
