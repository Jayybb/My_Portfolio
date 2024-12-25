import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import John_profile_img from '../../assets/John_about.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={John_profile_img} alt=''/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>With a background in pharmacy and a passion for technology, I bridge the gap between healthcare and software development. My experience in pharmaceuticals, research, and web development allows me to create innovative solutions that drive meaningful change.</p>
                    <p> I am dedicated to combining my skills in coding with my knowledge of the healthcare industry to create products that make a real impact.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <p>HTML & CSS</p>
                        <hr style={{width:'80%'}}/>
                    </div>
                    <div className='about-skill'>
                        <p>REACT JS</p>
                        <hr style={{width:'70%'}}/>
                    </div>
                    <div className='about-skill'>
                        <p>JAVASCRIPT</p>
                        <hr style={{width:'60%'}}/>
                    </div>
                    <div className='about-skill'>
                        <p>NODE JS</p>
                        <hr style={{width:'70%'}}/>
                    </div>
                    <div className='about-skill'>
                        <p>PYTHON</p>
                        <hr style={{width:'50%'}}/>
                    </div>
                    <div className='about-skill'>
                        <p>MONGO DB & TAILWIND</p>
                        <hr style={{width:'70%'}}/>
                    </div>
                    <div className='about-skill'>
                        <p>NEXT JS</p>
                        <hr style={{width:'70%'}}/>
                    </div>
                    <div className='about-skill'>
                        <p>DOCKER</p>
                        <hr style={{width:'60%'}}/>
                    </div>

                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className='about-achievement'>
                    <h1>4+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className='about-achievement'>
                    <h1>6+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default About
