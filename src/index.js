import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Homepage from "./pages/Homepage"; // Homepage
import Cars from "./pages/Cars"; // Search Car
import Login from "./pages/Login"; // Login
import Register from "./pages/Register"; // Register

import Protected from "./components/Protected";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          path="/cars"
          element={
            <Protected>
              <Cars />
            </Protected>
          }
        />

        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId="68980823363-57tmdid7nhefj7abt7l5u1jcbfdddg2p.apps.googleusercontent.com">
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path="/register"
          element={
            <GoogleOAuthProvider clientId="68980823363-57tmdid7nhefj7abt7l5u1jcbfdddg2p.apps.googleusercontent.com">
              <Register />
            </GoogleOAuthProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// Belom dilengkapi ClientId
reportWebVitals();
