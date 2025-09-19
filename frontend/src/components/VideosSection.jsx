// original code without css
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
//         {VideoFilter.length === 0 && (
//           <p className="text-center text-gray-500">No videos found.</p>
//         )}

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

// import React from "react";
// import { useState, useMemo } from "react";
// import { videos } from "../data/VideosData.js";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios.js";

// /* -----------------------------------------
//   NOTE: I preserved your original comments
//   and code flow. I only added styling and a
//   small AnimatedSlider component (below the
//   search bar) that uses your VideoFilter.
// ------------------------------------------*/

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

//   /* ---------------------------------------------------
//      Slider CSS (converted to plain CSS from the pen).
//      It's included inline for quick integration — move
//      it to an external CSS file if you prefer.
//      - Removed the 5-item cap (shows ALL videos)
//      - Buttons positioned closer so clicks work reliably
//      - Tilt listener attached per-slide (so hover/touch tilts)
//      - Hidden original list at bottom visually (.orig-list)
//   ----------------------------------------------------*/
//   const sliderStyles = `
// /* ---- hero/background for active slide (dimmed) ---- */
// .slideBackground {
//   position: fixed;
//   top: 0;
//   left: -10%;
//   right: -10%;
//   bottom: 0;
//   background-size: cover;
//   background-position: center center;
//   z-index: -3;
//   opacity: 0;
//   transition: opacity 0.35s linear, transform 0.35s ease-in-out, filter 0.35s;
//   pointer-events: none;
//   transform: translateX(calc(10% * var(--dir)));
//   filter: blur(6px) brightness(0.78) saturate(1.05);
// }
// .slide[data-active] .slideBackground { opacity: 0.22; transform: none; }

// /* ---- slides container (keeps preview centered) ---- */
// .slides-wrapper {
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   margin: 1.6rem 0 2rem;
//   pointer-events: auto;
// }
// .slides {
//   display: grid;
//   width: min(1200px, 92vw);
//   height: auto;
//   position: relative;
//   align-items: center;
//   min-height: 36vw;
//   max-height: 640px;
//   margin: 0 auto;
// }

// /* stack slides exactly on same grid area for 3D carousel effect */
// .slides > .slide { grid-area: 1 / -1; pointer-events: none; }

// /* ---- nav buttons (moved inwards) ---- */
// .slides > button {
//   appearance: none;
//   background: rgba(255,255,255,0.06);
//   border: none;
//   color: white;
//   position: absolute;
//   font-size: 2.6rem;
//   width: 3.4rem;
//   height: 3.4rem;
//   top: 42%;
//   transition: opacity 0.22s, transform 0.22s;
//   opacity: 0.92;
//   z-index: 60;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   border-radius: 50%;
//   backdrop-filter: blur(4px);
//   pointer-events: auto;
// }
// .slides > button:hover { transform: scale(1.06); opacity: 1; }
// .slides > button:focus { outline: none; box-shadow: 0 0 0 3px rgba(0,0,0,0.18); }
// /* moved inwards so they are clickable on different layouts */
// .slides > button:first-child { left: 8px; }
// .slides > button:last-child { right: 8px; }

// /* ---- card visual ---- */
// .slideContent {
//   width: 34vw;
//   max-width: 420px;
//   height: 44vw;
//   max-height: 540px;
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   transition: transform 0.45s cubic-bezier(.2,.9,.2,1), opacity 0.35s;
//   opacity: 0.9;
//   display: grid;
//   align-content: center;
//   transform-style: preserve-3d;
//   box-shadow: 0 18px 40px rgba(0,0,0,0.55);
//   border-radius: 12px;
//   overflow: hidden;
//   position: relative;
//   left: 50%;
//   /* default transforms use CSS vars provided inline from JS */
//   transform: translateX(calc(-50% + (100% * var(--offset)))) rotateY(calc(-18deg * var(--dir)));
//   pointer-events: auto;
// }

// /* compute rotation origin params from vars (available because useTilt writes --px/--py on the slide DOM) */
// .slideContent { --x: calc(var(--px,0.5) - 0.5); --y: calc(var(--py,0.5) - 0.5); }

// /* allow tilt on hover for any slide (use --x / --y computed above) */
// .slideContent:hover {
//   transition: transform 0s;
//   transform:
//     perspective(1000px)
//     translateX(calc(-50% + (100% * var(--offset))))
//     rotateY(calc((var(--x) * 25deg) + (-18deg * var(--dir))))
//     rotateX(calc((var(--y) * -25deg)));
// }

// /* slide inner content (text overlay) */
// .slideContentInner {
//   transform-style: preserve-3d;
//   transform: translateZ(2rem);
//   transition: opacity 0.25s linear;
//   text-shadow: 0 6px 20px rgba(0,0,0,0.6);
//   opacity: 0;
//   padding: 1rem 1.25rem;
//   color: #fff;
//   display:flex;
//   flex-direction:column;
//   gap:0.25rem;
// }
// .slideTitle { font-size: 1.05rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin:0; }
// .slideSubtitle { font-size: 0.8rem; opacity: 0.85; margin:0; }
// .slideDescription { margin: 0; font-size: 0.75rem; opacity: 0.9; }

// /* video/thumb fills card */
// .slideVideoWrap, .slideThumb {
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   display:block;
//   object-fit: cover;
// }

// /* show active slide more prominently */
// .slide[data-active] {
//   z-index: 40;
//   pointer-events: auto;
// }
// .slide[data-active] .slideContent {
//   opacity: 1;
//   transform: translateX(calc(-50% + (100% * var(--offset)))) rotateY(0deg) scale(1.02);
//   transition: transform 0.35s cubic-bezier(.2,.9,.2,1), opacity 0.35s;
// }
// .slide[data-active] .slideContentInner { opacity: 1; transform: translateZ(2rem); }

// /* active slide video iframe styling */
// .slideVideoWrap iframe {
//   width: 100%;
//   height: 100%;
//   border: 0;
//   display:block;
// }

// /* decorative/play icon on top */
// .slidePlay {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%,-50%);
//   z-index: 22;
//   font-size: 2.2rem;
//   opacity: 0.95;
//   pointer-events:none;
// }

// /* small responsive tweaks */
// @media (max-width: 900px) {
//   .slideContent { width: 72vw; height: 56vw; max-width: none; max-height: 70vh; }
//   .slides > button:first-child { left: 6px; }
//   .slides > button:last-child { right: 6px; }
// }

// /* hide the original large list down the page (keeps your logic but visually removes it) */
// .orig-list { display: none !important; }
// `;

//   /* --------------------------
//      AnimatedSlider component
//      - Uses VideoFilter as source (NO slice -> shows ALL videos)
//      - Attaches tilt listeners on every slide so hover/touch tilts
//      - Uses embed only for active slide to reduce load
//   ---------------------------*/
//   function AnimatedSlider({ items }) {
//     // fallback & use ALL slides (removed .slice cap)
//     const previewSlides = items && items.length > 0 ? items : videos;

//     // local reducer for next/prev (same idea as your pen)
//     const initialState = { slideIndex: 0 };
//     const slidesReducer = (state, event) => {
//       if (event.type === "NEXT") {
//         return {
//           ...state,
//           slideIndex: (state.slideIndex + 1) % previewSlides.length,
//         };
//       }
//       if (event.type === "PREV") {
//         return {
//           ...state,
//           slideIndex:
//             state.slideIndex === 0
//               ? previewSlides.length - 1
//               : state.slideIndex - 1,
//         };
//       }
//       return state;
//     };

//     const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//     // Recreate the useTilt hook — attach listeners for tilt on every slide
//     function useTilt() {
//       const ref = React.useRef(null);

//       React.useEffect(() => {
//         if (!ref.current) return;
//         const el = ref.current;
//         const stateVars = { rect: undefined };

//         const handleMove = (e) => {
//           if (!stateVars.rect) stateVars.rect = el.getBoundingClientRect();
//           const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//           const clientY = e.touches ? e.touches[0].clientY : e.clientY;
//           const px = (clientX - stateVars.rect.left) / stateVars.rect.width;
//           const py = (clientY - stateVars.rect.top) / stateVars.rect.height;
//           el.style.setProperty("--px", px);
//           el.style.setProperty("--py", py);
//         };

//         // attach both mouse and touch handlers for tilt
//         el.addEventListener("mousemove", handleMove);
//         el.addEventListener("touchmove", handleMove, { passive: true });

//         // cleanup
//         return () => {
//           el.removeEventListener("mousemove", handleMove);
//           el.removeEventListener("touchmove", handleMove);
//         };
//       }, []);

//       return ref;
//     }

//     // Slide subcomponent
//     function Slide({ slide, offset }) {
//       // set active only for visual prominence; keep original semantics
//       const active = offset === 0 ? true : null;
//       const ref = useTilt();

//       const id = slide.videoId || slide.id || "";
//       const title =
//         slide.title || slide.name || (slide.tags && slide.tags[0]) || "Video";
//       // thumbnail fallback
//       const thumb =
//         slide.thumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

//       // only set the embed src for the active slide (to reduce loads)
//       const embedSrc =
//         active && id
//           ? `https://www.youtube.com/embed/${id}?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=${id}&modestbranding=1&playsinline=1`
//           : "";

//       return (
//         <div
//           ref={ref}
//           className="slide"
//           data-active={active}
//           style={{
//             "--offset": offset,
//             "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
//             // default css vars to avoid NaN
//             "--px": 0.5,
//             "--py": 0.5,
//           }}
//         >
//           {/* large dimmed background when active */}
//           <div
//             className="slideBackground"
//             style={{
//               backgroundImage: `url('${thumb}')`,
//             }}
//           />

//           <div
//             className="slideContent"
//             style={{
//               // non-active slides show thumbnail background; active slide will be covered by iframe
//               backgroundImage: `url('${thumb}')`,
//             }}
//           >
//             {/* if active, we mount the YouTube iframe to play as preview */}
//             {embedSrc ? (
//               <div className="slideVideoWrap" aria-hidden={!active}>
//                 <iframe
//                   title={`preview-${id}`}
//                   src={embedSrc}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//             ) : (
//               // non-active: still render thumbnail as fallback (keeps appearance)
//               <img src={thumb} alt={title} className="slideThumb" />
//             )}

//             {/* subtle play glyph on top so it reads "video" */}
//             <div className="slidePlay" aria-hidden>
//               ▶
//             </div>

//             <div className="slideContentInner">
//               <h3 className="slideTitle">{title}</h3>
//               <h4 className="slideSubtitle">
//                 {(slide.tags && slide.tags.slice(0, 2).join(" • ")) ||
//                   slide.subtitle}
//               </h4>
//               <p className="slideDescription">{slide.description || ""}</p>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="slides-wrapper" aria-hidden={false}>
//         <div className="slides" style={{ touchAction: "none" }}>
//           <button
//             aria-label="previous"
//             onClick={() => dispatch({ type: "PREV" })}
//           >
//             ‹
//           </button>

//           {/* triple the slides like the pen to allow wrap math to work nicely */}
//           {[...previewSlides, ...previewSlides, ...previewSlides].map(
//             (slide, i) => {
//               // offset math (same idea as your pen)
//               let offset = previewSlides.length + (state.slideIndex - i);
//               return <Slide slide={slide} offset={offset} key={i} />;
//             }
//           )}

//           <button aria-label="next" onClick={() => dispatch({ type: "NEXT" })}>
//             ›
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>📹 Videos Section</title>
//       </Helmet>

//       {/* inject the slider styles (you can move to an external CSS file if you prefer) */}
//       <style>{sliderStyles}</style>

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

//         {/* ---------- Animated preview slider using the same VideoFilter (shows ALL) ---------- */}
//         <AnimatedSlider items={VideoFilter} />

//         {VideoFilter.length === 0 && (
//           <p className="text-center text-gray-500">No videos found.</p>
//         )}

//         {/* keep your original list rendering as well (no logic removed) */}
//         {/* wrapped in .orig-list and visually hidden (so page doesn't show duplicate big iframes) */}
//         <div className="orig-list" aria-hidden>
//           {VideoFilter.map((video) => {
//             return (
//               <div
//                 style={{
//                   position: "relative",
//                   paddingBottom: "56.25%",
//                   height: 0,
//                   overflow: "hidden",
//                   maxWidth: "100%",
//                 }}
//                 key={video.videoId}
//               >
//                 <iframe
//                   src={`https://www.youtube.com/embed/${video.videoId}`}
//                   title="Mindfulness Video"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     borderRadius: "8px",
//                   }}
//                 ></iframe>
//               </div>
//             );
//           })}
//         </div>
//       </article>
//     </>
//   );
// };
// export default VideosSection;

// import React from "react";
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

//   // Your original useMemo logic preserved
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

//   // Enhanced slider styles with curved positioning
//   const sliderStyles = `
// /* ---- hero/background for active slide (dimmed) ---- */
// .slideBackground {
//   position: fixed;
//   top: 0;
//   left: -10%;
//   right: -10%;
//   bottom: 0;
//   background-size: cover;
//   background-position: center center;
//   z-index: -3;
//   opacity: 0;
//   transition: opacity 0.35s linear, transform 0.35s ease-in-out, filter 0.35s;
//   pointer-events: none;
//   transform: translateX(calc(10% * var(--dir)));
//   filter: blur(6px) brightness(0.78) saturate(1.05);
// }
// .slide[data-active] .slideBackground { opacity: 0.22; transform: none; }

// /* ---- slides container (keeps preview centered) ---- */
// .slides-wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 1.6rem 0 2rem;
//   pointer-events: auto;
// }
// .slides {
//   display: grid;
//   width: min(1200px, 92vw);
//   height: auto;
//   position: relative;
//   align-items: center;
//   min-height: 36vw;
//   max-height: 640px;
//   margin: 0 auto;
// }

// /* stack slides exactly on same grid area for 3D carousel effect */
// .slides > .slide { grid-area: 1 / -1; pointer-events: none; }

// /* ---- nav buttons (moved inwards) ---- */
// .slides > button {
//   appearance: none;
//   background: rgba(255,255,255,0.06);
//   border: none;
//   color: white;
//   position: absolute;
//   font-size: 2.6rem;
//   width: 3.4rem;
//   height: 3.4rem;
//   top: 42%;
//   transition: opacity 0.22s, transform 0.22s;
//   opacity: 0.92;
//   z-index: 60;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   backdrop-filter: blur(4px);
//   pointer-events: auto;
// }
// .slides > button:hover { transform: scale(1.06); opacity: 1; }
// .slides > button:focus { outline: none; box-shadow: 0 0 0 3px rgba(0,0,0,0.18); }
// .slides > button:first-child { left: 8px; }
// .slides > button:last-child { right: 8px; }

// /* ---- card visual with curved positioning ---- */
// .slideContent {
//   width: 34vw;
//   max-width: 420px;
//   height: 44vw;
//   max-height: 540px;
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   transition: transform 0.45s cubic-bezier(.2,.9,.2,1), opacity 0.35s;
//   opacity: 0.9;
//   display: grid;
//   align-content: center;
//   transform-style: preserve-3d;
//   box-shadow: 0 18px 40px rgba(0,0,0,0.55);
//   border-radius: 12px;
//   overflow: hidden;
//   position: relative;
//   left: 50%;
//   pointer-events: auto;
// }

// /* Enhanced curved positioning logic */
// .slideContent {
//   --x: calc(var(--px,0.5) - 0.5);
//   --y: calc(var(--py,0.5) - 0.5);

//   /* Curved positioning based on offset */
//   transform: translateX(calc(-50% + (100% * var(--offset))))
//              translateY(calc(abs(var(--offset)) * -15px))
//              rotateY(calc(var(--curve-rotation, 0deg)))
//              scale(calc(1 - abs(var(--offset)) * 0.1));
// }

// /* Specific rotations for curved effect */
// .slide[data-offset="-2"] .slideContent { --curve-rotation: -45deg; } /* Far left - fully left tilted */
// .slide[data-offset="-1"] .slideContent { --curve-rotation: -22.5deg; } /* Left - 75% left + 25% right */
// .slide[data-offset="0"] .slideContent { --curve-rotation: 0deg; } /* Center - no tilt */
// .slide[data-offset="1"] .slideContent { --curve-rotation: 22.5deg; } /* Right - 75% right + 25% left */
// .slide[data-offset="2"] .slideContent { --curve-rotation: 45deg; } /* Far right - fully right tilted */

// /* General rule for extreme offsets */
// .slideContent {
//   --base-rotation: calc(var(--offset) * 22.5deg);
//   --curve-rotation: var(--base-rotation);
// }

// /* Enhanced hover tilt with curve consideration */
// .slideContent:hover {
//   transition: transform 0s;
//   transform:
//     perspective(1000px)
//     translateX(calc(-50% + (100% * var(--offset))))
//     translateY(calc(abs(var(--offset)) * -15px))
//     rotateY(calc((var(--x) * 15deg) + var(--curve-rotation, 0deg)))
//     rotateX(calc((var(--y) * -15deg)))
//     scale(calc(1 - abs(var(--offset)) * 0.1));
// }

// /* slide inner content (text overlay) */
// .slideContentInner {
//   transform-style: preserve-3d;
//   transform: translateZ(2rem);
//   transition: opacity 0.25s linear;
//   text-shadow: 0 6px 20px rgba(0,0,0,0.6);
//   opacity: 0;
//   padding: 1rem 1.25rem;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   gap: 0.25rem;
// }
// .slideTitle { font-size: 1.05rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin: 0; }
// .slideSubtitle { font-size: 0.8rem; opacity: 0.85; margin: 0; }
// .slideDescription { margin: 0; font-size: 0.75rem; opacity: 0.9; }

// /* video/thumb fills card */
// .slideVideoWrap, .slideThumb {
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   display: block;
//   object-fit: cover;
// }

// /* show active slide more prominently */
// .slide[data-active] {
//   z-index: 40;
//   pointer-events: auto;
// }
// .slide[data-active] .slideContent {
//   opacity: 1;
//   transform: translateX(calc(-50% + (100% * var(--offset))))
//              translateY(calc(abs(var(--offset)) * -15px))
//              rotateY(0deg)
//              scale(1.02);
//   transition: transform 0.35s cubic-bezier(.2,.9,.2,1), opacity 0.35s;
// }
// .slide[data-active] .slideContentInner { opacity: 1; transform: translateZ(2rem); }

// /* active slide video iframe styling */
// .slideVideoWrap iframe {
//   width: 100%;
//   height: 100%;
//   border: 0;
//   display: block;
// }

// /* decorative/play icon on top */
// .slidePlay {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%,-50%);
//   z-index: 22;
//   font-size: 2.2rem;
//   opacity: 0.95;
//   pointer-events: none;
// }

// /* small responsive tweaks */
// @media (max-width: 900px) {
//   .slideContent { width: 72vw; height: 56vw; max-width: none; max-height: 70vh; }
//   .slides > button:first-child { left: 6px; }
//   .slides > button:last-child { right: 6px; }
// }

// /* hide the original large list (preserved logic but visually hidden) */
// .orig-list { display: none !important; }
// `;

//   // AnimatedSlider component with your original logic preserved
//   function AnimatedSlider({ items }) {
//     // Use your VideoFilter directly (preserves your original logic)
//     const previewSlides = items;

//     const initialState = { slideIndex: 0 };
//     const slidesReducer = (state, event) => {
//       if (event.type === "NEXT") {
//         return {
//           ...state,
//           slideIndex: (state.slideIndex + 1) % previewSlides.length,
//         };
//       }
//       if (event.type === "PREV") {
//         return {
//           ...state,
//           slideIndex:
//             state.slideIndex === 0
//               ? previewSlides.length - 1
//               : state.slideIndex - 1,
//         };
//       }
//       return state;
//     };

//     const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//     // useTilt hook for hover effects
//     function useTilt() {
//       const ref = React.useRef(null);

//       React.useEffect(() => {
//         if (!ref.current) return;
//         const el = ref.current;
//         const stateVars = { rect: undefined };

//         const handleMove = (e) => {
//           if (!stateVars.rect) stateVars.rect = el.getBoundingClientRect();
//           const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//           const clientY = e.touches ? e.touches[0].clientY : e.clientY;
//           const px = (clientX - stateVars.rect.left) / stateVars.rect.width;
//           const py = (clientY - stateVars.rect.top) / stateVars.rect.height;
//           el.style.setProperty("--px", px);
//           el.style.setProperty("--py", py);
//         };

//         el.addEventListener("mousemove", handleMove);
//         el.addEventListener("touchmove", handleMove, { passive: true });

//         return () => {
//           el.removeEventListener("mousemove", handleMove);
//           el.removeEventListener("touchmove", handleMove);
//         };
//       }, []);

//       return ref;
//     }

//     // Slide component with curved positioning
//     function Slide({ slide, offset }) {
//       const active = offset === 0 ? true : null;
//       const ref = useTilt();

//       const id = slide.videoId || slide.id || "";
//       const title =
//         slide.title || slide.name || (slide.tags && slide.tags[0]) || "Video";
//       const thumb =
//         slide.thumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

//       const embedSrc =
//         active && id
//           ? `https://www.youtube.com/embed/${id}?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=${id}&modestbranding=1&playsinline=1`
//           : "";

//       return (
//         <div
//           ref={ref}
//           className="slide"
//           data-active={active}
//           data-offset={offset} // Add data attribute for CSS targeting
//           style={{
//             "--offset": offset,
//             "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
//             "--px": 0.5,
//             "--py": 0.5,
//           }}
//         >
//           <div
//             className="slideBackground"
//             style={{
//               backgroundImage: `url('${thumb}')`,
//             }}
//           />

//           <div
//             className="slideContent"
//             style={{
//               backgroundImage: `url('${thumb}')`,
//             }}
//           >
//             {embedSrc ? (
//               <div className="slideVideoWrap" aria-hidden={!active}>
//                 <iframe
//                   title={`preview-${id}`}
//                   src={embedSrc}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//             ) : (
//               <img src={thumb} alt={title} className="slideThumb" />
//             )}

//             <div className="slidePlay" aria-hidden>
//               ▶
//             </div>

//             <div className="slideContentInner">
//               <h3 className="slideTitle">{title}</h3>
//               <h4 className="slideSubtitle">
//                 {(slide.tags && slide.tags.slice(0, 2).join(" • ")) ||
//                   slide.subtitle}
//               </h4>
//               <p className="slideDescription">{slide.description || ""}</p>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     // Don't render slider if no items (preserves your original "No videos found" logic)
//     if (!previewSlides || previewSlides.length === 0) {
//       return null;
//     }

//     return (
//       <div className="slides-wrapper" aria-hidden={false}>
//         <div className="slides" style={{ touchAction: "none" }}>
//           <button
//             aria-label="previous"
//             onClick={() => dispatch({ type: "PREV" })}
//           >
//             ‹
//           </button>

//           {[...previewSlides, ...previewSlides, ...previewSlides].map(
//             (slide, i) => {
//               let offset = previewSlides.length + (state.slideIndex - i);
//               return <Slide slide={slide} offset={offset} key={i} />;
//             }
//           )}

//           <button aria-label="next" onClick={() => dispatch({ type: "NEXT" })}>
//             ›
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>📹 Videos Section</title>
//       </Helmet>

//       <style>{sliderStyles}</style>

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

//       {/* Sidebar - Your original code preserved */}
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

//         {/* Your original Animated Search Bar preserved */}
//         <div className="relative w-full max-w-xl mx-auto mb-8">
//           <input
//             type="text"
//             placeholder="Search for post based on your current mood"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="peer w-full py-3 pl-12 pr-4 rounded-full border border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-500 outline-none text-lg"
//           />
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
//           <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-1 opacity-0 peer-focus:opacity-100 transition-opacity duration-500">
//             <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
//             <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
//             <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
//           </div>
//         </div>

//         {/* Enhanced slider that respects your VideoFilter logic */}
//         <AnimatedSlider items={VideoFilter} />

//         {/* Your original "No videos found" logic preserved and working */}
//         {VideoFilter.length === 0 && (
//           <p className="text-center text-gray-500">No videos found.</p>
//         )}

//         {/* Your original list rendering preserved (visually hidden) */}
//         <div className="orig-list" aria-hidden>
//           {VideoFilter.map((video) => {
//             return (
//               <div
//                 style={{
//                   position: "relative",
//                   paddingBottom: "56.25%",
//                   height: 0,
//                   overflow: "hidden",
//                   maxWidth: "100%",
//                 }}
//                 key={video.videoId}
//               >
//                 <iframe
//                   src={`https://www.youtube.com/embed/${video.videoId}`}
//                   title="Mindfulness Video"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     borderRadius: "8px",
//                   }}
//                 ></iframe>
//               </div>
//             );
//           })}
//         </div>
//       </article>
//     </>
//   );
// };

// export default VideosSection;

// import { useState, useMemo } from "react";
// import { videos } from "../data/VideosData.js";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios.js";
// import React from "react";

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

//   // Your original useMemo logic preserved
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

//   // Enhanced slider styles with U-curve positioning
//   const sliderStyles = `
// /* ---- hero/background for active slide (dimmed) ---- */
// .slideBackground {
//   position: fixed;
//   top: 0;
//   left: -10%;
//   right: -10%;
//   bottom: 0;
//   background-size: cover;
//   background-position: center center;
//   z-index: -3;
//   opacity: 0;
//   transition: opacity 0.35s linear, transform 0.35s ease-in-out, filter 0.35s;
//   pointer-events: none;
//   transform: translateX(calc(10% * var(--dir)));
//   filter: blur(6px) brightness(0.78) saturate(1.05);
// }
// .slide[data-active] .slideBackground { opacity: 0.22; transform: none; }

// /* ---- slides container (keeps preview centered) ---- */
// .slides-wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 1.6rem 0 2rem;
//   pointer-events: auto;
// }
// .slides {
//   display: grid;
//   width: min(1400px, 95vw);
//   height: auto;
//   position: relative;
//   align-items: center;
//   min-height: 50vw;
//   max-height: 750px;
//   margin: 0 auto;
// }

// /* stack slides exactly on same grid area for 3D carousel effect */
// .slides > .slide { grid-area: 1 / -1; pointer-events: none; }

// /* ---- nav buttons (positioned for U-curve) ---- */
// .slides > button {
//   appearance: none;
//   background: rgba(255,255,255,0.1);
//   border: none;
//   color: white;
//   position: absolute;
//   font-size: 2.8rem;
//   width: 3.6rem;
//   height: 3.6rem;
//   top: 35%;
//   transition: opacity 0.22s, transform 0.22s;
//   opacity: 0.92;
//   z-index: 60;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   backdrop-filter: blur(6px);
//   pointer-events: auto;
//   border: 2px solid rgba(255,255,255,0.2);
// }
// .slides > button:hover {
//   transform: scale(1.08);
//   opacity: 1;
//   background: rgba(255,255,255,0.15);
// }
// .slides > button:focus { outline: none; box-shadow: 0 0 0 3px rgba(0,0,0,0.18); }
// .slides > button:first-child { left: 10px; }
// .slides > button:last-child { right: 10px; }

// /* ---- card visual with U-curve positioning ---- */
// .slideContent {
//   width: 32vw;
//   max-width: 380px;
//   height: 40vw;
//   max-height: 480px;
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   transition: transform 0.5s cubic-bezier(.2,.8,.2,1), opacity 0.4s;
//   opacity: 0.85;
//   display: grid;
//   align-content: center;
//   transform-style: preserve-3d;
//   box-shadow: 0 20px 50px rgba(0,0,0,0.6);
//   border-radius: 16px;
//   overflow: hidden;
//   position: relative;
//   left: 50%;
//   pointer-events: auto;
// }

// /* Enhanced U-curve positioning logic */
// .slideContent {
//   --x: calc(var(--px,0.5) - 0.5);
//   --y: calc(var(--py,0.5) - 0.5);

//   /* U-curve positioning: horizontal spread + vertical curve + rotation */
//   --horizontal-spread: calc(var(--offset) * 120px);
//   --vertical-curve: calc(var(--offset) * var(--offset) * 80px); /* Parabolic curve */
//   --rotation-angle: calc(var(--offset) * 35deg); /* Progressive rotation */
//   --scale-factor: calc(1 - abs(var(--offset)) * 0.15); /* Scale down outer videos */

//   transform: translateX(calc(-50% + var(--horizontal-spread)))
//              translateY(calc(var(--vertical-curve) * -1)) /* Negative for upward curve */
//              rotateY(var(--rotation-angle))
//              rotateZ(calc(var(--offset) * 5deg)) /* Slight Z rotation for depth */
//              scale(var(--scale-factor));
// }

// /* Specific positioning for different offset values to ensure smooth U-curve */
// .slide[data-offset="-3"] .slideContent {
//   --horizontal-spread: -360px;
//   --vertical-curve: -120px;
//   --rotation-angle: -50deg;
//   opacity: 0.7;
// }
// .slide[data-offset="-2"] .slideContent {
//   --horizontal-spread: -240px;
//   --vertical-curve: -80px;
//   --rotation-angle: -40deg;
//   opacity: 0.75;
// }
// .slide[data-offset="-1"] .slideContent {
//   --horizontal-spread: -120px;
//   --vertical-curve: -30px;
//   --rotation-angle: -25deg;
//   opacity: 0.8;
// }
// .slide[data-offset="0"] .slideContent {
//   --horizontal-spread: 0px;
//   --vertical-curve: 0px;
//   --rotation-angle: 0deg;
//   opacity: 1;
//   transform: translateX(-50%) scale(1.05); /* Center video slightly larger */
// }
// .slide[data-offset="1"] .slideContent {
//   --horizontal-spread: 120px;
//   --vertical-curve: -30px;
//   --rotation-angle: 25deg;
//   opacity: 0.8;
// }
// .slide[data-offset="2"] .slideContent {
//   --horizontal-spread: 240px;
//   --vertical-curve: -80px;
//   --rotation-angle: 40deg;
//   opacity: 0.75;
// }
// .slide[data-offset="3"] .slideContent {
//   --horizontal-spread: 360px;
//   --vertical-curve: -120px;
//   --rotation-angle: 50deg;
//   opacity: 0.7;
// }

// /* Enhanced hover tilt with U-curve consideration */
// .slideContent:hover {
//   transition: transform 0.1s;
//   transform:
//     perspective(1200px)
//     translateX(calc(-50% + var(--horizontal-spread, 0px)))
//     translateY(calc(var(--vertical-curve, 0px) * -1))
//     rotateY(calc((var(--x) * 20deg) + var(--rotation-angle, 0deg)))
//     rotateX(calc((var(--y) * -20deg)))
//     rotateZ(calc(var(--offset, 0) * 5deg))
//     scale(calc(var(--scale-factor, 1) * 1.02));
// }

// /* slide inner content (text overlay) */
// .slideContentInner {
//   transform-style: preserve-3d;
//   transform: translateZ(2.5rem);
//   transition: opacity 0.3s linear;
//   text-shadow: 0 8px 25px rgba(0,0,0,0.7);
//   opacity: 0;
//   padding: 1.2rem 1.4rem;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   gap: 0.3rem;
//   background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
//   border-radius: 12px;
//   backdrop-filter: blur(2px);
// }
// .slideTitle {
//   font-size: 1.1rem;
//   font-weight: 700;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   margin: 0;
//   text-shadow: 0 2px 8px rgba(0,0,0,0.8);
// }
// .slideSubtitle {
//   font-size: 0.85rem;
//   opacity: 0.9;
//   margin: 0;
//   font-weight: 500;
// }
// .slideDescription {
//   margin: 0;
//   font-size: 0.75rem;
//   opacity: 0.85;
//   line-height: 1.3;
// }

// /* video/thumb fills card */
// .slideVideoWrap, .slideThumb {
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   display: block;
//   object-fit: cover;
//   border-radius: 16px;
// }

// /* show active slide more prominently */
// .slide[data-active] {
//   z-index: 50;
//   pointer-events: auto;
// }
// .slide[data-active] .slideContent {
//   opacity: 1;
//   box-shadow: 0 25px 60px rgba(0,0,0,0.8);
//   transform: translateX(-50%) scale(1.08);
//   transition: transform 0.4s cubic-bezier(.2,.8,.2,1), opacity 0.4s;
// }
// .slide[data-active] .slideContentInner {
//   opacity: 1;
//   transform: translateZ(3rem);
// }

// /* active slide video iframe styling */
// .slideVideoWrap iframe {
//   width: 100%;
//   height: 100%;
//   border: 0;
//   display: block;
//   border-radius: 16px;
// }

// /* decorative/play icon on top */
// .slidePlay {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%,-50%);
//   z-index: 25;
//   font-size: 2.5rem;
//   opacity: 0.9;
//   pointer-events: none;
//   text-shadow: 0 4px 12px rgba(0,0,0,0.8);
//   transition: transform 0.3s ease;
// }
// .slide[data-active] .slidePlay {
//   transform: translate(-50%,-50%) scale(1.1);
// }

// /* Gradient overlay for better text readability */
// .slideContent::before {
//   content: '';
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(
//     135deg,
//     rgba(0,0,0,0.1) 0%,
//     rgba(0,0,0,0.3) 50%,
//     rgba(0,0,0,0.6) 100%
//   );
//   z-index: 1;
//   border-radius: 16px;
//   opacity: 0.7;
// }

// .slideContentInner {
//   position: relative;
//   z-index: 2;
// }

// /* small responsive tweaks */
// @media (max-width: 1024px) {
//   .slideContent {
//     width: 45vw;
//     height: 56vw;
//     max-width: none;
//     max-height: 70vh;
//   }
//   .slides > button:first-child { left: 8px; }
//   .slides > button:last-child { right: 8px; }

//   /* Adjust spacing for smaller screens */
//   .slide[data-offset="-3"] .slideContent { --horizontal-spread: -280px; }
//   .slide[data-offset="-2"] .slideContent { --horizontal-spread: -180px; }
//   .slide[data-offset="-1"] .slideContent { --horizontal-spread: -90px; }
//   .slide[data-offset="1"] .slideContent { --horizontal-spread: 90px; }
//   .slide[data-offset="2"] .slideContent { --horizontal-spread: 180px; }
//   .slide[data-offset="3"] .slideContent { --horizontal-spread: 280px; }
// }

// @media (max-width: 768px) {
//   .slideContent {
//     width: 65vw;
//     height: 70vw;
//   }

//   /* More compact spacing for mobile */
//   .slide[data-offset="-3"] .slideContent { --horizontal-spread: -200px; --vertical-curve: -60px; }
//   .slide[data-offset="-2"] .slideContent { --horizontal-spread: -130px; --vertical-curve: -40px; }
//   .slide[data-offset="-1"] .slideContent { --horizontal-spread: -65px; --vertical-curve: -15px; }
//   .slide[data-offset="1"] .slideContent { --horizontal-spread: 65px; --vertical-curve: -15px; }
//   .slide[data-offset="2"] .slideContent { --horizontal-spread: 130px; --vertical-curve: -40px; }
//   .slide[data-offset="3"] .slideContent { --horizontal-spread: 200px; --vertical-curve: -60px; }
// }

// /* hide the original large list (preserved logic but visually hidden) */
// .orig-list { display: none !important; }
// `;

//   // AnimatedSlider component with your original logic preserved
//   function AnimatedSlider({ items }) {
//     // Use your VideoFilter directly (preserves your original logic)
//     const previewSlides = items;

//     const initialState = { slideIndex: 0 };
//     const slidesReducer = (state, event) => {
//       if (event.type === "NEXT") {
//         return {
//           ...state,
//           slideIndex: (state.slideIndex + 1) % previewSlides.length,
//         };
//       }
//       if (event.type === "PREV") {
//         return {
//           ...state,
//           slideIndex:
//             state.slideIndex === 0
//               ? previewSlides.length - 1
//               : state.slideIndex - 1,
//         };
//       }
//       return state;
//     };

//     const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//     // useTilt hook for hover effects
//     function useTilt() {
//       const ref = React.useRef(null);

//       React.useEffect(() => {
//         if (!ref.current) return;
//         const el = ref.current;
//         const stateVars = { rect: undefined };

//         const handleMove = (e) => {
//           if (!stateVars.rect) stateVars.rect = el.getBoundingClientRect();
//           const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//           const clientY = e.touches ? e.touches[0].clientY : e.clientY;
//           const px = (clientX - stateVars.rect.left) / stateVars.rect.width;
//           const py = (clientY - stateVars.rect.top) / stateVars.rect.height;
//           el.style.setProperty("--px", px);
//           el.style.setProperty("--py", py);
//         };

//         el.addEventListener("mousemove", handleMove);
//         el.addEventListener("touchmove", handleMove, { passive: true });

//         return () => {
//           el.removeEventListener("mousemove", handleMove);
//           el.removeEventListener("touchmove", handleMove);
//         };
//       }, []);

//       return ref;
//     }

//     // Slide component with U-curve positioning
//     function Slide({ slide, offset }) {
//       const active = offset === 0 ? true : null;
//       const ref = useTilt();

//       const id = slide.videoId || slide.id || "";
//       const title =
//         slide.title || slide.name || (slide.tags && slide.tags[0]) || "Video";
//       const thumb =
//         slide.thumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

//       const embedSrc =
//         active && id
//           ? `https://www.youtube.com/embed/${id}?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=${id}&modestbranding=1&playsinline=1`
//           : "";

//       return (
//         <div
//           ref={ref}
//           className="slide"
//           data-active={active}
//           data-offset={offset} // Add data attribute for CSS targeting
//           style={{
//             "--offset": offset,
//             "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
//             "--px": 0.5,
//             "--py": 0.5,
//           }}
//         >
//           <div
//             className="slideBackground"
//             style={{
//               backgroundImage: `url('${thumb}')`,
//             }}
//           />

//           <div
//             className="slideContent"
//             style={{
//               backgroundImage: `url('${thumb}')`,
//             }}
//           >
//             {embedSrc ? (
//               <div className="slideVideoWrap" aria-hidden={!active}>
//                 <iframe
//                   title={`preview-${id}`}
//                   src={embedSrc}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//             ) : (
//               <img src={thumb} alt={title} className="slideThumb" />
//             )}

//             <div className="slidePlay" aria-hidden>
//               ▶
//             </div>

//             <div className="slideContentInner">
//               <h3 className="slideTitle">{title}</h3>
//               <h4 className="slideSubtitle">
//                 {(slide.tags && slide.tags.slice(0, 2).join(" • ")) ||
//                   slide.subtitle}
//               </h4>
//               <p className="slideDescription">{slide.description || ""}</p>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     // Don't render slider if no items (preserves your original "No videos found" logic)
//     if (!previewSlides || previewSlides.length === 0) {
//       return null;
//     }

//     return (
//       <div className="slides-wrapper" aria-hidden={false}>
//         <div className="slides" style={{ touchAction: "none" }}>
//           <button
//             aria-label="previous"
//             onClick={() => dispatch({ type: "PREV" })}
//           >
//             ‹
//           </button>

//           {[...previewSlides, ...previewSlides, ...previewSlides].map(
//             (slide, i) => {
//               let offset = previewSlides.length + (state.slideIndex - i);
//               return <Slide slide={slide} offset={offset} key={i} />;
//             }
//           )}

//           <button aria-label="next" onClick={() => dispatch({ type: "NEXT" })}>
//             ›
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>📹 Videos Section</title>
//       </Helmet>

//       <style>{sliderStyles}</style>

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

//       {/* Sidebar - Your original code preserved */}
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

//         {/* Your original Animated Search Bar preserved */}
//         <div className="relative w-full max-w-xl mx-auto mb-8">
//           <input
//             type="text"
//             placeholder="Search for post based on your current mood"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="peer w-full py-3 pl-12 pr-4 rounded-full border border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-500 outline-none text-lg"
//           />
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
//           <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-1 opacity-0 peer-focus:opacity-100 transition-opacity duration-500">
//             <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
//             <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
//             <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
//           </div>
//         </div>

//         {/* Enhanced U-curve slider that respects your VideoFilter logic */}
//         <AnimatedSlider items={VideoFilter} />

//         {/* Your original "No videos found" logic preserved and working */}
//         {VideoFilter.length === 0 && (
//           <p className="text-center text-gray-500">No videos found.</p>
//         )}

//         {/* Your original list rendering preserved (visually hidden) */}
//         <div className="orig-list" aria-hidden>
//           {VideoFilter.map((video) => {
//             return (
//               <div
//                 style={{
//                   position: "relative",
//                   paddingBottom: "56.25%",
//                   height: 0,
//                   overflow: "hidden",
//                   maxWidth: "100%",
//                 }}
//                 key={video.videoId}
//               >
//                 <iframe
//                   src={`https://www.youtube.com/embed/${video.videoId}`}
//                   title="Mindfulness Video"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     borderRadius: "8px",
//                   }}
//                 ></iframe>
//               </div>
//             );
//           })}
//         </div>
//       </article>
//     </>
//   );
// };

// export default VideosSection;

import { useState, useMemo } from "react";
import { videos } from "../data/VideosData.js";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import API from "../api/axios.js";
import React from "react";

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

  // Your original useMemo logic preserved
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

  // Enhanced slider styles with INVERTED U-curve positioning
  const sliderStyles = `
/* ---- hero/background for active slide (dimmed) ---- */
.slideBackground {
  position: fixed;
  top: 0;
  left: -10%;
  right: -10%;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: -3;
  opacity: 0;
  transition: opacity 0.35s linear, transform 0.35s ease-in-out, filter 0.35s;
  pointer-events: none;
  transform: translateX(calc(10% * var(--dir)));
  filter: blur(6px) brightness(0.78) saturate(1.05);
}
.slide[data-active] .slideBackground { opacity: 0.22; transform: none; }

/* ---- slides container (keeps preview centered) ---- */
.slides-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem 0 2rem;
  pointer-events: auto;
}
.slides {
  display: grid;
  width: 100vw;
  height: auto;
  position: relative;
  align-items: center;
  min-height: 60vh;
  max-height: 800px;
  margin: 0 auto;
}

/* stack slides exactly on same grid area for 3D carousel effect */
.slides > .slide { grid-area: 1 / -1; pointer-events: none; }

/* ---- nav buttons (positioned for inverted U-curve) ---- */
.slides > button {
  appearance: none;
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  position: absolute;
  font-size: 2.8rem;
  width: 3.6rem;
  height: 3.6rem;
  top: 20%;
  transition: opacity 0.22s, transform 0.22s;
  opacity: 0.92;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  backdrop-filter: blur(6px);
  pointer-events: auto;
  border: 2px solid rgba(255,255,255,0.2);
}
.slides > button:hover {
  transform: scale(1.08);
  opacity: 1;
  background: rgba(255,255,255,0.15);
}
.slides > button:focus { outline: none; box-shadow: 0 0 0 3px rgba(0,0,0,0.18); }
.slides > button:first-child { left: 2vw; }
.slides > button:last-child { right: 2vw; }

/* ---- card visual with INVERTED U-curve positioning ---- */
.slideContent {
  width: 28vw;
  max-width: 350px;
  height: 35vw;
  max-height: 420px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s cubic-bezier(.2,.8,.2,1), opacity 0.4s;
  opacity: 0.85;
  display: grid;
  align-content: center;
  transform-style: preserve-3d;
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  left: 50%;
  pointer-events: auto;
}

/* INVERTED U-curve positioning logic - center deep, sides high */
.slideContent {
  --x: calc(var(--px,0.5) - 0.5);
  --y: calc(var(--py,0.5) - 0.5);
  
  /* INVERTED U: sides go UP, center goes DOWN */
  --horizontal-spread: calc(var(--offset) * 45vw); /* Full width coverage */
  --vertical-curve: calc(var(--offset) * var(--offset) * 150px); /* Positive = upward for sides */
  --rotation-angle: calc(var(--offset) * 35deg); /* Progressive rotation outward */
  --scale-factor: calc(1 - abs(var(--offset)) * 0.1); /* Slight scale variation */
  
  transform: translateX(calc(-50% + var(--horizontal-spread)))
             translateY(var(--vertical-curve)) /* POSITIVE for inverted U - sides go UP */
             rotateY(var(--rotation-angle))
             rotateZ(calc(var(--offset) * 3deg))
             scale(var(--scale-factor));
}

/* Specific positioning for INVERTED U-curve */
.slide[data-offset="-3"] .slideContent {
  --horizontal-spread: -42vw; /* Far left edge */
  --vertical-curve: 180px; /* High up */
  --rotation-angle: -45deg;
  opacity: 0.7;
}
.slide[data-offset="-2"] .slideContent {
  --horizontal-spread: -28vw; /* Left side */
  --vertical-curve: 120px; /* Medium height */
  --rotation-angle: -35deg;
  opacity: 0.75;
}
.slide[data-offset="-1"] .slideContent {
  --horizontal-spread: -14vw; /* Left center */
  --vertical-curve: 40px; /* Slight rise */
  --rotation-angle: -20deg;
  opacity: 0.8;
}
.slide[data-offset="0"] .slideContent {
  --horizontal-spread: 0px; /* Center */
  --vertical-curve: 0px; /* Deep/lowest point */
  --rotation-angle: 0deg;
  opacity: 1;
  transform: translateX(-50%) translateY(20px) scale(0.9); /* Center video smaller and deeper */
  z-index: 1; /* Lower z-index for depth */
}
.slide[data-offset="1"] .slideContent {
  --horizontal-spread: 14vw; /* Right center */
  --vertical-curve: 40px; /* Slight rise */
  --rotation-angle: 20deg;
  opacity: 0.8;
}
.slide[data-offset="2"] .slideContent {
  --horizontal-spread: 28vw; /* Right side */
  --vertical-curve: 120px; /* Medium height */
  --rotation-angle: 35deg;
  opacity: 0.75;
}
.slide[data-offset="3"] .slideContent {
  --horizontal-spread: 42vw; /* Far right edge */
  --vertical-curve: 180px; /* High up */
  --rotation-angle: 45deg;
  opacity: 0.7;
}

/* Enhanced hover tilt with inverted U-curve consideration */
.slideContent:hover {
  transition: transform 0.1s;
  transform:
    perspective(1200px)
    translateX(calc(-50% + var(--horizontal-spread, 0px)))
    translateY(var(--vertical-curve, 0px))
    rotateY(calc((var(--x) * 20deg) + var(--rotation-angle, 0deg)))
    rotateX(calc((var(--y) * -20deg)))
    rotateZ(calc(var(--offset, 0) * 3deg))
    scale(calc(var(--scale-factor, 1) * 1.02));
}

/* Center slide special positioning for depth effect */
.slide[data-active] .slideContent {
  z-index: 1 !important; /* Ensure center stays behind */
  transform: translateX(-50%) translateY(30px) scale(0.85) !important; /* Deeper and smaller */
  box-shadow: 0 15px 40px rgba(0,0,0,0.5);
}

/* slide inner content (text overlay) */
.slideContentInner {
  transform-style: preserve-3d;
  transform: translateZ(2.5rem);
  transition: opacity 0.3s linear;
  text-shadow: 0 8px 25px rgba(0,0,0,0.7);
  opacity: 0;
  padding: 1.2rem 1.4rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
  border-radius: 12px;
  backdrop-filter: blur(2px);
}
.slideTitle {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
}
.slideSubtitle {
  font-size: 0.85rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 500;
}
.slideDescription {
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.85;
  line-height: 1.3;
}

/* video/thumb fills card */
.slideVideoWrap, .slideThumb {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 16px;
}

/* show active slide more prominently */
.slide[data-active] {
  z-index: 1; /* Lower for depth */
  pointer-events: auto;
}
.slide[data-active] .slideContentInner {
  opacity: 1;
  transform: translateZ(3rem);
}

/* active slide video iframe styling */
.slideVideoWrap iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  border-radius: 16px;
}

/* decorative/play icon on top */
.slidePlay {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 25;
  font-size: 2.5rem;
  opacity: 0.9;
  pointer-events: none;
  text-shadow: 0 4px 12px rgba(0,0,0,0.8);
  transition: transform 0.3s ease;
}
.slide[data-active] .slidePlay {
  transform: translate(-50%,-50%) scale(1.1);
}

/* Gradient overlay for better text readability */
.slideContent::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0,0,0,0.1) 0%,
    rgba(0,0,0,0.3) 50%,
    rgba(0,0,0,0.6) 100%
  );
  z-index: 1;
  border-radius: 16px;
  opacity: 0.7;
}
.slideContentInner {
  position: relative;
  z-index: 2;
}

/* Side slides get higher z-index to appear above center */
.slide:not([data-active]) {
  z-index: 10;
}

/* small responsive tweaks */
@media (max-width: 1024px) {
  .slideContent {
    width: 35vw;
    height: 44vw;
    max-width: none;
    max-height: 70vh;
  }
  .slides > button:first-child { left: 1vw; }
  .slides > button:last-child { right: 1vw; }
  
  /* Adjust spacing for smaller screens */
  .slide[data-offset="-3"] .slideContent { --horizontal-spread: -40vw; }
  .slide[data-offset="-2"] .slideContent { --horizontal-spread: -25vw; }
  .slide[data-offset="-1"] .slideContent { --horizontal-spread: -12vw; }
  .slide[data-offset="1"] .slideContent { --horizontal-spread: 12vw; }
  .slide[data-offset="2"] .slideContent { --horizontal-spread: 25vw; }
  .slide[data-offset="3"] .slideContent { --horizontal-spread: 40vw; }
}

@media (max-width: 768px) {
  .slideContent {
    width: 50vw;
    height: 60vw;
  }
  
  /* More compact spacing for mobile */
  .slide[data-offset="-3"] .slideContent { --horizontal-spread: -35vw; --vertical-curve: 100px; }
  .slide[data-offset="-2"] .slideContent { --horizontal-spread: -20vw; --vertical-curve: 60px; }
  .slide[data-offset="-1"] .slideContent { --horizontal-spread: -10vw; --vertical-curve: 20px; }
  .slide[data-offset="1"] .slideContent { --horizontal-spread: 10vw; --vertical-curve: 20px; }
  .slide[data-offset="2"] .slideContent { --horizontal-spread: 20vw; --vertical-curve: 60px; }
  .slide[data-offset="3"] .slideContent { --horizontal-spread: 35vw; --vertical-curve: 100px; }
}

/* hide the original large list (preserved logic but visually hidden) */
.orig-list { display: none !important; }
`;

  // AnimatedSlider component with your original logic preserved
  function AnimatedSlider({ items }) {
    // Use your VideoFilter directly (preserves your original logic)
    const previewSlides = items;

    const initialState = { slideIndex: 0 };
    const slidesReducer = (state, event) => {
      if (event.type === "NEXT") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % previewSlides.length,
        };
      }
      if (event.type === "PREV") {
        return {
          ...state,
          slideIndex:
            state.slideIndex === 0
              ? previewSlides.length - 1
              : state.slideIndex - 1,
        };
      }
      return state;
    };

    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    // useTilt hook for hover effects
    function useTilt() {
      const ref = React.useRef(null);

      React.useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;
        const stateVars = { rect: undefined };

        const handleMove = (e) => {
          if (!stateVars.rect) stateVars.rect = el.getBoundingClientRect();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const clientY = e.touches ? e.touches[0].clientY : e.clientY;
          const px = (clientX - stateVars.rect.left) / stateVars.rect.width;
          const py = (clientY - stateVars.rect.top) / stateVars.rect.height;
          el.style.setProperty("--px", px);
          el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("touchmove", handleMove, { passive: true });

        return () => {
          el.removeEventListener("mousemove", handleMove);
          el.removeEventListener("touchmove", handleMove);
        };
      }, []);

      return ref;
    }

    // Slide component with inverted U-curve positioning
    function Slide({ slide, offset }) {
      const active = offset === 0 ? true : null;
      const ref = useTilt();

      const id = slide.videoId || slide.id || "";
      const title =
        slide.title || slide.name || (slide.tags && slide.tags[0]) || "Video";
      const thumb =
        slide.thumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

      const embedSrc =
        active && id
          ? `https://www.youtube.com/embed/${id}?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=${id}&modestbranding=1&playsinline=1`
          : "";

      return (
        <div
          ref={ref}
          className="slide"
          data-active={active}
          data-offset={offset} // Add data attribute for CSS targeting
          style={{
            "--offset": offset,
            "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
            "--px": 0.5,
            "--py": 0.5,
          }}
        >
          <div
            className="slideBackground"
            style={{
              backgroundImage: `url('${thumb}')`,
            }}
          />

          <div
            className="slideContent"
            style={{
              backgroundImage: `url('${thumb}')`,
            }}
          >
            {embedSrc ? (
              <div className="slideVideoWrap" aria-hidden={!active}>
                <iframe
                  title={`preview-${id}`}
                  src={embedSrc}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img src={thumb} alt={title} className="slideThumb" />
            )}

            <div className="slidePlay" aria-hidden>
              ▶
            </div>

            <div className="slideContentInner">
              <h3 className="slideTitle">{title}</h3>
              <h4 className="slideSubtitle">
                {(slide.tags && slide.tags.slice(0, 2).join(" • ")) ||
                  slide.subtitle}
              </h4>
              <p className="slideDescription">{slide.description || ""}</p>
            </div>
          </div>
        </div>
      );
    }

    // Don't render slider if no items (preserves your original "No videos found" logic)
    if (!previewSlides || previewSlides.length === 0) {
      return null;
    }

    return (
      <div className="slides-wrapper" aria-hidden={false}>
        <div className="slides" style={{ touchAction: "none" }}>
          <button
            aria-label="previous"
            onClick={() => dispatch({ type: "PREV" })}
          >
            ‹
          </button>

          {[...previewSlides, ...previewSlides, ...previewSlides].map(
            (slide, i) => {
              let offset = previewSlides.length + (state.slideIndex - i);
              return <Slide slide={slide} offset={offset} key={i} />;
            }
          )}

          <button aria-label="next" onClick={() => dispatch({ type: "NEXT" })}>
            ›
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>📹 Videos Section</title>
      </Helmet>

      <style>{sliderStyles}</style>

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

      {/* Sidebar - Your original code preserved */}
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

      <article className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
        <h1 className="text-2xl font-bold mb-4">Videos Section</h1>
        <p className="mb-6">
          Here you can find various videos related to mental health and focus.
        </p>

        {/* Your original Animated Search Bar preserved */}
        <div className="relative w-full max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for post based on your current mood"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="peer w-full py-3 pl-12 pr-4 rounded-full border border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-500 outline-none text-lg"
          />
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
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-1 opacity-0 peer-focus:opacity-100 transition-opacity duration-500">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Enhanced INVERTED U-curve slider that respects your VideoFilter logic */}
        <AnimatedSlider items={VideoFilter} />

        {/* Your original "No videos found" logic preserved and working */}
        {VideoFilter.length === 0 && (
          <p className="text-center text-gray-500">No videos found.</p>
        )}

        {/* Your original list rendering preserved (visually hidden) */}
        <div className="orig-list" aria-hidden>
          {VideoFilter.map((video) => {
            return (
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
                key={video.videoId}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title="Mindfulness Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                ></iframe>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default VideosSection;
