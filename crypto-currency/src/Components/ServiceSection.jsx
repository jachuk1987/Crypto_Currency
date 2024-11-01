import React, { Component } from 'react';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';

class ServiceSection extends Component {
  render() {
    return (
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src={s1} alt="Currency Wallet" />
                  </div>
                  <div className="detail-box">
                    <h5>Currency Wallet</h5>
                    <p>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src={s2} alt="Security Storage" />
                  </div>
                  <div className="detail-box">
                    <h5>Security Storage</h5>
                    <p>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src={s3} alt="Expert Support" />
                  </div>
                  <div className="detail-box">
                    <h5>Expert Support</h5>
                    <p>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="#">View All</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceSection;
