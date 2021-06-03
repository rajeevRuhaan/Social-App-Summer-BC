import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <span>
        <h6>About Me</h6>
        <a href="#">...</a>
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div>
        <li>
          <i class="fas fa-map-marker-alt"> </i>
          <span>Helsinki, Finland</span>
        </li>
        <li>
          <i class="fas fa-briefcase"></i>
          <span></span>
        </li>
        <li>
          <i class="fas fa-globe"></i>
          <span>www.website.com</span>
        </li>
        <li>
          <i class="far fa-calendar-check"></i>
          <span>Joined June, 2021</span>
        </li>
      </div>
    </div>
  );
};

export default AboutMe;
