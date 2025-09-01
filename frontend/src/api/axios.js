// //Orignal Code
// import axios from 'axios'; //npm install axios 
// import {logoutUser} from '../redux/userSlice.js';
// import store from '../redux/store.js';
// /*rules of connection:
// 1.CORS ERROR:
// ❌ Error:
// When frontend tries to call the backend:
// Access to fetch at 'http://localhost:5000/api/v1/auth/register' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// ✅ Fix:
// In backend/server.js, add:
// const cors=require('cors');
// app.use(cors({ origin: 'http://localhost:3000', credentials: true//Allow cookies to be sent from frontend
// //}));
//  origin must match the frontend origin and credentials: true is a must if you're using cookies.


//  ✅ 2. Cookie Not Set
// ❌ Error:
// Your user is logged in, but the cookie (jwt) is not appearing in browser or not sent to backend.
// ✅ Fix: Ensure we have axios.js and app.use(cors)

// ✅ 3. Cannot Connect to MongoDB
// ❌ Error:MongooseServerSelectionError: connect ECONNREFUSED or MongoTimeoutError
// Fix:
// Check your .env file for the correct MongoDB URI and ensure you have internet access if using MongoDB Atlas.
// mongoose.connect(process.env.DATABASE)
//   .then(() => console.log('DB Connected'))
//   .catch((err) => console.error('MongoDB Error:', err));

  
//  */


// let isRedirecting=false;
// //axios helps to connect frontend with backend..baseUrl helps to attach only remaining url for backend. withCredentials means it sents jwt token with cookies for every request sent if valid.
// const API=axios.create({
//     // baseURL:process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1',
//     baseURL:'http://localhost:5000/api/v1',
//     withCredentials:true, 
// })




// API.interceptors.response.use(
//   res=>res,
//   err=>{
//     const isProtectedRoute =
//       !err.config.url.includes("/auth/login") ||
//       !err.config.url.includes("/auth/register");

//     if (err.response?.status === 401 && isProtectedRoute && !isRedirecting) {
//       isRedirecting=true;
//       store.dispatch(logoutUser());
//       return;
//     }

//     return Promise.reject(err);// Interceptor is a global behaviour . Without return the promise the component catch in react cannot utilize the error.
//     /*Why return Promise.reject(err) is needed
// Interceptors are middleware for promises.
// If you don’t return/reject, Axios assumes the interceptor “handled” the error, so the error never reaches your component’s catch. */
//   }
// );

// export default API;





import axios from "axios";

/* rules of connection:
1.CORS ERROR:
❌ Error:
When frontend tries to call the backend:
Access to fetch at 'http://localhost:5000/api/v1/auth/register' from origin 'http://localhost:3000' has been blocked by CORS policy...
✅ Fix:
In backend/server.js, add:
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
*/

// let isRedirecting = false;
const API = axios.create({
  // baseURL:process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1',
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

// API.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     const isProtectedRoute =
//       !err.config.url.includes("/auth/login") &&
//       !err.config.url.includes("/auth/register");

//     if (err.response?.status === 401 && isProtectedRoute && !isRedirecting) {
//       isRedirecting = true;
//       // Redirect to login on 401
//       window.location.href = "/";
//     }

//     return Promise.reject(err); 
//   }
// );

export default API;







