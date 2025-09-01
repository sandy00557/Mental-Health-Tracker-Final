// import { useNavigate } from "react-router-dom";
// import VideosSection from "../components/VideosSection.jsx";
// import ProductsSection from "../components/ProductsSection.jsx";
// import EmojisSection from "../components/EmojisSection.jsx";
// import GamesSection from "../components/GamesSection.jsx";
// import API from "../api/axios.js";
// import { setPoints } from "../redux/userSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import { selectPoints, selectNickName } from "../redux/userSlice";
// import { useState, useEffect } from "react";
// const DashBoardPage = () => {
//   const dispatch = useDispatch();
//   const [showVideos, setShowVideos] = useState(false);
//   const [showProducts, setShowProducts] = useState(false);
//   const [showGames, setShowGames] = useState(false);
//   const navigate = useNavigate();
//   const logoutsession = () => {
//     localStorage.removeItem("authToken");
//     navigate("/");
//   };

//   // useEffect(() => {
//   //   API.get("/quiz/getPoints?userId=68955900ea39ddff800e24ba")
//   //     .then((res) => {
//   //       if (res.data.status === "success") {
//   //         dispatch(setPoints(res.data.points)); //will get points from backend and will set as global using dispatch method
//   //       }
//   //     })
//   //     .catch(console.error);
//   // }, [dispatch]);

//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const userId = "68955900ea39ddff800e24ba"; // Your userId
//         const res = await API.get(`/quiz/getPoints?userId=${userId}`);
//         if (res.data.status === "success") {
//           dispatch(setPoints(res.data.points));
//         }
//       } catch (error) {
//         console.error("Error fetching points:", error);
//       }
//     };

//     fetchPoints();
//   }, [dispatch]);

//   const points = useSelector(selectPoints);
//   const name = useSelector((state) => state.user.name);
//   const nicknamez = useSelector(selectNickName);
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {console.log("Nickname:", nicknamez)}
//       <h1>Hello {nicknamez || name || "User"}</h1>
//       <p>Welcome to the dashboard!</p>
//       <p>Your Points is: {points} ....</p>

//       <button onClick={() => setShowVideos((prev) => !prev)}>
//         Videos Section
//       </button>
//       {showVideos && <VideosSection />}

//       <button onClick={() => setShowProducts((prev) => !prev)}>
//         Products Section
//       </button>
//       {showProducts && <ProductsSection />}

//       <button onClick={() => setShowGames((prev) => !prev)}>
//         Games Section
//       </button>
//       {showGames && <GamesSection />}

//       <button onClick={logoutsession}>Logout</button>

//       <EmojisSection />
//     </div>
//   );
// };
// export default DashBoardPage;

//version for navigation

// import { useNavigate, Route, Routes } from "react-router-dom";
// import VideosSection from "../components/VideosSection.jsx";
// import ProductsSection from "../components/ProductsSection.jsx";
// import EmojisSection from "../components/EmojisSection.jsx";
// import GamesSection from "../components/GamesSection.jsx";
// import API from "../api/axios.js";
// import { setPoints } from "../redux/userSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import { selectPoints, selectNickName } from "../redux/userSlice";
// import { useEffect } from "react";
// const DashBoardPage = () => {
//   const dispatch = useDispatch();
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

//   // useEffect(() => {
//   //   API.get("/quiz/getPoints?userId=68955900ea39ddff800e24ba")
//   //     .then((res) => {
//   //       if (res.data.status === "success") {
//   //         dispatch(setPoints(res.data.points)); //will get points from backend and will set as global using dispatch method
//   //       }
//   //     })
//   //     .catch(console.error);
//   // }, [dispatch]);

//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         // Your userId
//         const res = await API.get(`/quiz/getPoints?userId=${userId}`);
//         if (res.data.status === "success") {
//           dispatch(setPoints(res.data.points));
//         }
//       } catch (error) {
//         console.error("Error fetching points:", error);
//       }
//     };

//     fetchPoints();
//   }, [dispatch]);

//   const points = useSelector(selectPoints);
//   const name = useSelector((state) => state.user.name);
//   const nicknamez = useSelector(selectNickName);
//   const userId = useSelector((state) => state.user._id);
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {console.log("Nickname:", nicknamez)}
//       <h1>Hello {nicknamez || name || "User"}</h1>
//       <p>Welcome to the dashboard!</p>
//       <p>Your Points is: {points} ....</p>

//       <button onClick={() => navigate("VideosSection")}>Videos Section</button>
//       {/* why instead of conditional rendering we are directly using the button click?
//       for navigation conditional rendering will not sync correctly. and continuous rendering will
//       happen which will cause "/dashboard/dashbaord/,,...." which will cause throttling.
//       so we are using button click and already in app.jsx we made VideoSection as a child of Dashboard by using "/dashboardpage/*" */}
//       {/* {showVideos && navigate("DashBoardPage/VideosSection")} */}

//       <button onClick={() => navigate("ProductsSection")}>
//         Products Section
//       </button>
//       {/* {showProducts && <ProductsSection />} */}

//       <button onClick={() => navigate("GamesSection")}>Games Section</button>
//       {/* {showGames && <GamesSection />} */}

//       <button onClick={logoutsession}>Logout</button>

//       <EmojisSection />

//       <button onClick={() => navigate("CoachSection")}>Coach Section</button>

//       <button onClick={() => navigate("VoiceTextSection")}>
//         Voice_Text Section
//       </button>
//     </div>
//   );
// };
// export default DashBoardPage;

// import { useNavigate, Route, Routes } from "react-router-dom";
// import VideosSection from "../components/VideosSection.jsx";
// import ProductsSection from "../components/ProductsSection.jsx";
// import EmojisSection from "../components/EmojisSection.jsx";
// import GamesSection from "../components/GamesSection.jsx";
// import API from "../api/axios.js";
// import { setPoints } from "../redux/userSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import { selectPoints, selectNickName } from "../redux/userSlice";
// import { useEffect } from "react";
// import ShinyText from "../assets/animations/ShinyText.jsx"; // 👈 import shiny text

// const DashBoardPage = () => {
//   const dispatch = useDispatch();
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

//   // useEffect(() => {
//   //   API.get("/quiz/getPoints?userId=68955900ea39ddff800e24ba")
//   //     .then((res) => {
//   //       if (res.data.status === "success") {
//   //         dispatch(setPoints(res.data.points)); //will get points from backend and will set as global using dispatch method
//   //       }
//   //     })
//   //     .catch(console.error);
//   // }, [dispatch]);

//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         // Your userId
//         const res = await API.get(`/quiz/getPoints?userId=${userId}`);
//         if (res.data.status === "success") {
//           dispatch(setPoints(res.data.points));
//         }
//       } catch (error) {
//         console.error("Error fetching points:", error);
//       }
//     };

//     fetchPoints();
//   }, [dispatch]);

//   const points = useSelector(selectPoints);
//   const name = useSelector((state) => state.user.name);
//   const nicknamez = useSelector(selectNickName);
//   const userId = useSelector((state) => state.user._id);
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {console.log("Nickname:", nicknamez)}

//       {/* 👇 replaced with shiny text */}
//       {/* <ShinyText
//         text={`Hello ${nicknamez || name || "User"}`}
//         speed={3}
//         className="text-2xl font-bold"
//       /> */}

//       {/* <div className="h-screen flex items-center justify-center bg-black"> */}
//       <ShinyText>{`Hello ${nicknamez || name || "User"}`}</ShinyText>
//       {/* </div> */}

//       <p>Welcome to the dashboard!</p>
//       <p>Your Points is: {points} ....</p>

//       <button onClick={() => navigate("VideosSection")}>Videos Section</button>
//       {/* why instead of conditional rendering we are directly using the button click?
//       for navigation conditional rendering will not sync correctly. and continuous rendering will
//       happen which will cause "/dashboard/dashbaord/,,...." which will cause throttling.
//       so we are using button click and already in app.jsx we made VideoSection as a child of Dashboard by using "/dashboardpage/*" */}
//       {/* {showVideos && navigate("DashBoardPage/VideosSection")} */}

//       <button onClick={() => navigate("ProductsSection")}>
//         Products Section
//       </button>
//       {/* {showProducts && <ProductsSection />} */}

//       <button onClick={() => navigate("GamesSection")}>Games Section</button>
//       {/* {showGames && <GamesSection />} */}

//       <button onClick={() => navigate("CoachSection")}>Coach Section</button>

//       <button onClick={() => navigate("VoiceTextSection")}>
//         Voice_Text Section
//       </button>

//       <button onClick={logoutsession}>Logout</button>

//       <EmojisSection />
//     </div>
//   );
// };
// export default DashBoardPage;

// import { useNavigate, Route, Routes } from "react-router-dom";
// import VideosSection from "../components/VideosSection.jsx";
// import ProductsSection from "../components/ProductsSection.jsx";
// import EmojisSection from "../components/EmojisSection.jsx";
// import GamesSection from "../components/GamesSection.jsx";
// import API from "../api/axios.js";
// import { setPoints } from "../redux/userSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import { selectPoints, selectNickName } from "../redux/userSlice";
// import { useEffect } from "react";
// import ShinyText from "../assets/animations/ShinyText.jsx"; // 👈 import shiny text

// const DashBoardPage = () => {
//   const dispatch = useDispatch();
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

//   // useEffect(() => {
//   //   API.get("/quiz/getPoints?userId=68955900ea39ddff800e24ba")
//   //     .then((res) => {
//   //       if (res.data.status === "success") {
//   //         dispatch(setPoints(res.data.points)); //will get points from backend and will set as global using dispatch method
//   //       }
//   //     })
//   //     .catch(console.error);
//   // }, [dispatch]);
//   const points = useSelector(selectPoints);
//   const name = useSelector((state) => state.user.name);
//   const nicknamez = useSelector(selectNickName);
//   const userId = useSelector((state) => state.user._id);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         // Your userId
//         const res = await API.get(`/quiz/getPoints?userId=${userId}`);
//         if (res.data.status === "success") {
//           dispatch(setPoints(res.data.points));
//         }
//       } catch (error) {
//         console.error("Error fetching points:", error);
//       }
//     };

//     fetchPoints();
//   }, [dispatch]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* 👇 Sidebar */}
//       <input
//         type="checkbox"
//         id="drawer-toggle"
//         className="relative sr-only peer"
//       />
//       <label
//         htmlFor="drawer-toggle"
//         className="absolute top-4 left-4 inline-block p-3 transition-all duration-500 bg-indigo-600 rounded-lg cursor-pointer peer-checked:left-64 peer-checked:rotate-180 z-30"
//       >
//         <div className="w-6 h-1 mb-1.5 -rotate-45 bg-white rounded-lg"></div>
//         <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
//       </label>

//       <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
//         <div className="px-6 py-8 space-y-6">
//           <h2 className="text-lg font-semibold">Dashboard Menu</h2>
//           <nav className="flex flex-col gap-4">
//             <button
//               onClick={() => navigate("VideosSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("ProductsSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
//             >
//               Products Section
//             </button>
//             <button
//               onClick={() => navigate("GamesSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
//             >
//               Coach Section
//             </button>
//             <button
//               onClick={() => navigate("VoiceTextSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
//             >
//               Voice_Text Section
//             </button>
//             <button
//               onClick={logoutsession}
//               className="text-left px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
//             >
//               Logout
//             </button>
//           </nav>
//         </div>
//       </div>

//       {/* 👇 Main Content */}
//       <div className="flex-1 p-10 overflow-y-auto">
//         <h1>Dashboard</h1>
//         {console.log("Nickname:", nicknamez)}

//         {/* 👇 replaced with shiny text */}
//         {/* <ShinyText
//           text={`Hello ${nicknamez || name || "User"}`}
//           speed={3}
//           className="text-2xl font-bold"
//         /> */}

//         {/* <div className="h-screen flex items-center justify-center bg-black"> */}
//         <ShinyText>{`Hello ${nicknamez || name || "User"}`}</ShinyText>
//         {/* </div> */}

//         <p>Welcome to the dashboard!</p>
//         <p>Your Points is: {points} ....</p>

//         {/* Buttons are still here, sidebar duplicates them but flow unchanged */}
//         <button onClick={() => navigate("VideosSection")}>
//           Videos Section
//         </button>
//         {/* why instead of conditional rendering we are directly using the button click?
//         for navigation conditional rendering will not sync correctly. and continuous rendering will
//         happen which will cause "/dashboard/dashbaord/,,...." which will cause throttling.
//         so we are using button click and already in app.jsx we made VideoSection as a child of Dashboard by using "/dashboardpage/*" */}
//         {/* {showVideos && navigate("DashBoardPage/VideosSection")} */}

//         <button onClick={() => navigate("ProductsSection")}>
//           Products Section
//         </button>
//         {/* {showProducts && <ProductsSection />} */}

//         <button onClick={() => navigate("GamesSection")}>Games Section</button>
//         {/* {showGames && <GamesSection />} */}

//         <button onClick={() => navigate("CoachSection")}>Coach Section</button>

//         <button onClick={() => navigate("VoiceTextSection")}>
//           Voice_Text Section
//         </button>

//         <button onClick={logoutsession}>Logout</button>

//         <EmojisSection />
//       </div>
//     </div>
//   );
// };
// export default DashBoardPage;

import { useNavigate, Route, Routes } from "react-router-dom";
import VideosSection from "../components/VideosSection.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import EmojisSection from "../components/EmojisSection.jsx";
import GamesSection from "../components/GamesSection.jsx";
import CheckListSection from "../components/CheckListSection.jsx";
import API from "../api/axios.js";
import { setPoints } from "../redux/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectPoints, selectNickName } from "../redux/userSlice";
import { useState, useEffect } from "react";
import ShinyText from "../assets/animations/ShinyText.jsx"; // 👈 import shiny text

const DashBoardPage = () => {
  const dispatch = useDispatch();
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

  // useEffect(() => {
  //   API.get("/quiz/getPoints?userId=68955900ea39ddff800e24ba")
  //     .then((res) => {
  //       if (res.data.status === "success") {
  //         dispatch(setPoints(res.data.points)); //will get points from backend and will set as global using dispatch method
  //       }
  //     })
  //     .catch(console.error);
  // }, [dispatch]);
  const points = useSelector(selectPoints);
  const name = useSelector((state) => state.user.name);
  const nicknamez = useSelector(selectNickName);
  const userId = useSelector((state) => state.user._id);
  const navigate = useNavigate();
  console.log("This is userId" + userId);
  const [showProfile, setShowProfile] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const passwordUpdation = async () => {
    if (passwordValue && updatedValue && passwordValue == updatedValue) {
      setValidatePassword(true);
      return;
    } else {
      setValidatePassword(false);
    }
    try {
      const response = await API.patch(
        "/auth/updatePassword",
        {
          currentPassword: passwordValue,
          newPassword: updatedValue,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data.status === "success") {
        setSuccess(true);
      }
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        err.response.data.status === "fail"
      ) {
        setFailure(true);
      } else {
        console.error("Unexpected error:", err);
      }
    }
  };

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        // Your userId
        const res = await API.get(`/quiz/getPoints?userId=${userId}`);
        if (res.data.status === "success") {
          dispatch(setPoints(res.data.points));
        }
      } catch (error) {
        console.error("Error fetching points:", error);
      }
    };

    fetchPoints();
  }, [dispatch]);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* 👇 Sidebar Toggle (checkbox hack) */}
      <input
        type="checkbox"
        id="drawer-toggle"
        className="relative sr-only peer"
      />
      <label
        htmlFor="drawer-toggle"
        className="absolute top-4 left-4 inline-block p-3 transition-all duration-500 bg-indigo-600 rounded-lg cursor-pointer peer-checked:left-64 peer-checked:rotate-180 z-30"
      >
        <div className="w-6 h-1 mb-1.5 -rotate-45 bg-white rounded-lg"></div>
        <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
      </label>

      {/* 👇 Sidebar (animated slide-in) */}
      <div className="fixed top-0 left-0 z-20 w-64 h-full transform -translate-x-full transition-transform duration-500 ease-in-out bg-white shadow-lg peer-checked:translate-x-0">
        <div className="px-6 py-8 space-y-6">
          <h2 className="text-lg font-semibold">Dashboard Menu</h2>
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => navigate("VideosSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Videos Section
            </button>
            <button
              onClick={() => navigate("ProductsSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Products Section
            </button>
            <button
              onClick={() => navigate("GamesSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Games Section
            </button>
            <button
              onClick={() => navigate("CoachSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Coach Section
            </button>
            <button
              onClick={() => navigate("VoiceTextSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Voice_Text Section
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

      {/* 👇 Main Content (shifts smoothly) */}
      <div className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
        <h1>Dashboard</h1>
        {console.log("Nickname:", nicknamez)}

        {/* 👇 replaced with shiny text */}
        {/* <ShinyText
          text={`Hello ${nicknamez || name || "User"}`}
          speed={3}
          className="text-2xl font-bold"
        /> */}

        {/* <div className="h-screen flex items-center justify-center bg-black"> */}
        <ShinyText>{`Hello ${nicknamez || name || "User"}`}</ShinyText>
        {/* </div> */}

        <p>Welcome to the dashboard!</p>
        <p>Your Points is: {points} ....</p>

        {/* Buttons are still here, sidebar duplicates them but flow unchanged */}
        {/* <button onClick={() => navigate("VideosSection")}>
          Videos Section
        </button> */}
        {/* why instead of conditional rendering we are directly using the button click?
        for navigation conditional rendering will not sync correctly. and continuous rendering will
        happen which will cause "/dashboard/dashbaord/,,...." which will cause throttling.
        so we are using button click and already in app.jsx we made VideoSection as a child of Dashboard by using "/dashboardpage/*" */}
        {/* {showVideos && navigate("DashBoardPage/VideosSection")} */}

        <button onClick={() => setShowProfile((prev) => !prev)}>Profile</button>
        {showProfile && (
          <>
            <button onClick={() => setUpdatingPassword((prev) => !prev)}>
              Update Password
            </button>
            {updatingPassword && (
              <>
                <input
                  type="text"
                  onChange={(e) => setPasswordValue(e.target.value)}
                  placeholder="Enter your current password"
                />
                <input
                  type="text"
                  onChange={(e) => setUpdatedValue(e.target.value)}
                  placeholder="Enter your updated password"
                />
                <button onClick={passwordUpdation}>Confirm</button>
                {validatePassword && (
                  <h1 style={{ color: "red" }}>!Both Passwords are same</h1>
                )}
                {success && (
                  <h1 style={{ color: "lightgreen" }}>
                    Password updated successfully.
                  </h1>
                )}
                {failure && (
                  <h1 style={{ color: "red" }}>
                    Please enter the correct and valid password
                  </h1>
                )}
              </>
            )}
          </>
        )}
        <EmojisSection />
        <CheckListSection />
      </div>
    </div>
  );
};
export default DashBoardPage;
