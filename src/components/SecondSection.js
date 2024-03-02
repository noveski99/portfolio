import React from 'react'
import '../style/SecondSection.css'
import css from '../images/css.png'
import typescript from '../images/typescript.png'
import nodejs from '../images/nodejs.png'
import react from '../images/react.png'
import git from '../images/git.png'
import postgresql from '../images/postgresql.png'
import { motion } from 'framer-motion';
import Carousel from './Carousel'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaStackOverflow } from "react-icons/fa";
const SecondSection = () => {
  const icons = [
    { 'src': typescript, "alt": "alte" },
    { 'src': css, "alt": "alte" },
    { 'src': nodejs, "alt": "alte" },
    { 'src': react, "alt": "alte" },
    { 'src': git, "alt": "alte" },
    { 'src': postgresql, "alt": "alte" }
  ]
  return (
    <section id='About' className='main-second'>
      <div className='main-second-inner'>
        <div className='mid'>
          <div className='mid-left'>
            <div className='first-text'>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >Boban,
                <motion.div
                  initial={{ x: -150, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className='rectangle'>
                </motion.div>
              </motion.p>
            </div>
            <div className='second-text'>
              <p>web developer</p>
            </div>
            <div className='third-text'>
              <p> <span>H</span>ello! FCSE student, passionate about all things web & software development,
                who likes to craft well founded frontend products with great user experience. When i'm not at my computer i like going out,
                as well as keeping fit. I'm most familiar with the following tech set.
              </p>
            </div>
            <div className='contact'>
              <div className='contact-icons'>
                <a title='LinkedIn' href='#About'><FaLinkedin size={'1.5rem'} /> </a>
                <a title='GitHub' href='https://github.com/noveski99' target="_blank" rel="noreferrer" ><FaGithub size={'1.5rem'} /></a>
                <a href='mailto:noveski99@gmail.com' title='E-mail'><IoMdMailOpen size={'1.5rem'} /> </a>
                <a title='Stackoverflow' href='#About'><FaStackOverflow size={'1.5rem'} /></a>
              </div>
            </div>
          </div>
          <div className='mid-right'>
            <Carousel icons={icons} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SecondSection