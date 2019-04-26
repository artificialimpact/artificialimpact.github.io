import styled from "styled-components";

export const Header = styled.h1`
  color: #000;
  font-size: ${props =>
    props.announcements ? "calc(20px + 2vmin)" : "calc(40px + 2vmin)"};
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
  display: inline-flex;
  letter-spacing: -2px;
  margin-top: ${props => (props.announcements ? "20%" : "-4%")};
  @media (min-width: 900px) {
    margin-top: ${props => (props.announcements ? "10%" : "-1%")};
  }
`;
