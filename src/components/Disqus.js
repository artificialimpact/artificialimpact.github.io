import React from "react";
import { DiscussionEmbed } from "disqus-react";
import styled from "styled-components";

const disqusShortname = "example";
const disqusConfig = {
  url: "http://www.example.com/example-thread",
  identifier: "something-unique-12345",
  title: "Example Thread"
};
export const Disqus = () => {
  return (
    <>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </>
  );
};

export const DisqusContainer = styled.div`
  width: 80%;
  margin: auto;
`;
