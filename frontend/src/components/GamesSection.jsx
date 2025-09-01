// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPoints, setPoints } from "../redux/userSlice";
// import { selectPoints } from "../redux/userSlice";
// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";

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
//         const response = await API.get(`/quiz/daily?userId=${userIDz}`); //From the frontend React app, send an HTTP GET request to your backend at the route /quiz/daily.
//         // const response = await API.get("/quiz/daily", { withCredentials: true });

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
//   if (loading) {
//     return (
//       <>
//         <Helmet>
//           <title>🎮 Games Section</title>
//         </Helmet>
//         <p>Loading questions...</p>
//       </>
//     );
//   }
//   if (error) {
//     return (
//       <>
//         ;<p>Error: {error}</p>
//       </>
//     );
//   }

//   if (alreadyCompleted) {
//     return (
//       <div>
//         <h3>Quiz Already Completed</h3>
//         <p>You have already completed today's quiz</p>
//         <p>Come back tomorrow for new questions!</p>
//         <p>Your total points: {globalPoints}</p>
//         <p>Wow!Go to products sections and buy products</p>
//         <button onClick={() => navigate("/DashBoardPage/ProductsSection")}>
//           Go to Products!!
//         </button>
//         <button onClick={() => navigate("/DashBoardPage")}>
//           Back to DashBoard
//         </button>
//       </div>
//     );
//   }

//   if (quizCompleted) {
//     return (
//       <>
//         <h2>Quiz Completed</h2>
//         <p>You scored {scoreThisSession} points this session</p>
//         <p>Your total points is {globalPoints}</p>
//       </>
//     );
//   }
//   return (
//     <>
//       <h2>Your global points is {globalPoints}</h2>
//       <h2>
//         Quiz Day {quizDay} - Question {currentIndex + 1}/{questions.length}
//       </h2>

//       {/* Display only the current question */}
//       {questions.length > 0 && (
//         <div>
//           <h2>{questions[currentIndex].questionText}</h2>
//           {questions[currentIndex].options.map((option, optionIndex) => (
//             <button
//               key={optionIndex}
//               value={option}
//               onClick={() => handleOptionClick(currentIndex, optionIndex)}
//               style={{
//                 backgroundColor:
//                   selectedOptions[currentIndex] === optionIndex
//                     ? "lightblue"
//                     : "",
//               }}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}

//       {currentIndex < 9 ? (
//         <button onClick={handleNext}>Next</button>
//       ) : (
//         <button onClick={handleComplete}>Complete</button>
//       )}
//     </>
//   );
// };
// export default GamesSection;

// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios";
// import { setPoints } from "../redux/userSlice";

// const GamesSection = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const globalPoints = useSelector((state) => state.user.points);

//   // Sidebar toggle state
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Quiz states
//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [alreadyCompleted, setAlreadyCompleted] = useState(false);
//   const [quizDay, setQuizDay] = useState(1);
//   const [scoreThisSession, setScoreThisSession] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch quiz questions
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const res = await API.get("/quiz");
//         if (res.data.alreadyCompleted) {
//           setAlreadyCompleted(true);
//         } else {
//           setQuestions(res.data.questions);
//           setQuizDay(res.data.quizDay);
//         }
//       } catch (err) {
//         console.log(err);
//         setError("Failed to load quiz questions");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchQuestions();
//   }, []);

//   // Handle option selection
//   const handleOptionClick = (questionIndex, optionIndex) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [questionIndex]: optionIndex,
//     }));
//   };

//   // Handle Next button
//   const handleNext = () => {
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   // Handle quiz completion
//   const handleComplete = async () => {
//     try {
//       const answers = questions.map((q, i) => ({
//         questionId: q._id,
//         selected: selectedOptions[i],
//       }));

//       const res = await API.post("/quiz/submit", { answers });
//       setQuizCompleted(true);
//       setScoreThisSession(res.data.scoreThisSession);
//       dispatch(setPoints(res.data.totalPoints));
//     } catch (err) {
//       console.log(err);
//       setError("Failed to submit quiz");
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-500 ease-in-out z-50
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div className="p-6 text-lg font-bold">Dashboard</div>
//         <ul className="mt-6">
//           <li
//             className="p-4 hover:bg-gray-700 cursor-pointer"
//             onClick={() => navigate("/DashBoardPage")}
//           >
//             Home
//           </li>
//           <li
//             className="p-4 hover:bg-gray-700 cursor-pointer"
//             onClick={() => navigate("/DashBoardPage/ProductsSection")}
//           >
//             Products
//           </li>
//           <li
//             className="p-4 hover:bg-gray-700 cursor-pointer"
//             onClick={() => navigate("/DashBoardPage/Videos")}
//           >
//             Videos
//           </li>
//           <li
//             className="p-4 hover:bg-gray-700 cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             Logout
//           </li>
//         </ul>
//       </div>

//       {/* Main content */}
//       <div
//         className={`flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out ${
//           isSidebarOpen ? "ml-64" : "ml-0"
//         }`}
//       >
//         {/* Sidebar Toggle Button */}
//         <button
//           className="mb-4 p-2 bg-gray-900 text-white rounded"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
//         </button>

//         {/* Loading and Error States */}
//         {loading ? (
//           <div>Loading quiz...</div>
//         ) : error ? (
//           <div>{error}</div>
//         ) : alreadyCompleted ? (
//           <div>
//             <h3>Quiz Already Completed</h3>
//             <p>You have already completed today's quiz</p>
//             <p>Come back tomorrow for new questions!</p>
//             <p>Your total points: {globalPoints}</p>
//             <p>Wow! Go to products sections and buy products</p>
//             <button onClick={() => navigate("/DashBoardPage/ProductsSection")}>
//               Go to Products!!
//             </button>
//             <button onClick={() => navigate("/DashBoardPage")}>
//               Back to DashBoard
//             </button>
//           </div>
//         ) : quizCompleted ? (
//           <>
//             <h2>Quiz Completed</h2>
//             <p>You scored {scoreThisSession} points this session</p>
//             <p>Your total points is {globalPoints}</p>
//           </>
//         ) : (
//           <>
//             <h2>Your global points is {globalPoints}</h2>
//             <h2>
//               Quiz Day {quizDay} - Question {currentIndex + 1}/
//               {questions.length}
//             </h2>

//             {/* Display only the current question */}
//             {questions.length > 0 && (
//               <div>
//                 <h2>{questions[currentIndex].questionText}</h2>
//                 {questions[currentIndex].options.map((option, optionIndex) => (
//                   <button
//                     key={optionIndex}
//                     value={option}
//                     onClick={() => handleOptionClick(currentIndex, optionIndex)}
//                     style={{
//                       backgroundColor:
//                         selectedOptions[currentIndex] === optionIndex
//                           ? "lightblue"
//                           : "",
//                     }}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {currentIndex < questions.length - 1 ? (
//               <button onClick={handleNext}>Next</button>
//             ) : (
//               <button onClick={handleComplete}>Complete</button>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GamesSection;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { setPoints } from "../redux/userSlice";
import { Helmet } from "react-helmet-async";

const GamesSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalPoints = useSelector((state) => state.user.points);

  // Quiz states
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);
  const [quizDay, setQuizDay] = useState(1);
  const [scoreThisSession, setScoreThisSession] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  // Fetch quiz questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await API.get("/quiz");
        if (res.data.alreadyCompleted) {
          setAlreadyCompleted(true);
        } else {
          setQuestions(res.data.questions);
          setQuizDay(res.data.quizDay);
        }
      } catch (err) {
        console.log(err);
        setError("Failed to load quiz questions");
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  // Handle option selection
  const handleOptionClick = (questionIndex, optionIndex) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  // Handle Next button
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle quiz completion
  const handleComplete = async () => {
    try {
      const answers = questions.map((q, i) => ({
        questionId: q._id,
        selected: selectedOptions[i],
      }));

      const res = await API.post("/quiz/submit", { answers });
      setQuizCompleted(true);
      setScoreThisSession(res.data.scoreThisSession);
      dispatch(setPoints(res.data.totalPoints));
    } catch (err) {
      console.log(err);
      setError("Failed to submit quiz");
    }
  };

  return (
    <>
      <Helmet>
        <title>📹 Videos Section</title>
      </Helmet>
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

      {/* Sidebar */}
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
              onClick={() => navigate("/DashBoardPage/VoiceTextSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              VoiceText Section
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

      {/* Main content */}
      <div className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
        {/* Loading and Error States */}
        {loading ? (
          <div>Loading quiz...</div>
        ) : error ? (
          <div>{error}</div>
        ) : alreadyCompleted ? (
          <div>
            <h3>Quiz Already Completed</h3>
            <p>You have already completed today's quiz</p>
            <p>Come back tomorrow for new questions!</p>
            <p>Your total points: {globalPoints}</p>
            <p>Wow! Go to products sections and buy products</p>
            <button onClick={() => navigate("/DashBoardPage/ProductsSection")}>
              Go to Products!!
            </button>
            <button onClick={() => navigate("/DashBoardPage")}>
              Back to DashBoard
            </button>
          </div>
        ) : quizCompleted ? (
          <>
            <h2>Quiz Completed</h2>
            <p>You scored {scoreThisSession} points this session</p>
            <p>Your total points is {globalPoints}</p>
          </>
        ) : (
          <>
            <h2>Your global points is {globalPoints}</h2>
            <h2>
              Quiz Day {quizDay} - Question {currentIndex + 1}/
              {questions.length}
            </h2>

            {/* Display only the current question */}
            {questions.length > 0 && (
              <div>
                <h2>{questions[currentIndex].questionText}</h2>
                {questions[currentIndex].options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    value={option}
                    onClick={() => handleOptionClick(currentIndex, optionIndex)}
                    style={{
                      backgroundColor:
                        selectedOptions[currentIndex] === optionIndex
                          ? "lightblue"
                          : "",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {currentIndex < questions.length - 1 ? (
              <button onClick={handleNext}>Next</button>
            ) : (
              <button onClick={handleComplete}>Complete</button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default GamesSection;
