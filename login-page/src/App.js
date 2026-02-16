import "./App.css";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState("signup");
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="container">
      <div className="background"></div>
      <div className="card">
        <div className="top-bar">
          <div className="tabs">
            <button
              className={active === "signup" ? "active" : ""}
              onClick={() => setActive("signup")}
            >
              Sign up
            </button>
            <button
              className={active === "signin" ? "active" : ""}
              onClick={() => setActive("signin")}
            >
              Sign in
            </button>
          </div>
          <span className="close" onClick={() => setShow(false)}>
            &times;
          </span>
        </div>
        <h2>
          {active === "signup"
            ? "Create an account"
            : "Sign in to your account"}
        </h2>
        {active === "signup" && (
          <>
            <div className="name-row">
              <input placeholder="First name" />
              <input placeholder="Last name" />
            </div>
            <input type="email" placeholder="Enter your email" />
            <div className="phone">
              <select>
                <option>🇺🇸</option>
                <option>🇮🇳</option>
              </select>
              <input placeholder="Phone number" />
            </div>
            <input type="password" placeholder="Create password" />
            <button className="primary">Create an account</button>
            <p className="divider">OR SIGN UP WITH</p>
            <div className="social">
              <button>G</button>
            </div>
          </>
        )}
        {active === "signin" && (
          <>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter password" />
            <button className="primary">Login</button>
            <p className="divider">OR LOGIN WITH</p>
            <div className="social">
              <button>Google</button>
            </div>
          </>
        )}
        <p className="terms">
          By continuing, you agree to our Terms & Service
        </p>
      </div>
    </div>
  );
}
