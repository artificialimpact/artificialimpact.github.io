import styled from "styled-components";

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  width: 15%;
  @media (max-width: 1000px) {
    width: 30%;
  }
`;
