// // import React from "react";

// // const SliderAnim = ({ value }) => {
// //   // Emoji mapping
// //   const emojiMap = {
// //     1: "😢",
// //     2: "🙂",
// //     3: "😃",
// //     4: "🤩",
// //     5: "😎",
// //     6: "🫡",
// //     7: "🏆",
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "20px" }}>
// //       {/* Emoji Display */}
// //       <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
// //         {emojiMap[value] || "😐"}
// //       </div>

// //       {/* Status Text */}
// //       <p style={{ fontWeight: "bold" }}>
// //         {value === 1 && "Feeling low 😢"}
// //         {value === 2 && "Doing okay 🙂"}
// //         {value === 3 && "Feeling good 😃"}
// //         {value === 4 && "Super excited 🤩"}
// //         {value === 5 && "Feeling cool 😎"}
// //         {value === 6 && "Almost there 🫡"}
// //         {value === 7 && "Champion 🏆"}
// //       </p>
// //     </div>
// //   );
// // };

// // export default SliderAnim;

// import React from "react";
// import "./SliderAnim.css"; // We'll add some CSS for styling

// const SliderAnim = ({ value }) => {
//   // Emoji mapping
//   const emojiMap = {
//     1: "😢",
//     2: "🙂",
//     3: "😃",
//     4: "🤩",
//     5: "😎",
//     6: "🫡",
//     7: "🏆",
//   };

//   // Calculate position of emoji along slider (0% to 100%)
//   const position = ((value - 1) / 6) * 100; // Since max = 7

//   return (
//     <div className="slider-container">
//       {/* Stars */}
//       <div className="stars">
//         {Array.from({ length: 7 }, (_, i) => (
//           <span key={i} className="star">
//             ⭐
//           </span>
//         ))}
//       </div>

//       {/* Slider Track */}
//       <div className="slider-track">
//         <div className="slider-emoji" style={{ left: `${position}%` }}>
//           {emojiMap[value]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SliderAnim;

// import React, { useRef } from "react";
// import "./SliderAnim.css";

// const SliderAnim = ({ value, setValue }) => {
//   const sliderRef = useRef(null);

//   const emojiMap = {
//     1: "😢",
//     2: "🙂",
//     3: "😃",
//     4: "🤩",
//     5: "😎",
//     6: "🫡",
//     7: "🏆",
//   };

//   const max = 7;

//   const handleDrag = (e) => {
//     const rect = sliderRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     let newValue = Math.round((x / rect.width) * (max - 1)) + 1;

//     if (newValue < 1) newValue = 1;
//     if (newValue > max) newValue = max;

//     setValue(newValue);
//   };

//   return (
//     <div
//       className="slider-container"
//       ref={sliderRef}
//       onMouseDown={(e) => {
//         handleDrag(e);
//         const moveListener = (ev) => handleDrag(ev);
//         const upListener = () => {
//           window.removeEventListener("mousemove", moveListener);
//           window.removeEventListener("mouseup", upListener);
//         };
//         window.addEventListener("mousemove", moveListener);
//         window.addEventListener("mouseup", upListener);
//       }}
//     >
//       <div className="stars">
//         {Array.from({ length: max }, (_, i) => (
//           <span key={i} className="star">
//             ⭐
//           </span>
//         ))}
//       </div>
//       <div className="slider-track">
//         <div
//           className="slider-emoji"
//           style={{ left: `${((value - 1) / (max - 1)) * 100}%` }}
//         >
//           {emojiMap[value]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SliderAnim;

import React, { useRef } from "react";
import "./SliderAnim.css";

const SliderAnim = ({ value, setValue }) => {
  const sliderRef = useRef(null);
  console.log(setValue);
  // Emoji mapping
  const emojiMap = {
    1: "😢",
    2: "🙂",
    3: "😃",
    4: "🤩",
    5: "😎",
    6: "🫡",
    7: "🏆",
  };

  const max = 7;

  // Drag handling
  // const handleDrag = (e) => {
  //   const rect = sliderRef.current.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   let newValue = Math.round((x / rect.width) * (max - 1)) + 1;

  //   if (newValue < 1) newValue = 1;
  //   if (newValue > max) newValue = max;

  //   setValue(newValue);
  // };

  return (
    <div
      className="slider-container"
      ref={sliderRef}
      // onMouseDown={(e) => {
      //   handleDrag(e);
      //   const moveListener = (ev) => handleDrag(ev);
      //   const upListener = () => {
      //     window.removeEventListener("mousemove", moveListener);
      //     window.removeEventListener("mouseup", upListener);
      //   };
      //   window.addEventListener("mousemove", moveListener);
      //   window.addEventListener("mouseup", upListener);
      // }}
      // onClick={handleDrag}
    >
      {/* Stars */}
      <div className="stars">
        {Array.from({ length: max }, (_, i) => (
          <span key={i} className="star">
            ⭐
          </span>
        ))}
      </div>

      {/* Slider Track */}
      <div
        className="slider-track"
        style={{
          background:
            value === 7
              ? "#66cc66" // fully green if completed
              : "linear-gradient(to right, #ff4d4d 0%, #ffd11a 50%, #66cc66 100%)",
        }}
      >
        {/* Emoji */}
        <div
          className="slider-emoji"
          // draggable="false"
          // onDragStart={(e) => e.preventDefault()}
          style={{ left: `${((value - 1) / (max - 1)) * 95}%` }}
        >
          {emojiMap[value]}
        </div>
      </div>
    </div>
  );
};

export default SliderAnim;
