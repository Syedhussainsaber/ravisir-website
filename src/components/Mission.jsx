import React from 'react'
import { motion } from 'framer-motion'

const Mission = () => {
  return (
<>
<div className="mission-container">
<motion.div   
        initial={{ opacity: 0,scale:0 }}
        transition={{duration:1.5 }} 
        whileInView={{opacity:1,scale:1 }}
        // animate={{ opacity: 1,scale:1}}
        >
<div className="mission-title">
    <h2>My Mission</h2>
    <p>As an Assistant Professor, Dr. Chatterjee is dedicated to fostering a stimulating learning environment for his students. He employs a blend of theoretical concepts and practical examples to enhance their understanding of management principles and their real-world applications. His teaching methodology encourages critical thinking, creativity, and collaborative problem-solving skills among his students.</p>
</div>
</motion.div>

    <div className="mission-cards">
    <motion.div
 
 whileHover={{ scale: 1.1 }}
 whileTap={{ scale: 0.9 }}
>
        <div className="card">
<img src="/mission1.jpeg" alt="image" width={200} />
<div className="card-details">
    <h3>Fostering Thinking</h3>
    <p>I believe in empowering students to become critical thinkers and
.............</p>
</div>

        </div>
        </motion.div>

        <motion.div
 
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
 >
        <div className="card">
        <img src="/mission2.jpeg" alt="image" width={200} />
        <div className="card-details">
            <h3>Encouraging Environmental Learning</h3>
            <p>I strongly believe in the power of experiential
......</p>
        </div>
            </div>
            </motion.div>
            <motion.div
 
 whileHover={{ scale: 1.1 }}
 whileTap={{ scale: 0.9 }}
>
            <div className="card">
            <img src="/mission3.jpeg" alt="image" width={200} />
            <div className="card-details">
            <h3>Unwavering dedication & support</h3>
            <p>I strongly believe in the power of experiential
......</p>
            </div>
            </div>
            </motion.div>
    </div>
</div>
</>
  )
}

export default Mission