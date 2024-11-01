import React, { Component } from 'react';

class ClientSection extends Component {
  render() {
    return (
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Customers</span>
            </h2>
          </div>
          <div className="carousel-wrap">
            <div className="owl-carousel client_owl-carousel">
              {this.renderClientItem(
                "images/client1.jpg",
                "LusDen",
                "magna aliqua. Ut",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
              )}
              {this.renderClientItem(
                "images/client2.jpg",
                "Zen Court",
                "magna aliqua. Ut",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
              )}
              {this.renderClientItem(
                "images/client1.jpg",
                "LusDen",
                "magna aliqua. Ut",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
              )}
              {this.renderClientItem(
                "images/client2.jpg",
                "Zen Court",
                "magna aliqua. Ut",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderClientItem(imageSrc, name, subTitle, description) {
    return (
      <div className="item">
        <div className="box">
          <div className="img-box">
            <img src={imageSrc} alt="" className="box-img" />
          </div>
          <div className="detail-box">
            <div className="client_id">
              <div className="client_info">
                <h6>{name}</h6>
                <p>{subTitle}</p>
              </div>
              <i className="fa fa-quote-left" aria-hidden="true"></i>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ClientSection;  