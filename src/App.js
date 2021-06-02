import { useSelector } from "react-redux";
import { Container, Segment } from "semantic-ui-react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import UserMng from "./components/UserMng";
import { selectUserSignIn } from "./feature/userSlice";

function App() {
  const isUserSignedIn = useSelector(selectUserSignIn);

  return (
    <>
      <Navbar />
      <Container>
        {!isUserSignedIn && <UserMng />}
        {isUserSignedIn && (
          <Segment>
            <HomePage />
          </Segment>
        )}
      </Container>
    </>
  );
}

export default App;
