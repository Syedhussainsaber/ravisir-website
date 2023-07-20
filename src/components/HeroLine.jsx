import {easeInOut, motion} from "framer-motion"

const HeroLine = () => {
  return (
    <div className="container">
  

 <h1 className='hero-line'>
 <motion.div   initial={{ opacity: 0,scale:0 }}
        transition={{duration:1 }} 
        whileInView={{opacity:1,scale:1 }} >
  It is my firm belief that with the right effort and systematic guidance, anyone can do well in life
  </motion.div>
  </h1>



 <motion.div
 
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  initial={{ opacity: 0,translateX:150 }}
  transition={{duration:1.5,delay:0.1}} 
  whileInView={{opacity:1,translateX:0}}
 >
 <img className='front-img' src={'/background2.jpeg'} alt="image"/>
 </motion.div>
 
</div>
  );
};

export default HeroLine