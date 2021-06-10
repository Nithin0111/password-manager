import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Container>
      {/* <Sidebar />
      <Home /> */}
      <Login />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 100%;
`;
export default App;
