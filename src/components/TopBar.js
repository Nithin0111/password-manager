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

        <UserInfo>
          <div onClick={() => setShowSignOutModal(!showSignOutModal)}>
            <img
              src={props.user ? props.user.photoURL : "/images/Profile.png"}
              alt=""
            />
            {console.log(props.user)}
            <div>
              <p>{props.user ? props.user.email : "User Email"}</p>{" "}
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 14l-4-4h8z" />
                </svg>
              </p>
            </div>
          </div>
        </UserInfo>
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
  min-height: 10vh;
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

const UserInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10px;
  padding: 20px 0px;
  cursor: pointer;
  padding-top: 20px;
  p {
    olorcolor: #fff;
    display: inline-block;
    text-align: center;
    color: #fff;
    font-weight: bold;
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
