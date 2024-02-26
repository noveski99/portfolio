import React from 'react'
import '../style/ThirdSection.css'
import waily from '../images/waily.png'
import todopal from '../images/todopal.png'
const ThirdSection = (props) => {
  const { projectHeader } = props;
  return (
    <main className='main-third'>
      <div className='main-third-inner'>
        <div className='main-third-inner-top'>
          <p ref={projectHeader}>Projects</p>
        </div>
        <div className='main-third-inner-bot'>
          <div className='project'>
            <div className='project-name'>
              <p>Project1</p>
            </div>
            <div className='project-description'>
              <p>In progress..</p>
            </div>
            <div className='project-thumbnail' >
              <img alt='project-thumbnail'></img>
            </div>
          </div>
          <div className='project'>
            <div className='project-name'>
              <p>TodoPal</p>
            </div>
            <div className='project-description'>
              <p>A todo application to track your daily tasks, with added features like edit
                remove or toggle between your active and completed tasks.</p>
                <div className='project-buttons'>
                <button><a href='https://todo-appproject1.netlify.app/' target="_blank" rel="noreferrer">Review</a></button>
                <button><a href='https://github.com/noveski99/todoapp_project' target="_blank" rel="noreferrer">Learn more</a></button>
              </div>
            </div>
            <div className='project-thumbnail'>
              <img src={todopal} alt='todopal-thumbnail'></img>
            </div>
          </div>
          <div className='project'>
            <div className='project-name'>
              <p>Waily</p>   
            </div>
            <div className='project-description'>
              <p>A simple weather application, made using ReactJs.Included automatic location detection and
                possibility to search current weather by city name.</p>
              <div className='project-buttons'>
                <button><a href='https://weather-appproject1.netlify.app/' target="_blank" rel="noreferrer">Review</a></button>
                <button><a href='https://github.com/noveski99/weatherapp_project' target="_blank" rel="noreferrer">Learn more</a></button>
              </div>
            </div>
            <div className='project-thumbnail' >
              <img src={waily} alt='weatherapp-thumbnail'>
              </img>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default ThirdSection