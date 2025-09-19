// //without css
// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setPoints } from "../redux/userSlice";
// import { useNavigate } from "react-router-dom";

// const ProductsSection = () => {
//   const [productz, setProductz] = useState([]);
//   const [productsFailure, setProductsFailure] = useState(false);
//   const [productsSuccess, setProductsSuccess] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   let globalPoints_Products = useSelector((state) => state.user.points);
//   const userId = useSelector((state) => state.user._id);

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
//     const fetchProducts = async () => {
//       try {
//         const response = await API.get("/products/", {
//           withCredentials: true,
//         });
//         setProductsSuccess(true);
//         setProductz(response.data.data);
//       } catch (err) {
//         console.log(err);
//         setProductsFailure(true);
//       }
//     };
//     fetchProducts();
//   }, [dispatch]);

//   const handleBuy = async (product) => {
//     if (globalPoints_Products < product.discountAmount) {
//       const result = window.confirm(
//         "You don't have enough points to buy this product. Do you want to play games and add more points?"
//       );
//       if (result) {
//         navigate("/DashBoardPage");
//       }
//       return;
//     }

//     try {
//       const response_pointsded = await API.patch("/products", {
//         points: product.discountAmount,
//         userId: userId,
//       });

//       if (response_pointsded.data.status === "success") {
//         dispatch(setPoints(response_pointsded.data.newpoints));
//         alert("✅ Purchase successful! Redirecting to download PDF...");
//         window.open(product.bookLink, "_blank");
//       } else {
//         alert("❌ Failed to deduct points. Please try again.");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong during purchase.");
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Products Section</title>
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
//               onClick={() => navigate("/DashBoardPage")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Main Page
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/VideosSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/GamesSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Coach Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Voice Text Section
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

//       <div className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
//         <h3>Welcome to Products Section</h3>
//         {productsSuccess && (
//           <>
//             <h3>Products are listed below</h3>
//             <h3>Your Points: {globalPoints_Products}</h3>
//             <div>
//               {productz.map((product, index) => (
//                 <div key={index}>
//                   <h3>{product.name}</h3>
//                   <img src={product.image} alt={product.name} />
//                   <p>⭐ Rating: {product.rating}</p>
//                   <p>Discounted Price: {product.discountAmount}</p>
//                   <p>
//                     <span>Original: {product.Amount}</span>
//                   </p>
//                   <button onClick={() => handleBuy(product)}>
//                     Buy / Download PDF
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//         {productsFailure && <h1>Error fetching the products data.</h1>}
//       </div>
//     </>
//   );
// };

// export default ProductsSection;

//with css
// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setPoints } from "../redux/userSlice";
// import { useNavigate } from "react-router-dom";

// const ProductsSection = () => {
//   const [productz, setProductz] = useState([]);
//   const [productsFailure, setProductsFailure] = useState(false);
//   const [productsSuccess, setProductsSuccess] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   let globalPoints_Products = useSelector((state) => state.user.points);
//   const userId = useSelector((state) => state.user._id);

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
//     const fetchProducts = async () => {
//       try {
//         const response = await API.get("/products/", {
//           withCredentials: true,
//         });
//         setProductsSuccess(true);
//         setProductz(response.data.data);
//       } catch (err) {
//         console.log(err);
//         setProductsFailure(true);
//       }
//     };
//     fetchProducts();
//   }, [dispatch]);

//   const handleBuy = async (product) => {
//     if (globalPoints_Products < product.discountAmount) {
//       const result = window.confirm(
//         "You don't have enough points to buy this product. Do you want to play games and add more points?"
//       );
//       if (result) {
//         navigate("/DashBoardPage");
//       }
//       return;
//     }

//     try {
//       const response_pointsded = await API.patch("/products", {
//         points: product.discountAmount,
//         userId: userId,
//       });

//       if (response_pointsded.data.status === "success") {
//         dispatch(setPoints(response_pointsded.data.newpoints));
//         alert("✅ Purchase successful! Redirecting to download PDF...");
//         window.open(product.bookLink, "_blank");
//       } else {
//         alert("❌ Failed to deduct points. Please try again.");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong during purchase.");
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>🛒 Products Section</title>
//       </Helmet>

//       {/* Add Tailwind CDN */}
//       <link
//         href="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"
//         rel="stylesheet"
//       />

//       {/* Hamburger Checkbox */}
//       <input type="checkbox" id="drawer-toggle" className="hidden peer" />

//       {/* Sidebar */}
//       <div className="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform -translate-x-full transition-transform duration-300 peer-checked:translate-x-0">
//         <div className="p-6 text-white">
//           <h2 className="text-xl font-bold mb-6">Dashboard Menu</h2>
//           <nav className="space-y-4">
//             <button
//               onClick={() => navigate("VideosSection")}
//               className="block w-full text-left px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("VoiceTextSection")}
//               className="block w-full text-left px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
//             >
//               VoiceText Section
//             </button>
//             <button
//               onClick={() => navigate("GamesSection")}
//               className="block w-full text-left px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("CoachSection")}
//               className="block w-full text-left px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
//             >
//               Coach Section
//             </button>
//             <button
//               onClick={logoutsession}
//               className="block w-full text-left px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition"
//             >
//               Logout
//             </button>
//           </nav>
//         </div>
//       </div>

//       {/* Hamburger Icon */}
//       <label
//         htmlFor="drawer-toggle"
//         className="fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition"
//       >
//         <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
//         <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
//         <div className="w-6 h-0.5 bg-gray-800"></div>
//       </label>

//       {/* Main Content */}
//       <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
//             Welcome to Products Section
//           </h3>

//           {productsSuccess && (
//             <>
//               <div className="text-center mb-8">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">
//                   Products are listed below
//                 </h3>
//                 <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg">
//                   Your Points: {globalPoints_Products}
//                 </div>
//               </div>

//               {/* Products Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                 {productz.map((product, index) => (
//                   <div key={index} className="group perspective-1000">
//                     {/* Product Card */}
//                     <div className="relative w-full h-96 bg-white shadow-xl rounded-xl transition-all duration-700 hover:shadow-2xl transform-style-preserve-3d group-hover:rotate-y-180">
//                       {/* Front Face */}
//                       <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden">
//                         <div className="relative h-full flex flex-col">
//                           {/* Product Image Section */}
//                           <div
//                             className="relative h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center"
//                             style={{
//                               clipPath:
//                                 "polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%)",
//                             }}
//                           >
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className="w-20 h-20 object-contain rounded-lg border-2 border-white shadow-md"
//                             />
//                           </div>

//                           {/* Product Info Section */}
//                           <div className="flex-1 p-4 flex flex-col justify-between">
//                             <div>
//                               <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
//                                 {product.name}
//                               </h3>
//                               <div className="flex items-center mb-2">
//                                 <span className="text-yellow-500 text-lg">
//                                   ⭐
//                                 </span>
//                                 <span className="text-sm text-gray-600 ml-1">
//                                   Rating: {product.rating}
//                                 </span>
//                               </div>
//                             </div>

//                             {/* Pricing */}
//                             <div className="text-center">
//                               <div className="text-2xl font-bold text-green-600 mb-1">
//                                 £{product.discountAmount}
//                               </div>
//                               <div className="text-sm text-gray-500 line-through">
//                                 Original: £{product.Amount}
//                               </div>
//                             </div>

//                             {/* View Me Text */}
//                             <div className="text-center mt-4">
//                               <span className="text-purple-600 font-bold text-lg">
//                                 View me
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Back Face */}
//                       <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl bg-white overflow-hidden">
//                         <div className="h-full flex flex-col justify-center items-center p-6 text-center">
//                           <div className="mb-4">
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className="w-16 h-16 object-contain mx-auto mb-3 rounded-lg"
//                             />
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">
//                               {product.name}
//                             </h3>
//                             <p className="text-sm text-gray-600 mb-4">
//                               Discover insights and knowledge with this
//                               comprehensive resource. Perfect for learning and
//                               development.
//                             </p>
//                           </div>

//                           {/* Pricing on back */}
//                           <div className="mb-6">
//                             <div className="text-2xl font-bold text-green-600 mb-1">
//                               £{product.discountAmount}
//                             </div>
//                             <div className="text-sm text-gray-500 line-through">
//                               Was £{product.Amount}
//                             </div>
//                             <div className="text-xs text-red-500 font-semibold">
//                               Save £{product.Amount - product.discountAmount}!
//                             </div>
//                           </div>

//                           {/* Buy Button */}
//                           <button
//                             onClick={() => handleBuy(product)}
//                             className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
//                           >
//                             Buy / Download PDF
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {productsFailure && (
//             <div className="text-center">
//               <h1 className="text-2xl font-bold text-red-600 bg-red-100 p-6 rounded-lg">
//                 Error fetching the products data.
//               </h1>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsSection;

// import React, { useState, useEffect } from "react";
// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useSelector, useDispatch } from "react-redux";
// import { setPoints } from "../redux/userSlice";
// import { useNavigate } from "react-router-dom";
// import "../assets/animations/ProductsSection.css"; // Custom flip/book-style CSS

// const ProductsSection = () => {
//   const [productz, setProductz] = useState([]);
//   const [productsFailure, setProductsFailure] = useState(false);
//   const [productsSuccess, setProductsSuccess] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   let globalPoints_Products = useSelector((state) => state.user.points);
//   const userId = useSelector((state) => state.user._id);

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
//     const fetchProducts = async () => {
//       try {
//         const response = await API.get("/products/", {
//           withCredentials: true,
//         });
//         setProductsSuccess(true);
//         setProductz(response.data.data);
//       } catch (err) {
//         console.log(err);
//         setProductsFailure(true);
//       }
//     };
//     fetchProducts();
//   }, [dispatch]);

//   const handleBuy = async (product) => {
//     if (globalPoints_Products < product.discountAmount) {
//       const result = window.confirm(
//         "You don't have enough points to buy this product. Do you want to play games and add more points?"
//       );
//       if (result) {
//         navigate("/DashBoardPage");
//       }
//       return;
//     }

//     try {
//       const response_pointsded = await API.patch("/products", {
//         points: product.discountAmount,
//         userId: userId,
//       });

//       if (response_pointsded.data.status === "success") {
//         dispatch(setPoints(response_pointsded.data.newpoints));
//         alert("✅ Purchase successful! Redirecting to download PDF...");
//         window.open(product.bookLink, "_blank");
//       } else {
//         alert("❌ Failed to deduct points. Please try again.");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong during purchase.");
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Products Section</title>
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
//               onClick={() => navigate("/DashBoardPage")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Main Page
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/VideosSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/GamesSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Coach Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Voice Text Section
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

//       <div className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
//             Welcome to Products Section
//           </h3>

//           {productsSuccess && (
//             <>
//               <div className="text-center mb-8">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">
//                   Products are listed below
//                 </h3>
//                 <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg">
//                   Your Points: {globalPoints_Products}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                 {productz.map((product, index) => (
//                   <div key={index} className="card group relative w-full h-96">
//                     {/* Front face container */}
//                     <div className="flip-card__container">
//                       <div className="card-front bg-white shadow-xl rounded-xl overflow-hidden w-full h-full">
//                         <div
//                           className="h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center"
//                           style={{
//                             clipPath:
//                               "polygon(0 0,100% 0,100% 90%,57% 90%,50% 100%,43% 90%,0 90%)",
//                           }}
//                         >
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-20 h-20 object-contain rounded-lg border-2 border-white shadow-md"
//                           />
//                         </div>
//                         <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
//                           <div>
//                             <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
//                               {product.name}
//                             </h3>
//                             <div className="flex items-center mb-2">
//                               <span className="text-yellow-500 text-lg">
//                                 ⭐
//                               </span>
//                               <span className="text-sm text-gray-600 ml-1">
//                                 Rating: {product.rating}
//                               </span>
//                             </div>
//                           </div>
//                           <div className="text-center">
//                             <div className="text-2xl font-bold text-green-600 mb-1">
//                               £{product.discountAmount}
//                             </div>
//                             <div className="text-sm text-gray-500 line-through">
//                               Original: £{product.Amount}
//                             </div>
//                           </div>
//                           <div className="text-center mt-4">
//                             <span className="text-purple-600 font-bold text-lg">
//                               View me
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Inside Page */}
//                     <div className="inside-page rounded-xl p-4">
//                       <div className="inside-page__container flex flex-col items-center justify-center text-center w-full h-full">
//                         <h3 className="inside-page__heading inside-page__heading--city text-xl font-extrabold pb-4 text-pink-600">
//                           For urban lovers
//                         </h3>
//                         <p className="inside-page__text text-gray-800">
//                           Explore the city life with exciting experiences and
//                           deals!
//                         </p>
//                         {/* Mental Health Dummy Content */}
//                         <p className="mt-4 text-sm text-gray-700">
//                           Take a moment to breathe deeply. Remember, your mental
//                           well-being matters. You are not alone.
//                         </p>
//                         {/* Buy Button */}
//                         <button
//                           onClick={() => handleBuy(product)}
//                           className="inside-page__btn inside-page__btn--buy mt-6 w-11/12 text-center"
//                         >
//                           Buy
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {productsFailure && (
//             <div className="text-center">
//               <h1 className="text-2xl font-bold text-red-600 bg-red-100 p-6 rounded-lg">
//                 Error fetching the products data.
//               </h1>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsSection;

// import React, { useState, useEffect } from "react";
// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useSelector, useDispatch } from "react-redux";
// import { setPoints } from "../redux/userSlice";
// import { useNavigate } from "react-router-dom";

// const ProductsSection = () => {
//   const [productz, setProductz] = useState([]);
//   const [productsFailure, setProductsFailure] = useState(false);
//   const [productsSuccess, setProductsSuccess] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const globalPoints_Products = useSelector((state) => state.user.points);
//   const userId = useSelector((state) => state.user._id);

//   const logoutsession = async () => {
//     const response = await API.post(
//       "/auth/logout",
//       {},
//       { withCredentials: true }
//     );
//     if (response.data.status === "success") {
//       navigate("/");
//     }
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await API.get("/products/", {
//           withCredentials: true,
//         });
//         setProductsSuccess(true);
//         setProductz(response.data.data);
//       } catch (err) {
//         console.error(err);
//         setProductsFailure(true);
//       }
//     };
//     fetchProducts();
//   }, [dispatch]);

//   const handleBuy = async (product) => {
//     if (globalPoints_Products < product.discountAmount) {
//       const result = window.confirm(
//         "You don't have enough points to buy this product. Do you want to play games and add more points?"
//       );
//       if (result) {
//         navigate("/DashBoardPage");
//       }
//       return;
//     }
//     try {
//       const response_pointsded = await API.patch("/products", {
//         points: product.discountAmount,
//         userId,
//       });
//       if (response_pointsded.data.status === "success") {
//         dispatch(setPoints(response_pointsded.data.newpoints));
//         alert("✅ Purchase successful! Redirecting to download PDF...");
//         window.open(product.bookLink, "_blank");
//       } else {
//         alert("❌ Failed to deduct points. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong during purchase.");
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Products Section</title>
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
//               onClick={() => navigate("/DashBoardPage")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Main Page
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/VideosSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/GamesSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Coach Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/VoiceTextSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Voice Text Section
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

//       <div className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
//             Welcome to Products Section
//           </h3>

//           {productsSuccess && (
//             <>
//               <div className="text-center mb-8">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">
//                   Products are listed below
//                 </h3>
//                 <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg">
//                   Your Points: {globalPoints_Products}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 overflow-visible">
//                 {productz.map((product, index) => (
//                   <div
//                     key={index}
//                     className="
//                       relative w-[15rem] h-[24rem] bg-white shadow-xl group overflow-visible
//                       hover:w-[30rem] transition-all duration-[1000ms] ease-in-out
//                     "
//                   >
//                     {/* Flip container */}
//                     <div
//                       className="
//                         absolute inset-0 [perspective:1000px] origin-left
//                         transition-transform duration-[1000ms] ease-in-out
//                         group-hover:[transform:rotateY(-180deg)]
//                       "
//                     >
//                       {/* Front face */}
//                       <div className="absolute inset-0 bg-white rounded-xl overflow-hidden backface-hidden flex flex-col justify-between">
//                         <div
//                           className="
//                             h-[12rem] flex items-center justify-center p-4
//                             clip-path-[polygon(0_0,100%_0,100%_90%,57%_90%,50%_100%,43%_90%,0_90%)]
//                             bg-gradient-to-br from-purple-400 via-pink-500 to-red-500
//                           "
//                         >
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-20 h-20 object-contain rounded-lg border-2 border-white shadow-md"
//                           />
//                         </div>
//                         <div className="p-4 flex flex-col justify-between flex-grow">
//                           <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
//                             {product.name}
//                           </h3>
//                           <div className="flex items-center mb-2">
//                             <span className="text-yellow-500 text-lg">⭐</span>
//                             <span className="text-sm text-gray-600 ml-1">
//                               Rating: {product.rating}
//                             </span>
//                           </div>
//                           <div className="text-center">
//                             <div className="text-2xl font-bold text-green-600 mb-1">
//                               £{product.discountAmount}
//                             </div>
//                             <div className="text-sm text-gray-500 line-through">
//                               Original: £{product.Amount}
//                             </div>
//                           </div>
//                           <div className="text-center mt-4 text-purple-600 font-bold text-lg">
//                             View me
//                           </div>
//                         </div>
//                       </div>
//                       {/* Back face (empty) */}
//                       <div className="absolute inset-0 bg-white rounded-xl backface-hidden [transform:rotateY(180deg)]" />
//                     </div>

//                     {/* Inside Page */}
//                     <div
//                       className="
//                         absolute inset-0 bg-white rounded-xl p-4
//                         shadow-[inset_20rem_0_5rem_-2.5rem_rgba(0,0,0,0.25)]
//                         transition-shadow duration-[1000ms] ease-in-out
//                         group-hover:shadow-[inset_1rem_0_5rem_-2.5rem_rgba(0,0,0,0.1)]
//                         flex flex-col items-center justify-center text-center
//                       "
//                     >
//                       <h3 className="text-xl font-extrabold text-pink-600 pb-4">
//                         For urban lovers
//                       </h3>
//                       <p className="text-gray-800">
//                         Explore the city life with exciting experiences and
//                         deals!
//                       </p>
//                       <p className="mt-4 text-sm text-gray-700">
//                         Take a moment to breathe deeply. Remember, your mental
//                         well-being matters. You are not alone.
//                       </p>
//                       <button
//                         onClick={() => handleBuy(product)}
//                         className="
//                           mt-6 w-11/12 py-2 font-semibold rounded-md
//                           border-2 border-pink-600 text-pink-600
//                           hover:bg-pink-600 hover:text-white
//                           transition-colors duration-300
//                         "
//                       >
//                         Buy
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {productsFailure && (
//             <div className="text-center">
//               <h1 className="text-2xl font-bold text-red-600 bg-red-100 p-6 rounded-lg">
//                 Error fetching the products data.
//               </h1>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsSection;

// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setPoints } from "../redux/userSlice";
// import { useNavigate } from "react-router-dom";
// import "../assets/animations/ProductsSection.css"; // ✅ Import the CSS we built

// const ProductsSection = () => {
//   const [productz, setProductz] = useState([]);
//   const [productsFailure, setProductsFailure] = useState(false);
//   const [productsSuccess, setProductsSuccess] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   let globalPoints_Products = useSelector((state) => state.user.points);
//   const userId = useSelector((state) => state.user._id);

//   const logoutsession = async () => {
//     const response = await API.post(
//       "/auth/logout",
//       {},
//       { withCredentials: true }
//     );
//     if (response.data.status === "success") {
//       navigate("/");
//     }
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await API.get("/products/", {
//           withCredentials: true,
//         });
//         setProductsSuccess(true);
//         setProductz(response.data.data);
//       } catch (err) {
//         console.log(err);
//         setProductsFailure(true);
//       }
//     };
//     fetchProducts();
//   }, [dispatch]);

//   const handleBuy = async (product) => {
//     if (globalPoints_Products < product.discountAmount) {
//       const result = window.confirm(
//         "You don't have enough points to buy this product. Do you want to play games and add more points?"
//       );
//       if (result) {
//         navigate("/DashBoardPage");
//       }
//       return;
//     }

//     try {
//       const response_pointsded = await API.patch("/products", {
//         points: product.discountAmount,
//         userId: userId,
//       });

//       if (response_pointsded.data.status === "success") {
//         dispatch(setPoints(response_pointsded.data.newpoints));
//         alert("✅ Purchase successful! Redirecting to download PDF...");
//         window.open(product.bookLink, "_blank");
//       } else {
//         alert("❌ Failed to deduct points. Please try again.");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong during purchase.");
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Products Section</title>
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
//               onClick={() => navigate("/DashBoardPage")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Main Page
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/VideosSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/GamesSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Coach Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Voice Text Section
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

//       <div className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
//         <h3>Welcome to Products Section</h3>
//         {productsSuccess && (
//           <>
//             <h3>Products are listed below</h3>
//             <h3>Your Points: {globalPoints_Products}</h3>

//             <div className="products-container">
//               {productz.map((product, index) => (
//                 <div key={index} className="book">
//                   {/* FRONT COVER */}
//                   <div className="book-cover">
//                     <h3>{product.name}</h3>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       style={{ maxWidth: "100%", borderRadius: "4px" }}
//                     />
//                     <p>⭐ Rating: {product.rating}</p>
//                     <p>Discounted Price: {product.discountAmount}</p>
//                     <p>
//                       <span>Original: {product.Amount}</span>
//                     </p>
//                     <button onClick={() => handleBuy(product)}>
//                       Buy / Download PDF
//                     </button>
//                   </div>

//                   {/* BOOK SPINE */}
//                   <div className="book-spine"></div>

//                   {/* INNER PAGE */}
//                   <div className="book-page">
//                     <h4>About this book</h4>
//                     <p>
//                       This is a premium product. Use your points to unlock and
//                       download the PDF instantly.
//                     </p>
//                     <button onClick={() => handleBuy(product)}>
//                       Purchase Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//         {productsFailure && <h1>Error fetching the products data.</h1>}
//       </div>
//     </>
//   );
// };

// export default ProductsSection;

// import API from "../api/axios";
// import { Helmet } from "react-helmet-async";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { incrementProductsBought, setPoints } from "../redux/userSlice";
// import { useNavigate } from "react-router-dom";
// import "../assets/animations/ProductsSection.css"; // ✅ Import the CSS we built
// import "../assets/animations/CoachSection.css";
// const ProductsSection = () => {
//   const [productz, setProductz] = useState([]);
//   const [productsFailure, setProductsFailure] = useState(false);
//   const [productsSuccess, setProductsSuccess] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const productsBought = useSelector((state) => state.user.productsBought);
//   let globalPoints_Products = useSelector((state) => state.user.points);
//   const userId = useSelector((state) => state.user._id);

//   const logoutsession = async () => {
//     const response = await API.post(
//       "/auth/logout",
//       {},
//       { withCredentials: true }
//     );
//     if (response.data.status === "success") {
//       navigate("/");
//     }
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await API.get("/products/", {
//           withCredentials: true,
//         });
//         setProductsSuccess(true);
//         setProductz(response.data.data);
//       } catch (err) {
//         console.log(err);
//         setProductsFailure(true);
//       }
//     };
//     fetchProducts();
//   }, [dispatch]);

//   const handleBuy = async (product) => {
//     if (globalPoints_Products < product.discountAmount) {
//       const result = window.confirm(
//         "You don't have enough points to buy this product. Do you want to play games and add more points?"
//       );
//       if (result) {
//         navigate("/DashBoardPage/GamesSection");
//       }
//       return;
//     }

//     try {
//       const response_pointsded = await API.patch("/products", {
//         points: product.discountAmount,
//         userId: userId,
//         productsBought: productsBought,
//       });

//       if (response_pointsded.data.status === "success") {
//         dispatch(setPoints(response_pointsded.data.newpoints));
//         dispatch(incrementProductsBought());
//         alert("✅ Purchase successful! Redirecting to download PDF...");
//         window.open(product.bookLink, "_blank");
//       } else {
//         alert("❌ Failed to deduct points. Please try again.");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong during purchase.");
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Products Section</title>
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
//               onClick={() => navigate("/DashBoardPage")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Main Page
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/VideosSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Videos Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/GamesSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Games Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/CoachSection")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Coach Section
//             </button>
//             <button
//               onClick={() => navigate("/DashBoardPage/EmotionRecorder")}
//               className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
//             >
//               Emotion Recorder
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

//       <div className="coach-section">
//         <div className="floating-bg">
//           <div className="bubble bubble-1"></div>
//           <div className="bubble bubble-2"></div>
//           <div className="bubble bubble-3"></div>
//           <div className="bubble bubble-4"></div>
//           <div className="bubble bubble-5"></div>
//           <div className="bubble bubble-6"></div>
//         </div>
//         <div className="products-section">
//           <div className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
//             <h3>Welcome to Products Section</h3>
//             {productsSuccess && (
//               <>
//                 <h3>Products are listed below</h3>
//                 <h3>Your Points: {globalPoints_Products}</h3>

//                 {/* <div className="products-container">
//                 {productz.map((product, index) => (
//                   <div key={index} className="book">
//                     <div className="book-cover">
//                       <h3>{product.name}</h3>
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         style={{ maxWidth: "100%", borderRadius: "4px" }}
//                       />
//                       <p>⭐ Rating: {product.rating}</p>
//                       <p>Discounted Price: {product.discountAmount}</p>
//                       <p>
//                         <span>Original: {product.Amount}</span>
//                       </p>
//                       <button onClick={() => handleBuy(product)}>
//                         View Me 👀
//                       </button>
//                     </div>

//                     <div className="book-spine"></div>

//                     <div className="book-page">
//                       <h4>About this book</h4>
//                       <p>{product.description}</p>
//                       <h4>Motive</h4>
//                       <p>{product.motive}</p>
//                       <button onClick={() => handleBuy(product)}>
//                         Purchase Now 🛒
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div> */}
//                 <div className="products-container">
//                   {productz.map((product, index) => (
//                     <div key={index} className="book">
//                       <div className="flip-card">
//                         <div className="flip-card__container">
//                           <div className="book-cover">
//                             <h3>{product.name}</h3>
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               style={{ maxWidth: "100%", borderRadius: "4px" }}
//                             />
//                             <p>⭐ Rating: {product.rating}</p>
//                             <p>Discounted Price: {product.discountAmount}</p>
//                             <p>
//                               <span>Original: {product.Amount}</span>
//                             </p>
//                             <button onClick={() => handleBuy(product)}>
//                               View me
//                             </button>
//                           </div>

//                           <div className="book-page"></div>
//                         </div>
//                       </div>

//                       <div className="inside-page">
//                         <div className="inside-page__container">
//                           <h4>About this book</h4>
//                           <p>{product.description}</p>
//                           <h4>Motive</h4>
//                           <p>{product.motive}</p>
//                           <button
//                             className="inside-page__btn inside-page__btn--city"
//                             onClick={() => handleBuy(product)}
//                           >
//                             Purchase Now
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//             {productsFailure && <h1>Error fetching the products data.</h1>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsSection;

import API from "../api/axios";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementProductsBought, setPoints } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import "../assets/animations/ProductsSection.css"; // ✅ Import the CSS we built
import "../assets/animations/CoachSection.css";
const ProductsSection = () => {
  const [productz, setProductz] = useState([]);
  const [productsFailure, setProductsFailure] = useState(false);
  const [productsSuccess, setProductsSuccess] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsBought = useSelector((state) => state.user.productsBought);
  let globalPoints_Products = useSelector((state) => state.user.points);
  const userId = useSelector((state) => state.user._id);

  const logoutsession = async () => {
    const response = await API.post(
      "/auth/logout",
      {},
      { withCredentials: true }
    );
    if (response.data.status === "success") {
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/products/", {
          withCredentials: true,
        });
        setProductsSuccess(true);
        setProductz(response.data.data);
      } catch (err) {
        console.log(err);
        setProductsFailure(true);
      }
    };
    fetchProducts();
  }, [dispatch]);

  const handleBuy = async (product) => {
    if (globalPoints_Products < product.discountAmount) {
      const result = window.confirm(
        "You don't have enough points to buy this product. Do you want to play games and add more points?"
      );
      if (result) {
        navigate("/DashBoardPage/GamesSection");
      }
      return;
    }

    try {
      const response_pointsded = await API.patch("/products", {
        points: product.discountAmount,
        userId: userId,
        productsBought: productsBought,
      });

      if (response_pointsded.data.status === "success") {
        dispatch(setPoints(response_pointsded.data.newpoints));
        dispatch(incrementProductsBought());
        alert("✅ Purchase successful! Redirecting to download PDF...");
        window.open(product.bookLink, "_blank");
      } else {
        alert("❌ Failed to deduct points. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong during purchase.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Products Section</title>
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

      <div className="coach-section">
        <div className="floating-bg">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
        </div>
        <div className="products-section">
          <div className="products-wrapper">
            <h3>Welcome to Products Section</h3>
            {productsSuccess && (
              <>
                <h3>Products are listed below</h3>
                <h3>Your Points: {globalPoints_Products}</h3>

                {/* <div className="products-container">
                {productz.map((product, index) => (
                  <div key={index} className="book">
                    <div className="book-cover">
                      <h3>{product.name}</h3>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxWidth: "100%", borderRadius: "4px" }}
                      />
                      <p>⭐ Rating: {product.rating}</p>
                      <p>Discounted Price: {product.discountAmount}</p>
                      <p>
                        <span>Original: {product.Amount}</span>
                      </p>
                      <button onClick={() => handleBuy(product)}>
                        View Me 👀
                      </button>
                    </div>

                    <div className="book-spine"></div>

                    <div className="book-page">
                      <h4>About this book</h4>
                      <p>{product.description}</p>
                      <h4>Motive</h4>
                      <p>{product.motive}</p>
                      <button onClick={() => handleBuy(product)}>
                        Purchase Now 🛒
                      </button>
                    </div>
                  </div>
                ))}
              </div> */}
                <div className="products-container">
                  {productz.map((product, index) => (
                    <div key={index} className="book">
                      <div className="flip-card">
                        <div className="flip-card__container">
                          <div className="book-cover">
                            <h3>{product.name}</h3>
                            <img
                              src={product.image}
                              alt={product.name}
                              style={{ maxWidth: "100%", borderRadius: "4px" }}
                            />
                            <p>⭐ Rating: {product.rating}</p>
                            <p>Discounted Price: {product.discountAmount}</p>
                            <p>
                              <span>Original: {product.Amount}</span>
                            </p>
                            <button onClick={() => handleBuy(product)}>
                              View me
                            </button>
                          </div>

                          <div className="book-page"></div>
                        </div>
                      </div>

                      <div className="inside-page">
                        <div className="inside-page__container">
                          <p>
                            <span style={{ fontWeight: "bold" }}>
                              About book:{" "}
                            </span>
                            {product.description}
                          </p>
                          <p style={{ marginTop: "0.7rem" }}>
                            <span style={{ fontWeight: "bold" }}>Motive: </span>
                            {product.motive}
                          </p>
                          <button
                            className="inside-page__btn inside-page__btn--city"
                            onClick={() => handleBuy(product)}
                          >
                            Purchase Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {productsFailure && <h1>Error fetching the products data.</h1>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
