import React from 'react';
import adImage from '../img/Ad.svg';

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <div className="ad-container">
      <img src={adImage} alt="Advertisement" />
    </div>
  );
}

export default Ad;
