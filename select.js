import React, { useState, useEffect } from 'react';
import './select.css';

const OptionButton = ({ option, onClick, isSelected }) => {
  return (
    <button onClick={() => onClick(option)} className={`option-button ${isSelected ? 'selected' : ''}`}>
      {option}
    </button>
  );
};

const Selector = ({ options, onSelect, label }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (options.length > 0 && !selectedOption) {
      setSelectedOption(options[0]);
      onSelect(options[0]);
    }
  }, [options, onSelect, selectedOption]);

  const handleSelection = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className='selector-container'>
      <h2 className="label">{label}:</h2>
      <div className='options-container'>
        {options.map((option, index) => (
          <OptionButton 
            key={index} 
            option={option} 
            onClick={handleSelection} 
            isSelected={option === selectedOption} 
          />
        ))}
      </div>
    </div>
  );
};

export default Selector;
