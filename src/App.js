import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { SubHeading } from "./components/SubHeading";
import { Span } from "./components/Span";
import { AnnouncementsList } from "./components/AnnouncementsList";
import { Image, ImageContainer } from "./components/Image";
import { Button, ButtonContainer } from "./components/Button";
import AI from "./assets/images/AI.png";
import Swal from "sweetalert2";
import { SECONDARY } from "./constants/colors";
import { Disqus, DisqusContainer } from "./components/Disqus";
import { Footer } from "./components/Footer";
import animateScrollTo from "animated-scroll-to";
import { options } from "./heplers/scrollOptions";

function App() {
  const scrollToAnnouncements = () => {
    animateScrollTo(document.querySelector("#announcements"), options);
  };

  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={AI} alt="AI" width={735} height={460} />
        </ImageContainer>
        <Header>
          <Span primary>Artificial</Span>
          <Span>impact</Span>
        </Header>
        <SubHeading>
          We are a not-for-profit initiative matching NGO's and international
          organizations with A.I. developers with the goal of making the world a
          better place.
        </SubHeading>
        <ButtonContainer>
          <Button primary onClick={scrollToAnnouncements}>
            I need help
          </Button>
          <Button onClick={scrollToAnnouncements}>I offer help</Button>
        </ButtonContainer>
      </Container>
      <Container>
        <Header announcements>Announcements</Header>
        {/* <AnnouncementsList data={announcements} /> */}
      </Container>
      <DisqusContainer ref={disqusRef}>
        <Disqus />
      </DisqusContainer>
      <Footer />
    </>
  );
}

export default App;
