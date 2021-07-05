import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { deleteDataApi, getDataApi } from "../actions";
import EditModal from "./EditModal";
import TopBar from "./TopBar";

const Home = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [action, setAction] = useState("");
  const [editId, setEditId] = useState("");
  const [searchData, setSearchData] = useState("");
  const [localUserData, setLocalUserData] = useState([]);

  const handleBtn = (action, userId) => {
    setShowEditModal(!showEditModal);
    setEditId(userId);
    setAction(action);
  };

  useEffect(() => {
    props.user && props.getData(props.user);
  }, []);

  console.log(localUserData);

  return (
    <Container>
      <TopBar />
      <TitleContainer>
        <h1>All passwords</h1>
        <SearchForm onChange={(e) => setSearchData(e.target.value)}>
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
        </SearchForm>
      </TitleContainer>

      {!props.user && <Redirect to="/" />}
      <Content>
        <PasswordWrapper>
          {console.log(props.userData)}
          {props.userData
            .filter((user) => {
              if (searchData === "") {
                return user;
              } else if (user.userData.siteName.includes(searchData)) {
                return user;
              }
            })
            .map((user, key) => (
              <PasswordContainer key={key}>
                <div>
                  <img
                    className="hero-img"
                    src={`//logo.clearbit.com/${user.userData.url}`}
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
                    <div
                      title="Delete"
                      className="pwd-btn"
                      onClick={() => props.deleteData(user.id)}
                    >
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
        </PasswordWrapper>
        {showEditModal && (
          <EditModal isOpen={showEditModal} id={editId} action={action} />
        )}
      </Content>
      {showEditModal && (
        <CloseButton onClick={() => setShowEditModal(!showEditModal)}>
          <p>Close</p>
        </CloseButton>
      )}

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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  width: 300px;
  height: 50px;
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
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const PasswordWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const PasswordContainer = styled.div`
  width: 400px;
  margin-top: 20px;
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

const CloseButton = styled.div`
  position: absolute;
  bottom: 5.2vh;
  right: 5vw;
  background-color: coral;
  padding: 12px;
  border: 1px solid red;
  cursor: pointer;
  p {
    font-weight: bold;
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
  deleteData: (payload) => dispatch(deleteDataApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
