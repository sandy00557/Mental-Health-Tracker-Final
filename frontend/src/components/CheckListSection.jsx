//original code before css

// import React, { useEffect, useState } from "react";
// import API from "../api/axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints } from "../redux/userSlice";
// const CheckListSection = () => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.user._id);
//   const globalPoints = useSelector((state) => state.user.points);

//   const [ticked, setTicked] = useState(0);
//   const [userText, setUserText] = useState("");
//   const [userAge, setUserAge] = useState(0);
//   const [aiResponse, setAiResponse] = useState([]);
//   const [completed, setCompleted] = useState("");
//   const [locked, setLocked] = useState(false);

//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const userResponse = await API.post(
//           "/list/status",
//           {
//             _id: userId,
//           },
//           {
//             withCredentials: true,
//           }
//         );
//         if (userResponse.status === 409) {
//           setLocked(userResponse.data.locked);
//           console.log("Checklist status fetched:", userResponse.data.locked);
//         }
//         if (userResponse.status === 200) {
//           setLocked(userResponse.data.locked);
//           console.log("CheckList Not Completed", userResponse.data.locked);
//         }
//       } catch (err) {
//         console.log("Error fetching status:", err.message);
//       }
//     };
//     fetchStatus();
//   }, []);

//   const DoneChanges = async () => {
//     if (ticked === 7) {
//       setCompleted(
//         "Congratulations you have completed all the tasks.You have got +50 Points"
//       );
//       console.log(globalPoints);
//       const newPoints = globalPoints + 50;
//       dispatch(addPoints(50));
//       console.log("Global points before update:", globalPoints, userId);
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
//         console.log(newres);
//         console.log(newres.lastdate);
//         if (newres.status === 200) {
//           setLocked(true);
//           console.log("Points updated successfully");
//         }
//       } catch (err) {
//         console.log("Error updating points:", err.message);
//       }
//     } else if (ticked === 6) {
//       setCompleted("Wow! More one task left");
//     } else if (ticked <= 5) {
//       setCompleted("You are almost there. Complete Soon.");
//     }
//   };
//   const handleClick = (e) => {
//     if (e.target.checked) {
//       setTicked((prev) => prev + 1);
//     } else if (!e.target.checked) {
//       setTicked((prev) => prev - 1);
//     }
//   };
//   const userDetails = async () => {
//     const response = await API.post(
//       "/list/checklist",
//       {
//         mood: userText,
//         age: userAge,
//       },
//       {
//         withCredentials: true,
//       }
//     );
//     if (response.status === 200) {
//       console.log(response.data);
//       console.log("Checklist data:", response.data.checkListData);
//       setAiResponse(response.data.checkListData);
//     }
//     if (response.status === 500) {
//       console.log("Fallback checklist data:", response.data.checkListData);
//     }
//   };
//   const checkList = [
//     { id: 1, label: "CheckList 1" },
//     { id: 2, label: "CheckList 2" },
//     { id: 3, label: "CheckList 3" },
//     { id: 4, label: "CheckList 4" },
//     { id: 5, label: "CheckList 5" },
//     { id: 6, label: "CheckList 6" },
//     { id: 7, label: "CheckList 7" },
//   ];

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter what you feel today"
//         required
//         onChange={(e) => setUserText(e.target.value)}
//       />
//       <input
//         type="Number"
//         placeholder="Enter your age"
//         required
//         onChange={(e) => setUserAge(e.target.value)}
//       />
//       <button onClick={userDetails}>Submit</button>
//       {checkList.map((item) => (
//         <div key={item.id}>
//           <input
//             type="checkbox"
//             id={item.id}
//             onChange={(e) => handleClick(e)}
//             disabled={locked}
//           />
//           <label htmlFor={item.id}>
//             {aiResponse[item.id - 1] || `CheckList ${item.id}`}
//           </label>
//         </div>
//       ))}
//       <h1>{ticked}</h1>
//       <input type="range" min="0" max="7" value={ticked} readOnly />
//       <button onClick={DoneChanges} disabled={locked}>
//         Done
//       </button>
//       <div>{completed}</div>
//       {!locked && <div>Today's CheckList already completed</div>}
//     </>
//   );
// };
// export default CheckListSection;

//css based code

// import React, { useEffect, useState } from "react";
// import API from "../api/axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints } from "../redux/userSlice";
// import "../assets/animations/CheckListSection.css"; // ✅ Import CSS
// import SliderAnim from "../assets/animations/SliderAnim.jsx"; // ✅ Import SliderAnim

// const CheckListSection = () => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.user._id);
//   const globalPoints = useSelector((state) => state.user.points);

//   const [ticked, setTicked] = useState(0);
//   const [userText, setUserText] = useState("");
//   const [userAge, setUserAge] = useState(0);
//   const [aiResponse, setAiResponse] = useState([]);
//   const [completed, setCompleted] = useState("");
//   const [locked, setLocked] = useState(false);

//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const userResponse = await API.post(
//           "/list/status",
//           {
//             _id: userId,
//           },
//           {
//             withCredentials: true,
//           }
//         );
//         if (userResponse.status === 409) {
//           setLocked(userResponse.data.locked);
//           console.log("Checklist status fetched:", userResponse.data.locked);
//         }
//         if (userResponse.status === 200) {
//           setLocked(userResponse.data.locked);
//           console.log("CheckList Not Completed", userResponse.data.locked);
//         }
//       } catch (err) {
//         console.log("Error fetching status:", err.message);
//       }
//     };
//     fetchStatus();
//   }, []);

//   const DoneChanges = async () => {
//     if (ticked === 7) {
//       setCompleted(
//         "Congratulations you have completed all the tasks.You have got +50 Points"
//       );
//       console.log(globalPoints);
//       const newPoints = globalPoints + 50;
//       dispatch(addPoints(50));
//       console.log("Global points before update:", globalPoints, userId);
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
//         console.log(newres);
//         console.log(newres.lastdate);
//         if (newres.status === 200) {
//           setLocked(true);
//           console.log("Points updated successfully");
//         }
//       } catch (err) {
//         console.log("Error updating points:", err.message);
//       }
//     } else if (ticked === 6) {
//       setCompleted("Wow! More one task left");
//     } else if (ticked <= 5) {
//       setCompleted("You are almost there. Complete Soon.");
//     }
//   };

//   const handleClick = (e) => {
//     if (e.target.checked) {
//       setTicked((prev) => prev + 1);
//     } else if (!e.target.checked) {
//       setTicked((prev) => prev - 1);
//     }
//   };

//   const userDetails = async () => {
//     const response = await API.post(
//       "/list/checklist",
//       {
//         mood: userText,
//         age: userAge,
//       },
//       {
//         withCredentials: true,
//       }
//     );
//     if (response.status === 200) {
//       console.log(response.data);
//       console.log("Checklist data:", response.data.checkListData);
//       setAiResponse(response.data.checkListData);
//     }
//     if (response.status === 500) {
//       console.log("Fallback checklist data:", response.data.checkListData);
//     }
//   };

//   const checkList = [
//     { id: 1, label: "CheckList 1" },
//     { id: 2, label: "CheckList 2" },
//     { id: 3, label: "CheckList 3" },
//     { id: 4, label: "CheckList 4" },
//     { id: 5, label: "CheckList 5" },
//     { id: 6, label: "CheckList 6" },
//     { id: 7, label: "CheckList 7" },
//   ];

//   return (
//     <div className="checklist-section">
//       <input
//         type="text"
//         placeholder="Enter what you feel today"
//         required
//         onChange={(e) => setUserText(e.target.value)}
//       />
//       <input
//         type="Number"
//         placeholder="Enter your age"
//         required
//         onChange={(e) => setUserAge(e.target.value)}
//       />
//       <button onClick={userDetails}>Submit</button>
//       {checkList.map((item) => (
//         <div key={item.id} className="checklist-item">
//           <input
//             type="checkbox"
//             id={item.id}
//             onChange={(e) => handleClick(e)}
//             disabled={locked}
//           />
//           <label
//             htmlFor={item.id}
//             data-content={aiResponse[item.id - 1] || `CheckList ${item.id}`}
//           >
//             {aiResponse[item.id - 1] || `CheckList ${item.id}`}
//           </label>
//         </div>
//       ))}
//       {/* Display ticked number */}
//       {/* <h1>{ticked}</h1> */}
//       {/* Slider showing progress */}
//       {/* <input type="range" min="0" max="7" value={ticked} readOnly /> */}
//       {/* ✅ SliderAnim integration */}
//       <SliderAnim value={ticked} /> {/* Pass ticked as prop */}
//       <button onClick={DoneChanges} disabled={locked}>
//         Done
//       </button>
//       <div>{completed}</div>
//       {!locked && <div>Today's CheckList already completed</div>}
//     </div>
//   );
// };
// export default CheckListSection;

//upgraded version
// import React, { useEffect, useState } from "react";
// import API from "../api/axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints } from "../redux/userSlice";
// import "../assets/animations/CheckListSection.css"; // ✅ Import CSS
// import "../assets/animations/EmojisSection.css"; // ✅ Import CSS
// import "../assets/animations/AnimatedInput.css";

// import SliderAnim from "../assets/animations/SliderAnim.jsx"; // ✅ Import SliderAnim

// const CheckListSection = () => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.user._id);
//   const globalPoints = useSelector((state) => state.user.points);

//   const [ticked, setTicked] = useState(0);
//   const [userText, setUserText] = useState("");
//   const [userAge, setUserAge] = useState(0);
//   const [aiResponse, setAiResponse] = useState([]);
//   const [completed, setCompleted] = useState("");
//   const [locked, setLocked] = useState(false);

//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const userResponse = await API.post(
//           "/list/status",
//           {
//             _id: userId,
//           },
//           {
//             withCredentials: true,
//           }
//         );
//         if (userResponse.status === 409) {
//           setLocked(userResponse.data.locked);
//           console.log("Checklist status fetched:", userResponse.data.locked);
//         }
//         if (userResponse.status === 200) {
//           setLocked(userResponse.data.locked);
//           console.log("CheckList Not Completed", userResponse.data.locked);
//         }
//       } catch (err) {
//         console.log("Error fetching status:", err.message);
//       }
//     };
//     fetchStatus();
//   }, []);

//   const DoneChanges = async () => {
//     if (ticked === 7) {
//       setCompleted(
//         "Congratulations you have completed all the tasks.You have got +50 Points"
//       );

//       // ✅ Blast effect
//       const checklistContainer = document.querySelector(".checklist-section");
//       if (checklistContainer) {
//         checklistContainer.classList.add("blast");

//         // Create confetti particles
//         for (let i = 0; i < 30; i++) {
//           const confetti = document.createElement("div");
//           confetti.classList.add("confetti-piece");
//           confetti.style.backgroundColor = `hsl(${
//             Math.random() * 360
//           }, 70%, 60%)`;
//           confetti.style.left = `${Math.random() * 100}%`;
//           confetti.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
//           checklistContainer.appendChild(confetti);

//           // Remove confetti after animation
//           confetti.addEventListener("animationend", () => {
//             confetti.remove();
//           });
//         }

//         setTimeout(() => {
//           checklistContainer.classList.remove("blast");
//         }, 1200);
//       }

//       const newPoints = globalPoints + 50;
//       dispatch(addPoints(50));
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
//         if (newres.status === 200) {
//           setLocked(true);
//         }
//       } catch (err) {
//         console.log("Error updating points:", err.message);
//       }
//     } else if (ticked === 6) {
//       setCompleted("Wow! More one task left");
//     } else if (ticked <= 5) {
//       setCompleted("You are almost there. Complete Soon.");
//     }
//   };

//   const handleClick = (e) => {
//     if (e.target.checked) {
//       setTicked((prev) => prev + 1);
//     } else if (!e.target.checked) {
//       setTicked((prev) => prev - 1);
//     }
//   };

//   const userDetails = async () => {
//     const response = await API.post(
//       "/list/checklist",
//       {
//         mood: userText,
//         age: userAge,
//       },
//       {
//         withCredentials: true,
//       }
//     );
//     if (response.status === 200) {
//       console.log(response.data);
//       console.log("Checklist data:", response.data.checkListData);
//       setAiResponse(response.data.checkListData);
//     }
//     if (response.status === 500) {
//       console.log("Fallback checklist data:", response.data.checkListData);
//     }
//   };

//   const checkList = [
//     { id: 1, label: "CheckList 1" },
//     { id: 2, label: "CheckList 2" },
//     { id: 3, label: "CheckList 3" },
//     { id: 4, label: "CheckList 4" },
//     { id: 5, label: "CheckList 5" },
//     { id: 6, label: "CheckList 6" },
//     { id: 7, label: "CheckList 7" },
//   ];

//   useEffect(() => {
//     const boxes = document.querySelectorAll(".input-box");
//     boxes.forEach((box) => {
//       const input = box.querySelector("input");
//       const pseudo = box.querySelector(".pseudo");
//       let before = "";

//       input.addEventListener("input", (e) => {
//         const { value: after } = e.target;
//         let p1 = 0,
//           p2 = 0;

//         for (; p2 < after.length; p2++) {
//           if (before[before.length - 1 - p2] !== after[after.length - 1 - p2])
//             break;
//         }
//         for (; p1 < after.length - p2; p1++) {
//           if (before[p1] !== after[p1]) break;
//         }

//         if (p1 + p2 < before.length) {
//           // remove letters
//           for (let i = 0; i < before.length - (p1 + p2); i++) {
//             const span = pseudo.children[p1];
//             if (span) {
//               span.classList.add("delete");
//               span.addEventListener("animationend", () => span.remove());
//             }
//           }
//         }

//         if (p1 + p2 < after.length) {
//           const inserted = after.slice(p1, after.length - p2);
//           inserted.split("").forEach((c, i) => {
//             console.log(i);
//             const span = document.createElement("span");
//             span.textContent = c;
//             pseudo.appendChild(span);
//           });
//         }

//         before = after;
//       });
//     });
//   }, []);

//   // return (
//   //   <div className="checklist-section">
//   //     <input
//   //       type="text"
//   //       placeholder="Enter what you feel today"
//   //       required
//   //       onChange={(e) => setUserText(e.target.value)}
//   //     />
//   //     <input
//   //       type="Number"
//   //       placeholder="Enter your age"
//   //       required
//   //       onChange={(e) => setUserAge(e.target.value)}
//   //     />
//   //     <button onClick={userDetails}>Submit</button>
//   //     {checkList.map((item) => (
//   //       <div key={item.id} className="checklist-item">
//   //         <input
//   //           type="checkbox"
//   //           id={item.id}
//   //           onChange={(e) => handleClick(e)}
//   //           disabled={locked}
//   //         />
//   //         <label
//   //           htmlFor={item.id}
//   //           data-content={aiResponse[item.id - 1] || `CheckList ${item.id}`}
//   //         >
//   //           {aiResponse[item.id - 1] || `CheckList ${item.id}`}
//   //         </label>
//   //       </div>
//   //     ))}
//   //     <SliderAnim value={ticked} setValue={setTicked} />
//   //     <button onClick={DoneChanges} disabled={locked}>
//   //       Done
//   //     </button>
//   //     <div>{completed}</div>
//   //     {!locked && <div>Today's CheckList already completed</div>}
//   //   </div>
//   // );
//   return (
//     <div className="checklist-section">
//       <div className="animated-input-container">
//         {/* Mood input */}
//         <div className="input-box" data-placeholder="Enter your mood">
//           <input
//             type="text"
//             value={userText}
//             required
//             onChange={(e) => setUserText(e.target.value)}
//           />
//           <div className="pseudo"></div>
//         </div>

//         {/* Age input */}
//         <div className="input-box" data-placeholder="Enter your age">
//           <input
//             type="number"
//             value={userAge}
//             required
//             onChange={(e) => setUserAge(e.target.value)}
//           />
//           <div className="pseudo"></div>
//         </div>
//       </div>

//       <button onClick={userDetails}>Submit</button>
//       {checkList.map((item) => (
//         <div key={item.id} className="checklist-item">
//           <input
//             type="checkbox"
//             id={item.id}
//             onChange={(e) => handleClick(e)}
//             disabled={locked}
//           />
//           <label
//             htmlFor={item.id}
//             data-content={aiResponse[item.id - 1] || `CheckList ${item.id}`}
//           >
//             {aiResponse[item.id - 1] || `CheckList ${item.id}`}
//           </label>
//         </div>
//       ))}
//       <SliderAnim value={ticked} setValue={setTicked} />
//       <button onClick={DoneChanges} disabled={locked}>
//         Done
//       </button>
//       <div>{completed}</div>
//       {!locked && <div>Today's CheckList already completed</div>}
//     </div>
//   );
// };

// export default CheckListSection;

// import React, { useEffect, useState } from "react";
// import API from "../api/axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints } from "../redux/userSlice";
// import "../assets/animations/CheckListSection.css"; // ✅ Import CSS
// import "../assets/animations/AnimatedInput.css"; // ✅ Import CSS
// import "../assets/animations/EmojisSection.css"; // ✅ Import CSS
// import SliderAnim from "../assets/animations/SliderAnim.jsx"; // ✅ Import SliderAnim

// const CheckListSection = () => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.user._id);
//   const globalPoints = useSelector((state) => state.user.points);

//   const [ticked, setTicked] = useState(0);
//   const [userText, setUserText] = useState("");
//   const [userAge, setUserAge] = useState("");
//   const [aiResponse, setAiResponse] = useState([]);
//   const [completed, setCompleted] = useState("");
//   const [locked, setLocked] = useState(false);

//   // Fetch checklist status from server
//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const userResponse = await API.post(
//           "/list/status",
//           { _id: userId },
//           { withCredentials: true }
//         );
//         if (userResponse.status === 409) {
//           setLocked(userResponse.data.locked);
//           console.log("Checklist status fetched:", userResponse.data.locked);
//         }
//         if (userResponse.status === 200) {
//           setLocked(userResponse.data.locked);
//           console.log("CheckList Not Completed", userResponse.data.locked);
//         }
//       } catch (err) {
//         console.log("Error fetching status:", err.message);
//       }
//     };
//     fetchStatus();
//   }, []);

//   // ✅ Animated input effect for both text and number inputs
//   useEffect(() => {
//     const boxes = document.querySelectorAll(
//       ".animated-input-container .input-box"
//     );

//     boxes.forEach((box) => {
//       const input = box.querySelector("input");
//       const pseudo = box.querySelector(".pseudo");
//       const placeholder = box.getAttribute("data-placeholder") || "";
//       pseudo.textContent = placeholder;

//       let before = "";

//       input.addEventListener("focus", () => {
//         if (input.value === "") pseudo.textContent = "";
//       });

//       input.addEventListener("blur", () => {
//         if (input.value === "") pseudo.textContent = placeholder;
//       });

//       input.addEventListener("input", (e) => {
//         const after = e.target.value;

//         // Diff calculation
//         let p1 = 0,
//           p2 = 0;

//         for (; p2 < after.length && p2 < before.length; p2++) {
//           if (before[before.length - 1 - p2] !== after[after.length - 1 - p2])
//             break;
//         }

//         for (; p1 < after.length - p2; p1++) {
//           if (before[p1] !== after[p1]) break;
//         }

//         // Remove deleted letters
//         if (p1 + p2 < before.length) {
//           let remaining = before.length - (p1 + p2);
//           let pointer = 0;
//           for (let i = 0; i < pseudo.children.length && remaining > 0; i++) {
//             const span = pseudo.children[i];
//             if (span.classList.contains("delete")) continue;
//             if (pointer >= p1) {
//               span.classList.add("delete");
//               span.addEventListener("animationend", () => span.remove());
//               remaining--;
//             }
//             pointer++;
//           }
//         }

//         // Add new letters
//         if (p1 + p2 < after.length) {
//           const inserted = after.slice(p1, after.length - p2);
//           let target = null;
//           let pointer = 0;

//           for (let i = 0; i < pseudo.children.length; i++) {
//             const span = pseudo.children[i];
//             if (span.classList.contains("delete")) continue;
//             if (pointer >= p1 - 1) {
//               target = span;
//               break;
//             }
//             pointer++;
//           }

//           for (let i = 0; i < inserted.length; i++) {
//             const span = document.createElement("span");
//             span.textContent = inserted[i];
//             span.classList.add("show");
//             if (target) {
//               target.after(span);
//               target = span;
//             } else {
//               pseudo.appendChild(span);
//             }
//           }
//         }

//         before = after;
//       });
//     });
//   }, []);

//   // Update points and handle completion
//   const DoneChanges = async () => {
//     if (ticked === 7) {
//       setCompleted(
//         "Congratulations you have completed all the tasks.You have got +50 Points"
//       );

//       // ✅ Blast effect
//       const checklistContainer = document.querySelector(".checklist-section");
//       if (checklistContainer) {
//         checklistContainer.classList.add("blast");

//         // Create confetti particles
//         for (let i = 0; i < 30; i++) {
//           const confetti = document.createElement("div");
//           confetti.classList.add("confetti-piece");
//           confetti.style.backgroundColor = `hsl(${
//             Math.random() * 360
//           }, 70%, 60%)`;
//           confetti.style.left = `${Math.random() * 100}%`;
//           confetti.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
//           checklistContainer.appendChild(confetti);

//           // Remove confetti after animation
//           confetti.addEventListener("animationend", () => {
//             confetti.remove();
//           });
//         }

//         setTimeout(() => {
//           checklistContainer.classList.remove("blast");
//         }, 1200);
//       }

//       const newPoints = globalPoints + 50;
//       dispatch(addPoints(50));
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
//         if (newres.status === 200) {
//           setLocked(true);
//         }
//       } catch (err) {
//         console.log("Error updating points:", err.message);
//       }
//     } else if (ticked === 6) {
//       setCompleted("Wow! More one task left");
//     } else if (ticked <= 5) {
//       setCompleted("You are almost there. Complete Soon.");
//     }
//   };

//   // Handle checkbox tick
//   const handleClick = (e) => {
//     if (e.target.checked) {
//       setTicked((prev) => prev + 1);
//     } else if (!e.target.checked) {
//       setTicked((prev) => prev - 1);
//     }
//   };

//   // Submit user details
//   const userDetails = async () => {
//     const response = await API.post(
//       "/list/checklist",
//       {
//         mood: userText,
//         age: userAge,
//       },
//       { withCredentials: true }
//     );
//     if (response.status === 200) {
//       console.log(response.data);
//       console.log("Checklist data:", response.data.checkListData);
//       setAiResponse(response.data.checkListData);
//     }
//     if (response.status === 500) {
//       console.log("Fallback checklist data:", response.data.checkListData);
//     }
//   };

//   const checkList = [
//     { id: 1, label: "CheckList 1" },
//     { id: 2, label: "CheckList 2" },
//     { id: 3, label: "CheckList 3" },
//     { id: 4, label: "CheckList 4" },
//     { id: 5, label: "CheckList 5" },
//     { id: 6, label: "CheckList 6" },
//     { id: 7, label: "CheckList 7" },
//   ];

//   return (
//     <div className="checklist-section">
//       {/* ✅ Animated input container */}
//       <div className="animated-input-container">
//         <div className="input-box" data-placeholder="Enter your mood">
//           <input
//             type="text"
//             required
//             onChange={(e) => setUserText(e.target.value)}
//           />
//           <div className="pseudo"></div>
//         </div>

//         <div className="input-box" data-placeholder="Enter your age">
//           <input
//             type="number"
//             required
//             onChange={(e) => setUserAge(e.target.value)}
//           />
//           <div className="pseudo"></div>
//         </div>
//       </div>

//       <button onClick={userDetails}>Submit</button>

//       {/* ✅ Checklist Items */}
//       {checkList.map((item) => (
//         <div key={item.id} className="checklist-item">
//           <input
//             type="checkbox"
//             id={item.id}
//             onChange={(e) => handleClick(e)}
//             disabled={locked}
//           />
//           <label
//             htmlFor={item.id}
//             data-content={aiResponse[item.id - 1] || `CheckList ${item.id}`}
//           >
//             {aiResponse[item.id - 1] || `CheckList ${item.id}`}
//           </label>
//         </div>
//       ))}

//       <SliderAnim value={ticked} setValue={setTicked} />
//       <button onClick={DoneChanges} disabled={locked}>
//         Done
//       </button>
//       <div>{completed}</div>
//       {!locked && <div>Today's CheckList already completed</div>}
//     </div>
//   );
// };

// export default CheckListSection;

import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { addPoints } from "../redux/userSlice";
import "../assets/animations/CheckListSection.css"; // ✅ Import CSS
import "../assets/animations/AnimatedInput.css"; // ✅ Import CSS
import "../assets/animations/EmojisSection.css"; // ✅ Import CSS
import SliderAnim from "../assets/animations/SliderAnim.jsx"; // ✅ Import SliderAnim

const CheckListSection = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user._id);
  const globalPoints = useSelector((state) => state.user.points);

  const [ticked, setTicked] = useState(0);
  const [userText, setUserText] = useState("");
  const [userAge, setUserAge] = useState("");
  const [aiResponse, setAiResponse] = useState([]);
  const [completed, setCompleted] = useState("");
  const [locked, setLocked] = useState(false);

  // Fetch checklist status from server
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const userResponse = await API.post(
          "/list/status",
          { _id: userId },
          { withCredentials: true }
        );
        if (userResponse.status === 409) {
          setLocked(userResponse.data.locked);
          console.log("Checklist status fetched:", userResponse.data.locked);
        }
        if (userResponse.status === 200) {
          setLocked(userResponse.data.locked);
          console.log("CheckList Not Completed", userResponse.data.locked);
        }
      } catch (err) {
        console.log("Error fetching status:", err.message);
      }
    };
    fetchStatus();
  }, []);

  // ✅ Animated input effect for both text and number inputs
  useEffect(() => {
    const boxes = document.querySelectorAll(
      ".animated-input-container .input-box"
    );

    boxes.forEach((box) => {
      const input = box.querySelector("input");
      const pseudo = box.querySelector(".pseudo");
      const placeholder = box.getAttribute("data-placeholder") || "";

      // initialize 'before' to the current input value (keeps state if any)
      let before = input.value ? String(input.value) : "";

      // Build initial pseudo content
      pseudo.innerHTML = "";
      if (!before) {
        pseudo.textContent = placeholder;
      } else {
        for (let i = 0; i < before.length; i++) {
          const s = document.createElement("span");
          s.textContent = before[i];
          pseudo.appendChild(s);
        }
        // ensure scroll shows end
        requestAnimationFrame(() => {
          pseudo.scrollLeft = pseudo.scrollWidth;
        });
      }

      // Focus/blur to show/hide placeholder properly
      input.addEventListener("focus", () => {
        if (input.value === "") pseudo.textContent = "";
      });

      input.addEventListener("blur", () => {
        if (input.value === "") pseudo.textContent = placeholder;
      });

      input.addEventListener("input", (e) => {
        const afterRaw = e.target.value;
        const after =
          afterRaw === undefined || afterRaw === null ? "" : String(afterRaw);

        // If input is empty -> clear pseudo and show placeholder
        if (after === "") {
          pseudo.innerHTML = "";
          pseudo.textContent = placeholder;
          before = "";
          return;
        }

        // === Special-case: number inputs ===
        // Browser spinners and programmatic updates can be funky for diffing.
        // For numeric inputs, replace the pseudo entirely so counts always match.
        if (input.type === "number") {
          pseudo.innerHTML = "";
          for (let i = 0; i < after.length; i++) {
            const span = document.createElement("span");
            span.textContent = after[i];
            span.classList.add("show");
            pseudo.appendChild(span);
          }
          before = after;
          // scroll to end
          requestAnimationFrame(() => {
            pseudo.scrollLeft = pseudo.scrollWidth;
          });
          return;
        }

        // === For text inputs: robust diff that handles repeated letters ===
        // compute longest common prefix
        let start = 0;
        while (
          start < before.length &&
          start < after.length &&
          before[start] === after[start]
        ) {
          start++;
        }

        // compute longest common suffix (after the prefix)
        let endBefore = before.length - 1;
        let endAfter = after.length - 1;
        while (
          endBefore >= start &&
          endAfter >= start &&
          before[endBefore] === after[endAfter]
        ) {
          endBefore--;
          endAfter--;
        }

        // Remove deleted letters (positions start..endBefore in 'before')
        if (endBefore >= start) {
          const deleteCount = endBefore - start + 1;
          for (let i = 0; i < deleteCount; i++) {
            // always remove at index `start` because previous removals shift left
            const span = pseudo.children[start];
            if (!span) continue;
            span.classList.add("delete");
            span.addEventListener(
              "animationend",
              () => {
                if (span.parentNode) span.parentNode.removeChild(span);
                // if fully empty after removal and after is empty, show placeholder
                if (pseudo.children.length === 0 && after === "") {
                  pseudo.textContent = placeholder;
                }
              },
              { once: true }
            );
          }
        }

        // Insert new letters (after.slice(start, endAfter+1))
        if (endAfter >= start) {
          const inserted = after.slice(start, endAfter + 1);

          // If placeholder present (and no children), clear it before inserting
          if (
            pseudo.children.length === 0 &&
            pseudo.textContent === placeholder
          ) {
            pseudo.innerHTML = "";
          }

          // Determine reference node: element currently at position `start`
          let refNode = pseudo.children[start] || null;

          for (let i = 0; i < inserted.length; i++) {
            const ch = inserted[i];
            const span = document.createElement("span");
            span.textContent = ch;
            span.classList.add("show");
            if (refNode) {
              pseudo.insertBefore(span, refNode);
            } else {
              pseudo.appendChild(span);
            }
          }
        }

        // update before
        before = after;

        // Auto-scroll to caret (end)
        requestAnimationFrame(() => {
          pseudo.scrollLeft = pseudo.scrollWidth;
        });
      });
    });
  }, []);

  // Update points and handle completion
  const DoneChanges = async () => {
    if (ticked === 7) {
      setCompleted(
        "Congratulations you have completed all the tasks.You have got +50 Points"
      );

      // ✅ Blast effect
      const checklistContainer = document.querySelector(".checklist-section");
      if (checklistContainer) {
        checklistContainer.classList.add("blast");

        // Create confetti particles
        for (let i = 0; i < 30; i++) {
          const confetti = document.createElement("div");
          confetti.classList.add("confetti-piece");
          confetti.style.backgroundColor = `hsl(${
            Math.random() * 360
          }, 70%, 60%)`;
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
          checklistContainer.appendChild(confetti);

          // Remove confetti after animation
          confetti.addEventListener("animationend", () => {
            confetti.remove();
          });
        }

        setTimeout(() => {
          checklistContainer.classList.remove("blast");
        }, 1200);
      }

      const newPoints = globalPoints + 50;
      dispatch(addPoints(50));
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
        if (newres.status === 200) {
          setLocked(true);
        }
      } catch (err) {
        console.log("Error updating points:", err.message);
      }
    } else if (ticked === 6) {
      setCompleted("Wow! More one task left");
    } else if (ticked <= 5) {
      setCompleted("You are almost there. Complete Soon.");
    }
  };

  // Handle checkbox tick
  const handleClick = (e) => {
    if (e.target.checked) {
      setTicked((prev) => prev + 1);
    } else if (!e.target.checked) {
      setTicked((prev) => prev - 1);
    }
  };

  // Submit user details
  const userDetails = async () => {
    const response = await API.post(
      "/list/checklist",
      {
        mood: userText,
        age: userAge,
      },
      { withCredentials: true }
    );
    if (response.status === 200) {
      console.log(response.data);
      console.log("Checklist data:", response.data.checkListData);
      setAiResponse(response.data.checkListData);
    }
    if (response.status === 500) {
      console.log("Fallback checklist data:", response.data.checkListData);
    }
  };

  const checkList = [
    {
      id: 1,
      label:
        "Take a deep breath, drink a full glass of water, and give your body the refreshment it deserves.",
    },
    {
      id: 2,
      label:
        "Stretch gently for a few minutes to release tension and remind your body that it is cared for.",
    },
    {
      id: 3,
      label:
        "Write down one thing you are truly grateful for today, no matter how small it may seem.",
    },
    {
      id: 4,
      label:
        "Step away from screens for a short break and let your eyes and mind rest.",
    },
    {
      id: 5,
      label:
        "Listen to a calming piece of music that makes you feel peaceful and grounded.",
    },
    {
      id: 6,
      label:
        "Send a kind or encouraging message to someone you care about, and brighten their day.",
    },
    {
      id: 7,
      label:
        "Look in the mirror, smile at yourself, and acknowledge the effort you are making today.",
    },
  ];

  return (
    <div className="checklist-section">
      {/* ✅ Animated input container */}
      {/*display: flex;padding: 5px;justify-content: center;flex-wrap: wrap;align-content: flex-start;align-items: center; */}
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
        <div style={{ fontSize: "2rem", height: "60px" }}>📋</div>
        <div className="checklist-title">CheckList Section</div>
      </div>
      <div className="animated-input-container">
        {/* <div className="emoji-title">CheckList Section</div> */}
        <div className="input-box" data-placeholder="Enter your mood">
          <input
            type="text"
            required
            onChange={(e) => setUserText(e.target.value)}
          />
          <div className="pseudo"></div>
        </div>

        <div className="input-box" data-placeholder="Enter your age">
          <input
            type="number"
            required
            onChange={(e) => setUserAge(e.target.value)}
          />
          <div className="pseudo"></div>
        </div>
      </div>

      <button onClick={userDetails} className="submit-button-checklist">
        Submit
      </button>
      <p className="checklist-subtitle">
        <span>
          Entering the mood and age will give you customized checklist
        </span>
      </p>

      {/* ✅ Checklist Items */}
      {checkList.map((item) => (
        <div key={item.id} className="checklist-item">
          <input
            type="checkbox"
            id={item.id}
            onChange={(e) => handleClick(e)}
            disabled={locked}
          />
          <label
            htmlFor={item.id}
            data-content={aiResponse[item.id - 1] || `CheckList ${item.id}`}
          >
            <div
              style={{
                fontSize: "0.7rem",
                // fontStyle: "italic",
                fontWeight: "500",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {aiResponse[item.id - 1] || item.label}
            </div>
          </label>
        </div>
      ))}

      <SliderAnim value={ticked} setValue={setTicked} />
      <button
        onClick={DoneChanges}
        disabled={locked}
        className="submit-button-checklist"
      >
        Done
      </button>
      <p className="checklist-subtitle">
        <span>{completed}</span>
      </p>
      {locked && (
        <p className="checklist-subtitle">
          <span>Today's CheckList already completed</span>
        </p>
      )}
    </div>
  );
};

export default CheckListSection;
