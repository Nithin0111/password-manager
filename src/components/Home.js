import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <Container>
      <TopBar />
      <Content>
        <h1>This is main file</h1>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
`;
const Content = styled.div``;

export default Home;
