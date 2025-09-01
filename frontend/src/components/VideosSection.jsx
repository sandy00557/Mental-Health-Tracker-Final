// const VideosSection = () => {
//   return (
//     <div>
//       <h1>Videos Section</h1>
//       <p>
//         Here you can find various videos related to mental health and focus.
//       </p>
//       {/* <a href="https://youtu.be/rkZl2gsLUp4?si=LaP74D-cXyn5YK6u">
//                 <img src="https://img.youtube.com/vi/rkZl2gsLUp4/hqdefault.jpg"/>
//             </a> */}
//       {/* Add video content or links here */}
//       <div
//         style={{
//           position: "relative",
//           paddingBottom: "56.25%",
//           height: 0,
//           overflow: "hidden",
//           maxWidth: "100%",
//         }}
//       >
//         <iframe
//           src="https://www.youtube.com/embed/rkZl2gsLUp4"
//           title="Mindfulness Video"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             borderRadius: "8px",
//           }}
//         ></iframe>
//       </div>
//     </div>
//   );
// };
// export default VideosSection;

// import { videos } from "../data/VideosData.js";
// const VideosSection = () => {
//   return (
//     <article>
//       <h1>Videos Section</h1>
//       <p>
//         Here you can find various videos related to mental health and focus.
//       </p>
//       {/* <a href="https://youtu.be/rkZl2gsLUp4?si=LaP74D-cXyn5YK6u">
//                 <img src="https://img.youtube.com/vi/rkZl2gsLUp4/hqdefault.jpg"/>
//             </a> */}
//       {/* Add video content or links here */}
//       {videos.map((video) => {
//         return (
//           <div
//             style={{
//               position: "relative",
//               paddingBottom: "56.25%",
//               height: 0,
//               overflow: "hidden",
//               maxWidth: "100%",
//             }}
//             key={video.videoId}
//           >
//             <iframe
//               src={`https://www.youtube.com/embed/${video.videoId}`}
//               title="Mindfulness Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "8px",
//               }}
//             ></iframe>
//           </div>
//         );
//       })}
//     </article>
//   );
// };
// export default VideosSection;

// import { useState, useMemo } from "react";
// import { videos } from "../data/VideosData.js";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios.js";
// const VideosSection = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
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

//   //useMemo when again restarting the work.
//   const VideoFilter = useMemo(
//     () =>
//       videos.filter((video) =>
//         video.tags.some(
//           //.some means atleast one string if it has tags["mindfulness", "mental health", "focus"] it should atleast match one
//           (tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       ),
//     [searchTerm]
//   );
//   return (
//     <>
//       <Helmet>
//         <title>📹 Videos Section</title>
//       </Helmet>
//       <input
//         type="checkbox"
//         id="drawer-toggle"
//         className="relative sr-only peer"
//       />
//       <label
//         htmlFor="drawer-toggle"
//         className="absolute top-4 left-4 inline-block p-3 transition-all duration-500 bg-green-600 rounded-lg cursor-pointer peer-checked:left-64 peer-checked:rotate-180 z-30"
//       >
//         <div className="w-6 h-1 mb-1.5 -rotate-45 bg-white rounded-lg"></div>
//         <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
//       </label>

//       {/* Sidebar */}
//       <div className="fixed top-0 left-0 z-20 w-64 h-full transform -translate-x-full transition-transform duration-500 ease-in-out bg-white shadow-lg peer-checked:translate-x-0">
//         <div className="px-6 py-8 space-y-6">
//           <h2 className="text-lg font-semibold">Dashboard Menu</h2>
//           <nav className="flex flex-col gap-4">
//             <button
//               onClick={() => navigate("VideosSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("VoiceTextSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               VoiceText Section
//             </button>
//             <button
//               onClick={() => navigate("GamesSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Coach Section
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
//       <article className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
//         <h1>Videos Section</h1>
//         <p>
//           Here you can find various videos related to mental health and focus.
//         </p>
//         {/* <a href="https://youtu.be/rkZl2gsLUp4?si=LaP74D-cXyn5YK6u">
//                 <img src="https://img.youtube.com/vi/rkZl2gsLUp4/hqdefault.jpg"/>
//             </a> */}
//         {/* Add video content or links here */}
//         <input
//           type="text"
//           placeholder="Search for post based on your current mood"
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         {VideoFilter.map((video) => {
//           return (
//             <div
//               style={{
//                 position: "relative",
//                 paddingBottom: "56.25%",
//                 height: 0,
//                 overflow: "hidden",
//                 maxWidth: "100%",
//               }}
//               key={video.videoId}
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${video.videoId}`}
//                 title="Mindfulness Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "8px",
//                 }}
//               ></iframe>
//             </div>
//           );
//         })}
//       </article>
//     </>
//   );
// };
// export default VideosSection;

//original code without css
// import { useState, useMemo } from "react";
// import { videos } from "../data/VideosData.js";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios.js";

// const VideosSection = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
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

//   //useMemo when again restarting the work.
//   const VideoFilter = useMemo(
//     () =>
//       videos.filter((video) =>
//         video.tags.some(
//           //.some means atleast one string if it has tags["mindfulness", "mental health", "focus"] it should atleast match one
//           (tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       ),
//     [searchTerm]
//   );

//   return (
//     <>
//       <Helmet>
//         <title>📹 Videos Section</title>
//       </Helmet>
//       <input
//         type="checkbox"
//         id="drawer-toggle"
//         className="relative sr-only peer"
//       />
//       <label
//         htmlFor="drawer-toggle"
//         className="absolute top-4 left-4 inline-block p-3 transition-all duration-500 bg-green-600 rounded-lg cursor-pointer peer-checked:left-64 peer-checked:rotate-180 z-30"
//       >
//         <div className="w-6 h-1 mb-1.5 -rotate-45 bg-white rounded-lg"></div>
//         <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
//       </label>

//       {/* Sidebar */}
//       <div className="fixed top-0 left-0 z-20 w-64 h-full transform -translate-x-full transition-transform duration-500 ease-in-out bg-white shadow-lg peer-checked:translate-x-0">
//         <div className="px-6 py-8 space-y-6">
//           <h2 className="text-lg font-semibold">Dashboard Menu</h2>
//           <nav className="flex flex-col gap-4">
//             <button
//               onClick={() => navigate("VideosSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("VoiceTextSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               VoiceText Section
//             </button>
//             <button
//               onClick={() => navigate("GamesSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Coach Section
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

//       <article className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
//         <h1 className="text-2xl font-bold mb-4">Videos Section</h1>
//         <p className="mb-6">
//           Here you can find various videos related to mental health and focus.
//         </p>

//         {/* Animated Search Bar */}
//         <div className="relative w-full max-w-xl mx-auto mb-8">
//           <input
//             type="text"
//             placeholder="Search for post based on your current mood"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="peer w-full py-3 pl-12 pr-4 rounded-full border border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-500 outline-none text-lg"
//           />
//           {/* Magnifier Icon */}
//           <svg
//             className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500 transition-transform duration-500 peer-focus:rotate-90"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             viewBox="0 0 24 24"
//           >
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>
//           {/* Decorative sparks on focus */}
//           <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-1 opacity-0 peer-focus:opacity-100 transition-opacity duration-500">
//             <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
//             <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
//             <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
//           </div>
//         </div>

//         {VideoFilter.map((video) => {
//           return (
//             <div
//               style={{
//                 position: "relative",
//                 paddingBottom: "56.25%",
//                 height: 0,
//                 overflow: "hidden",
//                 maxWidth: "100%",
//               }}
//               key={video.videoId}
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${video.videoId}`}
//                 title="Mindfulness Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "8px",
//                 }}
//               ></iframe>
//             </div>
//           );
//         })}
//       </article>
//     </>
//   );
// };
// export default VideosSection;

import { useState, useMemo, useRef, useEffect } from "react";
import { videos } from "../data/VideosData.js";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import API from "../api/axios.js";

const VideosSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
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

  //useMemo when again restarting the work.
  const VideoFilter = useMemo(
    () =>
      videos.filter((video) =>
        video.tags.some(
          //.some means atleast one string if it has tags["mindfulness", "mental health", "focus"] it should atleast match one
          (tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
    [searchTerm]
  );

  // Tilt Hook for Codebytes-style animation
  const useTilt = (active) => {
    const ref = useRef(null);

    useEffect(() => {
      if (!ref.current || !active) return;

      const state = { rect: null, mouseX: null, mouseY: null };
      const el = ref.current;

      const handleMouseMove = (e) => {
        if (!state.rect) state.rect = el.getBoundingClientRect();
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;

        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", () => {
        el.style.setProperty("--px", 0.5);
        el.style.setProperty("--py", 0.5);
      });

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);

    return ref;
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
              onClick={() => navigate("/DashBoardPage/ProductsSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Products Section
            </button>
            <button
              onClick={() => navigate("/DashBoardPage/GamesSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Games Section
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

      <article className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
        <h1 className="text-2xl font-bold mb-4">Videos Section</h1>
        <p className="mb-6">
          Here you can find various videos related to mental health and focus.
        </p>

        {/* Animated Search Bar */}
        <div className="relative w-full max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for post based on your current mood"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="peer w-full py-3 pl-12 pr-4 rounded-full border border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-500 outline-none text-lg"
          />
          {/* Magnifier Icon */}
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500 transition-transform duration-500 peer-focus:rotate-90"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          {/* Decorative sparks on focus */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-1 opacity-0 peer-focus:opacity-100 transition-opacity duration-500">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Corrected Tilt Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VideoFilter.map((video) => {
            const ref = useTilt(true); // Enable tilt
            return (
              <div
                key={video.videoId}
                ref={ref}
                className="group perspective-[1000px] w-full max-w-md mx-auto"
                style={{ "--px": 0.5, "--py": 0.5 }}
              >
                <div
                  className="relative w-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform-gpu"
                  style={{
                    transform: `rotateY(calc((var(--px)-0.5)*30deg)) rotateX(calc((0.5-var(--py))*30deg))`,
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title="Mindfulness Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl"
                  ></iframe>
                  {/* Optional overlay spark/shine */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping absolute top-2 left-2"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce absolute bottom-2 right-4"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse absolute top-1/2 left-1/2"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default VideosSection;
