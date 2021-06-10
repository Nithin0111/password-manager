import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <img src="/images/login.png" alt="" />
        <h1>Welcome to nsp password manager</h1>
        <button>
          {" "}
          <img src="/images/google-logo.webp" alt="" /> Signin With Google
        </button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  background-color: #131313;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  height: 400px;
  width: 400px;
  background-color: #fff;
  display: grid;
  place-items: center;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  box-shadow: 1px 2px 15px 5px rgba(255, 255, 255, 0.32);
  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
  }
  button {
    padding: 16px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
  }
`;

export default Login;
