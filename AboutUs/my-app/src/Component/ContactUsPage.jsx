// // src/Component/ContactUsPage.js
// import React from 'react';
// import './ContactUsPage.css'; // Import the CSS file for styling

// const ContactUsPage = () => {
//   return (
//     <div className="contact-us-page">
//       <header className="header">
//         <h1>Contact Us</h1>
//         <p>We are here to help you. Reach out to us for any inquiries or assistance.</p>
//       </header>
//       <section className="contact-info">
//         <div className="contact-form">
//           <h2>Get in Touch</h2>
//           <form>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <textarea placeholder="Your Message" rows="5" required></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//         <div className="contact-cards">
//           <div className="card">
//             <h3>Reception</h3>
//             <p>For booking inquiries, check-in/check-out information, and more.</p>
//             <p><strong>Phone:</strong> +1 234 567 890</p>
//             <p><strong>Email:</strong> reception@hotel.com</p>
//           </div>
//           <div className="card">
//             <h3>Customer Service</h3>
//             <p>For any issues or complaints, our customer service team is here to help.</p>
//             <p><strong>Phone:</strong> +1 234 567 891</p>
//             <p><strong>Email:</strong> support@hotel.com</p>
//           </div>
//           <div className="card">
//             <h3>Reservations</h3>
//             <p>Assistance with your reservations and special requests.</p>
//             <p><strong>Phone:</strong> +1 234 567 892</p>
//             <p><strong>Email:</strong> reservations@hotel.com</p>
//           </div>
//         </div>
//       </section>
//       <section className="map-section">
//         <h2>Our Location</h2>
//         <div className="map-container">
//           <iframe
//             title="Hotel Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.687793161361!2d-122.41941838468167!3d37.77492927975991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d2e4b8c77%3A0x9e8d8d4d8d4d4c88!2sHotel%20Name!5e0!3m2!1sen!2sus!4v1612820165563!5m2!1sen!2sus"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUsPage;






import React from 'react';
import './ContactUsPage.css'; // Import the CSS file for styling

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      {/* HEADER SECTION */}
      <header className="header-banner">
        <img src="./assets/images/contact-banner.jpg" alt="Contact Us" className="header-image" />
        <div className="overlay"></div>
        <div className="animated-texts overlay-content">
          <h1>Contact Us</h1>
          <p>We are here to help you. Reach out to us for any inquiries or assistance.</p>
        </div>
      </header>

      {/* CONTACT INFO SECTION */}
      <section className="contact-info">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-cards">
          <div className="card">
            <h3>Reception</h3>
            <p>For booking inquiries, check-in/check-out information, and more.</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> reception@hotel.com</p>
          </div>
          <div className="card">
            <h3>Customer Service</h3>
            <p>For any issues or complaints, our customer service team is here to help.</p>
            <p><strong>Phone:</strong> +1 234 567 891</p>
            <p><strong>Email:</strong> support@hotel.com</p>
          </div>
          <div className="card">
            <h3>Reservations</h3>
            <p>Assistance with your reservations and special requests.</p>
            <p><strong>Phone:</strong> +1 234 567 892</p>
            <p><strong>Email:</strong> reservations@hotel.com</p>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.687793161361!2d-122.41941838468167!3d37.77492927975991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d2e4b8c77%3A0x9e8d8d4d8d4d4c88!2sHotel%20Name!5e0!3m2!1sen!2sus!4v1612820165563!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
