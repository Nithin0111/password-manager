import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <h1>Pwd Manager</h1>
      <SidebarWrapper>
        <Content>
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="home"
              class="svg-inline--fa fa-home fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
            <a href="#">Home</a>
          </div>
          <ul>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="lock"
                class="svg-inline--fa fa-lock fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                ></path>
              </svg>
              <li>Passwords</li>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sticky-note"
                class="svg-inline--fa fa-sticky-note fa-w-14"
                role="img"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"
                />
              </svg>
              <li>Notes</li>
            </div>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="address-book"
                class="svg-inline--fa fa-address-book fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-228-32c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H118.4C106 384 96 375.4 96 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"
                ></path>
              </svg>
              <li>Addresses</li>
            </div>

            <br />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="credit-card"
                class="svg-inline--fa fa-credit-card fa-w-18"
                role="img"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                />
              </svg>
              <li>Payment Cards</li>
            </div>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="university"
                class="svg-inline--fa fa-university fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"
                ></path>
              </svg>
              <li>Bank Accounts</li>
            </div>

            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="pray"
                class="svg-inline--fa fa-pray fa-w-12"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-30.63 169.75c14.06 16.72 39 19.09 55.97 5.22l88-72.02c17.09-13.98 19.59-39.19 5.62-56.28-13.97-17.11-39.19-19.59-56.31-5.62l-57.44 47-38.91-46.31c-15.44-18.39-39.22-27.92-64-25.33-24.19 2.48-45.25 16.27-56.37 36.92l-49.37 92.03c-23.4 43.64-8.69 96.37 34.19 123.75L131.56 432H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h208c34.08 0 53.77-42.79 28.28-68.28L166.42 333.86l34.8-64.87 24.15 28.76z"
                ></path>
              </svg>
              <li>Check Breach</li>
            </div>
          </ul>
        </Content>
        <Settings>
          <ul>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus-circle"
                class="svg-inline--fa fa-plus-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                ></path>
              </svg>
              <li>Add Site</li>
            </div>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cog"
                class="svg-inline--fa fa-cog fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                ></path>
              </svg>
              <li>Settings</li>
            </div>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sign-out-alt"
                class="svg-inline--fa fa-sign-out-alt fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                ></path>
              </svg>
              <li>Log Out</li>
            </div>
          </ul>
        </Settings>
      </SidebarWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
  background-color: #3c4a54;
  min-height: 100vh;

  h1 {
    color: #fff;
    padding: 12px;
  }
  @media (max-width: 1100px) {
    width: 30%;
  }
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
`;

const Content = styled.div`
  padding: 20px;
  h1 {
    padding: 12px;
  }
  div {
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    a {
      text-decoration: none;
      color: white;
      padding-left: 10px;
      font-size: 24px;
      font-weight: bold;
    }
    &:hover {
      background-color: #22303a;
      padding: 10px;
      border-radius: 10px;
      width: 100%;
      cursor: pointer;
    }
    svg {
      width: 30px;
      height: 30px;
    }
    svg path {
      fill: #e9e9f4;
    }
  }
  ul {
    text-decoration: none;
    list-style: none;
    color: #fff;
    margin-top: 30px;
    font-size: 18px;
    div {
      display: flex;
      align-items: center;
      margin-top: 20px;
      svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
`;

const Settings = styled.div`
  padding: 20px;
  div {
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    a {
      text-decoration: none;
      color: white;
      padding-left: 10px;
      font-size: 24px;
      font-weight: bold;
    }
    &:hover {
      background-color: #22303a;
      padding: 10px;
      border-radius: 10px;
      width: 100%;
      cursor: pointer;
    }
    svg {
      width: 30px;
      height: 30px;
    }
    svg path {
      fill: #e9e9f4;
    }
  }
  ul {
    text-decoration: none;
    list-style: none;
    color: #fff;
    margin-top: 30px;
    font-size: 18px;
    div {
      display: flex;
      align-items: center;
      margin-top: 20px;
      svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
`;

export default Sidebar;
