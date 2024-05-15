import React, { useState } from 'react';
import './button.css';

const OnOffButton = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className="toggle-circle"></div>
      </div>
    );
  };

export default OnOffButton;




