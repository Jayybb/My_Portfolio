import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  // State to toggle showing more items
  const [showMore, setShowMore] = useState(false);

  // Handle the "Show More" click event
  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle the state
  };

  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='mywork-container'>
        {/* Render the first 4 items, or all if 'showMore' is true */}
        {mywork_data.slice(0, showMore ? mywork_data.length : 4).map((work, index) => {
          return <img key={index} src={work.w_img} alt='' />;
        })}
      </div>
      <div className='mywork-showmore' onClick={handleShowMore}>
        <p>{showMore ? 'Show Less' : 'Show More'}</p>
        <img src={arrow_icon} alt='' />
      </div>
    </div>
  );
};

export default MyWork;
