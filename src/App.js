import { Container, Segment } from "semantic-ui-react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Segment>
          <HomePage />
        </Segment>
      </Container>
    </>
  );
}

export default App;
