import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // step 3: wrap the App component inside Helmet
  /*Why do we need <Provider store={store}> for useSelector and useDispatch to work?

Because all state in Redux lives inside the store, and useSelector and useDispatch are hooks from react-redux that rely on accessing that store through React Context.

🔌 Here's What Happens Without <Provider>:
useSelector() can't access the state

useDispatch() can't dispatch actions

Neither hook can subscribe to the store

So it throws an error:

❌ "Could not find react-redux context value; please ensure the component is wrapped in a <Provider>"

🔁 So What Does <Provider> Do?
<Provider store={store}> is like a wiring system that injects the Redux store into the entire React component tree using React Context.

This allows:

useSelector() to read and subscribe to the store

useDispatch() to send actions to the store





What is PersistGate?
PersistGate is a special component from redux-persist.
Its job is to delay rendering your <App /> until your persisted state (e.g., theme) is rehydrated (restored) from localStorage (or whichever storage you’re using).

👉 Think of it like this:
Your Redux store is empty at first. redux-persist then loads the saved state from localStorage.
PersistGate makes your app wait until this loading is done, so your UI doesn’t flash with wrong/default values.

🔹 What does loading={null} mean?
While waiting for the persisted state, PersistGate can show something temporarily.
If you put loading={null}, it shows nothing (blank) while loading.
*/
  <Provider store={store}>
    <PersistGate loading={<div>Loading.....</div>} persistor={persistor}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </PersistGate>
  </Provider>
);
