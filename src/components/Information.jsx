import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({ imgSrc, title, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the root margin as needed for smooth animation
  });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} transition={{ duration: 0.5 }}>
      <div className="card">
        <motion.img
          src={imgSrc}
          alt="card"
          width={200}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="card-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.div>
        <motion.div
          className="details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <a href={link}>Watch it</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Information = () => {
  return (
    <div className="info-container">
      <motion.div
        className="text-content"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am here
        </motion.h2>
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            We spread <br /> <span>knowledge</span> and <br /> <span>community</span>
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="img-content"
      >
        <motion.img
          src="/info2.jpeg"
          className="info-img"
          alt="info"
          width={200}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="img-subcontent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>How skill development can be a game changer</h3>
          <p>There is a need for skill in every aspect of life and it can be developed...</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="cards-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card imgSrc="/card.png" title="IRSSM conference, how a service works in..." link="#" />
        <div className="spacer" />
        <Card imgSrc="/org.png" title="Basics of getting a good college" link="#" />
      </motion.div>
    </div>
  );
};

export default Information;
