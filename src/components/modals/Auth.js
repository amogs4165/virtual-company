import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const LoginButton = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>
};

export const Logout = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  return <button onClick={() => logout()}>logout</button>;
};

export const User = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <h3>User is {isAuthenticated ? "Logged In" : "Not logged in"}</h3>
      {isAuthenticated && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </>
  );
};
