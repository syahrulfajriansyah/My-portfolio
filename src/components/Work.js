import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { fadeIn } from '../variants'; // Import variants
import img1 from '../assets/portfolio-img1.png'; // UI/UX Design
import img2 from '../assets/portfolio-img2.png'; // Development
import img3 from '../assets/portfolio-img3.png'; // Digital Marketing

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        {/* Text Section */}
        <div className='text-center mb-16'>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className='h2 leading-tight text-accent'>
              My latest <br />
              work
            </h2>
            <p className='max-w-sm mx-auto mb-8'>
              Discover the essence of my recent projects where innovation meets creativity. Each piece is a testament to my dedication to solving complex challenges with elegant solutions.
            </p>
            <button className='btn btn-sm'>View All Projects</button>
          </motion.div>
        </div>
        {/* Image Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Image Container 1 */}
          <motion.div
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Overlay for darkening the image on hover */}
            <motion.div
              className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-70 transition-opacity duration-300'
            ></motion.div>
            {/* Image */}
            <motion.img
              className='transition-transform duration-500 group-hover:brightness-50'
              src={img1}
              alt='UI/UX Design'
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.5 }}
            />
            {/* Pre-title (appears on hover) */}
            <motion.div
              className='absolute bottom-24 left-12 text-gradient z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            >
              <span className='text-gradient'>UI/UX Design</span>
            </motion.div>
            {/* Title (appears on hover) */}
            <motion.div
              className='absolute bottom-14 left-12 text-3xl text-white z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700'
            >
              <span className='text-xl text-white'>Revamping User Experience</span>
            </motion.div>
            {/* Caption (text below image, changes color on hover) */}
            <motion.figcaption
              className='absolute bottom-4 left-12 text-white group-hover:text-yellow-300 transition-colors duration-300'
            >
              
            </motion.figcaption>
          </motion.div>
          {/* Image Container 2 */}
          <motion.div
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Overlay */}
            <motion.div
              className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-70 transition-opacity duration-300'
            ></motion.div>
            {/* Image */}
            <motion.img
              className='transition-transform duration-500 group-hover:brightness-50'
              src={img2}
              alt='Development'
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.5 }}
            />
            {/* Pre-title */}
            <motion.div
              className='absolute bottom-24 left-12 text-gradient z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            >
              <span className='text-gradient'>Development</span>
            </motion.div>
            {/* Title */}
            <motion.div
              className='absolute bottom-14 left-12 text-3xl text-white z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700'
            >
              <span className='text-xl text-white'>Building Solutions</span>
            </motion.div>
            {/* Caption */}
            <motion.figcaption
              className='absolute bottom-4 left-12 text-white group-hover:text-yellow-300 transition-colors duration-300'
            >
              
            </motion.figcaption>
          </motion.div>
          {/* Image Container 3 */}
          <motion.div
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Overlay */}
            <motion.div
              className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-70 transition-opacity duration-300'
            ></motion.div>
            {/* Image */}
            <motion.img
              className='transition-transform duration-500 group-hover:brightness-50'
              src={img3}
              alt='Digital Marketing'
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.5 }}
            />
            {/* Pre-title */}
            <motion.div
              className='absolute bottom-24 left-12 text-gradient z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            >
              <span className='text-gradient'>Digital Marketing</span>
            </motion.div>
            {/* Title */}
            <motion.div
              className='absolute bottom-14 left-12 text-3xl text-white z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700'
            >
              <span className='text-xl text-white'>Strategic Campaigns</span>
            </motion.div>
            {/* Caption */}
            <motion.figcaption
              className='absolute bottom-4 left-12 text-white group-hover:text-yellow-300 transition-colors duration-300'
            >
              
            </motion.figcaption>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
