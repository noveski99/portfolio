import React, { useState } from 'react'
import './App.css';
import './style/Main.css'
import './style/Header.css'
import './style/Footer.css'
import { IoIosMail } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";
function App() {
  const [isToggled, setToggled] = useState(false)
  const handleToggle = () => {
    setToggled(!isToggled);
  }
  return (
    <div className="App">
      <nav className='header'>
        {isToggled ? <FaToggleOn title='Turn off' size={30} onClick={handleToggle} className={`toggle-button ${isToggled && 'toggle-button-on'}`} /> :
          <FaToggleOff title='Highlight skills' onClick={handleToggle} size={30} className='toggle-button'
          />}
        <ul>
          <li title='Profile'><MdAccountCircle size={30} /></li>
          <li title='E-mail'><a href='mailto:noveski99@gmail.com?Subject=YourSubject'><IoIosMail size={30} /></a></li>
          <li title='Github'><a href='https://github.com/noveski99' target="_blank" rel="noreferrer"><FaGithub size={30} /></a></li>
        </ul>
      </nav>
      <main className='main'>
        <aside className='section-left'>
          <div className='section-left-inner'>
            <p id='welcome-message'>Welcome</p>
            <div id='welcome-text' className='welcome-text-border'> <p id='first-p'>Hi, my name is</p>
              <p id='second-p'>Boban</p>
              <p id='third-p'>FCSE student, passionate about software development, who likes to craft well founded frontend products with great user experience.</p>
            </div>
          </div>
        </aside>

        <aside className='section-right'>
          <h1>PROJECTS</h1>
          <section className='section-right-inner'>
            <p><a href='https://todo-appproject1.netlify.app/' target="_blank" rel="noreferrer">TodoPal</a></p>
            <p><a href='https://weather-appproject1.netlify.app/' target="_blank" rel="noreferrer">Waily</a></p>
            <p>Project 3</p>
          </section>
        </aside>
        <section className='section-bottom'>
          <div className='section-bottom-left'> <p><MdOutlineSubdirectoryArrowRight />SKILLS</p></div>
          <div className={`square ${isToggled && 'on'}`}>
            <div title='HTML5' className='inner-square'><FaHtml5 size={30} /></div>
            <div title='CSS3' className='inner-square'><FaCss3Alt size={30} /></div>
            <div title='JAVASCRIPT' className='inner-square'><DiJavascript size={30} /></div>
            <div title='TYPESCRIPT' className='inner-square'><SiTypescript size={30} /></div>
            <div title='REACT' className='inner-square'><FaReact size={30} /></div>
            <div title='JQUERY' className='inner-square'><DiJqueryLogo size={30} /></div>
            <div title='NODEJS' className='inner-square'><FaNodeJs size={30} /></div>
            <div title='C++' className='inner-square'><TbBrandCpp size={30} /></div>
            <div title='POSTMAN' className='inner-square'><SiPostman size={30} /></div>
            <div title='POSTGRESQL' className='inner-square'><DiPostgresql size={30} /></div>
            <div title='GIT' className='inner-square'> <FaGitAlt size={30} /></div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <p>© 2024 noveski99</p>
      </footer>
    </div>
  );
}
export default App;
