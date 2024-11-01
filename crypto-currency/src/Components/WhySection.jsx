import React, { Component } from 'react';
import img1 from '../images/w1.png';
import img2 from '../images/w2.png';
import img3 from '../images/w3.png';
import img4 from '../images/w4.png';

class WhySection extends Component {
  render() {
    return (
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src={img1} alt="Expert Management" />
              </div>
              <div className="detail-box">
                <h5>Expert Management</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={img2} alt="Secure Investment" />
              </div>
              <div className="detail-box">
                <h5>Secure Investment</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={img3} alt="Instant Trading" />
              </div>
              <div className="detail-box">
                <h5>Instant Trading</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={img4} alt="Happy Customers" />
              </div>
              <div className="detail-box">
                <h5>Happy Customers</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="#">
              Read More
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default WhySection;
