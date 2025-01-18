import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6825810670475!2d106.80509997490879!3d10.83558538931688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175272fb77e7199%3A0x98cb51d4483e1172!2sFPT%20Software%20Ho%20Chi%20Minh%20-%20F-Town%203!5e0!3m2!1svi!2s!4v1735540840270!5m2!1svi!2s"
        width="300"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <nav>
        <Link to="/chat">Go to Chat</Link>
      </nav>
    </div>
  );
};

export default Home;