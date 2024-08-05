import React from 'react';
// images
import image from '../assets/about.png';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='text-4xl sm:text-5xl md:text-6xl lg:text-[110px] font-bold leading-tight lg:leading-[0.8]'
            >
              SYAHRUL <span className='text-yellow-500'>ISBANI</span> <span className='text-yellow-500'>FAJRIANSYAH</span>
            </motion.h1>
            <div className='mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-secondary font-semibold uppercase leading-tight'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'FRONT-END DEVELOPER', 2000,
                  'BACK END DEVELOPER', 2000,
                  'DESIGNER', 2000,
                ]}
                speed={50}
                className='text-xl sm:text-2xl md:text-3xl lg:text-yellow-500'
                wrapper='span'
                cursor={true}
                repeat={Infinity}
              />
            </div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:mx-0'
            >
              I’m a passionate Front-End Developer who thrives on creating engaging and user-friendly digital experiences. Though I'm new to the field, my enthusiasm for learning and commitment to excellence drive me to deliver high-quality work and innovative solutions. Let’s build something amazing together!
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-xl sm:text-2xl md:text-3xl gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com' className='text-gray-700 hover:text-gray-900'>
                <FaGithub />
              </a>
              <a href='https://linkedin.com' className='text-blue-600 hover:text-blue-800'>
                <FaLinkedin />
              </a>
              <a href='https://instagram.com' className='text-pink-500 hover:text-pink-700'>
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={image} alt='Syahrul Isbani Fajriansyah' className='w-full h-auto' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
