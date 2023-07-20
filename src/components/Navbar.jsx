import React, { useState } from "react";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
<div className="nav__brand">
    <h1>Dr. Ravi Chatterji</h1>
</div>
      <ul className={active}>
      <li className="nav__item">
          <a href={"/home"}  className="nav__link" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Home</a>
        </li>
        <li className="nav__item">
          <a href={"about"}  className="nav__link" spy={true} smooth={true} offset={50} duration={500} delay={1000}>About Me</a>
        </li>
        <li className="nav__item">
          <a href={"/"}  className="nav__link">What I Do</a>
        </li>
        <li className="nav__item">
          <a href={"/"}  className="nav__link">Works</a>
        </li>
        <li className="nav__item">
          <a href={"/"}  className="nav__link">You can find me here</a>
        </li>
        <li className="nav__item">
        <a href={"/"}  className="nav__link">Testimonals</a>
        </li>
      
<li className="nav__item"> <a href={"/"}  className="nav__link">Contact me</a></li>


      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;


