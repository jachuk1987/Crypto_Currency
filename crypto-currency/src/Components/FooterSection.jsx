import React, { Component } from 'react';

class FooterSection extends Component {
  render() {
    const displayYear = new Date().getFullYear();

    return (
      <section className="footer_section">
        <div className="container">
          <p>
            &copy; <span>{displayYear}</span> All Rights Reserved By
            <a href="https://html.design/"> Free Html Templates</a>
          </p>
        </div>
      </section>
    );
  }
}

export default FooterSection;