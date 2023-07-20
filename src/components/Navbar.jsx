import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  return (
    <nav className="nav">
      <motion.div
        className="nav__brand"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Use a professional font like 'Montserrat' */}
        <h1 style={{ fontFamily: 'Montserrat', fontSize: '24px' }}>Dr. Ravi Chatterjee</h1>
      </motion.div>
      <motion.ul className={active}>
        <motion.li
          className="nav__item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={"/home"} className="nav__link">Home</a>
        </motion.li>
        <motion.li
          className="nav__item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={"about"} className="nav__link">About Me</a>
        </motion.li>
        <motion.li
          className="nav__item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={"/"} className="nav__link">What I Do</a>
        </motion.li>
        <motion.li
          className="nav__item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={"/"} className="nav__link">Works</a>
        </motion.li>
        <motion.li
          className="nav__item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={"/"} className="nav__link">You can find me here</a>
        </motion.li>
        <motion.li
          className="nav__item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={"/"} className="nav__link">Testimonials</a>
        </motion.li>
        <motion.li
          className="nav__item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={"/"} className="nav__link">Contact me</a>
        </motion.li>
      </motion.ul>
      <motion.div
        className={icon}
        onClick={navToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div className="line1" />
        <motion.div className="line2" />
        <motion.div className="line3" />
      </motion.div>
    </nav>
  );
}

export default Navbar;
