import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <Container>
      <Sidebar />
      <Home />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 100%;
`;
export default App;
