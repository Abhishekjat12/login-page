import "./App.css";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


export default function App() {
  const [tab, setTab] = useState("signup");
  const [show, setShow] = useState(true);

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    password: "",
  });
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  if (!show) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let err = {};

    if (tab === "signup") {
      if (!form.first.trim()) err.first = "Required";
      if (!form.last.trim()) err.last = "Required";
      if (phone.length < 10)
        err.phone = "Invalid phone";

    }

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Invalid email";

    if (form.password.length < 8)
      err.password = "Invalid password";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert(tab === "signup" ? "Account Created!!" : "Login Successful!!");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="top">
          <div className="tabs">
            <button
              className={tab === "signup" ? "active" : ""}
              onClick={() => setTab("signup")}
            >
              Sign up
            </button>
            <button
              className={tab === "signin" ? "active" : ""}
              onClick={() => setTab("signin")}
            >
              Sign in
            </button>
          </div>

          <span className="close" onClick={() => setShow(false)}>×</span>
        </div>
        <h2>
          {tab === "signup" ? "Create an account" : "Welcome back"}
        </h2>
        {tab === "signup" && (
          <>
            <div className="row">
              <div>
                <input name="first" placeholder="First name" onChange={handleChange} />
                <small>{errors.first}</small>
              </div>

              <div>
                <input name="last" placeholder="Last name" onChange={handleChange} />
                <small>{errors.last}</small>
              </div>
            </div>
            <input name="email" placeholder="Enter your email" onChange={handleChange} />
            <small>{errors.email}</small>

            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(value) => {
                setPhone(value);
                setForm({ ...form, phone: value });
              }}
              enableSearch={true}
              containerClass="phone-container"
              inputClass="phone-input"
              buttonClass="phone-flag"
              dropdownClass="phone-dropdown"
            />


            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <small>{errors.password}</small>
            <button className="primary" onClick={handleSubmit}>
              Create an account
            </button>
            <p className="divider">OR SIGN UP WITH</p>
            <div className="social">
              <button className="google-btn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
                  width="18"
                  alt="Google logo"
                />
              </button>
              <button className="apple-btn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  width="18"
                  alt="Apple logo"
                />
              </button>
            </div>
          </>
        )}
        {tab === "signin" && (
          <>
            <input name="email" placeholder="Enter email" onChange={handleChange} />
            <small>{errors.email}</small>

            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <small>{errors.password}</small>
            <button className="primary" onClick={handleSubmit}>
              Login
            </button>
            <p className="divider">OR LOGIN WITH</p>
            <div className="social">
              <button className="google-btn" >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
                  width="18"
                  alt="Google logo"
                />
              </button>
              <button className="apple-btn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  width="18"
                  alt="Apple logo"
                />
              </button>
            </div>
          </>
        )}
        <p className="terms">
          By creating an account, you agree to our Terms & Service
        </p>
      </div>
    </div>
  );
}
