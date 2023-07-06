import React from "react";
import { Box } from "@chakra-ui/react";
import { Element } from "react-scroll";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

const Main = () => {
  return (
    <Box>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Box>
  );
};

export default Main;
