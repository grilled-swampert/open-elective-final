import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  auth,
  logOut,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  // TODO *************

  const register = () => {
    if(name !== "") {
      registerWithEmailAndPassword(name, email, password);
      navigate("/admin");
    } else {
      alert("Shut your damn dog!");
    }
  }

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/admin");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login_box">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="register__btn"
          // TODO *************
        >
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          <div>
            Register with Google
            <img
              src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
              alt=""
            />
          </div>
        </button>
        <div style={{ marginTop: "20px" }}>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Register;
