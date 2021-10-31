import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, setUser, setLoading, setError, error } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const handleGoogle = () => {
    signInUsingGoogle()
      .then((result) => {
        setLoading(true);
        const user = result.user;
        setUser(user);
        history.push(url);
        console.log("from login file", user);
      })
      .finally(() => setLoading(false));

    // ...
  };
  return (
    <div className="login-container">
      <h1 className="fw-bold text-info ">Please Sign In</h1>
      <Button className="btn-warning" onClick={handleGoogle}>
        Google
      </Button>
      <h2>{error}</h2>
    </div>
  );
};

export default Login;
