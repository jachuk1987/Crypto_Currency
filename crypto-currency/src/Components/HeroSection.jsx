import React, { Component } from 'react';
import heroBg from '../images/hero-bg.png';

class HeroBackground extends Component {
  render() {
    return (
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src={heroBg} alt="" />
        </div>
      </div>
    );
  }
}

export default HeroBackground;
