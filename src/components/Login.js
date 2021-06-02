import React from "react";
import {
  Button,
  Dimmer,
  Form,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";

export default function Login({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  hasAccount,
  setHasAccount,
  emailError,
  passError,
  isLoading,
}) {
  return (
    <Segment placeholder>
      {isLoading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Message error header="Wrong Email!" content={emailError} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Message error header="Wrong Password" content={passError} />
        </Form.Field>
        <Button type="button" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Segment>
  );
}
