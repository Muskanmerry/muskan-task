import React, { useState } from 'react';
import './details.css'; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Details = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div>
      <button onClick={toggleDetails} className="toggle-button">
        {isDetailsVisible ? 'Hide Details ' : 'Show Details '}
        <KeyboardArrowDownIcon style={{transform: isDetailsVisible ? 'rotate(180deg)' : 'rotate(0deg)'}} />
      </button>
      {isDetailsVisible && (
        <div className="details">
          <ul>
            <li>Calculated based on current rates</li>
            <li>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</li>
          </ul>

        </div>
      )}
    </div>
  );
};

export default Details;
