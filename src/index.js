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
