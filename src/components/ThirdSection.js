import React from 'react'
import '../style/ThirdSection.css'
import { GoPaperclip } from "react-icons/go";
import { DiReact } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import Title from './motioncomponents/Title'
import Paragraph from './motioncomponents/Paragraph'
const ThirdSection = () => {
  return (
    <section id='Projects' className='main-third'>
      <div className='main-third-inner'>
        <div className='container'>
          <Title className='first-title'>
            <p>Work done</p>
          </Title>
          <Title className='main-third-inner-top'>
            <p>Projects.</p>
          </Title>
          <Paragraph className='main-third-inner-top-description'>
            <p>These projects demonstrate my experience with practical examples of some of my work, including brief descriptions and links to the code repositories and live demos.</p>
          </Paragraph>
          <div className='main-third-inner-bot'>
            <section className='projects-container'>
              <div className='top-container'>
              <div className='project'>
                <div className='project-name'>
                  <a href='https://github.com/noveski99/todoapp_project' target="_blank" rel="noreferrer"><p>TodoPal </p>
                    <div className='project-icons'>
                      <DiReact />
                      <FaCss3Alt />
                      <IoLogoJavascript />
                    </div> </a>
                </div>
                <div className='project-description'>
                  <p>A todo application to track your daily tasks, with added features like edit
                    remove or toggle between your active and completed tasks.</p>
                </div>
                <div className='project-link'>
                  <a href='https://todo-appproject1.netlify.app/' target="_blank" rel="noreferrer"><GoPaperclip style={{ margin: '0 0.2rem' }} />View project</a>
                </div>
              </div>
              <div className='project'>
                <div className='project-name'>
                  <a href='https://github.com/noveski99/weatherapp_project' target="_blank" rel="noreferrer"><p>Waily</p>
                    <div className='project-icons'>
                      <DiReact />
                      <FaCss3Alt />
                      <IoLogoJavascript />
                    </div> </a>
                </div>
                <div className='project-description'>
                  <p>A simple weather application, made using ReactJs. Included automatic location detection and
                    possibility to search current weather by city name.</p>
                </div>
                <div className='project-link'>
                  <a href='https://weather-appproject1.netlify.app/' target="_blank" rel="noreferrer" ><GoPaperclip style={{ margin: '0 0.2rem' }} />View project</a>
                </div>
              </div>
              <div className='project'>
                <div className='project-name'>
                  <a href='#Projects'><p>Project 3</p>
                    <div className='project-icons'>
                    </div> </a>
                </div>
                <div className='project-description'>
                  <p>Loading..</p>
                </div>
                <div className='project-link'>
                  <a href='#Projects'><GoPaperclip style={{ margin: '0 0.2rem' }} />View project</a>
                </div>
              </div>
              </div>
            </section>
          </div>
        </div>
      </div>

    </section>
  )
}
export default ThirdSection