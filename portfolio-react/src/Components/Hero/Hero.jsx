import React from 'react';
import './Hero.css';
import John_profile from '../../assets/John_profile.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import john_resume_pdf from '../../assets/John-resume.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={John_profile} alt='John profile' className='hero-profile-img' />
      <h1>I'm John Inyang, fullstack web developer.</h1>
      <p>
        I’m a pharmacist and web developer passionate about merging healthcare and technology. 
        With experience in pharmaceuticals, research, and coding, I create innovative solutions to make an impact. 
        Explore my work and let’s collaborate!
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' href='#contact' offset={50}>
            Connect With Me
          </AnchorLink>
        </div>
        <div className='hero-resume'>
          <a 
            href={john_resume_pdf} 
            className='resume-link' 
            download 
            aria-label="Download John Inyang's Full Resume"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

