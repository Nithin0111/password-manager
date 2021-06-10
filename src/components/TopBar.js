import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import { SignOutApi } from "../actions";

const TopBar = (props) => {
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  return (
    <Container>
      {!props.user && <Redirect to="/" />}
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
        <div onClick={() => setShowSignOutModal(!showSignOutModal)}>
          <img
            src={props.user ? props.user.photoURL : "/images/Profile.png"}
            alt=""
          />
          {console.log(props.user)}
          <span>
            {props.user ? props.user.email : "User Email"}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 14l-4-4h8z" />
            </svg>
          </span>
        </div>
      </Content>
      {showSignOutModal && (
        <SignOutModal>
          <button type="button" onClick={() => props.signOut()}>
            SignOut
          </button>
        </SignOutModal>
      )}
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
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    svg {
      fill: #fff;
      margin-top: 10px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      text-align: center;
    }
  }
`;

const SignOutModal = styled.div`
  position: absolute;
  right: 0;
  top: 10vh;
  height: 80px;
  width: 300px;
  background-color: #3c4a54;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border-top: 2px solid #fff;
  button {
    padding: 12px;
    width: 150px;
    background-color: #ebdedd;
    font-size: 17px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(SignOutApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
