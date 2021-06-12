import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { getDataApi } from "../actions";
import EditModal from "./EditModal";
import TopBar from "./TopBar";

const Home = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [action, setAction] = useState("");
  const [editId, setEditId] = useState("");

  const handleBtn = (action, userId) => {
    setShowEditModal(!showEditModal);
    setEditId(userId);
    setAction(action);
  };

  useEffect(() => {
    props.user && props.getData(props.user);
  }, []);

  return (
    <Container>
      <TopBar />
      <h1>All passwords</h1>
      {!props.user && <Redirect to="/" />}
      <Content>
        {console.log(props.userData)}
        {props.userData.map((user, key) => (
          <PasswordContainer key={key}>
            <div>
              <img
                className="hero-img"
                src="//logo.clearbit.com/gmail.it"
                alt=""
              />
            </div>

            <h3>{user.userData.siteName}</h3>
            <p>{user.userData.email}</p>
            <OptionsContainer>
              <div>
                <div
                  title="Edit"
                  className="pwd-btn"
                  onClick={() => handleBtn("edit", user.id)}
                >
                  <img src="/images/settings-icon.png" alt="" />
                </div>
                <div title="Delete" className="pwd-btn">
                  <img src="/images/delete-icon.png" alt="" />
                </div>
              </div>
              <LaunchButton>
                <div>
                  <p>Launch</p>
                </div>
              </LaunchButton>
            </OptionsContainer>
          </PasswordContainer>
        ))}
        {showEditModal && <EditModal isOpen={showEditModal} id={editId} />}
      </Content>
      <AddButton onClick={() => handleBtn("add")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
        </svg>
      </AddButton>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  h1 {
    padding: 16px;
  }
  @media (max-width: 1100px) {
    width: 70%;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const PasswordContainer = styled.div`
  width: 400px;
  margin-top: 10px;
  margin-left: 10px;
  padding: 20px;
  padding-bottom: 0px;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.35),
    -2px -2px 5px 0px rgba(0, 0, 0, 0.35);
  border: 2px solid black;
  transition: all 0.3s ease-in-out;
  div {
    display: grid;
    place-items: center;
    margin-bottom: 10px;
    .hero-img {
      height: auto;
      width: auto;
      object-fit: cover;
    }
  }

  h3 {
    font-weight: bold;
  }

  p {
    font-size: 20px;
  }
`;

const AddButton = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: coral;
  position: absolute;
  bottom: 5vh;
  right: 2vw;
  display: grid;
  place-items: center;
  cursor: pointer;
  border: 1px solid red;
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.25),
    -1px -2px 5px 0px rgba(0, 0, 0, 0.25);
  svg {
    height: 35px;
    width: 35px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const OptionsContainer = styled.div`
  display: flex !important;
  justify-content: space-between;
  /* border-top: 1px solid gray; */
  margin-top: 10px;
  div {
    display: flex;
  }
  .pwd-btn {
    margin-right: 10px;
    height: 25px;
    width: 25px;
    border: 1px solid gray;
    display: grid;
    place-items: center;
    &:hover {
      background-color: lightgray;
      cursor: pointer;
    }
  }
`;

const LaunchButton = styled.div`
  div {
    display: grid;
    place-items: center;
    width: fit-content;
    height: auto;
    padding: 5px 20px;
    border: 1px solid gray;
    &:hover {
      background-color: lightgray;
      cursor: pointer;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    userData: state.userState.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getDataApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
