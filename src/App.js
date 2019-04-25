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

function App() {
  const [announcements, setAnnouncements] = React.useState([
    { detailText: "Any body Help me?", type: "need" },
    { detailText: "Yeah, I can Help you :)", type: "offer" },
    { detailText: "I need your Help!", type: "need" }
  ]);

  const Modal = (title, type) => async () => {
    const { value: text } = await Swal.fire({
      title: title,
      input: "textarea",
      inputPlaceholder: "Type your message here...",
      showCancelButton: true,
      cancelButtonColor: SECONDARY,
      inputValidator: value => {
        if (!value) {
          return "You need to write something!";
        }
      }
    });
    // console.log(text);
    if (text) {
      await setAnnouncements([...announcements, { detailText: text, type }]);
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000
      });
      return Toast.fire({
        type: "success",
        title: "Announcement posted successfully"
      });
    }
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
          <Button primary onClick={Modal("Need Help Announcement", "need")}>
            I need help
          </Button>
          <Button onClick={Modal("Offer Help Announcement", "offer")}>
            I offer help
          </Button>
        </ButtonContainer>
      </Container>
      <Container>
        <Header>Announcements</Header>
        <AnnouncementsList data={announcements} />
      </Container>
    </>
  );
}

export default App;
