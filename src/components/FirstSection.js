import React from 'react'
import '../style/FirstSection.css'
import '../App.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { RiCodeSSlashFill } from "react-icons/ri";
const FirstSection = (props) => {

const {handleSeeMoreButton}=props;
  return (
    <main className='main-first'>
        <div className='main-inner'>   
          <div className='main-inner-text'>
            <p>Hi.</p>
            <span>I'm Boban</span>
          </div>
          <div id='icon'><RiCodeSSlashFill size={70} /></div>
          <div id='button-container'><button id='see-more-button' onClick={handleSeeMoreButton}>see more<IoMdArrowDropdown className='down-arrow-bounce' /></button></div>
        </div>
      </main>
  )
}
export default FirstSection