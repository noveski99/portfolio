import React from 'react'
import '../style/SecondSection.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { SiKnowledgebase } from "react-icons/si";
const SecondSections = (props) => {
  const {about,handleProceedButton,proceedButton}=props;
  return (
    <main className='main-second'>
        <div className='main-second-inner'>
            <div className='top'><p ref={about}>About</p></div>
            <div className='mid'>
              <div className='mid-left' >
                  <div className='mid-left-title'><p>Profile</p></div>
                  <div className='mid-left-body'>
                    <p>FCSE student, passionate about all things web & software development,
                who likes to craft well founded frontend products with great user experience.
                When I’m not at my computer I like to spend my time going out, as well as keeping fit.</p>
                <GoPerson id='about' size={200} />
                </div>
              </div>
              <div className='mid-right'>
              <div className='mid-right-body'>
                <SiKnowledgebase id='skills' size={200}/>
                <p>Most familiar with these</p>
                <div className='skills-container'>
              <div title='CSS3' className='square'><FaCss3Alt size={40}/></div>
              <div title='JAVASCRIPT' className='square'><DiJavascript size={40}/></div>
              <div title='TYPESCRIPT' className='square'><SiTypescript size={40}/></div>
              <div title='REACT' className='square'><FaReact size={40}/></div>
              <div title='JQUERY' className='square'><DiJqueryLogo size={40}/></div>
              <div title='NODEJS' className='square'><FaNodeJs size={40}/></div>
              <div title='C++' className='square'><TbBrandCpp size={40}/></div>
              <div title='POSTMAN' className='square'><SiPostman size={40}/></div>
              <div title='POSTGRESQL' className='square'><DiPostgresql size={40}/></div>
              <div title='GIT' className='square'> <FaGitAlt size={40}/></div>
              </div>
                </div>
              <div className='mid-right-title'><p>Skills</p></div>
              </div>
            </div>
            <div className='bot'>
              <button id='proceed-button' ref={proceedButton} onClick={handleProceedButton}>proceed
              <IoMdArrowDropdown className='down-arrow-bounce' /></button>              
              </div>
        </div>
      </main>
  )
}
export default SecondSections