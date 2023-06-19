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
    title: "FIRE-BASE",
    path: "/firebase",
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
