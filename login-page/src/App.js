import "./App.css";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



export default function App() {
    const [tab, setTab] = useState("signup");
    const [form, setForm] = useState({
        first: "",
        last: "",
        email: "",
        phone: "",
        password: "",
    });
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm(prev =>
        ({
            ...prev,
            [name]: value
        }));


        setErrors(prev => {
            const newErrors = { ...prev };
            if (value.trim()) {
                delete newErrors[name];
            } else {
                newErrors[name] = "Required";
            }
            return newErrors;
        });
    };
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
                        <div className="slider"></div>
                    </div>
                </div>
                <h2>
                    {tab === "signup" ? "Create an account" : "Welcome back"}
                </h2>
                {tab === "signup" && (
                    <>
                        <div className="row">
                            <div>
                                <input name="first" placeholder="First name" value={form.first} onChange={handleChange}
                                    style={{
                                        border: errors.first ? "1px solid #c71010" : ""
                                    }} />
                                <small className="errorinput">{errors.first}</small>
                            </div>

                            <div>
                                <input name="last" placeholder="Last name" onChange={handleChange}
                                    style={{
                                        border: errors.last ? "1px solid #c71010" : ""
                                    }} />
                                <small className="errorinput">{errors.last}</small>
                            </div>
                        </div>
                        <input name="email" placeholder="Enter your email" onChange={handleChange}
                            style={{
                                border: errors.email ? "1px solid #c71010" : ""
                            }} />
                        <small className="errorinput">{errors.email}</small>

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
                            searchClass="custom-search"
                            containerStyle={{ marginBottom: "10px" }}
                        />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange}
                        />
                        <small className="errorinput">{errors.password}</small>
                        <div className="state">
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
                                </button></div>
                        </div>
                    </>

                )}

                {tab === "signin" && (
                    <>
                        <input name="email" placeholder="Enter email" onChange={handleChange} />
                        <small className="errorinput">{errors.email}</small>

                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                        <small className="errorinput">{errors.password}</small>
                        <div className="state">
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
                        </div>
                    </>
                )}
                <div className="status">
                    <p className="terms">
                        By creating an account, you agree to our Terms & Service
                    </p>
                </div>
            </div>
        </div>

    );
}
