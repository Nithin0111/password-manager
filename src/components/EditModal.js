import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CryptoJS from "crypto-js";

const EditModal = (props) => {
  const [openModal, setOpenModal] = useState(props.open);
  const [securePassword, setSecurePassword] = useState("");
  const [secretKey, setSecretKey] = useState("MySecretForAesEncryption");

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
    // Decrypt
    // var bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);

    // console.log(originalText);
  };
  console.log(props.action);
  return (
    <>
      {openModal && (
        <Container>
          <Content>
            <div className="close" onClick={() => setOpenModal(false)}>
              <p>+</p>
            </div>
            <form>
              <h2>{props.action == "edit" ? "Edit" : "Add"} Info:</h2>
              <input type="text" placeholder="URL:eg:google.com,gmail.com" />
              <br />
              <input type="text" placeholder="SiteName:" />
              <br />
              <input type="text" placeholder="Username/Email:" />
              <br />
              <input
                type="passoword"
                placeholder="Site Password"
                value={securePassword}
                onChange={(e) => setSecurePassword(e.target.value)}
              />

              {props.action === "add" && (
                <>
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
                </>
              )}

              <br />
              <input type="text" placeholder="Notes" />
              <br />
              <button className="submitBtn">Save Details</button>
            </form>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: inherit;
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

export default EditModal;
