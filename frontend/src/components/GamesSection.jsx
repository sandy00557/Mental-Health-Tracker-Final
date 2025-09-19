// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints, setPoints } from "../redux/userSlice";
// import { selectPoints } from "../redux/userSlice";
// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import "../assets/animations/GamesSection.css";

// const GamesSection = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const globalPoints = useSelector(selectPoints); //this line is to get the points from the redux store.
//   const userIDz = useSelector((state) => state.user._id);

//   const [questions, setQuestions] = useState([]);
//   // const [selectedOption, setSelectedOption] = useState(null);
//   const [quizDay, setQuizDay] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scoreThisSession, setScoreThisSession] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [userId, setUserId] = useState(null);
//   const [alreadyCompleted, setAlreadyCompleted] = useState(false);

//   const logoutsession = async () => {
//     const response = await API.post(
//       "/auth/logout",
//       {},
//       {
//         withCredentials: true,
//       }
//     );
//     if (response.data.status === "success") {
//       navigate("/");
//     }
//   };
//   useEffect(() => {
//     const fetchDailyQuiz = async () => {
//       try {
//         // const response = await API.get(`/quiz/daily?userId=${userIDz}`); //From the frontend React app, send an HTTP GET request to your backend at the route /quiz/daily.
//         const response = await API.get("/quiz/daily", {
//           params: { id: userIDz },
//           withCredentials: true,
//         });

//         console.log("Quiz response:", response.data);
//         setUserId(response.data.userId);

//         if (response.data.quizCompleted) {
//           setAlreadyCompleted(true);
//           setQuizCompleted(true);
//         } else {
//           setQuestions(response.data.quizzes);
//           setAlreadyCompleted(false);
//         }
//         setQuizDay(response.data.quizDay);
//         dispatch(setPoints(Number(response.data.points) || 0)); //will get points from backend and will set as global using dispatch method
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load quiz questions", err.message);
//         setLoading(false);
//       }
//     };
//     fetchDailyQuiz();
//   }, [dispatch]); //we want our effect to run only once so we dispatch which will not change

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [questionIndex]: optionIndex, //{0:1,1:3}=>{question,answer}
//     }));
//   };

//   const handleComplete = async () => {
//     console.log("handleComplete called with score:", scoreThisSession, userId);
//     try {
//       setLoading(true);

//       const requestedData = {
//         points: scoreThisSession,
//         userId: userId,
//       };
//       console.log("Sending request:", requestedData);

//       const response = await API.patch("/quiz/updatePoints", requestedData);
//       console.log("Response received", response.data);
//       if (response.data.status === "success") {
//         dispatch(
//           setPoints(response.data.newPoints || globalPoints + scoreThisSession)
//         );
//         setQuizCompleted(true);
//         alert("Points saved Successfully!");
//       }
//     } catch (err) {
//       console.error("Failed to save points:", err);

//       // Give user option to retry or continue offline
//       const shouldRetry = window.confirm(
//         "Failed to save your points. Would you like to try again?"
//       );

//       if (shouldRetry) {
//         handleComplete(); // Retry
//       } else {
//         // Continue offline - update Redux only
//         dispatch(setPoints(globalPoints + scoreThisSession));
//         setQuizCompleted(true);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleNext = () => {
//     const selected = selectedOptions[currentIndex];
//     /*Because in JavaScript objects, selectedOptions[0] means:
// "Get the value for the key 0 in this object." */
//     if (selected === undefined) {
//       alert("Please select an option");
//       return;
//     }

//     const currentQuestion = questions[currentIndex];

//     if (selected === currentQuestion.answerIndex) {
//       dispatch(addPoints(10));
//       setScoreThisSession((prev) => prev + 10);
//     }

//     if (currentIndex + 1 < questions.length) {
//       setCurrentIndex((prev) => prev + 1);
//     } else {
//       handleComplete();
//       // setQuizCompleted(true);
//     }
//   };

//   //   const handleNext = () => {
//   //     alert(`You selected option: ${selectedOption}`);
//   //     if (selectedOption === null) {
//   //       alert("Please select an option");
//   //       return;
//   //     }

//   //     const currentQuestion = questions[currentIndex];
//   //     /*const questions = [
//   //   {
//   //     questionText: "Which activity reduces stress?",
//   //     options: ["Deep breathing", "Skipping meals", "Multitasking", "Overthinking"],
//   //     answerIndex: 0 // means correct answer is options[0] => "Deep breathing"
//   //   },
//   //   {
//   //     questionText: "Best way to stay hydrated?",
//   //     options: ["Drink water", "Drink soda", "Drink coffee", "Ignore thirst"],
//   //     answerIndex: 0
//   //   }
//   // ];
//   // const currentQuestion = questions[currentIndex]; this will lead to first question
//   //  */
//   //     if (selectedOption === currentQuestion.answerIndex) {
//   //       dispatch(addPoints(10));
//   //       setScoreThisSession(scoreThisSession + 10);
//   //     }
//   //     setSelectedOption(null);
//   //     if (currentIndex + 1 < questions.length) {
//   //       setCurrentIndex(currentIndex + 1);
//   //     } else {
//   //       setQuizCompleted(true);
//   //     }
//   //   };

//   //the belwo code like isLoading,isQuizCompleted will run first and if it is true it will returned and it will not go to the next statement till it becomes false

//   // if (loading) {
//   //   return (
//   //     <>
//   //       <Helmet>
//   //         <title>🎮 Games Section</title>
//   //       </Helmet>
//   //       <p>Loading questions...</p>
//   //     </>
//   //   );
//   // }
//   // if (error) {
//   //   return (
//   //     <>
//   //       ;<p>Error: {error}</p>
//   //     </>
//   //   );
//   // }

//   // if (alreadyCompleted) {
//   //   return (
//   //     <div>
//   //       <h3>Quiz Already Completed</h3>
//   //       <p>You have already completed today's quiz</p>
//   //       <p>Come back tomorrow for new questions!</p>
//   //       <p>Your total points: {globalPoints}</p>
//   //       <p>Wow!Go to products sections and buy products</p>
//   //       <button onClick={() => navigate("/DashBoardPage/ProductsSection")}>
//   //         Go to Products!!
//   //       </button>
//   //       <button onClick={() => navigate("/DashBoardPage")}>
//   //         Back to DashBoard
//   //       </button>
//   //     </div>
//   //   );
//   // }

//   // if (quizCompleted) {
//   //   return (
//   //     <>
//   //       <h2>Quiz Completed</h2>
//   //       <p>You scored {scoreThisSession} points this session</p>
//   //       <p>Your total points is {globalPoints}</p>
//   //     </>
//   //   );
//   // }
//   return (
//     <>
//       return (
//       <>
//         <Helmet>
//           <title>Games Section</title>
//         </Helmet>
//         <input
//           type="checkbox"
//           id="drawer-toggle"
//           className="relative sr-only peer"
//         />
//         <label
//           htmlFor="drawer-toggle"
//           className="absolute top-4 left-4 inline-block p-3 transition-all duration-500 bg-green-600 rounded-lg cursor-pointer peer-checked:left-64 peer-checked:rotate-180 z-30"
//         >
//           <div className="w-6 h-1 mb-1.5 -rotate-45 bg-white rounded-lg"></div>
//           <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
//         </label>
//         <div className="fixed top-0 left-0 z-20 w-64 h-full transform -translate-x-full transition-transform duration-500 ease-in-out bg-white shadow-lg peer-checked:translate-x-0">
//           <div className="px-6 py-8 space-y-6">
//             <h2 className="text-lg font-semibold">Dashboard Menu</h2>
//             <nav className="flex flex-col gap-4">
//               <button
//                 onClick={() => navigate("/DashBoardPage")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Main Page
//               </button>
//               <button
//                 onClick={() => navigate("/DashBoardPage/VideosSection")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Videos Section
//               </button>
//               <button
//                 onClick={() => navigate("/DashBoardPage/ProductsSection")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Products Section
//               </button>
//               <button
//                 onClick={() => navigate("/DashBoardPage/CoachSection")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Coach Section
//               </button>
//               <button
//                 onClick={() => navigate("/DashBoardPage/VoiceTextSection")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 VoiceText Section
//               </button>
//               <button
//                 onClick={logoutsession}
//                 className="text-left px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//             </nav>
//           </div>
//         </div>
//         {/* Sidebar End */}

//         {/* ✅ Main content area with conditions */}
//         <div className="p-6">
//           {loading && (
//             <>
//               <p>Loading questions...</p>
//             </>
//           )}

//           {!loading && error && (
//             <>
//               <p>Error: {error}</p>
//             </>
//           )}

//           {!loading && !error && alreadyCompleted && (
//             <div>
//               <h3>Quiz Already Completed</h3>
//               <p>You have already completed today's quiz</p>
//               <p>Come back tomorrow for new questions!</p>
//               <p>Your total points: {globalPoints}</p>
//               <p>Wow!Go to products sections and buy products</p>
//               <button
//                 onClick={() => navigate("/DashBoardPage/ProductsSection")}
//               >
//                 Go to Products!!
//               </button>
//               <button onClick={() => navigate("/DashBoardPage")}>
//                 Back to DashBoard
//               </button>
//             </div>
//           )}

//           {!loading && !error && quizCompleted && !alreadyCompleted && (
//             <>
//               <h2>Quiz Completed</h2>
//               <p>You scored {scoreThisSession} points this session</p>
//               <p>Your total points is {globalPoints}</p>
//             </>
//           )}

//           {!loading && !error && !quizCompleted && !alreadyCompleted && (
//             <>
//               <h2>Your global points is {globalPoints}</h2>
//               <h2>
//                 Quiz Day {quizDay} - Question {currentIndex + 1}/
//                 {questions.length}
//               </h2>
//               {/* Display only the current question */}
//               {questions.length > 0 && (
//                 <div>
//                   <h2>{questions[currentIndex].questionText}</h2>
//                   {questions[currentIndex].options.map(
//                     (option, optionIndex) => (
//                       <button
//                         key={optionIndex}
//                         value={option}
//                         onClick={() =>
//                           handleOptionClick(currentIndex, optionIndex)
//                         }
//                         style={{
//                           backgroundColor:
//                             selectedOptions[currentIndex] === optionIndex
//                               ? "lightblue"
//                               : "",
//                         }}
//                       >
//                         {option}
//                       </button>
//                     )
//                   )}
//                 </div>
//               )}
//               {currentIndex < 9 ? (
//                 <button onClick={handleNext}>Next</button>
//               ) : (
//                 <button onClick={handleComplete}>Complete</button>
//               )}
//             </>
//           )}
//         </div>
//       </>
//       );
//     </>
//   );
// };
// export default GamesSection;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints, setPoints } from "../redux/userSlice";
// import { selectPoints } from "../redux/userSlice";
// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import "../assets/animations/GamesSection.css"; // ✅ Added CodePen styling

// const GamesSection = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const globalPoints = useSelector(selectPoints); //this line is to get the points from the redux store.
//   const userIDz = useSelector((state) => state.user._id);

//   const [questions, setQuestions] = useState([]);
//   // const [selectedOption, setSelectedOption] = useState(null);
//   const [quizDay, setQuizDay] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scoreThisSession, setScoreThisSession] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [userId, setUserId] = useState(null);
//   const [alreadyCompleted, setAlreadyCompleted] = useState(false);

//   const logoutsession = async () => {
//     const response = await API.post(
//       "/auth/logout",
//       {},
//       {
//         withCredentials: true,
//       }
//     );
//     if (response.data.status === "success") {
//       navigate("/");
//     }
//   };

//   useEffect(() => {
//     const fetchDailyQuiz = async () => {
//       try {
//         // const response = await API.get(`/quiz/daily?userId=${userIDz}`); //From the frontend React app, send an HTTP GET request to your backend at the route /quiz/daily.
//         const response = await API.get("/quiz/daily", {
//           params: { id: userIDz },
//           withCredentials: true,
//         });

//         console.log("Quiz response:", response.data);
//         setUserId(response.data.userId);

//         if (response.data.quizCompleted) {
//           setAlreadyCompleted(true);
//           setQuizCompleted(true);
//         } else {
//           setQuestions(response.data.quizzes);
//           setAlreadyCompleted(false);
//         }
//         setQuizDay(response.data.quizDay);
//         dispatch(setPoints(Number(response.data.points) || 0)); //will get points from backend and will set as global using dispatch method
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load quiz questions", err.message);
//         setLoading(false);
//       }
//     };
//     fetchDailyQuiz();
//   }, [dispatch]); //we want our effect to run only once so we dispatch which will not change

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [questionIndex]: optionIndex, //{0:1,1:3}=>{question,answer}
//     }));
//   };

//   const handleComplete = async () => {
//     console.log("handleComplete called with score:", scoreThisSession, userId);
//     try {
//       setLoading(true);

//       const requestedData = {
//         points: scoreThisSession,
//         userId: userId,
//       };
//       console.log("Sending request:", requestedData);

//       const response = await API.patch("/quiz/updatePoints", requestedData);
//       console.log("Response received", response.data);
//       if (response.data.status === "success") {
//         dispatch(
//           setPoints(response.data.newPoints || globalPoints + scoreThisSession)
//         );
//         setQuizCompleted(true);
//         alert("Points saved Successfully!");
//       }
//     } catch (err) {
//       console.error("Failed to save points:", err);

//       // Give user option to retry or continue offline
//       const shouldRetry = window.confirm(
//         "Failed to save your points. Would you like to try again?"
//       );

//       if (shouldRetry) {
//         handleComplete(); // Retry
//       } else {
//         // Continue offline - update Redux only
//         dispatch(setPoints(globalPoints + scoreThisSession));
//         setQuizCompleted(true);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleNext = () => {
//     const selected = selectedOptions[currentIndex];
//     /*Because in JavaScript objects, selectedOptions[0] means:
// "Get the value for the key 0 in this object." */
//     if (selected === undefined) {
//       alert("Please select an option");
//       return;
//     }

//     const currentQuestion = questions[currentIndex];

//     if (selected === currentQuestion.answerIndex) {
//       dispatch(addPoints(10));
//       setScoreThisSession((prev) => prev + 10);
//     }

//     if (currentIndex + 1 < questions.length) {
//       setCurrentIndex((prev) => prev + 1);
//     } else {
//       handleComplete();
//       // setQuizCompleted(true);
//     }
//   };

//   return (
//     <>
//       <>
//         <Helmet>
//           <title>Games Section</title>
//         </Helmet>
//         <input
//           type="checkbox"
//           id="drawer-toggle"
//           className="relative sr-only peer"
//         />
//         <label
//           htmlFor="drawer-toggle"
//           className="absolute top-4 left-4 inline-block p-3 transition-all duration-500 bg-green-600 rounded-lg cursor-pointer peer-checked:left-64 peer-checked:rotate-180 z-30"
//         >
//           <div className="w-6 h-1 mb-1.5 -rotate-45 bg-white rounded-lg"></div>
//           <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
//         </label>
//         <div className="fixed top-0 left-0 z-20 w-64 h-full transform -translate-x-full transition-transform duration-500 ease-in-out bg-white shadow-lg peer-checked:translate-x-0">
//           <div className="px-6 py-8 space-y-6">
//             <h2 className="text-lg font-semibold">Dashboard Menu</h2>
//             <nav className="flex flex-col gap-4">
//               <button
//                 onClick={() => navigate("/DashBoardPage")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Main Page
//               </button>
//               <button
//                 onClick={() => navigate("/DashBoardPage/VideosSection")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Videos Section
//               </button>
//               <button
//                 onClick={() => navigate("/DashBoardPage/ProductsSection")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Products Section
//               </button>
//               <button
//                 onClick={() => navigate("/DashBoardPage/CoachSection")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Coach Section
//               </button>
//               <button
//                 onClick={() => navigate("/DashBoardPage/VoiceTextSection")}
//                 className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 VoiceText Section
//               </button>
//               <button
//                 onClick={logoutsession}
//                 className="text-left px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//             </nav>
//           </div>
//         </div>
//         {/* Sidebar End */}

//         {/* ✅ Main content area with conditions */}
//         <div className="quiz-container">
//           <div className="page">
//             {loading && (
//               <>
//                 <p>Loading questions...</p>
//               </>
//             )}

//             {!loading && error && (
//               <>
//                 <p>Error: {error}</p>
//               </>
//             )}

//             {!loading && !error && alreadyCompleted && (
//               <div className="already-completed">
//                 <h3>Quiz Already Completed</h3>
//                 <p>You have already completed today's quiz</p>
//                 <p>Come back tomorrow for new questions!</p>
//                 <p>Your total points: {globalPoints}</p>
//                 <p>Wow!Go to products sections and buy products</p>
//                 <button
//                   onClick={() => navigate("/DashBoardPage/ProductsSection")}
//                 >
//                   Go to Products!!
//                 </button>
//                 <button onClick={() => navigate("/DashBoardPage")}>
//                   Back to DashBoard
//                 </button>
//               </div>
//             )}

//             {!loading && !error && quizCompleted && !alreadyCompleted && (
//               <>
//                 <h2>Quiz Completed</h2>
//                 <p>You scored {scoreThisSession} points this session</p>
//                 <p>Your total points is {globalPoints}</p>
//               </>
//             )}

//             {!loading && !error && !quizCompleted && !alreadyCompleted && (
//               <>
//                 <h2>Your global points is {globalPoints}</h2>
//                 <h2>
//                   Quiz Day {quizDay} - Question {currentIndex + 1}/
//                   {questions.length}
//                 </h2>
//                 {/* Display only the current question */}
//                 {questions.length > 0 && (
//                   <div className="answer-container">
//                     <h2 className="question">
//                       {questions[currentIndex].questionText}
//                     </h2>
//                     {questions[currentIndex].options.map(
//                       (option, optionIndex) => (
//                         <button
//                           key={optionIndex}
//                           value={option}
//                           onClick={() =>
//                             handleOptionClick(currentIndex, optionIndex)
//                           }
//                           className={`answer ${
//                             selectedOptions[currentIndex] === optionIndex
//                               ? "selected"
//                               : ""
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       )
//                     )}
//                   </div>
//                 )}
//                 {currentIndex < 9 ? (
//                   <button className="next-button" onClick={handleNext}>
//                     Next
//                   </button>
//                 ) : (
//                   <button className="next-button" onClick={handleComplete}>
//                     Complete
//                   </button>
//                 )}
//               </>
//             )}
//           </div>
//           {/* ✅ Indicator element for hover bar animation */}
//           <span className="indicator hidden"></span>
//         </div>
//       </>
//     </>
//   );
// };
// export default GamesSection;

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPoints, setPoints } from "../redux/userSlice";
import { selectPoints } from "../redux/userSlice";
import API from "../api/axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../assets/animations/GamesSection.css"; // ✅ Scoped CSS
import quizBg from "../assets/animations/Quiz-Section-New.png"; // ✅ Background image

const GamesSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalPoints = useSelector(selectPoints); //this line is to get the points from the redux store.
  const userIDz = useSelector((state) => state.user._id);

  const [questions, setQuestions] = useState([]);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [quizDay, setQuizDay] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scoreThisSession, setScoreThisSession] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [userId, setUserId] = useState(null);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);

  // UI-only state (no logic changes): feedback per question (good/bad)
  const [answerFeedback, setAnswerFeedback] = useState({});

  // refs for the indicator + answer buttons
  const indicatorRef = useRef(null);
  const answersRef = useRef([]); // will hold button elements for the current question

  const logoutsession = async () => {
    const response = await API.post(
      "/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );
    if (response.data.status === "success") {
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchDailyQuiz = async () => {
      try {
        // const response = await API.get(`/quiz/daily?userId=${userIDz}`); //From the frontend React app, send an HTTP GET request to your backend at the route /quiz/daily.
        const response = await API.get("/quiz/daily", {
          params: { id: userIDz },
          withCredentials: true,
        });

        console.log("Quiz response:", response.data);
        setUserId(response.data.userId);

        if (response.data.quizCompleted) {
          setAlreadyCompleted(true);
          setQuizCompleted(true);
        } else {
          setQuestions(response.data.quizzes);
          setAlreadyCompleted(false);
        }
        setQuizDay(response.data.quizDay);
        dispatch(setPoints(Number(response.data.points) || 0)); //will get points from backend and will set as global using dispatch method
        setLoading(false);
      } catch (err) {
        setError("Failed to load quiz questions", err.message);
        setLoading(false);
      }
    };
    fetchDailyQuiz();
  }, [dispatch]); //we want our effect to run only once so we dispatch which will not change

  // When we change question, hide indicator and reset refs for new question
  useEffect(() => {
    if (indicatorRef.current) {
      indicatorRef.current.classList.add("hidden");
      indicatorRef.current.classList.remove("good", "bad");
    }
    // reset stored dom refs for answers
    answersRef.current = [];
  }, [currentIndex, questions]);

  const handleOptionClick = (questionIndex, optionIndex) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: optionIndex, //{0:1,1:3}=>{question,answer}
    }));

    // UI-only feedback: mark selected option as good/bad immediately.
    // This does not change scoring logic; scoring still happens in handleNext.
    const question = questions[questionIndex];
    const isCorrect = question && question.answerIndex === optionIndex;
    setAnswerFeedback((prev) => ({
      ...prev,
      [questionIndex]: isCorrect ? "good" : "bad",
    }));

    // Show indicator on the selected element (and set color to green/red)
    const btn = answersRef.current[optionIndex];
    if (indicatorRef.current && btn) {
      const clientRect = btn.getBoundingClientRect();
      indicatorRef.current.style.setProperty(
        "--width",
        Math.round(clientRect.width)
      );
      indicatorRef.current.style.setProperty(
        "--height",
        Math.round(clientRect.height)
      );
      indicatorRef.current.style.setProperty("--x", Math.round(clientRect.x));
      indicatorRef.current.style.setProperty("--y", Math.round(clientRect.y));
      indicatorRef.current.classList.remove("hidden");
      indicatorRef.current.classList.remove("good", "bad");
      indicatorRef.current.classList.add(isCorrect ? "good" : "bad");
    }
  };

  const handleComplete = async () => {
    console.log("handleComplete called with score:", scoreThisSession, userId);
    try {
      setLoading(true);

      const requestedData = {
        points: scoreThisSession,
        userId: userId,
      };
      console.log("Sending request:", requestedData);

      const response = await API.patch("/quiz/updatePoints", requestedData);
      console.log("Response received", response.data);
      if (response.data.status === "success") {
        dispatch(
          setPoints(response.data.newPoints || globalPoints + scoreThisSession)
        );
        setQuizCompleted(true);
        alert("Points saved Successfully!");
      }
    } catch (err) {
      console.error("Failed to save points:", err);

      // Give user option to retry or continue offline
      const shouldRetry = window.confirm(
        "Failed to save your points. Would you like to try again?"
      );

      if (shouldRetry) {
        handleComplete(); // Retry
      } else {
        // Continue offline - update Redux only
        dispatch(setPoints(globalPoints + scoreThisSession));
        setQuizCompleted(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    const selected = selectedOptions[currentIndex];
    /*Because in JavaScript objects, selectedOptions[0] means:
"Get the value for the key 0 in this object." */
    if (selected === undefined) {
      alert("Please select an option");
      return;
    }

    const currentQuestion = questions[currentIndex];

    if (selected === currentQuestion.answerIndex) {
      dispatch(addPoints(10));
      setScoreThisSession((prev) => prev + 10);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleComplete();
      // setQuizCompleted(true);
    }
  };

  // Handle mouse move on an option to move the blue hover bar
  const handleOptionMouseMove = (optionIndex) => {
    // if user already answered this question, don't animate hover (we show feedback)
    if (selectedOptions[currentIndex] !== undefined) return;

    const btn = answersRef.current[optionIndex];
    if (!btn || !indicatorRef.current) return;
    const clientRect = btn.getBoundingClientRect();
    indicatorRef.current.style.setProperty(
      "--width",
      Math.round(clientRect.width)
    );
    indicatorRef.current.style.setProperty(
      "--height",
      Math.round(clientRect.height)
    );
    indicatorRef.current.style.setProperty("--x", Math.round(clientRect.x));
    indicatorRef.current.style.setProperty("--y", Math.round(clientRect.y));
    indicatorRef.current.classList.remove("hidden", "good", "bad");
  };

  const handleOptionMouseLeave = () => {
    // hide hover bar when pointer leaves an option (unless user already selected)
    if (indicatorRef.current) {
      // If user selected, we might want to keep it visible; here keep it visible if selected
      if (selectedOptions[currentIndex] === undefined) {
        indicatorRef.current.classList.add("hidden");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Games Section</title>
      </Helmet>
      <div className="quiz-info">
        <h2>Points earned today: {globalPoints}</h2>
        <h2>
          Quiz Day {quizDay} - Question {currentIndex + 1}/{questions.length}
        </h2>
      </div>

      {/* Wrap everything in .games-quiz so CSS is scoped to this component */}
      <div className="games-quiz" style={{ backgroundImage: `url(${quizBg})` }}>
        <input
          type="checkbox"
          id="drawer-toggle"
          className="relative sr-only peer"
        />
        <label
          htmlFor="drawer-toggle"
          className="absolute top-4 left-4 inline-block p-3 transition-all duration-500 bg-green-600 rounded-lg cursor-pointer peer-checked:left-64 peer-checked:rotate-180 z-30"
        >
          <div className="w-6 h-1 mb-1.5 -rotate-45 bg-white rounded-lg"></div>
          <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
        </label>
        <div className="fixed top-0 left-0 z-20 w-64 h-full transform -translate-x-full transition-transform duration-500 ease-in-out bg-white shadow-lg peer-checked:translate-x-0">
          <div className="px-6 py-8 space-y-6">
            <h2 className="text-lg font-semibold">Dashboard Menu</h2>
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => navigate("/DashBoardPage")}
                className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
              >
                Main Page
              </button>
              <button
                onClick={() => navigate("/DashBoardPage/VideosSection")}
                className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
              >
                Videos Section
              </button>
              <button
                onClick={() => navigate("/DashBoardPage/ProductsSection")}
                className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
              >
                Products Section
              </button>
              <button
                onClick={() => navigate("/DashBoardPage/CoachSection")}
                className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
              >
                Coach Section
              </button>
              <button
                onClick={() => navigate("/DashBoardPage/EmotionRecorder")}
                className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
              >
                Emotion Recorder
              </button>
              <button
                onClick={logoutsession}
                className="text-left px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
        {/* Sidebar End */}

        {/* ✅ Main content area with conditions */}
        <div className="quiz-container">
          <div className="page">
            {loading && (
              <div className="styled-text">
                <p>Loading questions...</p>
              </div>
            )}

            {!loading && error && (
              <div className="styled-text">
                <p>Error: {error}</p>
              </div>
            )}

            {!loading && !error && alreadyCompleted && (
              <div>
                <h3 className="styled-text">Quiz Already Completed</h3>
                <p className="styled-text">
                  You have already completed today's quiz
                </p>
                <p className="styled-text">
                  Come back tomorrow for new questions!
                </p>
                <p className="styled-text">Your total points: {globalPoints}</p>
                <p className="styled-text">
                  Wow!Go to products sections and buy products
                </p>
                <div className="button-container">
                  <button
                    onClick={() => navigate("/DashBoardPage/ProductsSection")}
                    className="products-move"
                  >
                    Go to Products!!
                  </button>
                  <button
                    className="dashboard-move"
                    onClick={() => navigate("/DashBoardPage")}
                    // className="dashboard-move"
                  >
                    Back to DashBoard
                  </button>
                </div>
              </div>
            )}

            {!loading && !error && quizCompleted && !alreadyCompleted && (
              <div>
                <h2 className="styled-text">Quiz Completed</h2>
                <p className="styled-text">
                  You scored {scoreThisSession} points this session
                </p>
              </div>
            )}

            {!loading && !error && !quizCompleted && !alreadyCompleted && (
              <>
                {/* Display only the current question */}
                {questions.length > 0 && (
                  <div
                    className="answer-container"
                    style={{ marginTop: "0.8rem" }}
                  >
                    <h2 className="question">
                      {questions[currentIndex].questionText}
                    </h2>
                    {questions[currentIndex].options.map(
                      (option, optionIndex) => {
                        // decide classes for this option (selected / good / bad)
                        const isSelected =
                          selectedOptions[currentIndex] === optionIndex;
                        const feedback = answerFeedback[currentIndex];
                        let btnClass = "answer";
                        if (feedback && isSelected) {
                          btnClass += ` ${feedback}`; // good or bad
                        } else if (isSelected) {
                          btnClass += " selected";
                        }

                        return (
                          <button
                            key={optionIndex}
                            value={option}
                            data-index={optionIndex + 1}
                            ref={(el) => (answersRef.current[optionIndex] = el)}
                            onClick={() =>
                              handleOptionClick(currentIndex, optionIndex)
                            }
                            onMouseMove={() =>
                              handleOptionMouseMove(optionIndex)
                            }
                            onMouseLeave={handleOptionMouseLeave}
                            className={btnClass}
                            style={isSelected ? { zIndex: 3 } : {}}
                          >
                            {option}
                          </button>
                        );
                      }
                    )}
                  </div>
                )}
                {currentIndex < 9 ? (
                  // Next should only appear after option selection
                  <button
                    className={
                      "next-button " +
                      (selectedOptions[currentIndex] !== undefined
                        ? "show"
                        : "")
                    }
                    onClick={handleNext}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className={
                      "next-button " +
                      (selectedOptions[currentIndex] !== undefined
                        ? "show"
                        : "")
                    }
                    onClick={handleComplete}
                  >
                    Complete
                  </button>
                )}
              </>
            )}
          </div>

          {/* ✅ Indicator element for hover bar animation (scoped) */}
          <span ref={indicatorRef} className="indicator hidden"></span>
        </div>
      </div>
    </>
  );
};
export default GamesSection;
