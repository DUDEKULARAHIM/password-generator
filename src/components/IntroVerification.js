import React, { useState, useRef, useEffect } from "react";
import "./IntroVerification.css";

const IntroVerification = ({ onSuccess }) => {
  // 🔐 Codes
  const ADMIN_CODE = "123456"; // fixed admin code (6 digits)
  const [userCode, setUserCode] = useState("");

  // OTP input state (6 boxes)
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const [verified, setVerified] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState("");

  const inputRefs = useRef([]);

  // Generate random 6-digit code once
  useEffect(() => {
    const random = Math.floor(100000 + Math.random() * 900000).toString();
    setUserCode(random);
  }, []);

  // Handle input
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value && index < inputs.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Backspace auto-focus
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !inputs[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Verify logic
  const verifyCode = () => {
    const enteredCode = inputs.join("");

    if (enteredCode === ADMIN_CODE || enteredCode === userCode) {
      setVerified(true);
      setError("");
      onSuccess && onSuccess(); // ✅ notify App.js
    } else {
      setError("Invalid verification code ❌");
    }
  };

  return (
    <div className="intro-container">
      {!verified ? (
        <>
          <h1>Application Verify</h1>
          <h2 className="title">🔐 Enter Verification Code</h2>

          {/* OTP BOXES */}
          <div className="otp-box">
            {inputs.map((val, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={val}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button className="verify-btn" onClick={verifyCode}>
            Verify
          </button>

          {error && <p className="error">{error}</p>}

          {/* QUIZ / HINT */}
          <div className="hint-card">
            <h3>🧠 Quiz Hint (For Users)</h3>
            <p>Which data is correct: 2 + 2 ?</p>

            <div className="options">
              <div className="option">3</div>
              <div
                className="option correct"
                onClick={() => setShowCode(true)}
              >
                4
              </div>
              <div className="option">5</div>
              <div className="option">6</div>
            </div>

            {showCode && (
              <div className="code-reveal">
                🎯 Your Code: <b>{userCode}</b>
              </div>
            )}
          </div>

          <h1 className="note">
            Users must solve the quiz to get the code.
          </h1>
        </>
      ) : (
        <>
          <h2 className="success">✅ Verification Successful</h2>

          {/*
            🔁 NEXT COMPONENT (COMMENT ONLY)

            import Home from "./Home";

            <Home />
          */}
        </>
      )}
    </div>
  );
};

export default IntroVerification;
