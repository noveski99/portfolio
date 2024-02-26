import React, { useRef } from 'react'
import './App.css';
import './style/Header.css'
import './style/Footer.css'
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection'
function App() {
  // const cursor = useRef();
  // document.body.onpointermove = event => {
  //   const {clientX, clientY} = event;
  //   cursor.current.style.left = `${clientX}px`
  //   cursor.current.style.top = `${clientY}px`
  // }
  const value = 100 * window.innerHeight / 100;//calculate height in VH
  const about = useRef();
  const skills = useRef();
  const proceedButton = useRef();
  const projectHeader = useRef();
  const handleSeeMoreButton = () => {
    window.scrollTo({ top: `${value}`, behavior: 'smooth' });
    about.current.className = 'about-load-animation'; //add animation to about title
    proceedButton.current.className = 'proceed-button-animation';//add animation to proceed button
  }
  const handleProceedButton = () => {
    window.scrollTo({ top: `${value * 2}`, behavior: 'smooth' });
    projectHeader.current.className = 'project-header-load-animation';
  }
  const handleReturnButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="App">
      {/* <div ref={cursor} id='cursor'></div> */}
      <FirstSection handleSeeMoreButton={handleSeeMoreButton} />
      <SecondSection about={about} skills={skills} proceedButton={proceedButton} handleProceedButton={handleProceedButton} />
      <ThirdSection projectHeader={projectHeader} />
      <FourthSection handleReturnButton={handleReturnButton} />
    </div>
  );
}
export default App;
