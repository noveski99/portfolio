import React from 'react'
import '../style/FourthSection.css'
import '../style/Footer.css'
const FourthSection = () => {
  return (
    <section id='Contact' className='main-fourth'>
      <div className='main-fourth-inner'>
        <div className='contact-me'>
          <p>Get in touch</p>
          <form>
            <input placeholder='Name' />
            <input placeholder='E-mail' />
            <input placeholder='Message' />
            <button>Submit</button>
          </form>
        </div>
        <footer className='footer'>
          <p>© 2024 noveski99</p>
        </footer>
      </div>
    </section>
  )
}
export default FourthSection