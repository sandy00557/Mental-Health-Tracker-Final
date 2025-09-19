//Original Code
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints } from "../redux/userSlice";
// import API from "../api/axios.js";
// const RockPaperScissorSection = () => {
//   const [userChoice, setUserChoice] = useState("");
//   const [computerChoice, setComputerChoice] = useState("");
//   const values = ["Rock", "Paper", "Scissor"];
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.user._id);
//   const globalPoints = useSelector((state) => state.user.points);

//   const final = async (choice) => {
//     const randomValue = values[Math.floor(Math.random() * 3)];
//     setComputerChoice(randomValue);
//     if (choice === randomValue) {
//       dispatch(addPoints(5));
//       console.log("It's a tie");
//       const newPoints = globalPoints + 5;
//       try {
//         const newres = await API.post(
//           "/list/newPoints",
//           {
//             points: newPoints,
//             _id: userId,
//             lastdate: new Date(),
//           },
//           {
//             withCredentials: true,
//           }
//         );
//         console.log("Points updated on server:", newres.data);
//       } catch (err) {
//         console.log("Error updating points:", err.message);
//       }
//     } else {
//       console.log("Not a tie");
//     }
//   };
//   return (
//     <>
//       <select
//         onChange={(e) => {
//           const choice = e.target.value;
//           setUserChoice(choice);
//           final(choice);
//         }}
//         value={userChoice}
//       >
//         <option value={""} disabled>
//           Choose one
//         </option>
//         <option>Rock</option>
//         <option>Paper</option>
//         <option>Scissor</option>
//       </select>
//       <h1>{userChoice}</h1>
//       {/* <h1>{values[Math.floor(Math.random() * 3)]}</h1> */}
//       {/* {
//         if(userChoice ==)
//       } */}
//       {userChoice && <h1>{computerChoice}</h1>}
//     </>
//   );
// };
// export default RockPaperScissorSection;

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints } from "../redux/userSlice";
// import API from "../api/axios.js";
// import { motion, AnimatePresence } from "framer-motion";
// import userHand from "../assets/animations/userHand.png"; // your pink hand
// import robotHand from "../assets/animations/robotHand.png"; // your blue robot hand
// import rockImg from "../assets/animations/rock.png.png";
// import paperImg from "../assets/animations/paper.png";
// import scissorImg from "../assets/animations/scissor.png";

// const RockPaperScissorSection = () => {
//   const [userChoice, setUserChoice] = useState("");
//   const [computerChoice, setComputerChoice] = useState("");
//   const [showPoints, setShowPoints] = useState(false); // +5 animation
//   const [shake, setShake] = useState(false); // initial hand shake
//   const [reveal, setReveal] = useState(false); // show choices after shake
//   const [betterLuck, setBetterLuck] = useState(false);

//   const values = ["Rock", "Paper", "Scissor"];
//   const choiceImages = {
//     Rock: rockImg,
//     Paper: paperImg,
//     Scissor: scissorImg,
//   };

//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.user._id);
//   const globalPoints = useSelector((state) => state.user.points);

//   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   const final = async (choice) => {
//     setShake(true);
//     setReveal(false);

//     // Wait 2 seconds for shaking hands
//     await delay(2000);

//     const randomValue = values[Math.floor(Math.random() * 3)];
//     setComputerChoice(randomValue);
//     setShake(false);
//     setReveal(true);

//     if (
//       (choice === "Rock" && randomValue === "Scissor") ||
//       (choice === "Paper" && randomValue === "Rock") ||
//       (choice === "Scissor" && randomValue === "Paper")
//     ) {
//       setBetterLuck(false);
//       dispatch(addPoints(5));
//       setShowPoints(true);
//       setTimeout(() => setShowPoints(false), 1000);

//       const newPoints = globalPoints + 5;
//       try {
//         const newres = await API.post(
//           "/list/newPoints",
//           {
//             points: newPoints,
//             _id: userId,
//             lastdate: new Date(),
//           },
//           { withCredentials: true }
//         );
//         console.log("Points updated on server:", newres.data);
//       } catch (err) {
//         console.log("Error updating points:", err.message);
//       }
//     } else {
//       setBetterLuck(true);
//     }
//   };

//   return (
//     <>
//       <select
//         onChange={(e) => {
//           const choice = e.target.value;
//           setUserChoice(choice);
//           final(choice);
//         }}
//         value={userChoice}
//       >
//         <option value={""} disabled>
//           Choose one
//         </option>
//         <option value={"Rock"}>Rock</option>
//         <option value={"Paper"}>Paper</option>
//         <option value={"Scissor"}>Scissor</option>
//       </select>

//       {/* Hand shake animation */}
//       <AnimatePresence>
//         {shake && (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "50px",
//               marginTop: "20px",
//               marginBottom: "20px",
//             }}
//           >
//             <motion.img
//               src={userHand}
//               alt="User Hand"
//               initial={{ x: 0, rotate: 0 }}
//               animate={{
//                 x: [0, -15, 15, -10, 0],
//                 rotate: [0, -10, 10, -5, 0],
//               }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//               style={{ width: 60, height: 60 }}
//             />
//             <motion.img
//               src={robotHand}
//               alt="Robot Hand"
//               initial={{ x: 0, rotate: 0 }}
//               animate={{
//                 x: [0, 15, -15, 10, 0],
//                 rotate: [0, 10, -10, 5, 0],
//               }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//               style={{ width: 60, height: 60 }}
//             />
//           </div>
//         )}
//       </AnimatePresence>

//       {/* Reveal chosen Rock/Paper/Scissor */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "50px",
//           marginTop: "20px",
//         }}
//       >
//         {reveal && (
//           <>
//             <motion.img
//               src={choiceImages[userChoice]}
//               alt={userChoice}
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               style={{ width: 60, height: 60 }}
//             />
//             <motion.img
//               src={choiceImages[computerChoice]}
//               alt={computerChoice}
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               style={{ width: 60, height: 60 }}
//             />
//           </>
//         )}
//       </div>

//       {/* Floating +5 points animation */}
//       <AnimatePresence>
//         {showPoints && (
//           <motion.div
//             initial={{ y: 0, opacity: 1 }}
//             animate={{ y: -40, opacity: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8 }}
//             style={{
//               color: "green",
//               fontWeight: "bold",
//               fontSize: "20px",
//               textAlign: "center",
//               marginTop: "10px",
//             }}
//           >
//             +5
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {betterLuck && <h2>Better Luck Next Time.</h2>}
//     </>
//   );
// };

// export default RockPaperScissorSection;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPoints } from "../redux/userSlice";
import API from "../api/axios.js";
import { motion, AnimatePresence } from "framer-motion";
import userHand from "../assets/animations/userHand.png"; // your pink hand
import robotHand from "../assets/animations/robotHand.png"; // your blue robot hand
import rockImg from "../assets/animations/rock.png.png";
import paperImg from "../assets/animations/paper.png";
import scissorImg from "../assets/animations/scissor.png";
import "../assets/animations/RockPaperScissorSection.css"; // ✅ Import CSS
import "../assets/animations/EmojisSection.css";
const RockPaperScissorSection = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [showPoints, setShowPoints] = useState(false); // +5 animation
  const [shake, setShake] = useState(false); // initial hand shake
  const [reveal, setReveal] = useState(false); // show choices after shake
  const [betterLuck, setBetterLuck] = useState(false);

  const values = ["Rock", "Paper", "Scissor"];

  const choiceImages = {
    Rock: rockImg,
    Paper: paperImg,
    Scissor: scissorImg,
  };

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user._id);
  const globalPoints = useSelector((state) => state.user.points);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const final = async (choice) => {
    setShake(true);
    setReveal(false);

    // Wait 2 seconds for shaking hands
    await delay(2000);

    const randomValue = values[Math.floor(Math.random() * 3)];
    setComputerChoice(randomValue);
    setShake(false);
    setReveal(true);

    if (
      (choice === "Rock" && randomValue === "Scissor") ||
      (choice === "Paper" && randomValue === "Rock") ||
      (choice === "Scissor" && randomValue === "Paper")
    ) {
      setBetterLuck(false);
      dispatch(addPoints(5));
      setShowPoints(true);
      setTimeout(() => setShowPoints(false), 1000);

      const newPoints = globalPoints + 5;
      try {
        const newres = await API.post(
          "/list/newPoints",
          {
            points: newPoints,
            _id: userId,
            lastdate: new Date(),
          },
          { withCredentials: true }
        );
        console.log("Points updated on server:", newres.data);
      } catch (err) {
        console.log("Error updating points:", err.message);
      }
    } else {
      setBetterLuck(true);
    }
  };

  return (
    <div className="rps-container">
      <div
        style={{
          display: "flex",
          padding: "5px",
          justifyContent: "center",
          flexWrap: "wrap",
          alignContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2rem", height: "60px" }}>🪨📃✂️</div>
        <div className="rps-title">Rock Paper Scissor</div>
      </div>

      <select
        onChange={(e) => {
          const choice = e.target.value;
          setUserChoice(choice);
          final(choice);
        }}
        value={userChoice}
      >
        <option value={""} disabled>
          Choose one
        </option>
        <option value={"Rock"}>Rock</option>
        <option value={"Paper"}>Paper</option>
        <option value={"Scissor"}>Scissor</option>
      </select>

      {/* Hand shake animation */}
      <AnimatePresence>
        {shake && (
          <div className="rps-images">
            <motion.img
              src={userHand}
              alt="User Hand"
              initial={{ x: 0, rotate: 0 }}
              animate={{
                x: [0, -15, 15, -10, 0],
                rotate: [0, -10, 10, -5, 0],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ width: 60, height: 60 }}
            />
            <motion.img
              src={robotHand}
              alt="Robot Hand"
              initial={{ x: 0, rotate: 0 }}
              animate={{
                x: [0, 15, -15, 10, 0],
                rotate: [0, 10, -10, 5, 0],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ width: 60, height: 60 }}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Reveal chosen Rock/Paper/Scissor */}
      <div className="rps-images">
        {reveal && (
          <>
            <motion.img
              src={choiceImages[userChoice]}
              alt={userChoice}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ width: 60, height: 60 }}
            />
            <motion.img
              src={choiceImages[computerChoice]}
              alt={computerChoice}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ width: 60, height: 60 }}
            />
          </>
        )}
      </div>

      {/* Floating +5 points animation */}
      <AnimatePresence>
        {showPoints && (
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -40, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              color: "green",
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            +5
          </motion.div>
        )}
      </AnimatePresence>
      {betterLuck && <h2>Better Luck Next Time.</h2>}
    </div>
  );
};

export default RockPaperScissorSection;
