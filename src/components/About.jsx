import React from 'react'
import { motion } from 'framer-motion'


function About() {

  return (
   <>
    <div className='about-container' id='about'>
<motion.div  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}  initial={{ opacity: 0,translateX:-150 }}
  transition={{duration:1.4, delay:0.1 }} 
  whileInView={{opacity:1,translateX:0}}>
<img src="/about.png" className='about-img' alt="img" width={350}/>
</motion.div>
     
      <div className='details'>
      <div className="about-title">
<motion.div   initial={{ opacity: 0,translateX:150 }}
        transition={{duration:1.5, delay:0.2 }} 
        whileInView={{opacity:1,translateX:0}}>
<h1>I am <br /> Ravi Chatterjee</h1>
</motion.div>
<motion.div   initial={{ opacity: 0,translateX:150 }}
        transition={{duration:1.5, delay:0.2 }} 
        whileInView={{opacity:1,translateX:0}}>
      <h3 className="edu">Educator |  Entreprenur</h3>
      </motion.div>
      </div>
     <motion.div  initial={{ opacity: 0,translateX:150 }}
        transition={{duration:1.6, delay:0.2 }} 
        whileInView={{opacity:1,translateX:0}}>
      <p>
      Dr. Ravi Chatterjee is an accomplished academician and professional in the field of management. He currently serves as an Assistant Professor at the Institute of Management Technology (IMT) Dubai, a renowned business school in the United Arab Emirates. In addition to his teaching responsibilities, Dr. Chatterjee holds the prestigious position of Director of the Institute's International Research and Studies in Management (IRSSM) division.
      </p>
       <p><li className='li'>Get to know me more</li></p>
       </motion.div>
       </div>
     </div>

   

   </>
  )
}

export default About