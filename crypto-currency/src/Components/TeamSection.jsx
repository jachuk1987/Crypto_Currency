import React, { Component } from 'react';
import team1 from '../images/team-1.jpg';
import team2 from '../images/team-2.jpg';
import team3 from '../images/team-3.jpg';
import team4 from '../images/team-4.jpg';

class TeamSection extends Component {
  render() {
    return (
      <section className="team_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Team</span>
            </h2>
          </div>

          <div className="team_container">
            <div className="row">
              {this.renderTeamMember(team1, "Joseph Brown", "Marketing Head")}
              {this.renderTeamMember(team2, "Nancy White", "Marketing Head")}
              {this.renderTeamMember(team3, "Earl Martinez", "Marketing Head")}
              {this.renderTeamMember(team4, "Josephine Allard", "Marketing Head")}
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderTeamMember(imageSrc, name, position) {
    return (
      <div className="col-lg-3 col-sm-6">
        <div className="box">
          <div className="img-box">
            <img src={imageSrc} className="img1" alt={name} />
          </div>
          <div className="detail-box">
            <h5>{name}</h5>
            <p>{position}</p>
          </div>
          <div className="social_box">
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamSection;
