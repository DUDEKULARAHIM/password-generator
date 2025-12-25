// import React from 'react';
// import PasswordGenerator from './components/PasswordGenerator';
// import PasswordStorage from './components/PasswordStorage';
// import './App.css';

// function App() {
//   return (
//     <div className="app-container">
//       <h1 className="main-heading">🔐 Password Generator & Manager</h1>
//       <div className="sections">
//         <PasswordGenerator />
//         <PasswordStorage />
//       </div>
//     </div>
//   );
// }

// export default App;









// import React, { useState, useRef } from 'react';

// const IntroVerification = () => {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [error, setError] = useState('');
//   const [showCode, setShowCode] = useState(false);
//   const [quizMsg, setQuizMsg] = useState('');

//   const inputsRef = useRef([]);

//   // Handle OTP input
//   const handleChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move to next box
//     if (value && index < 3) {
//       inputsRef.current[index + 1].focus();
//     }
//   };

//   // Handle backspace focus
//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
//       inputsRef.current[index - 1].focus();
//     }
//   };

//   // Verify OTP
//   const verifyCode = () => {
//     if (otp.join('') === '1234') {
//       setError('');
//       alert('Verification successful');

//       // 👉 TODO:
//       // Navigate to next page / unlock app / set localStorage flag
//       // Example:
//       // localStorage.setItem("verified", true);
//       // navigate("/dashboard");

//     } else {
//       setError('Invalid verification code');
//     }
//   };

//   // Quiz logic
//   const handleQuizAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setShowCode(true);
//       setQuizMsg('Correct answer! Verification code is shown below.');
//     } else {
//       setQuizMsg('Wrong answer. Please try again.');
//       setShowCode(false);
//     }
//   };

//   return (
//     <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '40px' }}>
//       <h1>Application Verification</h1>

//       {/* 🔐 OTP SECTION */}
//       <h3>Enter Verification Code</h3>

//       <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             ref={(el) => (inputsRef.current[index] = el)}
//             type="text"
//             maxLength="1"
//             value={digit}
//             onChange={(e) => handleChange(e.target.value, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             style={{
//               width: '45px',
//               height: '45px',
//               fontSize: '18px',
//               textAlign: 'center',
//               border: '2px solid #4caf50',
//               borderRadius: '4px',
//             }}
//           />
//         ))}
//       </div>

//       <button
//         onClick={verifyCode}
//         style={{
//           marginTop: '20px',
//           padding: '10px 20px',
//           backgroundColor: '#4caf50',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//         }}
//       >
//         Verify
//       </button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {/* 📝 NOTE */}
//       <h2 style={{ marginTop: '30px', color: '#555' }}>
//         Hint: Answer the quiz below to know the verification code
//       </h2>

//       {/* 🧠 QUIZ SECTION */}
//       <div style={{ marginTop: '20px' }}>
//         <h3>Quiz: What is 5 × 5?</h3>

//         <div>
//           <button onClick={() => handleQuizAnswer(false)} style={{ margin: '5px' }}>10</button>
//           <button onClick={() => handleQuizAnswer(false)} style={{ margin: '5px' }}>15</button>
//           <button onClick={() => handleQuizAnswer(true)} style={{ margin: '5px' }}>25</button>
//           <button onClick={() => handleQuizAnswer(false)} style={{ margin: '5px' }}>30</button>
//         </div>

//         {quizMsg && <p>{quizMsg}</p>}

//         {showCode && (
//           <h2 style={{ color: '#4caf50' }}>
//             Verification Code: <strong>1234</strong>
//           </h2>
//         )}
//       </div>

//       {/* 👉 TODO FOR OTHER APPLICATIONS */}
//       {/*
//         After verification success, you can:
//         - Redirect to another component
//         - Unlock premium features
//         - Show dashboard
//         - Enable login / signup
//         - Save verified state in localStorage
//       */}
//     </div>
//   );
// };

// export default IntroVerification;
















// import React, { useState, useRef } from 'react';

// const IntroVerification = () => {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [error, setError] = useState('');
//   const [showCode, setShowCode] = useState(false);
//   const [quizMsg, setQuizMsg] = useState('');

//   const inputsRef = useRef([]);

//   // OTP change handler
//   const handleChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 3) {
//       inputsRef.current[index + 1].focus();
//     }
//   };

//   // Backspace focus handler
//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
//       inputsRef.current[index - 1].focus();
//     }
//   };

//   // Verify OTP
//   const verifyCode = () => {
//     if (otp.join('') === '1234') {
//       setError('');
//       alert('Verification successful');

//       // 👉 TODO:
//       // Redirect / unlock application
//       // localStorage.setItem("verified", true);
//     } else {
//       setError('Invalid verification code');
//     }
//   };

//   // Quiz answer handler
//   const handleQuizAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setShowCode(true);
//       setQuizMsg('✅ Correct answer! Use the code shown below.');
//     } else {
//       setQuizMsg('❌ Wrong answer. Try again.');
//       setShowCode(false);
//     }
//   };

//   return (
//     <div style={{
//       fontFamily: 'Arial',
//       minHeight: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       background: 'linear-gradient(135deg, #e3f2fd, #f1f8e9)'
//     }}>
//       <div style={{
//         backgroundColor: '#fff',
//         padding: '40px',
//         width: '420px',
//         borderRadius: '10px',
//         boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
//         textAlign: 'center'
//       }}>
//         <h1 style={{ marginBottom: '10px' }}>🔐 App Verification</h1>
//         <p style={{ color: '#666' }}>Secure access required to continue</p>

//         {/* OTP SECTION */}
//         <h3 style={{ marginTop: '30px' }}>Enter Verification Code</h3>

//         <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               ref={(el) => (inputsRef.current[index] = el)}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e.target.value, index)}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//               style={{
//                 width: '45px',
//                 height: '45px',
//                 fontSize: '18px',
//                 textAlign: 'center',
//                 border: '2px solid #4caf50',
//                 borderRadius: '6px',
//                 outline: 'none'
//               }}
//             />
//           ))}
//         </div>

//         <button
//           onClick={verifyCode}
//           style={{
//             marginTop: '20px',
//             padding: '10px 25px',
//             backgroundColor: '#4caf50',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//             fontSize: '16px'
//           }}
//         >
//           Verify
//         </button>

//         {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

//         {/* ⭐ STYLED HINT BOX */}
//         <div style={{
//           marginTop: '30px',
//           padding: '15px',
//           backgroundColor: '#f0f7ff',
//           borderLeft: '5px solid #2196f3',
//           borderRadius: '6px',
//           textAlign: 'left'
//         }}>
//           <h3 style={{ margin: 0, color: '#1976d2' }}>💡 Hint</h3>
//           <p style={{ margin: '8px 0', color: '#333' }}>
//             Answer the quiz below correctly to reveal the
//             <strong> verification code</strong>.
//           </p>
//         </div>

//         {/* QUIZ SECTION */}
//         <div style={{ marginTop: '25px' }}>
//           <h3>🧠 Quiz Question</h3>
//           <p>What is <strong>5 × 5</strong>?</p>

//           <div>
//             <button onClick={() => handleQuizAnswer(false)} style={{ margin: '5px' }}>10</button>
//             <button onClick={() => handleQuizAnswer(false)} style={{ margin: '5px' }}>15</button>
//             <button onClick={() => handleQuizAnswer(true)} style={{ margin: '5px' }}>25</button>
//             <button onClick={() => handleQuizAnswer(false)} style={{ margin: '5px' }}>30</button>
//           </div>

//           {quizMsg && <p style={{ marginTop: '10px' }}>{quizMsg}</p>}

//           {showCode && (
//             <div style={{
//               marginTop: '15px',
//               padding: '12px',
//               backgroundColor: '#e8f5e9',
//               borderRadius: '6px'
//             }}>
//               <h2 style={{ color: '#2e7d32', margin: 0 }}>
//                 Verification Code: <strong>1234</strong>
//               </h2>
//             </div>
//           )}
//         </div>

//         {/* 👉 EXTENSION NOTES */}
//         {/*
//           You can now:
//           - Redirect after verification
//           - Lock features behind this screen
//           - Add multiple quiz questions
//           - Add timer / animation
//         */}
//       </div>
//     </div>
//   );
// };

// export default IntroVerification;













// import React, { useState, useRef } from "react";
// import "./IntroVerification.css";

// const IntroVerification = () => {
//   // 🔐 Actual verification code
//   const ACTUAL_CODE = "4829";

//   // State
//   const [inputs, setInputs] = useState(["", "", "", ""]);
//   const [verified, setVerified] = useState(false);
//   const [showCode, setShowCode] = useState(false);
//   const [error, setError] = useState("");

//   // Refs for auto focus
//   const inputRefs = useRef([]);

//   // Handle input change
//   const handleChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;

//     const newInputs = [...inputs];
//     newInputs[index] = value;
//     setInputs(newInputs);

//     if (value && index < 3) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   // Handle backspace focus
//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !inputs[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   // Verify code
//   const verifyCode = () => {
//     if (inputs.join("") === ACTUAL_CODE) {
//       setVerified(true);
//       setError("");
//     } else {
//       setError("Incorrect verification code ❌");
//     }
//   };

//   return (
//     <div className="intro-container">
//       {!verified ? (
//         <>  <h1>Application Verification</h1>
//           <h2 className="title">🔐 Verification Required</h2>

//           {/* Verification Boxes */}
//           <div className="otp-box">
//             {inputs.map((val, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 type="text"
//                 maxLength="1"
//                 value={val}
//                 onChange={(e) => handleChange(e.target.value, index)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//               />
//             ))}
//           </div>

//           <button className="verify-btn" onClick={verifyCode}>
//             Verify Code
//           </button>

//           {error && <p className="error">{error}</p>}

//           {/* Hint Section */}
//           <div className="hint-card">
//             <h3>🧠 Hint Quiz</h3>
//             <p>Which data structure works on FIFO principle?</p>

//             <div className="options">
//               <div className="option">Stack</div>
//               <div
//                 className="option correct"
//                 onClick={() => setShowCode(true)}
//               >
//                 Queue
//               </div>
//               <div className="option">Tree</div>
//               <div className="option">Graph</div>
//             </div>

//             {showCode && (
//               <div className="code-reveal">
//                 🎯 Your Verification Code: <b>{ACTUAL_CODE}</b>
//               </div>
//             )}
//           </div>

//           <h1 className="note">
//             Note: Complete the quiz or enter the correct verification code
//             to continue.
//           </h1>
//         </>
//       ) : (
//         <>
//           {/* ✅ VERIFIED SUCCESS */}
//           <h2 className="success">✅ Verification Successful</h2>

//           {/* 🔁 REDIRECT / NEXT COMPONENT */}
//           {/* 
//             Import your next component at the top:
//             import Home from "./Home";

//             Then render it here:
//             <Home />
//           */}
//         </>
//       )}
//     </div>
//   );
// };

// export default IntroVerification;












// import React, { useState, useRef, useEffect } from "react";
// import "./IntroVerification.css";

// const IntroVerification = () => {
//   // 🔐 Codes
//   const ADMIN_CODE = "123456"; // fixed admin code (6 digits)
//   const [userCode, setUserCode] = useState("");

//   // OTP input state (6 boxes)
//   const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
//   const [verified, setVerified] = useState(false);
//   const [showCode, setShowCode] = useState(false);
//   const [error, setError] = useState("");

//   const inputRefs = useRef([]);

//   // Generate random 6-digit code once
//   useEffect(() => {
//     const random = Math.floor(100000 + Math.random() * 900000).toString();
//     setUserCode(random);
//   }, []);

//   // Handle input
//   const handleChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;

//     const newInputs = [...inputs];
//     newInputs[index] = value;
//     setInputs(newInputs);

//     if (value && index < inputs.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   // Backspace auto-focus
//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !inputs[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   // Verify logic
//   const verifyCode = () => {
//     const enteredCode = inputs.join("");

//     if (enteredCode === ADMIN_CODE || enteredCode === userCode) {
//       setVerified(true);
//       setError("");
//     } else {
//       setError("Invalid verification code ❌");
//     }
//   };

//   return (
//     <div className="intro-container">
//       {!verified ? (
//         <>
//         <h1>Application Verify</h1>
//           <h2 className="title">🔐Enter Verification Code</h2>

//           {/* OTP BOXES */}
//           <div className="otp-box">
//             {inputs.map((val, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 type="text"
//                 maxLength="1"
//                 value={val}
//                 onChange={(e) => handleChange(e.target.value, index)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//               />
//             ))}
//           </div>

//           <button className="verify-btn" onClick={verifyCode}>
//             Verify
//           </button>

//           {error && <p className="error">{error}</p>}

//           {/* QUIZ / HINT */}
//           <div className="hint-card">
//             <h3>🧠 Quiz Hint (For Users)</h3>
//             <p>Which data is Correct 2+2</p>

//             <div className="options">
//               <div className="option">3</div>
//               <div
//                 className="option correct"
//                 onClick={() => setShowCode(true)}
//               >
//                 4
//               </div>
//               <div className="option">5</div>
//               <div className="option">6</div>
//             </div>

//             {showCode && (
//               <div className="code-reveal">
//                 🎯 Your Code: <b>{userCode}</b>
//               </div>
//             )}
//           </div>

//           <h1 className="note">
//             {/* Admin can directly enter <b>123456</b>.   */}
//             Users must solve the quiz to get the code.
//           </h1>
//         </>
//       ) : (
//         <>
//           <h2 className="success">✅ Verification Successful</h2>

//           {/*
//             🔁 REDIRECT / NEXT COMPONENT (COMMENT ONLY)

//             import Home from "./Home";

//             <Home />
//           */}
//         </>
//       )}
//     </div>
//   );
// };

// export default IntroVerification;

















// import React, { useState } from "react";
// // import PasswordGenerator from "./components/PasswordGenerator";
// // import PasswordStorage from "./components/PasswordStorage";
// import IntroVerification from "./IntroVerification"; // 🔐 verification page
// import CredentialForm from "./components/CredentialForm";
// import CredentialTable from "./components/CredentialTable";
// import "./App.css";

// function App() {
//   const [isVerified, setIsVerified] = useState(false);

//   return (
//     <>
//       {!isVerified ? (
//         // 🔐 INTRO / VERIFICATION PAGE
//         <IntroVerification onSuccess={() => setIsVerified(true)} />
//       ) : (
//         // ✅ MAIN APPLICATION
//         <div className="app-container">
//           <h1 className="main-heading">🔐 Password Generator & Manager</h1>
//           <div className="sections">
//             <CredentialForm />
//             <CredentialTable />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;







import React, { useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import IntroVerification from ".components/IntroVerification";
import CredentialForm from "./components/CredentialForm";
import CredentialTable from "./components/CredentialTable";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [activePage, setActivePage] = useState("home"); 
  // home | generator | storage

  return (
    <>
      {!isVerified ? (
        /* 🔐 VERIFICATION SCREEN */
        <IntroVerification onSuccess={() => setIsVerified(true)} />
      ) : (
        /* ✅ MAIN APP */
        <div className="app-container">
          <h1 className="main-heading">
            🔐 Password Generator & Manager
          </h1>

          {/* HOME BUTTONS */}
          {activePage === "home" && (
            <div className="home-buttons">
              <button
                className="primary-btn"
                onClick={() => setActivePage("generator")}
              >
                🔑 Generate Password
              </button>

              <button
                className="secondary-btn"
                onClick={() => setActivePage("storage")}
              >
                📂 View Stored Credentials
              </button>
            </div>
          )}

          {/* PASSWORD GENERATOR */}
          {activePage === "generator" && (
            <>
              <button
                className="back-btn"
                onClick={() => setActivePage("home")}
              >
                ← Back
              </button>
              <PasswordGenerator />
            </>
          )}

          {/* CREDENTIAL STORAGE */}
          {activePage === "storage" && (
            <>
              <button
                className="back-btn"
                onClick={() => setActivePage("home")}
              >
                ← Back
              </button>

              <div className="sections">
                <CredentialForm />
                <CredentialTable />
              </div>
            </>
          )}

            
        </div>
        
      )}
      <Footer />
    </>
  );
}

export default App;
