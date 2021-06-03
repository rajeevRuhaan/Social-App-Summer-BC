import React, { Fragment } from "react";
import AboutMe from "../../components/About/AboutMe";
import Gallery from "../../components/Gallery/Gallery";
import CustomNavbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <Fragment>
      <CustomNavbar />
      <AboutMe />
      <Gallery />
    </Fragment>
  );
};

export default HomePage;
