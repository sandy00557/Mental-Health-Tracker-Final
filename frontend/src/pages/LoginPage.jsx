// // //step 2: install'npm install react-helmet-async --legacy-peer-deps"
// import { Helmet } from "react-helmet-async";

// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef, useCallback } from "react";
// import bgImage from "../assets/CoachSection_Img.png";
// import { useDispatch } from "react-redux";
// import "../components/GlassButton.css"; // Import custom glass button CSS
// import API from "../api/axios.js";
// import { registerUser } from "../redux/userSlice.js";
// import ElectricBorder from "../assets/animations/ElectricBorder.jsx";
// // import { useDispatch } from "react-redux";
// // import { selectName } from "../redux/userSlice.js";
// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const heartsRef = useRef([]);
//   const animationFrameRef = useRef();
//   const lastHeartCreation = useRef(0);
//   const dispatch = useDispatch();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await API.post(
//         "/auth/loginuser",
//         {
//           email: email,
//           password: password,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       const userData = response.data.user;
//       if (response.data.status === "success") {
//         dispatch(
//           registerUser({
//             _id: userData._id,
//             name: userData.name,
//             email: userData.email,
//             nickname: userData.nickname,
//             points: userData.points,
//           })
//         );
//         navigate("/DashBoardPage");
//       }
//     } catch (err) {
//       console.log("Error is", err.message);
//       navigate("/");
//     }
//   };

//   const createHeart = useCallback((x, y) => {
//     const now = Date.now();
//     if (now - lastHeartCreation.current < 100) return;
//     lastHeartCreation.current = now;
//     const heart = {
//       id: now + Math.random(),
//       x: x + (Math.random() - 0.5) * 30,
//       y: y + (Math.random() - 0.5) * 30,
//       size: Math.random() * 8 + 10,
//       opacity: 1,
//       velocityY: -Math.random() * 1.5 - 0.5,
//       velocityX: (Math.random() - 0.5) * 1,
//       life: 1,
//     };
//     heartsRef.current.push(heart);
//     if (heartsRef.current.length > 20) {
//       heartsRef.current = heartsRef.current.slice(-20);
//     }
//   }, []);

//   const animateHearts = useCallback(() => {
//     heartsRef.current = heartsRef.current
//       .map((heart) => ({
//         ...heart,
//         x: heart.x + heart.velocityX,
//         y: heart.y + heart.velocityY,
//         opacity: heart.opacity * 0.96,
//         life: heart.life * 0.96,
//         size: heart.size * 0.995,
//       }))
//       .filter((heart) => heart.opacity > 0.05);
//     animationFrameRef.current = requestAnimationFrame(animateHearts);
//   }, []);

//   useEffect(() => {
//     let throttleTimeout;
//     const handleMouseMove = (e) => {
//       if (throttleTimeout) return;
//       throttleTimeout = setTimeout(() => {
//         throttleTimeout = null;
//       }, 16);
//       const newMousePos = { x: e.clientX, y: e.clientY };
//       setMousePos(newMousePos);
//       if (Math.random() < 0.15) {
//         createHeart(newMousePos.x, newMousePos.y);
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     animationFrameRef.current = requestAnimationFrame(animateHearts);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [createHeart, animateHearts]);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div
//       className="relative flex items-center justify-center min-h-screen overflow-hidden cursor-none"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Custom Cursor */}
//       <div
//         className="fixed pointer-events-none z-50 will-change-transform"
//         style={{
//           left: mousePos.x - 10,
//           top: mousePos.y - 10,
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-80 animate-pulse shadow-lg" />
//       </div>

//       {/* Floating Hearts */}
//       <div className="fixed inset-0 pointer-events-none z-40">
//         {heartsRef.current.map((heart) => (
//           <div
//             key={heart.id}
//             className="absolute select-none will-change-transform"
//             style={{
//               left: heart.x,
//               top: heart.y,
//               opacity: heart.opacity,
//               fontSize: `${heart.size}px`,
//               transform: `translate(-50%, -50%) scale(${heart.life})`,
//               filter: "drop-shadow(0 0 4px rgba(255, 182, 193, 0.6))",
//             }}
//           >
//             ❤️
//           </div>
//         ))}
//       </div>

//       {/* Blob Parallax Background */}
//       <div
//         className="absolute w-48 h-48 bg-pink-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none"
//         style={{
//           top: 100,
//           left: 100,
//           transform: `translate3d(${mousePos.x * 0.04}px, ${
//             mousePos.y * 0.04
//           }px, 0)`,
//         }}
//       />
//       <div
//         className="absolute w-56 h-56 bg-indigo-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none"
//         style={{
//           bottom: 150,
//           right: 150,
//           transform: `translate3d(${mousePos.x * -0.04}px, ${
//             mousePos.y * -0.04
//           }px, 0)`,
//         }}
//       />
//       <div
//         className="absolute w-40 h-40 bg-purple-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none"
//         style={{
//           top: "40%",
//           left: "60%",
//           transform: `translate3d(${mousePos.x * 0.02}px, ${
//             mousePos.y * -0.02
//           }px, 0)`,
//         }}
//       />
//       {/* <ElectricBorder> */}
//       <form className="space-y-8" onSubmit={handleLogin} autoComplete="off">
//         {/* Glassmorphic Card */}
//         <div className="relative z-10 w-full max-w-md p-10 rounded-3xl shadow-xl bg-white/40 backdrop-blur-2xl border border-white/70 animate-fadeIn">
//           <h1 className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-8">
//             🌱 Welcome Back
//           </h1>

//           {/* Email Input */}
//           <div className="relative group mb-5">
//             <span className="absolute left-3 top-4 text-gray-400 z-10">
//               <svg
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//               </svg>
//             </span>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="peer w-full pl-10 pr-4 pt-6 pb-3 text-gray-900 bg-white/60 rounded-2xl border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 outline-none transition duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-[1.02] backdrop-blur-lg focus:shadow-pink-300 cursor-text"
//               placeholder=" "
//             />
//             <label
//               className={`absolute left-10 top-4 text-sm text-gray-500 pointer-events-none transition-all duration-300 ${
//                 email
//                   ? "text-indigo-600 top-1 scale-90"
//                   : "peer-focus:top-1 peer-focus:text-indigo-500 peer-focus:scale-90"
//               } peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400`}
//             >
//               Email
//             </label>
//           </div>

//           {/* Password Input */}
//           <div className="relative group mb-5">
//             <span className="absolute left-3 top-4 text-gray-400 z-10">
//               <svg
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </span>
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="peer w-full pl-10 pr-14 pt-6 pb-3 text-gray-900 bg-white/60 rounded-2xl border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 outline-none transition duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-[1.02] backdrop-blur-lg focus:shadow-indigo-200 cursor-text"
//               placeholder=" "
//             />

//             {/* Emoji Toggle */}
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute right-3 top-4 text-2xl cursor-pointer hover:scale-110 transition-all duration-200 focus:outline-none focus:scale-110 z-10"
//               tabIndex={-1}
//             >
//               {showPassword ? "😊" : "😴"}
//             </button>

//             <label
//               className={`absolute left-10 top-4 text-sm text-gray-500 pointer-events-none transition-all duration-300 ${
//                 password
//                   ? "text-indigo-600 top-1 scale-90"
//                   : "peer-focus:top-1 peer-focus:text-indigo-500 peer-focus:scale-90"
//               } peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400`}
//             >
//               Password
//             </label>
//           </div>

//           {/* Glass Button */}
//           <button
//             type="submit"
//             className="glass-button relative w-full h-16 text-xl font-medium tracking-wider"
//           >
//             Login
//             <span className="glass-glow-bottom"></span>
//             <span className="glass-glow-sides"></span>
//           </button>

//           <p className="mt-6 text-sm text-center text-gray-700">
//             Don't have an account?{" "}
//             <button onClick={() => navigate("/SignInPage")}>Sign up</button>
//           </p>
//         </div>
//       </form>
//       {/* </ElectricBorder> */}

//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-in-out;
//         }
//         * { cursor: none !important; }
//         input, button, a { cursor: pointer !important; }
//         input[type="email"], input[type="password"], input[type="text"] { cursor: text !important; }
//         .will-change-transform { will-change: transform; }
//       `}</style>
//     </div>
//   );
// };

// export default LoginPage;

// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef, useCallback } from "react";
// import bgImage from "../assets/CoachSection_Img.png";
// import { useDispatch } from "react-redux";
// import "../components/GlassButton.css"; // Import custom glass button CSS
// import API from "../api/axios.js";
// import { registerUser } from "../redux/userSlice.js";
// import ElectricBorder from "../assets/animations/ElectricBorder.jsx";
// import TextType from "../assets/animations/TextType.jsx";
// // import { useDispatch } from "react-redux";
// // import { selectName } from "../redux/userSlice.js";
// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const heartsRef = useRef([]);
//   const animationFrameRef = useRef();
//   const lastHeartCreation = useRef(0);
//   const dispatch = useDispatch();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await API.post(
//         "/auth/loginuser",
//         {
//           email: email,
//           password: password,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       const userData = response.data.user;
//       if (response.data.status === "success") {
//         dispatch(
//           registerUser({
//             _id: userData._id,
//             name: userData.name,
//             email: userData.email,
//             nickname: userData.nickname,
//             points: userData.points,
//           })
//         );
//         navigate("/DashBoardPage");
//       }
//     } catch (err) {
//       console.log("Error is", err.message);
//       navigate("/");
//     }
//   };

//   const createHeart = useCallback((x, y) => {
//     const now = Date.now();
//     if (now - lastHeartCreation.current < 100) return;
//     lastHeartCreation.current = now;
//     const heart = {
//       id: now + Math.random(),
//       x: x + (Math.random() - 0.5) * 30,
//       y: y + (Math.random() - 0.5) * 30,
//       size: Math.random() * 8 + 10,
//       opacity: 1,
//       velocityY: -Math.random() * 1.5 - 0.5,
//       velocityX: (Math.random() - 0.5) * 1,
//       life: 1,
//     };
//     heartsRef.current.push(heart);
//     if (heartsRef.current.length > 20) {
//       heartsRef.current = heartsRef.current.slice(-20);
//     }
//   }, []);

//   const animateHearts = useCallback(() => {
//     heartsRef.current = heartsRef.current
//       .map((heart) => ({
//         ...heart,
//         x: heart.x + heart.velocityX,
//         y: heart.y + heart.velocityY,
//         opacity: heart.opacity * 0.96,
//         life: heart.life * 0.96,
//         size: heart.size * 0.995,
//       }))
//       .filter((heart) => heart.opacity > 0.05);
//     animationFrameRef.current = requestAnimationFrame(animateHearts);
//   }, []);

//   useEffect(() => {
//     let throttleTimeout;
//     const handleMouseMove = (e) => {
//       if (throttleTimeout) return;
//       throttleTimeout = setTimeout(() => {
//         throttleTimeout = null;
//       }, 16);
//       const newMousePos = { x: e.clientX, y: e.clientY };
//       setMousePos(newMousePos);
//       if (Math.random() < 0.15) {
//         createHeart(newMousePos.x, newMousePos.y);
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     animationFrameRef.current = requestAnimationFrame(animateHearts);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [createHeart, animateHearts]);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div
//       className="relative flex items-center justify-center min-h-screen overflow-hidden cursor-none"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Custom Cursor */}
//       <div
//         className="fixed pointer-events-none z-50 will-change-transform"
//         style={{
//           left: mousePos.x - 10,
//           top: mousePos.y - 10,
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-80 animate-pulse shadow-lg" />
//       </div>

//       {/* Floating Hearts */}
//       <div className="fixed inset-0 pointer-events-none z-40">
//         {heartsRef.current.map((heart) => (
//           <div
//             key={heart.id}
//             className="absolute select-none will-change-transform"
//             style={{
//               left: heart.x,
//               top: heart.y,
//               opacity: heart.opacity,
//               fontSize: `${heart.size}px`,
//               transform: `translate(-50%, -50%) scale(${heart.life})`,
//               filter: "drop-shadow(0 0 4px rgba(255, 182, 193, 0.6))",
//             }}
//           >
//             ❤️
//           </div>
//         ))}
//       </div>

//       {/* Blob Parallax Background */}
//       <div
//         className="absolute w-48 h-48 bg-pink-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none"
//         style={{
//           top: 100,
//           left: 100,
//           transform: `translate3d(${mousePos.x * 0.04}px, ${
//             mousePos.y * 0.04
//           }px, 0)`,
//         }}
//       />
//       <div
//         className="absolute w-56 h-56 bg-indigo-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none"
//         style={{
//           bottom: 150,
//           right: 150,
//           transform: `translate3d(${mousePos.x * -0.04}px, ${
//             mousePos.y * -0.04
//           }px, 0)`,
//         }}
//       />
//       <div
//         className="absolute w-40 h-40 bg-purple-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none"
//         style={{
//           top: "40%",
//           left: "60%",
//           transform: `translate3d(${mousePos.x * 0.02}px, ${
//             mousePos.y * -0.02
//           }px, 0)`,
//         }}
//       />

//       <ElectricBorder
//         color="#7df9ff"
//         speed={1}
//         chaos={0.5}
//         thickness={2}
//         style={{ borderRadius: 24 }}
//       >
//         <form className="space-y-8" onSubmit={handleLogin} autoComplete="off">
//           {/* Glassmorphic Card */}
//           <div className="relative z-10 w-full max-w-md p-10 rounded-3xl shadow-xl bg-white/40 backdrop-blur-2xl border border-white/70 animate-fadeIn">
//             {/* <h1 className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-8">
//               🌱 Welcome Back
//             </h1> */}

//             <div className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-8">
//               🌱{" "}
//               <TextType
//                 text={["Welcome Back", "Hello Again!", "Ready to Login?"]}
//                 typingSpeed={75}
//                 pauseDuration={1500}
//                 showCursor={true}
//                 cursorCharacter="|"
//                 className="inline"
//                 loop={true}
//                 textColors={["#7df9ff"]}
//               />
//             </div>

//             {/* Email Input */}
//             <div className="relative group mb-5">
//               <span className="absolute left-3 top-4 text-gray-400 z-10">
//                 <svg
//                   width="20"
//                   height="20"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                 </svg>
//               </span>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="peer w-full pl-10 pr-4 pt-6 pb-3 text-gray-900 bg-white/60 rounded-2xl border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 outline-none transition duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-[1.02] backdrop-blur-lg focus:shadow-pink-300 cursor-text"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-10 top-4 text-sm text-gray-500 pointer-events-none transition-all duration-300 ${
//                   email
//                     ? "text-indigo-600 top-1 scale-90"
//                     : "peer-focus:top-1 peer-focus:text-indigo-500 peer-focus:scale-90"
//                 } peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400`}
//               >
//                 Email
//               </label>
//             </div>

//             {/* Password Input */}
//             <div className="relative group mb-5">
//               <span className="absolute left-3 top-4 text-gray-400 z-10">
//                 <svg
//                   width="20"
//                   height="20"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="peer w-full pl-10 pr-14 pt-6 pb-3 text-gray-900 bg-white/60 rounded-2xl border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 outline-none transition duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-[1.02] backdrop-blur-lg focus:shadow-indigo-200 cursor-text"
//                 placeholder=" "
//               />

//               {/* Emoji Toggle */}
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-4 text-2xl cursor-pointer hover:scale-110 transition-all duration-200 focus:outline-none focus:scale-110 z-10"
//                 tabIndex={-1}
//               >
//                 {showPassword ? "😊" : "😴"}
//               </button>

//               <label
//                 className={`absolute left-10 top-4 text-sm text-gray-500 pointer-events-none transition-all duration-300 ${
//                   password
//                     ? "text-indigo-600 top-1 scale-90"
//                     : "peer-focus:top-1 peer-focus:text-indigo-500 peer-focus:scale-90"
//                 } peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400`}
//               >
//                 Password
//               </label>
//             </div>

//             {/* Glass Button */}
//             <button
//               type="submit"
//               className="glass-button relative w-full h-16 text-xl font-medium tracking-wider"
//             >
//               Login
//               <span className="glass-glow-bottom"></span>
//               <span className="glass-glow-sides"></span>
//             </button>

//             <p className="mt-6 text-sm text-center text-gray-700">
//               Don't have an account?{" "}
//               <button onClick={() => navigate("/SignInPage")}>Sign up</button>
//             </p>
//           </div>
//         </form>
//       </ElectricBorder>

//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-in-out;
//         }
//         * { cursor: none !important; }
//         input, button, a { cursor: pointer !important; }
//         input[type="email"], input[type="password"], input[type="text"] { cursor: text !important; }
//         .will-change-transform { will-change: transform; }
//       `}</style>
//     </div>
//   );
// };

// export default LoginPage;

// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef, useCallback } from "react";
// // import bgImage from "../assets/CoachSection_Img.png";
// import { useDispatch } from "react-redux";
// import "../components/GlassButton.css"; // Import custom glass button CSS
// import API from "../api/axios.js";
// import { registerUser } from "../redux/userSlice.js";
// import ElectricBorder from "../assets/animations/ElectricBorder.jsx";
// import TextType from "../assets/animations/TextType.jsx";
// import Spline from "@splinetool/react-spline"; // Add this import
// // import { useDispatch } from "react-redux";
// // import { selectName } from "../redux/userSlice.js";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const heartsRef = useRef([]);
//   const animationFrameRef = useRef();
//   const lastHeartCreation = useRef(0);
//   const dispatch = useDispatch();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await API.post(
//         "/auth/loginuser",
//         {
//           email: email,
//           password: password,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       const userData = response.data.user;
//       if (response.data.status === "success") {
//         dispatch(
//           registerUser({
//             _id: userData._id,
//             name: userData.name,
//             email: userData.email,
//             nickname: userData.nickname,
//             points: userData.points,
//           })
//         );
//         navigate("/DashBoardPage");
//       }
//     } catch (err) {
//       console.log("Error is", err.message);
//       navigate("/");
//     }
//   };

//   const createHeart = useCallback((x, y) => {
//     const now = Date.now();
//     if (now - lastHeartCreation.current < 100) return;
//     lastHeartCreation.current = now;
//     const heart = {
//       id: now + Math.random(),
//       x: x + (Math.random() - 0.5) * 30,
//       y: y + (Math.random() - 0.5) * 30,
//       size: Math.random() * 8 + 10,
//       opacity: 1,
//       velocityY: -Math.random() * 1.5 - 0.5,
//       velocityX: (Math.random() - 0.5) * 1,
//       life: 1,
//     };
//     heartsRef.current.push(heart);
//     if (heartsRef.current.length > 20) {
//       heartsRef.current = heartsRef.current.slice(-20);
//     }
//   }, []);

//   const animateHearts = useCallback(() => {
//     heartsRef.current = heartsRef.current
//       .map((heart) => ({
//         ...heart,
//         x: heart.x + heart.velocityX,
//         y: heart.y + heart.velocityY,
//         opacity: heart.opacity * 0.96,
//         life: heart.life * 0.96,
//         size: heart.size * 0.995,
//       }))
//       .filter((heart) => heart.opacity > 0.05);
//     animationFrameRef.current = requestAnimationFrame(animateHearts);
//   }, []);

//   useEffect(() => {
//     let throttleTimeout;
//     const handleMouseMove = (e) => {
//       if (throttleTimeout) return;
//       throttleTimeout = setTimeout(() => {
//         throttleTimeout = null;
//       }, 16);
//       const newMousePos = { x: e.clientX, y: e.clientY };
//       setMousePos(newMousePos);
//       if (Math.random() < 0.15) {
//         createHeart(newMousePos.x, newMousePos.y);
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     animationFrameRef.current = requestAnimationFrame(animateHearts);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [createHeart, animateHearts]);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen overflow-hidden cursor-none">
//       {/* Spline 3D Background - Layer 0 */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <Spline
//           scene="https://prod.spline.design/szVFOZCmj7FturJw/scene.splinecode"
//           className="w-full h-full absolute top-0 left-0"
//         />
//       </div>

//       {/* Optional overlay for better text contrast - Layer 5 */}
//       <div className="absolute inset-0 bg-black/20 z-[5]"></div>

//       {/* Custom Cursor */}
//       <div
//         className="fixed pointer-events-none z-50 will-change-transform"
//         style={{
//           left: mousePos.x - 10,
//           top: mousePos.y - 10,
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-80 animate-pulse shadow-lg" />
//       </div>

//       {/* Floating Hearts */}
//       <div className="fixed inset-0 pointer-events-none z-40">
//         {heartsRef.current.map((heart) => (
//           <div
//             key={heart.id}
//             className="absolute select-none will-change-transform"
//             style={{
//               left: heart.x,
//               top: heart.y,
//               opacity: heart.opacity,
//               fontSize: `${heart.size}px`,
//               transform: `translate(-50%, -50%) scale(${heart.life})`,
//               filter: "drop-shadow(0 0 4px rgba(255, 182, 193, 0.6))",
//             }}
//           >
//             ❤️
//           </div>
//         ))}
//       </div>

//       {/* Blob Parallax Background */}
//       <div
//         className="absolute w-48 h-48 bg-pink-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none z-10"
//         style={{
//           top: 100,
//           left: 100,
//           transform: `translate3d(${mousePos.x * 0.04}px, ${
//             mousePos.y * 0.04
//           }px, 0)`,
//         }}
//       />
//       <div
//         className="absolute w-56 h-56 bg-indigo-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none z-10"
//         style={{
//           bottom: 150,
//           right: 150,
//           transform: `translate3d(${mousePos.x * -0.04}px, ${
//             mousePos.y * -0.04
//           }px, 0)`,
//         }}
//       />
//       <div
//         className="absolute w-40 h-40 bg-purple-300 rounded-full opacity-40 blur-3xl will-change-transform pointer-events-none z-10"
//         style={{
//           top: "40%",
//           left: "60%",
//           transform: `translate3d(${mousePos.x * 0.02}px, ${
//             mousePos.y * -0.02
//           }px, 0)`,
//         }}
//       />

//       {/* Login Form - Layer 20 */}
//       <div className="relative z-20">
//         <ElectricBorder
//           color="#7df9ff"
//           speed={1}
//           chaos={0.5}
//           thickness={2}
//           style={{ borderRadius: 24 }}
//         >
//           <form className="space-y-8" onSubmit={handleLogin} autoComplete="off">
//             {/* Glassmorphic Card */}
//             <div className="relative z-10 w-full max-w-md p-10 rounded-3xl shadow-xl bg-white/40 backdrop-blur-2xl border border-white/70 animate-fadeIn">
//               {/* <h1 className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-8">
//                 🌱 Welcome Back
//               </h1> */}

//               <div className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-8">
//                 🌱{" "}
//                 <TextType
//                   text={["Welcome Back", "Hello Again!", "Ready to Login?"]}
//                   typingSpeed={75}
//                   pauseDuration={1500}
//                   showCursor={true}
//                   cursorCharacter="|"
//                   className="inline"
//                   loop={true}
//                   textColors={["#7df9ff"]}
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="relative group mb-5">
//                 <span className="absolute left-3 top-4 text-gray-400 z-10">
//                   <svg
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                   </svg>
//                 </span>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="peer w-full pl-10 pr-4 pt-6 pb-3 text-gray-900 bg-white/60 rounded-2xl border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 outline-none transition duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-[1.02] backdrop-blur-lg focus:shadow-pink-300 cursor-text"
//                   placeholder=" "
//                 />
//                 <label
//                   className={`absolute left-10 top-4 text-sm text-gray-500 pointer-events-none transition-all duration-300 ${
//                     email
//                       ? "text-indigo-600 top-1 scale-90"
//                       : "peer-focus:top-1 peer-focus:text-indigo-500 peer-focus:scale-90"
//                   } peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400`}
//                 >
//                   Email
//                 </label>
//               </div>

//               {/* Password Input */}
//               <div className="relative group mb-5">
//                 <span className="absolute left-3 top-4 text-gray-400 z-10">
//                   <svg
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="peer w-full pl-10 pr-14 pt-6 pb-3 text-gray-900 bg-white/60 rounded-2xl border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 outline-none transition duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-[1.02] backdrop-blur-lg focus:shadow-indigo-200 cursor-text"
//                   placeholder=" "
//                 />

//                 {/* Emoji Toggle */}
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-4 text-2xl cursor-pointer hover:scale-110 transition-all duration-200 focus:outline-none focus:scale-110 z-10"
//                   tabIndex={-1}
//                 >
//                   {showPassword ? "😊" : "😴"}
//                 </button>

//                 <label
//                   className={`absolute left-10 top-4 text-sm text-gray-500 pointer-events-none transition-all duration-300 ${
//                     password
//                       ? "text-indigo-600 top-1 scale-90"
//                       : "peer-focus:top-1 peer-focus:text-indigo-500 peer-focus:scale-90"
//                   } peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400`}
//                 >
//                   Password
//                 </label>
//               </div>

//               {/* Glass Button */}
//               <button
//                 type="submit"
//                 className="glass-button relative w-full h-16 text-xl font-medium tracking-wider"
//               >
//                 Login
//                 <span className="glass-glow-bottom"></span>
//                 <span className="glass-glow-sides"></span>
//               </button>

//               <p className="mt-6 text-sm text-center text-gray-700">
//                 Don't have an account?{" "}
//                 <button onClick={() => navigate("/register")}>Sign up</button>
//               </p>
//             </div>
//           </form>
//         </ElectricBorder>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-in-out;
//         }
//         * { cursor: none !important; }
//         input, button, a { cursor: pointer !important; }
//         input[type="email"], input[type="password"], input[type="text"] { cursor: text !important; }
//         .will-change-transform { will-change: transform; }
//       `}</style>
//     </div>
//   );
// };

// export default LoginPage;

//after removed hearts
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import "../components/GlassButton.css"; // Import custom glass button CSS
// import API from "../api/axios.js";
// import { registerUser } from "../redux/userSlice.js";
// import ElectricBorder from "../assets/animations/ElectricBorder.jsx";
// import TextType from "../assets/animations/TextType.jsx";
// import Spline from "@splinetool/react-spline";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await API.post(
//         "/auth/loginuser",
//         { email, password },
//         { withCredentials: true }
//       );
//       const user = response.data.user;
//       if (response.data.status === "success") {
//         dispatch(
//           registerUser({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             nickname: user.nickname,
//             points: user.points,
//           })
//         );
//         navigate("/DashBoardPage");
//       }
//     } catch {
//       navigate("/");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
//       {/* Spline 3D Background */}
//       <div className="absolute inset-0 z-0">
//         <Spline
//           scene="https://prod.spline.design/szVFOZCmj7FturJw/scene.splinecode"
//           className="w-full h-full absolute top-0 left-0"
//         />
//       </div>

//       {/* Subtle Overlay */}
//       <div className="absolute inset-0 bg-black/5 z-5"></div>

//       {/* Login Form */}
//       <div className="relative z-10 w-full max-w-md p-10 rounded-3xl shadow-xl bg-gradient-to-br from-white/5 to-white/1 backdrop-blur-sm border border-white/10">
//         <ElectricBorder
//           color="#7df9ff"
//           speed={1}
//           chaos={0.5}
//           thickness={2}
//           style={{ borderRadius: 24 }}
//         >
//           <form onSubmit={handleLogin} autoComplete="off" className="space-y-8">
//             <h2 className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-6">
//               🌱{" "}
//               <TextType
//                 text={["Welcome Back", "Hello Again!", "Ready to Login?"]}
//                 typingSpeed={75}
//                 pauseDuration={1500}
//                 showCursor
//                 cursorCharacter="|"
//                 loop
//                 textColors={["#7df9ff"]}
//               />
//             </h2>

//             {/* Email */}
//             <div className="relative mb-5">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full px-4 py-3 text-gray-900 bg-white/5 rounded-2xl border border-gray-300/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 backdrop-blur-sm outline-none transition"
//                 placeholder="Email"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative mb-5">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full px-4 py-3 text-gray-900 bg-white/5 rounded-2xl border border-gray-300/30 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 backdrop-blur-sm outline-none transition"
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-4 top-3 text-xl text-gray-600"
//                 tabIndex={-1}
//               >
//                 {showPassword ? "😊" : "😴"}
//               </button>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="glass-button w-full py-4 text-xl font-medium"
//             >
//               Login
//             </button>

//             <p className="text-sm text-center text-gray-200">
//               Don’t have an account?{" "}
//               <button
//                 onClick={() => navigate("/SignInPage")}
//                 className="underline"
//               >
//                 Sign up
//               </button>
//             </p>
//           </form>
//         </ElectricBorder>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../components/GlassButton.css";
import API from "../api/axios.js";
import { registerUser } from "../redux/userSlice.js";
import TextType from "../assets/animations/TextType.jsx";
import ElectricBorder from "../assets/animations/ElectricBorder.jsx";
import Spline from "@splinetool/react-spline";

const electricColor = "#7df9ff";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post(
        "/auth/loginuser",
        { email, password },
        { withCredentials: true }
      );
      if (data.status === "success") {
        dispatch(
          registerUser({
            _id: data.user._id,
            name: data.user.name,
            email: data.user.email,
            nickname: data.user.nickname,
            password: data.user.password,
            points: data.user.points,
          })
        );
        navigate("/DashBoardPage");
        console.log(data.password);
      }
    } catch {
      navigate("/");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/szVFOZCmj7FturJw/scene.splinecode"
          className="w-full h-full absolute top-0 left-0"
        />
      </div>
      {/* Light overlay for contrast */}
      <div className="absolute inset-0 bg-black/5 z-5"></div>
      {/* Login Form with Electric Border */}
      <div className="relative z-10 w-full max-w-md p-0">
        <ElectricBorder
          color={electricColor}
          speed={1}
          chaos={0.3}
          thickness={1.5}
          style={{ borderRadius: 24, padding: "2px" }}
        >
          <form
            onSubmit={handleLogin}
            autoComplete="off"
            className="space-y-6 bg-gradient-to-br from-white/2 to-white/0 backdrop-blur-sm rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-4">
              🌱{" "}
              <TextType
                text={["Ready", "Welcome Back", "Hello Again!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="|"
                loop
                textColors={[electricColor]}
              />
            </h2>
            {/* Email Input with Electric Border */}
            <ElectricBorder
              color={electricColor}
              speed={1}
              chaos={0.2}
              thickness={1}
              style={{ borderRadius: 16, marginBottom: 16 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/0 border-none focus:outline-none text-[white] placeholder:text-[#7df9ff] transition-colors duration-150"
                style={{
                  color: electricColor,
                }}
              />
            </ElectricBorder>
            {/* Password Input with Electric Border */}
            <ElectricBorder
              color={electricColor}
              speed={1}
              chaos={0.2}
              thickness={1}
              style={{ borderRadius: 16, marginBottom: 16 }}
            >
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl bg-white/0 border-none focus:outline-none text-[white] placeholder:text-[#7df9ff] transition-colors duration-150"
                  style={{
                    color: electricColor,
                  }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-3 text-lg"
                  style={{ color: electricColor }}
                  tabIndex={-1}
                >
                  {showPassword ? "😊" : "😴"}
                </button>
              </div>
            </ElectricBorder>
            {/* Bright Login Button with Electric Border */}
            <ElectricBorder
              color={electricColor}
              speed={1}
              chaos={0.25}
              thickness={2}
              style={{ borderRadius: 16, marginBottom: 8 }}
            >
              <button
                type="submit"
                className="w-full py-3 text-lg font-bold rounded-xl border-none shadow-md transition bg-[transparent] text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #7df9ff 40%, #48e5c2 100%)",
                  color: "#181e30",
                  fontWeight: 700,
                  letterSpacing: 1,
                  textShadow: "0 2px 8px #7df9ff80,0 0px 2px black",
                }}
              >
                Login
              </button>
            </ElectricBorder>
            <p className="text-sm text-center text-gray-200">
              Don’t have an account?{" "}
              <button
                onClick={() => navigate("/SignInPage")}
                className="underline"
                style={{ color: electricColor }}
              >
                Sign up
              </button>
            </p>
          </form>
        </ElectricBorder>
      </div>
    </div>
  );
};

export default LoginPage;
