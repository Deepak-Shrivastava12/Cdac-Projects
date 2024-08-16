// src/Component/AboutUsPage.js
import React from 'react';
import './AboutUsPage.css'; // Import the CSS file for styling
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons

const teamMembers = [
  { name: 'Rohan Jundare', linkedin: 'https://www.linkedin.com/in/alicejohnson/', photo: '/images/rohan.jpg', email: '240340320031' },
  { name: 'Akansha Kulkarni', linkedin: 'https://www.linkedin.com/in/bobsmith/', photo: '/images/akansha.jpg', email: 'bob.smith@example.com' },
  { name: 'Mihir Pawar', linkedin: 'http://www.linkedin.com/in/mihir-pawar-7363a5135', photo: '/images/mihir.jpg', email: '240340320061' },
  { name: 'Deepak Shrivastava', linkedin: 'https://www.linkedin.com/in/deepak-shrivastava-9b5881123', photo: '/images/deepak.jpg', email: '240340320031' },
  { name: 'Kunal Phund', linkedin: 'https://www.linkedin.com/in/kunalphund', photo: '/images/Kunal.jpg', email: '240340320054' },
];

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>About Us</h1>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.photo} alt={member.name} className="team-photo" />
              <div className="team-details">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                  <FaLinkedin />
                </a>
                <div className="team-name">{member.name}</div>
                <p className="team-email">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;                                                                                                                        