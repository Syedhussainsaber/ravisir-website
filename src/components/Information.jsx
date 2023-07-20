import React from 'react'
import { motion } from 'framer-motion'

const Information = () => {
  return (
<>
<div className="info-container">
  <div className="text-content">
<motion.div  initial={{ opacity: 0,translateX:-150 }}
        transition={{duration:1.7, delay:0.2 }} 
        whileInView={{opacity:1,translateX:0}} >
<h2>I am <br /> here</h2>
</motion.div>
<motion.div  initial={{ opacity: 0,translateX:-150 }}
        transition={{duration:1.7, delay:0.4 }} 
        whileInView={{opacity:1,translateX:0}} >
<p>We spread <br /> <span>knowledge</span> and <br /> <span>community</span></p>
</motion.div>
  </div>
  <motion.div   initial={{ opacity: 0,scale:0 }}
        transition={{duration:1 }} 
        whileInView={{opacity:1,scale:1 }}>
<div className="img-content">

<img src="/info2.jpeg" className='info-img' alt="info" width={200} />
<div className="img-subcontent">
  <h3>How skill development can be a game changer</h3>
  <p>There is need of skill in every aspect of life and it can be developed...</p>
</div>

</div>
</motion.div>
<div className="cards-content">
<motion.div  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }} initial={{ opacity: 0,translateX:150 }}
  transition={{duration:1.7, delay:0.2 }} 
  whileInView={{opacity:1,translateX:0}} >
<div className="card">
<img src="/card.png" alt="card" width={200} />
<div className="details">
  <h4>IRSSM conference, how
a service works in...</h4>
<a href="">Watch it</a>
</div>
</div>
</motion.div>
<motion.div  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }} initial={{ opacity: 0,translateX:150 }}
  transition={{duration:1.7, delay:0.2 }} 
  whileInView={{opacity:1,translateX:0}}>
<div className="card">
<img src="/org.png" alt="card" width={200} />
<div className="details">
  <h4>Basics of getting a
good college</h4>
<a href="">Linkedin</a>
</div>
</div>
</motion.div>
</div>
</div>
</>
  )
}

export default Information