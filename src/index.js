import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Error from "./components/Error";
import ReactSortableJSByUseSatus from "./components/react-sortable-js/ReactSortableJSByUseSatus";
import ReactSortableJSByReducer from "./components/react-sortable-js/ReactSortableJSByReducer";
import InfiniteScroll from "./components/infinite-scroll/InfiniteScroll";
import Login from "./components/firebase/Login";
import Database from "./components/firebase/Database";
import ImageUploading from "./components/cloudinary/ImageUploading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "react-sortable-js",
        errorElement: <Error />,
        children: [
          { path: "by-useState", element: <ReactSortableJSByUseSatus /> },
          { path: "by-reducer", element: <ReactSortableJSByReducer /> },
        ],
      },
      {
        path: "infinite-scroll",
        errorElement: <Error />,
        children: [{ path: "", element: <InfiniteScroll /> }],
      },
      {
        path: "firebase",
        errorElement: <Error />,
        children: [
          { path: "login", element: <Login /> },
          { path: "database", element: <Database /> },
        ],
      },
      {
        path: "cloudinary",
        errorElement: <Error />,
        children: [{ path: "image-uploading", element: <ImageUploading /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
