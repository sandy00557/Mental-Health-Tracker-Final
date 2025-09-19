// //Original Code:
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage.jsx";
// import SignInPage from "./pages/SignInPage.jsx";
// import DashBoardPage from "./pages/DashBoardPage.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import VideosSection from "./components/VideosSection.jsx";
// import ProductsSection from "./components/ProductsSection.jsx";
// import GamesSection from "./components/GamesSection.jsx";
// import CoachSection from "./components/CoachSection.jsx";
// import VoiceToText from "./components/VoicetextSection.jsx";
// import OfflineAnimation from "./components/OfflineAnimations.jsx";
// import "./index.css";

// function App() {
//   return (
//     <>
//       <OfflineAnimation />
//       {/* step 1:call the component */}
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/SignInPage" element={<SignInPage />} />
//         <Route
//           path="/DashBoardPage/*"
//           element={
//             // <ProtectedRoute>
//             //   <DashBoardPage />
//             // </ProtectedRoute>
//             <DashBoardPage />
//           }
//         />
//         <Route
//           path="/DashBoardPage/VideosSection"
//           element={<VideosSection />}
//         />
//         <Route path="/DashBoardPage/GamesSection" element={<GamesSection />} />
//         <Route
//           path="/DashBoardPage/ProductsSection"
//           element={<ProductsSection />}
//         />
//         <Route path="/DashBoardPage/CoachSection" element={<CoachSection />} />
//         <Route
//           path="/DashBoardPage/VoicetextSection"
//           element={<VoiceToText />}
//         />
//         {/* <Route path="/DashBoardPage" element={<DashBoardPage />} /> */}
//       </Routes>
//     </>
//   );
// }

// export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentUser,
  selectIsAuthenticated,
  selectError,
  selectLoading,
} from "./redux/userSlice.js";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import DashBoardPage from "./pages/DashBoardPage.jsx";
import VideosSection from "./components/VideosSection.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import GamesSection from "./components/GamesSection.jsx";
import CoachSection from "./components/CoachSection.jsx";
import VoiceToText from "./components/VoicetextSection.jsx";
import OfflineAnimation from "./components/OfflineAnimations.jsx";
import "./index.css";
import EmotionRecorder from "./components/EmotionRecorder.jsx";
import "../src/assets/animations/EmojisSection.css"; // ✅ Import CSS
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // On app load or refresh, fetch current user from backend
  // useEffect(() => {
  //   dispatch(fetchCurrentUser())
  //     .unwrap()
  //     .catch((err) => {
  //       // If fetch fails (401 or other), log out
  //       dispatch({ type: "user/logoutUser" });
  //       console.log(err);
  //     });
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // While loading, show a spinner or placeholder
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <OfflineAnimation />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Navigate to="/DashBoardPage" /> : <LoginPage />}
        />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route
          path="/DashBoardPage/*"
          element={
            isAuth ? (
              <DashBoardPage className="dashboard-container" />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/DashBoardPage/VideosSection"
          element={<VideosSection />}
        />
        <Route path="/DashBoardPage/GamesSection" element={<GamesSection />} />
        <Route
          path="/DashBoardPage/ProductsSection"
          element={<ProductsSection />}
        />
        <Route path="/DashBoardPage/CoachSection" element={<CoachSection />} />
        <Route
          path="/DashBoardPage/EmotionRecorder"
          element={<EmotionRecorder />}
        />
      </Routes>
      {error && <div className="error-banner">{error}</div>}
    </>
  );
}

export default App;
