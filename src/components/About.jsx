import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function About() {
  const controls = useAnimation();

  const handleScroll = () => {
    // Trigger the underline animation when scrolling
    controls.start('visible');
  };

  useEffect(() => {
    // Function to handle scroll events
    const handleScrollEvent = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffsetTop = document.getElementById('about').offsetTop;

      // Calculate the scroll progress based on the element's position in the viewport
      const scrollProgress = 1 - (elementOffsetTop - scrollY) / windowHeight;

      // Update animation based on scroll progress
      if (scrollProgress > 0.2) {
        controls.start('visible');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScrollEvent);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [controls]);

  return (
    <>
      <div className='about-container' id='about'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, translateY: -100 }} // Move the image up initially
          animate={{ opacity: 1, translateY: 0 }} // Animate the image to its original position
          transition={{ duration: 1.4, delay: 0.1 }}
          whileInView={{ opacity: 1, translateY: 0 }}
        >
          <img src="/about.png" className='about-img' alt="img" width={350} />
        </motion.div>

        <div className='details'>
          <div className="about-title">
            <motion.div
              initial={{ opacity: 0, translateX: 150 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              <h1>I am <br /> Ravi Chatterjee</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 150 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              <h3 className="edu">Educator |  Entrepreneur</h3>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, translateX: 150 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            onViewportEnter={handleScroll} // Trigger the underline animation on entering viewport
          >
            <p>
              Dr. Ravi Chatterjee is an accomplished academician and professional in the field of management. He currently serves as an Assistant Professor at the Institute of Management Technology (IMT) Dubai, a renowned business school in the United Arab Emirates. In addition to his teaching responsibilities, Dr. Chatterjee holds the prestigious position of Director of the Institute's International Research and Studies in Management (IRSSM) division.
            </p>
            <p>
              <li className='li'>Get to know me more</li>
            </p>
            {/* Smooth underline animation */}
            <motion.div
              className="underline"
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: { width: '100%' },
              }}
              transition={{ duration: 3, ease: 'easeInOut' }} // Adjust the duration for smoothness
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
