import React from 'react'
import '../style/FourthSection.css'
import '../style/Footer.css'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
const FourthSection = (props) => {
  const { handleReturnButton } = props;
  return (
    <section id='Contact' className='main-fourth'>
      <div className='return-button-container'><button title='Return' id='return-button' onClick={handleReturnButton}>
        <a href='#Home'>  <MdKeyboardDoubleArrowUp size={80} /> </a>
      </button></div>
      <div className='contact'>
        <p>Want to get in touch?</p>
        <a href='mailto:noveski99@gmail.com' title='E-mail' ><MdMailOutline style={{ color: 'white' }} size={'1.5rem'} /></a>
      </div>
      <footer className='footer'>
        <p>© 2024 noveski99</p>
      </footer>
    </section>
  )
}
export default FourthSection