// components/ToggleSwitch.js
import { useState } from 'react';

const ToggleSwitch = ({setOn}) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setOn(!isOn)
    setIsOn(!isOn);
  };

  const switchStyles = {
    width: '500px',
    height: '200px',
    backgroundColor: isOn ? '#eabf00' : '#aab1c4',
    borderRadius: '200px',
    
    cursor: 'none',
    transition: 'background-color 0.3s',
    display:'flex',
    alignItems:'center',
    transitionDuration: '0.3s'
  };

  const sliderStyles = {
    width: '180px',
    height: '180px',
    backgroundColor: 'white',
    borderRadius: '50%', 
    boxShadow:"0px 0px 20px -10px black"
  };

  return (
    <div style={switchStyles} onMouseEnter={()=>{
        setIsOn(true);
        setOn(true);
    }}
    onMouseLeave={()=>{
        setIsOn(false)
        setOn(false)
    }}
    >
        <div style={{width:isOn ? '310px' : '10px',transitionDuration: '0.5s'}}></div>
      <div style={sliderStyles} />
    </div>
  );
};

export default ToggleSwitch;
