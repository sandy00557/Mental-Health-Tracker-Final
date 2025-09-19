// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
// import preferenceReducer from "./preferenceSlice";  
// /*The Redux store is the core of Redux. It’s where:

// All your state lives

// All your reducers run

// All your dispatched actions go

// Subscriptions and middleware (like Thunk) operate


// */
// const store=configureStore({
//     reducer:{
//         user:userReducer,
//         preferences:preferenceReducer, //because we gave the names a preferences there so we should put like preferences:
//     }
// })

// export default store;






// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
// import preferenceReducer from "./preferenceSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     preferences: preferenceReducer,
//   },
// });

// export default store;


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import preferenceReducer from "./preferenceSlice";
import themeReducer from "./themeSlice";

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer,persistStore } from 'redux-persist';

const persistConfig={
  key:"root",
  storage,
  whitelist:["theme"] //only theme will be persisted locally
}


const rootReducer=combineReducers({
  user:userReducer,
  preferences:preferenceReducer,
  theme:themeReducer
})



const persistedReducer=persistReducer(persistConfig,rootReducer);


const store = configureStore({
  reducer: persistedReducer,
});

export const persistor=persistStore(store); //dont forget this if you want <PersistGate>
export default store;
