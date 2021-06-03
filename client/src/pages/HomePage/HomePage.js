import React, { Fragment } from "react";
import AboutMe from "../../components/About/AboutMe";
import CustomNavbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <Fragment>
      <CustomNavbar />
      <AboutMe />
    </Fragment>
  );
};

export default HomePage;
