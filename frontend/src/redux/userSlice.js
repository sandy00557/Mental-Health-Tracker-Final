// //Original Code
// import { createSlice} from "@reduxjs/toolkit";
// import API from "../api/axios";

// const initialState = {
//   _id: null,
//   name: "",
//   email: "",
//   nickname: "",
//   password: "",
//   points: 0,
//   isAuthenticated: false, // ✅ needed
//   loading: false,         // ✅ needed
//   error: null,            // ✅ needed
// };

// const userSlice=createSlice({
//     name:'user',
//     initialState,
//     reducers:{
//         registerUser:(state,action)=>{
//             const {_id,name,email,nickname,password,points=0}=action.payload;
//             state._id=_id;
//             state.name=name;
//             state.email=email;
//             state.nickname=nickname;
//             state.password=password;
//             state.points=points;
//             state.isAuthenticated=true;
//         },
//         addName:(state,action)=>{
//             state.name=action.payload;
//         },
//         addPoints:(state,action)=>{
//             state.points+=action.payload; //dispatch(addPoints(10)); // add 10 points

//         },
//         setPoints:(state,action)=>{
//             state.points=Number(action.payload) || 0; //dispatch(setPoints(20)); // initializes points to 20

//         },
//         setNickname:(state,action)=>{
//             state.nickname=action.payload; //dispatch(setNickname('NewNick')); // sets nickname to 'NewNick'
//         },
//         logoutUser:(state)=>{
//             state.name="",
//             state.nickname="",
//             state.email="",
//             state.points=0
//             state.isAuthenticated=false;
//         }
//     }
    
// });

// export const {registerUser,addPoints,setPoints,setNickname,logoutUser,setUser} =userSlice.actions;

// //new code
// export const selectPoints = (state) => state.user.points;
// export const selectNickName=(state)=>state.user.nickname;
// export const selectName=(state)=>state.user.name;
// export const selectIsAuthenticated=(state)=>state.user.isAuthenticated;
// export default userSlice.reducer;






//before products bought addition

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../api/axios";

// // Thunk to fetch current user
// export const fetchCurrentUser = createAsyncThunk(
//   "user/fetchCurrentUser",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await API.get("/auth/me");   // calls your protect middleware
//       return res.data.user;                    // expects { user: { … } }
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// const initialState = {
//   _id: null,
//   name: "",
//   email: "",
//   nickname: "",
//   password: "",
//   points: 0,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     registerUser: (state, action) => {
//       const { _id, name, email, nickname, password, points = 0 } = action.payload;
//       state._id = _id;
//       state.name = name;
//       state.email = email;
//       state.nickname = nickname;
//       state.password = password;
//       state.points = points;
//       state.isAuthenticated = true;
//     },
//     addName: (state, action) => {
//       state.name = action.payload;
//     },
//     addPoints: (state, action) => {
//       state.points += action.payload; // dispatch(addPoints(10));
//     },
//     setPoints: (state, action) => {
//       state.points = Number(action.payload) || 0; // dispatch(setPoints(20));
//     },
//     setNickname: (state, action) => {
//       state.nickname = action.payload; // dispatch(setNickname('NewNick'));
//     },
//     logoutUser: (state) => {
//       state.name = "";
//       state.nickname = "";
//       state.email = "";
//       state.points = 0;
//       state.isAuthenticated = false;
//     },
//     // New reducer to manually set the user
//     setUser: (state, action) => {
//       const { _id, name, email, nickname, password, points = 0 } = action.payload;
//       state._id = _id;
//       state.name = name;
//       state.email = email;
//       state.nickname = nickname;
//       state.password = password;
//       state.points = points;
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCurrentUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCurrentUser.fulfilled, (state, action) => {
//         // Rehydrate state from API
//         const { _id, name, email, nickname, points = 0 } = action.payload;
//         state._id = _id;
//         state.name = name;
//         state.email = email;
//         state.nickname = nickname;
//         state.points = points;
//         state.isAuthenticated = true;
//         state.loading = false;
//       })
//       .addCase(fetchCurrentUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.isAuthenticated = false;
//       });
//   },
// });

// export const {
//   registerUser,
//   addPoints,
//   setPoints,
//   setNickname,
//   logoutUser,
//   setUser,
// } = userSlice.actions;

// export const selectPoints = (state) => state.user.points;
// export const selectNickName = (state) => state.user.nickname;
// export const selectName = (state) => state.user.name;
// export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
// export const selectLoading = (state) => state.user.loading;
// export const selectError = (state) => state.user.error;

// export default userSlice.reducer;










//after products bought addition
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

// Thunk to fetch current user
export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/auth/me");   // calls your protect middleware
      return res.data.user;                    // expects { user: { … } }
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
//why we use createAsyncThunk

const initialState = {
  _id: null,
  name: "",
  email: "",
  nickname: "",
  password: "",
  points: 0,
  productsBought:0,
  isAuthenticated: false,
  loading: false,
  error: null,
  quizDay:0
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { _id, name, email, nickname, password, points ,productsBought,quizDay= 0 } = action.payload;
      state._id = _id;
      state.name = name;
      state.email = email;
      state.nickname = nickname;
      state.password = password;
      state.points = points;
      state.productsBought=productsBought;
      state.isAuthenticated = true;
      state.quizDay=quizDay;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    addPoints: (state, action) => {
      state.points += action.payload; // dispatch(addPoints(10));
    },
    setPoints: (state, action) => {
      state.points = Number(action.payload) || 0; // dispatch(setPoints(20));
    },
    incrementProductsBought:(state)=>{
      state.productsBought+=1;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload; // dispatch(setNickname('NewNick'));
    },
    logoutUser: (state) => {
      state.name = "";
      state.nickname = "";
      state.email = "";
      state.points = 0;
      state.isAuthenticated = false;
    },
    // New reducer to manually set the user
    setUser: (state, action) => {
      const { _id, name, email, nickname, password, points,productsBought,quizDay = 0 } = action.payload;
      state._id = _id;
      state.name = name;
      state.email = email;
      state.nickname = nickname;
      state.password = password;
      state.points = points;
      state.productsBought=productsBought;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.quizDay=quizDay;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        // Rehydrate state from API
        const { _id, name, email, nickname, points, productsBought ,quizDay= 0 } = action.payload;
        state._id = _id;
        state.name = name;
        state.email = email;
        state.nickname = nickname;
        state.points = points;
        state.productsBought=productsBought;
        state.isAuthenticated = true;
        state.loading = false;
        state.quizDay=quizDay;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const {
  registerUser,
  addPoints,
  setPoints,
  incrementProductsBought,
  setNickname,
  logoutUser,
  setUser,
} = userSlice.actions;

export const selectPoints = (state) => state.user.points;
export const selectNickName = (state) => state.user.nickname;
export const selectName = (state) => state.user.name;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;






