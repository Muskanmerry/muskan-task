import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calculator.css';
import CloseIcon from '@mui/icons-material/Close';
import Selector from './select.js';
import OnOffButton from './button.js';
import Details from './details.js';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';



const ROICalculator = () => {

const timeOptions = ["1 day", "7 days", "30 days", "1 year", "5 years"];
 const tierOptions = ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"];

 const handleTimeSelection = (time) => {
    console.log("Timeframe:", time);
  };

  const handleTierSelection = (tier) => {
    console.log("Selected tier:", tier);
  };


  return (
    <>
    <div className='main'>
     <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6 p-4 d-flex align-items-center'>
                        <h2>ROI Calculator</h2>
                    </div>
                    <div className='col-sm-6 p-4 '>
                    <div className='close'><CloseIcon/></div>
                    </div>
                 </div>

                 <div className='cake'>
                    <ul>
                        <li><CakeRoundedIcon/></li>
                        <li>CAKE</li>
                        <li><OnOffButton/></li>
                        <li>USD</li>
                    </ul>
                 </div>

                 <div className='search'>
                    <input type='text' className='place' placeholder='0.000 USD'/>
                 </div>
                
                 <div className='row'>
                    <div className='col-sm-3'>
                        <div className='rups'><ul>
                        <li><button>$1000</button></li>
                        <li><button>$100</button></li>
                    </ul>
                    </div>
                    </div>
                    
                    <div className='col-sm-6'><p className='cake1'>~CAKE0.000</p></div>
                 </div>

                 <div>
                      <Selector options={timeOptions} onSelect={handleTimeSelection} label="Timeframe" />
                      <div className='row'>
                        <div className='col-sm-6'><h4 className='enable'>Enable Accelerated APY</h4></div>
                        <div className='col-sm-6'><div className='btn'><OnOffButton/></div></div>
                      </div>
                      <Selector options={tierOptions} onSelect={handleTierSelection} label="Select Tier" />
                 </div>
                 <div>
                    <Details/>
                 </div>
                 
      </div>
      </div>
    
    </>
  );
};

export default ROICalculator;