import React from "react";
import { Link } from "react-router-dom";

const tabList = [
  {
    title: "REACT-SORTABLE-JS-BY-USESTATE",
    path: "/react-sortable-js/by-useState",
  },
  {
    title: "REACT-SORTABLE-JS-BY-REDUCER",
    path: "/react-sortable-js/by-reducer",
  },
  {
    title: "INFINITE-SCROLL",
    path: "/infinite-scroll",
  },
  {
    title: "FIRE-BASE-LOGIN",
    path: "/firebase/login",
  },
  {
    title: "FIRE-BASE_DATABASE",
    path: "/firebase/database",
  },
];

function Navbar() {
  return (
    <nav>
      <ul>
        {tabList.map(({ title, path }) => (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
