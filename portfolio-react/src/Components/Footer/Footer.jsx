import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt=''/>
                <p>I am a fullstack developer with 2 years of experience.Ready to grow and network</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter Your Email'/>
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p className='footer-bottom-left'>© 2024 John Inyang. All rights</p>
                    <div className="footer-bottom-right">
                        <p>Terms Of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect With Me</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer