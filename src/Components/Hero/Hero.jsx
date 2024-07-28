import React from 'react'
import './Hero.css'
import mutoni1 from '../../assets/mutoni1.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className="hero">
      <img className='profile' src={mutoni1} alt="" />
      <h1> <span>I'm Vanessa UMUTONI,</span> Frontend developer based in <span>Rwanda.</span></h1>
      <p>I am frontend developer from Kigali, Rwanda with 2 years experience.</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div> 
        <div className='hero-resume'>My resume</div>
      </div>

    </div>
  )
}

export default Hero
