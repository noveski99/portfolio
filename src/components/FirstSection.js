import React from 'react'
import '../style/FirstSection.css'
import '../App.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { RiCodeSSlashFill } from "react-icons/ri";
import { motion } from 'framer-motion';
const FirstSection = () => {
  return (
    <section id='Home' className='main-first'>
      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
        className='nav'>
        <ul>
          <li><a href='#Home'>Home </a></li>
          <li><a href='#About'>About</a></li>
          <li><a href='#Projects'>Projects </a></li>
          <li><a href='#Contact'>Contact </a></li>
        </ul>
      </motion.nav>
      <div className='main-inner'>
        <div className='main-inner-text'>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >Hi
          </motion.p>
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}>
            I'm Boban</motion.span>
        </div>
        <div id='icon'><RiCodeSSlashFill size={70} /></div>
        <div id='button-container'>
          <a href='#About'>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              id='see-more-button'
            > see more  <IoMdArrowDropdown className='down-arrow-bounce' />
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  )
}
export default FirstSection