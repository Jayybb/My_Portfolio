import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt='' />
      </div>

      <div className='contact-section'>
        {/* Left Section */}
        <div className='contact-left'>
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects. You can contact me
            anytime!
          </p>
          <div className='contact-details'>
            <div className="contact-detail">
              <img src={mail_icon} alt='' />
              <p>inyangj6@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='' />
              <p>CA, United States of America</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='' />
              <p>415-XXX-XXX</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form
          name="contact"
          method="POST"
          action="https://getform.io/f/aroorlxb"
          className='contact-right'
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' name='name' placeholder='Enter Your Name' required />
          </div>

          <div className="form-group">
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' name='email' placeholder='Enter Your Email' required />
          </div>

          <div className="form-group">
            <label htmlFor='message'>Write Your Message Here</label>
            <textarea id='message' name='message' placeholder='Enter Your Message' required></textarea>
          </div>

          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
