import React from 'react';
import './style.scss';
import amazon from "../../../assets/images/amazon.svg";
import amd from "../../../assets/images/amd.svg";
import najotTalim from "../../../assets/images/najotTalim.svg";
import logitech from "../../../assets/images/logitech.svg";
import uzum from "../../../assets/images/uzum.svg";

const IntroBottom = () => {
  return (
    <div className='intro_b-container'>
      <div className="container mx-auto px-5 wrapper">
        <div className='logo_container'>
          <img src={amazon} alt="Amazon logo" />
        </div>
        <div className='logo_container'>
          <img src={amd} alt="Amazon logo" />
        </div>
        <div className='logo_container'>
          <p className='megabox-tech'>MEGABOX TECH</p>
        </div>
        <div className='logo_container'>
          <img src={najotTalim} alt="Amazon logo" />
        </div>
        <div className='logo_container'>
          <img src={logitech} alt="Amazon logo" />
        </div>
        <div className='logo_container'>
          <img src={uzum} alt="Amazon logo" />
        </div>
      </div>
    </div>
  )
}

export default IntroBottom