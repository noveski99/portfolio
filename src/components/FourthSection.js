import React from 'react'
import '../style/FourthSection.css'
import { IoIosMail } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const FourthSection = (props) => {
  const {handleReturnButton}=props;
  return (
    <main className='main-fourth'>
    <div className='return-button-container'><button title='Return' id='return-button' onClick={handleReturnButton}>
      <MdKeyboardDoubleArrowUp size={80}/></button></div>
  <nav className='header'>
  <ul>
    <li title='About'><MdAccountCircle size={30} /></li>
    <li title='E-mail'><a href='mailto:noveski99@gmail.com?Subject=YourSubject'><IoIosMail size={30} /></a></li>
    <li title='Github'><a href='https://github.com/noveski99' target="_blank" rel="noreferrer"><FaGithub size={30} /></a></li>
  </ul>
  </nav>
  <footer className='footer'>
          <p>© 2024 noveski99</p>
        </footer>
  </main>
  
  )
}

export default FourthSection