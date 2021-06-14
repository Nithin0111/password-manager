import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CryptoJS from "crypto-js";
import { postDataApi, updateDataApi } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const EditModal = (props) => {
  const [openModal, setOpenModal] = useState(props.isOpen);
  const [secretKey, setSecretKey] = useState("MySecretForAesEncryption");

  const [url, setUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [email, setEmail] = useState("");
  const [securePassword, setSecurePassword] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setOpenModal(props.isOpen);
  }, []);

  const generatePassword = () => {
    var specials = "!@#$%^&*()_+{}:\"<>?|[];',./`~";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";

    var all = specials + lowercase + uppercase + numbers;

    String.prototype.pick = function (min, max) {
      var n,
        chars = "";

      if (typeof max === "undefined") {
        n = min;
      } else {
        n = min + Math.floor(Math.random() * (max - min));
      }

      for (var i = 0; i < n; i++) {
        chars += this.charAt(Math.floor(Math.random() * this.length));
      }

      return chars;
    };

    String.prototype.shuffle = function () {
      var array = this.split("");
      var tmp,
        current,
        top = array.length;

      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }

      return array.join("");
    };

    var password = (
      specials.pick(1) +
      lowercase.pick(1) +
      uppercase.pick(1) +
      all.pick(10, 16)
    ).shuffle();
    setSecurePassword(password);
  };

  const encryptPassword = () => {
    var ciphertext = CryptoJS.AES.encrypt(securePassword, secretKey).toString();
    console.log(ciphertext);
    setSecurePassword(ciphertext);
  };

  const decryptPassword = (password) => {
    var bytes = CryptoJS.AES.decrypt(password, secretKey);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    setSecurePassword(originalText);
  };

  const postData = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      user: props.user,
      url: url,
      siteName: siteName,
      email: email,
      securePassword: securePassword,
      notes: notes,
    };

    props.postData(payload);
    reset(e);
  };

  const updateData = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      id: props.id,
      url: url,
      siteName: siteName,
      email: email,
      securePassword: securePassword,
      notes: notes,
    };

    props.updateData(payload);
    reset(e);
  };

  const reset = (e) => {
    setOpenModal(!openModal);
    setUrl("");
    setSiteName("");
    setEmail("");
    setSecurePassword("");
    setNotes("");
  };

  useEffect(() => {
    props.id &&
      props.userData.map((user) => {
        if (props.id === user.id) {
          setUrl(user.userData.url);
          setSiteName(user.userData.siteName);
          setEmail(user.userData.email);
          decryptPassword(user.userData.securePassword);
          setNotes(user.userData.notes);
        }
      });
  }, []);

  console.log(props.isOpen);
  console.log(props.id);
  console.log(openModal);

  return (
    <>
      {openModal && props.userData && props.action === "edit" ? (
        <Container>
          {console.log("Getting here")}
          <Content>
            {props.userData.map((user, key) => {
              if (props.id === user.id) {
                console.log(user);
                return (
                  <form key={key}>
                    <h2>Edit Info:</h2>
                    <input
                      type="text"
                      placeholder="URL:eg:google.com,gmail.it,dribbleup.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="SiteName:"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Username/Email:"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                      type="passoword"
                      placeholder="Site Password"
                      value={securePassword}
                      onChange={(e) => setSecurePassword(e.target.value)}
                    />

                    <br />
                    <button
                      type="button"
                      className="genPwd"
                      onClick={generatePassword}
                    >
                      Change Password
                    </button>
                    <button
                      type="button"
                      className="genPwd"
                      onClick={encryptPassword}
                    >
                      Encrypt Changed Password
                    </button>

                    <br />
                    <input
                      type="text"
                      placeholder="Notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <br />
                    {props.action === "edit" ? (
                      <button className="submitBtn" onClick={updateData}>
                        Update Details
                      </button>
                    ) : (
                      <button className="submitBtn" onClick={postData}>
                        Save Details
                      </button>
                    )}
                  </form>
                );
              }
            })}
          </Content>
        </Container>
      ) : (
        <Container>
          {console.log("Getting here")}
          <Content>
            <form>
              <h2>Add Info:</h2>
              <input
                type="text"
                placeholder="URL:eg:google.com,gmail.it,dribbleup.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="SiteName:"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Username/Email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="passoword"
                placeholder="Site Password"
                value={securePassword}
                onChange={(e) => setSecurePassword(e.target.value)}
              />

              <br />
              <button
                type="button"
                className="genPwd"
                onClick={generatePassword}
              >
                Generate Password
              </button>
              <button
                type="button"
                className="genPwd"
                onClick={encryptPassword}
              >
                Encrypt Password
              </button>

              <br />
              <input
                type="text"
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <br />
              <button className="submitBtn" onClick={postData}>
                Save Details
              </button>
            </form>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: 80%;
  @media (max-width: 1100px) {
    width: 70%;
  }
  height: 100%;
  top: 0%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;
const Content = styled.div`
  background-color: #fff;
  height: 500px;
  width: 600px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  position: relative;
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    transform: rotate(45deg);
    cursor: pointer;
    p {
      font-weight: bold;
      font-size: 40px;
      pointer-events: none;
    }
  }
  form {
    input {
      height: 50px;
      width: 500px;
      margin-top: 10px;
      border: 2px solid green;
      outline: none;
      font-size: 18px;
      font-weight: bold;
      font-family: "Courier New", Courier, monospace;
      &::placeholder {
        color: gray;
        font-size: 18px;
        padding-left: 10px;
        font-family: "Courier New", Courier, monospace;
      }
    }
  }
  .genPwd,
  .submitBtn {
    height: auto;
    width: fit-content;
    padding: 12px;
    border: 2px solid lightgray;
    margin-top: 10px;
    box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.2),
      -1px -2px 5px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-right: 10px;
    color: black;
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
  postData: (payload) => dispatch(postDataApi(payload)),
  updateData: (payload) => dispatch(updateDataApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
