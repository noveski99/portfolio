import React from 'react'
import './App.css';
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
  // const value = 100 * window.innerHeight / 100;//calculate height in VH
  return (
    <div className="App">
      {/* <div ref={cursor} id='cursor'></div> */}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}
export default App;
