import React from 'react';
// CountUp
import CountUp from 'react-countup';
// Intersection Observer Hook
import { useInView } from 'react-intersection-observer';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Import image
import image from '../assets/about.png';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='relative h-[300px] sm:h-[400px] lg:h-[640px] bg-cover bg-center mix-blend-lighten rounded-lg shadow-lg'
            style={{ backgroundImage: `url(${image})` }}
          ></motion.div>

          {/* Text */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-col justify-center'
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-accent mb-4'>About Me</h2>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              I'm a Freelance Front-End Developer
            </h3>
            <p className='text-base sm:text-lg mb-8'>
              Hello! I'm a Freelance Front-End Developer with a passion for crafting beautiful and functional websites. I specialize in creating responsive, user-centric designs that make a lasting impression. Although I’m just starting out in my career, my dedication to learning and growing keeps me on the cutting edge of web development trends. I’m excited to bring fresh ideas and innovative solutions to your next project. Let's collaborate to turn your vision into reality!
            </p>

            {/* Stats */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
              <div className='flex flex-col items-center text-center'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? (
                    <CountUp start={0} end={0} duration={5} />
                  ) : (
                    <span>0</span>
                  )}
                </div>
                <div className='font-primary text-xs sm:text-sm tracking-widest'>
                  Years of <br />
                  Experience
                </div>
              </div>

              <div className='flex flex-col items-center text-center'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? (
                    <CountUp start={0} end={0} duration={5} />
                  ) : (
                    <span>0</span>
                  )}
                  <span className='text-xl sm:text-2xl md:text-3xl'>+</span>
                </div>
                <div className='font-primary text-xs sm:text-sm tracking-widest'>
                  Projects <br />
                  Completed
                </div>
              </div>

              <div className='flex flex-col items-center text-center'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? (
                    <CountUp start={0} end={0} duration={5} />
                  ) : (
                    <span>0</span>
                  )}
                  <span className='text-xl sm:text-2xl md:text-3xl'>+</span>
                </div>
                <div className='font-primary text-xs sm:text-sm tracking-widest'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
