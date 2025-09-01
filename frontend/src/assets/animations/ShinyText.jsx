import React from "react";

const ShinyText = ({ children }) => {
  return (
    <span className="relative inline-block font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-shine">
      {children}
    </span>
  );
};

export default ShinyText;

// import React from "react";

// const ShinyText = ({ children }) => {
//   return (
//     <span
//       className="
//         relative inline-block font-bold text-4xl
//         bg-clip-text text-transparent
//         bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
//         animate-shine
//         [text-shadow:_0_0_2px_rgb(255_255_255_/_40%)]
//         dark:[text-shadow:_0_0_4px_rgb(0_0_0_/_60%)]
//       "
//     >
//       {children}
//     </span>
//   );
// };

// export default ShinyText;

// import React from "react";

// const ShinyText = ({ children }) => {
//   return (
//     <span
//       className="
//         relative inline-block font-bold text-4xl
//         text-transparent bg-clip-text
//         bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
//         bg-[length:200%_auto]
//         [animation-name:shine] [animation-duration:3s] [animation-timing-function:linear] [animation-iteration-count:infinite]
//         [@keyframes shine]:from{background-position:-200%_center}
//         [@keyframes shine]:to{background-position:200%_center}
//       "
//     >
//       {children}
//     </span>
//   );
// };

// export default ShinyText;
