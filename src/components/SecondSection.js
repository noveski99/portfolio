import React from 'react'
import '../style/SecondSection.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaStackOverflow } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";
import Title from './motioncomponents/Title';
import Square from './motioncomponents/Square'
import Paragraph from './motioncomponents/Paragraph'
const SecondSection = () => {
  return (
    <section id='About' className='main-second'>
      <div className='main-second-inner'>
        <div className='mid'>
          <div className='mid-top'>
            <Title className='title'>
              <p>Introduction</p>
            </Title>
            <Title className='second-title'>
              <p>Overview.</p>
            </Title>
            <div className='second-text'>
              <p>web developer</p>
            </div>
            <Paragraph className='third-text'>
              <p> <span>H</span>ello! FCSE student, passionate about all things web & software development,
                who likes to craft well founded frontend products with great user experience. When i'm not at my computer i like going out,
                as well as keeping fit. I'm most familiar with the following tech set.
              </p>
            </Paragraph>
            <div className='contact'>
              <div className='contact-icons'>
                <a title='LinkedIn' href='#About'><FaLinkedin size={'1.5rem'} /> </a>
                <a title='GitHub' href='https://github.com/noveski99' target="_blank" rel="noreferrer" ><FaGithub size={'1.5rem'} /></a>
                <a href='mailto:noveski99@gmail.com' title='E-mail'><IoMdMailOpen size={'1.5rem'} /> </a>
                <a title='Stackoverflow' href='#About'><FaStackOverflow size={'1.5rem'} /></a>
              </div>
            </div>
          </div>
          <div className='mid-bot'>
            <Square className='square' delay={0.1}><TbBrandTypescript size={"3rem"} className='icon' />
            </Square>
            <Square className='square'delay={0.5}><FaNodeJs size={"3rem"} className='icon' />
            </Square>
            <Square className='square'delay={0.9}><FaReact size={"3rem"} className='icon' />
            </Square>
            <Square className='square'delay={1.3}><FaCss3Alt size={"3rem"} className='icon' />
            </Square>
            <Square className='square'delay={1.7}><IoIosGitBranch size={"3rem"} className='icon' />
            </Square>
            <Square className='square'delay={1.7}><DiPostgresql size={"3rem"} className='icon' />
            </Square>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SecondSection