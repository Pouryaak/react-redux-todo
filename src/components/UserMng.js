import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSignIn, setUserData } from "../feature/userSlice";
import fire from "../firebase";
import Login from "./Login";

export default function UserMng() {
  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPassError("");
  };
  const handleLogin = () => {
    setIsLoading(true);
    clearErrors();
    console.log(email, password);
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        dispatch(setSignIn());
        dispatch(setUserData(resp));
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/use-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassError(err.message);
            break;
          default:
        }
      })
      .finally(() => setIsLoading(false));
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassError(err.message);
            break;
          default:
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  }, []);

  return (
    <>
      <Login
        isLoading={isLoading}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passError={passError}
      />
    </>
  );
}
