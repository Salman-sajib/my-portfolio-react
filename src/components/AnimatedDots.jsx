import { useEffect, useRef } from 'react';
import anime from 'animejs';

const DotGrid = ({ width = 30, height = 25 }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    // Start the animation when component mounts
    startAnimation();

    // Cleanup function to stop the animation when component unmounts
    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  const startAnimation = () => {
    // Start the animation after a delay
    setTimeout(() => {
      // Start the animation
      animationRef.current = anime({
        targets: '.dot-point',
        scale: [
          { value: 1.3, easing: 'easeOutSine', duration: 400 },
          { value: 1, easing: 'easeInOutQuad', duration: 800 },
        ],
        translateY: [
          { value: -15, easing: 'easeOutSine', duration: 400 },
          { value: 0, easing: 'easeInOutQuad', duration: 800 },
        ],
        opacity: [
          { value: 1, easing: 'easeOutSine', duration: 400 },
          { value: 0.5, easing: 'easeInOutQuad', duration: 800 },
        ],
        loop: true, // Loop the animation infinitely
        delay: anime.stagger(150, {
          grid: [width, height],
          from: 'center',
        }),
        direction: 'alternate', // Alternate the direction of animation
      });
    }, 2500); // Wait for 2500 milliseconds before starting animation
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      dots.push(
        <div
          className='rounded-full transition-colors hover:bg-slate-600'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point size-[.5rem] rounded-full bg-gradient-to-br from-[#9ca3af] to-[#6b7280] opacity-50'
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${width}, 1fr)` }}
      className='grid gap-3 w-fit'
    >
      {dots}
    </div>
  );
};

const WaterDropGrid = ({ width = 30, height = 25 }) => {
  return (
    <div>
      <DotGrid width={width} height={height} />
    </div>
  );
};

export default WaterDropGrid;
