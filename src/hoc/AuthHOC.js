import React from "react";
import Hero from "../components/Hero";

export default function requireAuthentication(Component, user, handleLogIn) {
  function AuthHOC(props) {
    return user ? <Component user={user} {...props} /> : <Hero handleLogIn={handleLogIn} />;
  }
  return AuthHOC;
}
