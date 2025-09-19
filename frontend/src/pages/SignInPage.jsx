// original code version
// import { Helmet } from "react-helmet-async";
// import PasswordInput from "../components/PasswordInput.jsx";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../redux/userSlice.js";
// import { setPreferences } from "../redux/preferenceSlice.js";
// import api from "../api/axios.js";
// const SignInPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [moodGoal, setMoodGoal] = useState("Feel Less Anxious");
//   const [focusGoal, setFocusGoal] = useState("Reduce Distractions");
//   const [language, setLanguage] = useState("English");
//   const [theme, setTheme] = useState("Light");

//   /*we have initial State in both SignInpage and userSlice right. as both reflects the same why we need to mention initialStates for btoh?
//      for Eg: fullName="" in SignInpage and fullName="" in UserSlice also why?
//      Ans: For eg: initial state in useState is "Santhosh"  in component A it will get displayed particularly in the component "A" input box as "Santhosh". But in redux initial State
//       if it is given as "Krishnan" then in component B and component C it willl be displayed as "Krishnan"  only
//        as it is a global state but in component A it will be displayed as "Santhosh"  */
//   // const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     if (!name && !nickname && !email && !password && !confirmPassword) {
//       alert("Please fill in all the fields");
//       return;
//     }
//     try {
//       //await api.post() will actually send a POST http request to:http://localhost:5000/api/v1/auth/signup
//       const res = await api.post("/auth/register", {
//         name,
//         nickname,
//         email,
//         password,
//         confirmPassword,
//         moodGoal,
//         focusGoal,
//         language,
//         theme,
//       });

//       const userData = res.data.user;
//       console.log("Backend returned:", userData);

//       console.log(userData.name, userData.name);
//       console.log("User password is:" + userData.password);
//       dispatch(
//         registerUser({
//           name: userData.name,
//           nickname: userData.nickname,
//           email: userData.email,
//         })
//       );
//       dispatch(setPreferences({ moodGoal, focusGoal, language, theme }));

//       navigate("/DashBoardPage");
//     } catch (err) {
//       console.log("Registeration Error", err);
//       const msg = err?.response?.data?.message || "Something went wrong";
//       setError(msg);
//     }
//   };
//   return (
//     <>
//       <Helmet>
//         <title>📝 Sign In Page</title>
//       </Helmet>
//       <h2>🔐Account Details</h2>
//       <input
//         type="text"
//         name="fullname"
//         autoComplete="fullname"
//         minLength={6}
//         maxLength={20}
//         required
//         placeholder="Enter your full Name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         minLength={2}
//         maxLength={10}
//         placeholder="Enter your nickname"
//         onChange={(e) => setNickname(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Enter your Email Id"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <PasswordInput
//         placeholderz={"Enter your password"}
//         password={password}
//         finalPassword={setPassword}
//       />
//       <PasswordInput
//         placeholderz={"Enter your confirmed password"}
//         password={confirmPassword}
//         finalPassword={setConfirmPassword}
//         compareWith={password}
//       />
//       <h2>🎯Personal Preferences(Optional)</h2>
//       <h3>Select your mood goal for the app</h3>
//       {/* value in the select here and schema enum in backend should remain same  */}
//       <select value={moodGoal} onChange={(e) => setMoodGoal(e.target.value)}>
//         <option value="Feel Less Anxious">Feel Less Anxious</option>
//         <option value="Sleep Better">Sleep Better</option>
//       </select>
//       <h3>Focus goal</h3>
//       <select value={focusGoal} onChange={(e) => setFocusGoal(e.target.value)}>
//         <option value="Reduce Distractions">Reduce Distractions</option>
//         <option value="Study Better">Study Better</option>
//       </select>
//       <h3>What is your preferred Language?</h3>
//       {/* Always use value={state} for <input>, <textarea>, and <select> in React to make them controlled components. */}
//       <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//         <option value="English">English</option>
//         <option value="Tamil">Tamil</option>
//       </select>
//       <h3>Preferred Theme</h3>
//       <select value={theme} onChange={(e) => setTheme(e.target.value)}>
//         <option value="Light">Light</option>
//         <option value="Dark">Dark</option>
//       </select>

//       <button onClick={handleSubmit}>Register</button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </>
//   );
// };
// export default SignInPage;

// enhanced code version with animation and better UI/UX
// import { Helmet } from "react-helmet-async";
// import PasswordInput from "../components/PasswordInput.jsx";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../redux/userSlice.js";
// import api from "../api/axios.js";

// const SignInPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [theme] = useState("Light");
//   const [error, setError] = useState("");
//   const [showForm, setShowForm] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     if (!name || !nickname || !email || !password || !confirmPassword) {
//       alert("Please fill in all the fields");
//       return;
//     }
//     try {
//       const res = await api.post("/auth/register", {
//         name,
//         nickname,
//         email,
//         password,
//         confirmPassword,
//         theme,
//       });
//       const userData = res.data.user;
//       dispatch(
//         registerUser({
//           name: userData.name,
//           nickname: userData.nickname,
//           email: userData.email,
//         })
//       );
//       navigate("/DashBoardPage");
//     } catch (err) {
//       setError(err?.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>📝 Sign In Page</title>
//       </Helmet>

//       <div
//         className={`signin-page-wrapper${showForm ? " show-light" : ""}`}
//         style={{
//           background: "#111111",
//           minHeight: "100vh",
//           margin: 0,
//           fontFamily: "'Montserrat', Arial, sans-serif",
//           position: "relative",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           overflow: "hidden",
//         }}
//       >
//         {/* Lamp */}
//         <div
//           className="lamp"
//           style={{
//             position: "absolute",
//             top: "0", // ceiling mounted
//             left: "50%",
//             transform: "translateX(-50%)",
//             zIndex: 3,
//           }}
//         >
//           <div
//             style={{
//               width: 0,
//               height: 0,
//               borderLeft: "80px solid transparent",
//               borderRight: "80px solid transparent",
//               borderBottom: showForm ? "100px solid #777" : "100px solid #555",
//               transition: "all 0.3s ease",
//               filter: showForm
//                 ? "drop-shadow(0 0 20px rgba(255,235,59,0.6)) drop-shadow(0 0 40px rgba(255,235,59,0.4))"
//                 : "none",
//             }}
//           />
//           <div
//             style={{
//               width: "38px",
//               height: "38px",
//               background: showForm ? "#ffeb3b" : "#777",
//               borderRadius: "50%",
//               position: "absolute",
//               left: "50%",
//               top: "92px",
//               transform: "translateX(-50%)",
//               transition: "all 0.3s ease",
//               boxShadow: showForm
//                 ? "0 0 30px #ffeb3b, 0 0 60px #ffeb3b, 0 0 90px rgba(255,235,59,0.5)"
//                 : "none",
//             }}
//           />
//           <div
//             style={{
//               width: "2px",
//               height: "70px",
//               background: "#888",
//               position: "absolute",
//               left: "50%",
//               top: "130px",
//               transform: "translateX(-50%)",
//             }}
//           />
//         </div>

//         {!showForm && (
//           <div style={{ textAlign: "center", marginTop: "300px", zIndex: 2 }}>
//             <div
//               style={{
//                 fontSize: "3rem",
//                 fontWeight: "bold",
//                 color: "white",
//                 letterSpacing: "4px",
//                 marginBottom: "30px",
//               }}
//             >
//               LOGIN
//             </div>
//             <button
//               onClick={() => setShowForm(true)}
//               style={{
//                 background: "transparent",
//                 border: "2px solid white",
//                 color: "white",
//                 padding: "12px 30px",
//                 fontSize: "1.2rem",
//                 cursor: "pointer",
//                 borderRadius: "5px",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.background = "white";
//                 e.target.style.color = "#111";
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.background = "transparent";
//                 e.target.style.color = "white";
//               }}
//             >
//               Register
//             </button>
//           </div>
//         )}

//         {showForm && (
//           <>
//             {/* Light cone */}
//             <div className="light-cone" />

//             {/* Form */}
//             <div
//               style={{
//                 position: "relative",
//                 background: "rgba(251,251,251,0.95)",
//                 backdropFilter: "blur(10px)",
//                 borderRadius: "18px",
//                 boxShadow:
//                   "0 10px 32px rgba(0,0,0,0.2),0 1.5px 6px rgba(0,0,0,0.1)",
//                 width: "370px",
//                 margin: "0 auto",
//                 padding: "40px 32px",
//                 zIndex: 4,
//                 marginTop: "250px",
//                 animation: "slideUp 0.5s ease-out",
//                 border: "1px solid rgba(255,235,59,0.2)",
//               }}
//             >
//               <div
//                 onClick={() => setShowForm(false)}
//                 style={{
//                   position: "absolute",
//                   top: "15px",
//                   right: "20px",
//                   fontSize: "24px",
//                   color: "#999",
//                   cursor: "pointer",
//                   width: "30px",
//                   height: "30px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: "50%",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.background = "#f0f0f0";
//                   e.target.style.color = "#666";
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.background = "transparent";
//                   e.target.style.color = "#999";
//                 }}
//               >
//                 ×
//               </div>

//               <h2
//                 style={{
//                   margin: "0 0 18px",
//                   fontSize: "2rem",
//                   fontWeight: 600,
//                   textAlign: "center",
//                   color: "#333",
//                   letterSpacing: "2px",
//                   textShadow: "0 2px 12px rgba(230,206,141,0.3)",
//                 }}
//               >
//                 Welcome Back
//               </h2>
//               <h2
//                 style={{
//                   margin: "0 0 18px",
//                   fontSize: "1.3rem",
//                   color: "#444",
//                   marginBottom: "20px",
//                   paddingBottom: "8px",
//                   borderBottom: "2px solid #ffeb3b",
//                   fontWeight: 500,
//                 }}
//               >
//                 🔐Account Details
//               </h2>

//               <input
//                 type="text"
//                 placeholder="Enter your full Name"
//                 minLength={6}
//                 maxLength={20}
//                 required
//                 onChange={(e) => setName(e.target.value)}
//                 style={inputStyle}
//               />
//               <input
//                 type="text"
//                 placeholder="Enter your nickname"
//                 minLength={2}
//                 maxLength={10}
//                 onChange={(e) => setNickname(e.target.value)}
//                 style={inputStyle}
//               />
//               <input
//                 type="email"
//                 placeholder="Enter your Email Id"
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={inputStyle}
//               />
//               <PasswordInput
//                 placeholderz="Enter your password"
//                 password={password}
//                 finalPassword={setPassword}
//               />
//               <PasswordInput
//                 placeholderz="Enter your confirmed password"
//                 password={confirmPassword}
//                 finalPassword={setConfirmPassword}
//                 compareWith={password}
//               />

//               <button
//                 onClick={handleSubmit}
//                 style={buttonStyle}
//                 onMouseOver={(e) =>
//                   (e.target.style.background =
//                     "linear-gradient(90deg,#faad36 0%,#ffe97a 100%)")
//                 }
//                 onMouseOut={(e) =>
//                   (e.target.style.background =
//                     "linear-gradient(90deg,#ffe97a 0%,#faad36 100%)")
//                 }
//               >
//                 Register
//               </button>
//               {error && (
//                 <p
//                   style={{
//                     color: "#e45757",
//                     fontSize: "1rem",
//                     marginTop: "8px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {error}
//                 </p>
//               )}
//             </div>
//           </>
//         )}

//         <style jsx>{`
//           @keyframes slideUp {
//             from {
//               opacity: 0;
//               transform: translateY(50px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           /* Light cone styling */
//           .light-cone {
//             position: absolute;
//             top: 130px; /* just below the bulb */
//             left: 50%;
//             transform: translateX(-50%);
//             width: 0;
//             height: 0;
//             pointer-events: none;
//             z-index: 1;
//             opacity: 0;
//             transition: opacity 0.6s ease;
//           }
//           .signin-page-wrapper.show-light .light-cone {
//             border-left: 45vw solid transparent;
//             border-right: 45vw solid transparent;
//             border-bottom: 100vh solid rgba(255, 235, 59, 0.18);
//             opacity: 1;
//           }
//           .light-cone::before,
//           .light-cone::after {
//             content: "";
//             position: absolute;
//             left: 50%;
//             transform: translateX(-50%);
//             width: 0;
//             height: 0;
//           }
//           .light-cone::before {
//             top: 0;
//             border-left: 50vw solid transparent;
//             border-right: 50vw solid transparent;
//             border-bottom: 100vh solid rgba(255, 235, 59, 0.1);
//             filter: blur(25px);
//           }
//           .light-cone::after {
//             top: 0;
//             border-left: 40vw solid transparent;
//             border-right: 40vw solid transparent;
//             border-bottom: 100vh solid rgba(255, 235, 59, 0.25);
//             filter: blur(12px);
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// // Reusable inline styles:
// const inputStyle = {
//   display: "block",
//   width: "100%",
//   padding: "12px 10px",
//   marginBottom: "18px",
//   fontSize: "1rem",
//   background: "#f3f3f3",
//   border: "1px solid #ddd",
//   borderRadius: "6px",
//   boxSizing: "border-box",
//   outline: "none",
//   transition: "border-color 0.2s",
//   onFocus: (e) => (e.target.style.borderColor = "#e6ce8d"),
//   onBlur: (e) => (e.target.style.borderColor = "#ddd"),
// };
// const buttonStyle = {
//   width: "100%",
//   padding: "13px 0",
//   fontSize: "1.08rem",
//   fontWeight: "bold",
//   letterSpacing: "1px",
//   background: "linear-gradient(90deg,#ffe97a 0%,#faad36 100%)",
//   color: "#333",
//   border: "none",
//   borderRadius: "8px",
//   boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//   cursor: "pointer",
//   marginTop: "16px",
//   transition: "background 0.25s",
// };

// export default SignInPage;

import { Helmet } from "react-helmet-async";
import PasswordInput from "../components/PasswordInput.jsx";
import ElectricBorder from "../assets/animations/ElectricBorder.jsx"; // ✅ Import ElectricBorder
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/userSlice.js";
import api from "../api/axios.js";
import TextType from "../assets/animations/TextType.jsx"; // ✅ Import TextType for typing animation

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [theme] = useState("Light");
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [emailError, setEmailError] = useState(""); // ✅ email validation error
  const electricColor = "#E6B800";

  const validateEmail = (value) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regex.test(value)) {
      setEmailError("Please enter a valid email (e.g. user@example.com)");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!name || !nickname || !email || !password || !confirmPassword) {
      alert("Please fill in all the fields");
      return;
    }
    if (emailError) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      const res = await api.post("/auth/register", {
        name,
        nickname,
        email,
        password,
        confirmPassword,
        theme,
      });
      const userData = res.data.user;
      console.log("Backend returned:", userData);
      dispatch(
        registerUser({
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          nickname: userData.nickname,
          points: Number(userData.points),
          productsBought: Number(userData.productsBought),
        })
      );
      navigate("/DashBoardPage");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Helmet>
        <title>📝 Sign In Page</title>
      </Helmet>

      <div
        className={`signin-page-wrapper${showForm ? " show-light" : ""}`}
        style={{
          background: "#111111",
          minHeight: "100vh",
          margin: 0,
          fontFamily: "'Montserrat', Arial, sans-serif",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Lamp */}
        <div
          className="lamp"
          style={{
            position: "absolute",
            top: "0", // ceiling mounted
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "80px solid transparent",
              borderRight: "80px solid transparent",
              borderBottom: showForm ? "100px solid #777" : "100px solid #555",
              transition: "all 0.3s ease",
              filter: showForm
                ? "drop-shadow(0 0 20px rgba(255,235,59,0.6)) drop-shadow(0 0 40px rgba(255,235,59,0.4))"
                : "none",
            }}
          />
          <div
            style={{
              width: "60px",
              height: "38px",
              background: showForm ? "#ffeb3b" : "#777",
              borderRadius: "50%",
              position: "absolute",
              left: "50%",
              top: "92px",
              transform: "translateX(-50%)",
              transition: "all 0.3s ease",
              boxShadow: showForm
                ? "0 0 30px #ffeb3b, 0 0 60px #ffeb3b, 0 0 90px rgba(255,235,59,0.5)"
                : "none",
            }}
          />
          <div
            style={{
              width: "2px",
              height: "70px",
              background: "#888",
              position: "absolute",
              left: "50%",
              top: "130px",
              transform: "translateX(-50%)",
            }}
          />
        </div>

        {!showForm && (
          <div style={{ textAlign: "center", marginTop: "300px", zIndex: 2 }}>
            <button
              onClick={() => setShowForm(true)}
              style={{
                background: "transparent",
                border: "2px solid white",
                color: "white",
                padding: "12px 30px",
                fontSize: "1.2rem",
                cursor: "pointer",
                borderRadius: "5px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "white";
                e.target.style.color = "#111";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "white";
              }}
            >
              Register
            </button>
            <button
              onClick={() => navigate("/")}
              style={{
                background: "transparent",
                border: "2px solid white",
                color: "white",
                padding: "12px 30px",
                fontSize: "1.2rem",
                cursor: "pointer",
                borderRadius: "5px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "white";
                e.target.style.color = "#111";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "white";
              }}
            >
              Login
            </button>
          </div>
        )}

        {showForm && (
          <>
            {/* Light cone */}
            <div className="light-cone" />

            {/* Form wrapped with ElectricBorder */}
            <ElectricBorder
              color="#ffeb3b"
              speed={2}
              chaos={1.2}
              thickness={2}
              style={{
                borderRadius: "18px",
                width: "370px",
                margin: "250px auto 0",
                zIndex: 4,
              }}
            >
              <div
                style={{
                  position: "relative",
                  background: "rgba(251,251,251,0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "18px",
                  boxShadow:
                    "0 10px 32px rgba(0,0,0,0.2),0 1.5px 6px rgba(0,0,0,0.1)",
                  padding: "40px 32px",
                  animation: "slideUp 0.5s ease-out",
                  border: "1px solid rgba(255,235,59,0.2)",
                }}
              >
                <div
                  onClick={() => setShowForm(false)}
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "20px",
                    fontSize: "24px",
                    color: "#999",
                    cursor: "pointer",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#f0f0f0";
                    e.target.style.color = "#666";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#999";
                  }}
                >
                  ×
                </div>

                <h2
                  style={{
                    margin: "0 0 18px",
                    fontSize: "2rem",
                    fontWeight: 600,
                    textAlign: "center",
                    color: "#333",
                    letterSpacing: "2px",
                    textShadow: "0 2px 12px rgba(230,206,141,0.3)",
                  }}
                >
                  <TextType
                    text={[
                      "Shine Bright 🌟",
                      "Inner Glow ✨",
                      "Light Ahead 🔆",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="|"
                    loop
                    textColors={[electricColor]}
                  />
                </h2>
                <h2
                  style={{
                    margin: "0 0 18px",
                    fontSize: "1.3rem",
                    color: "#444",
                    marginBottom: "20px",
                    paddingBottom: "8px",
                    borderBottom: "2px solid #ffeb3b",
                    fontWeight: 500,
                  }}
                >
                  🔐Account Details
                </h2>

                <input
                  type="text"
                  placeholder="Enter your full Name"
                  minLength={6}
                  maxLength={20}
                  required
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Enter your nickname"
                  minLength={2}
                  maxLength={10}
                  onChange={(e) => setNickname(e.target.value)}
                  style={inputStyle}
                  required
                />
                <input
                  type="email"
                  placeholder="Enter your Email Id"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value); // ✅ live validation
                  }}
                  style={inputStyle}
                  required
                />
                {emailError && (
                  <p
                    style={{
                      color: "#e45757",
                      fontSize: "0.85rem",
                      marginTop: "-10px",
                      marginBottom: "12px",
                      textAlign: "left",
                    }}
                  >
                    {emailError}
                  </p>
                )}
                <PasswordInput
                  placeholderz="Enter your password"
                  password={password}
                  finalPassword={setPassword}
                />
                <PasswordInput
                  placeholderz="Enter your confirmed password"
                  password={confirmPassword}
                  finalPassword={setConfirmPassword}
                  compareWith={password}
                />

                <button
                  onClick={handleSubmit}
                  style={buttonStyle}
                  onMouseOver={(e) =>
                    (e.target.style.background =
                      "linear-gradient(90deg,#faad36 0%,#ffe97a 100%)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.background =
                      "linear-gradient(90deg,#ffe97a 0%,#faad36 100%)")
                  }
                >
                  Register
                </button>
                {error && (
                  <p
                    style={{
                      color: "#e45757",
                      fontSize: "1rem",
                      marginTop: "8px",
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </p>
                )}
              </div>
            </ElectricBorder>
          </>
        )}

        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Light cone styling */
          .light-cone {
            position: absolute;
            top: 130px; /* just below the bulb */
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            pointer-events: none;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.6s ease;
          }
          .signin-page-wrapper.show-light .light-cone {
            border-left: 45vw solid transparent;
            border-right: 45vw solid transparent;
            border-bottom: 100vh solid rgba(255, 235, 59, 0.18);
            opacity: 1;
          }
          .light-cone::before,
          .light-cone::after {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
          }
          .light-cone::before {
            top: 0;
            border-left: 50vw solid transparent;
            border-right: 50vw solid transparent;
            border-bottom: 100vh solid rgba(255, 235, 59, 0.1);
            filter: blur(25px);
          }
          .light-cone::after {
            top: 0;
            border-left: 40vw solid transparent;
            border-right: 40vw solid transparent;
            border-bottom: 100vh solid rgba(255, 235, 59, 0.25);
            filter: blur(12px);
          }

          /* Glow style for normal inputs (username, nickname, email) */
          input[type="text"]:focus,
          input[type="email"]:focus {
            border-color: #ffeb3b;
            box-shadow: 0 0 12px rgba(255, 215, 0, 1);
            transform: scale(1.02);
          }
        `}</style>
      </div>
    </>
  );
};

// Reusable inline styles:
const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  fontSize: "1rem",
  background: "#f9f9f9",
  border: "1px solid #ddd",
  borderRadius: "6px",
  outline: "none",
  boxSizing: "border-box",
  marginBottom: "20px",
  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.2s",
};
const buttonStyle = {
  width: "100%",
  padding: "13px 0",
  fontSize: "1.08rem",
  fontWeight: "bold",
  letterSpacing: "1px",
  background: "linear-gradient(90deg,#ffe97a 0%,#faad36 100%)",
  color: "#333",
  border: "none",
  borderRadius: "8px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  cursor: "pointer",
  marginTop: "16px",
  transition: "background 0.25s",
};

export default SignInPage;
