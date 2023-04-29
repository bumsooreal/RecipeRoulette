import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import App from './App'; boiler plate code, note needed 
import reportWebVitals from './reportWebVitals';

import Results from "./Routes/Results"; //modified from HW8, may need to restructure based on names of folders
import FoodProfile from "./Routes/FoodProfile";
import App from "./Routes/App";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/foodprofile",
    element: <FoodProfile />,

  },
]);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
