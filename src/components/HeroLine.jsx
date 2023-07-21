import { motion } from "framer-motion";

const HeroLine = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: "url(backgroundImg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "1000px", // Increase the height of the container
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        filter: "brightness(120%)", // Increase brightness of the background image
      }}
    >
      {/* Dark overlay to enhance visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <motion.h1
          style={{
            color: "white",
            fontSize: "4em",
            maxWidth: "800px",
            padding: "20px",
            lineHeight: "1.4",
          }}
          initial={{ opacity: 0, y: 100 }} // Initial hidden position and opacity
          animate={{ opacity: 1, y: 0 }} // Animation on page load
          transition={{ duration: 1, delay: 0.5 }} // Delay the animation to appear after 0.5s
        >
          It is my firm belief that with the right effort and systematic guidance, anyone can do well in life
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default HeroLine;
