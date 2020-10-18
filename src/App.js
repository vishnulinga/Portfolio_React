import React from 'react';
import NavigationBar from "./components/Navbar/NavigationBar"
import './App.css';
import MyCarousal from "../src/components/Carousal/MyCarousal"
import Title from "../src/components/TitleMessage/Title"
import About from "./pages/About/About"
import Fade from "react-reveal/Fade"
import {Parallax} from "react-parallax"
import Container from "react-bootstrap/Container"
import Skills from "../src/pages/Skills/Skills"
import Experience from "../src/pages/Experience/Experience"
import "../src/pages/Experience/ExperienceStyle.css"
import Slide from "react-reveal/Slide"
import TimeLine from "./components/project-timeline/ProjectTimeline"
import ContactForm from "../src/pages/ContactForm/ContactForm"
import Footer from "./components/Footer/Footer"

const App=()=> {
  return (
    <div id="home" className="App" style={{ position: "relative" }}>
      <NavigationBar/>
      <MyCarousal/>
      <Title/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Skills />
              </Fade>
            </Container>
          </div>

          <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />

            <Experience />
          </Slide>
        </Container>
      </div>

      <div>
            <Container className="container-box rounded">
              <Slide duration={500}>
                <TimeLine />
              </Slide>
            </Container>
          </div>

          <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />

            <ContactForm />
          </Slide>
        </Container>
      </div>

      <div>
            
              <Fade duration={500}>
                <Footer />
              </Fade>
           
          </div>

    </div>
  );
}

export default App;
