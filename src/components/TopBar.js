import React from "react";
import styled from "styled-components";

const TopBar = () => {
  return (
    <Container>
      <Content>
        <h1>NSP Pwd Manager</h1>
        <form>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            class="svg-inline--fa fa-search fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
          <input type="text" placeholder="Search my passwords" />
        </form>
        <div>
          <img src="/images/Profile.png" alt="" />
          <span>nithinchowdary0705@gmail.com</span>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #3c4a54;
  overflow-x: hidden;
  min-height: 7vh;
  border-left: 1px solid lightgray;
  display: grid;
  place-items: center;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  h1 {
    color: #fff;
    padding: 12px;
  }
  form {
    display: flex;
    align-items: center;
    background-color: #fff;

    svg {
      width: 18px;
      height: 18px;
      margin-right: 10px;
      margin-left: 10px;
    }
    input {
      width: 400px;
      height: 40px;
      border: none;
      outline: none;
    }
  }
  div {
    display: flex;
    align-items: center;
    padding: 20px;
    img {
      margin-right: 10px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
`;

export default TopBar;
