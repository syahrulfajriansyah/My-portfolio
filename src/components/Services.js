import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'UI/UX Design',
    description: 'Transforming ideas into intuitive and engaging designs. I focus on creating seamless user experiences with a keen eye for detail and aesthetics.',
    link: '#',
  },
  {
    name: 'Development',
    description: 'Building robust and scalable web solutions. From interactive features to performance optimization, I ensure your website is both functional and efficient.',
    link: '#',
  },
  {
    name: 'Digital Marketing',
    description: 'Crafting strategies to boost your online presence. I leverage data-driven approaches to enhance visibility, engage audiences, and drive results.',
    link: '#',
  },
  {
    name: 'Product Branding',
    description: 'Creating a memorable brand identity that stands out. I help shape your brand’s visual and messaging elements to resonate with your target audience.',
    link: '#',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text Section */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mb-12 lg:mb-0 lg:pr-8 relative z-10'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-End Developer
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* Image Background */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 relative'
          >
            <div className='absolute inset-0 bg-services bg-bottom bg-no-repeat bg-cover mix-blend-lighten'></div>
          </motion.div>
        </div>
        
        {/* Services Section */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.3 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'
        >
          {/* Mapping through services data */}
          {services.map((service, index) => {
            const { name, description, link } = service;
            return (
              <div
                className='border border-white/20 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300'
                key={index}
              >
                {/* Service Content */}
                <div className='mb-6'>
                  <h4 className='text-[20px] tracking-wider font-semibold mb-4'>
                    {name}
                  </h4>
                  <p className='font-secondary leading-tight'>
                    {description}
                  </p>
                </div>
                {/* Learn More Link */}
                <div className='flex flex-col items-end'>
                  <a
                    href={link}
                    className='btn w-9 h-9 mb-2 flex justify-center items-center'
                  >
                    <BsArrowUpRight />
                  </a>
                  <a href={link} className='text-gradient text-sm'>
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
