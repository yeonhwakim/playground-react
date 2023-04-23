import React from "react";
import { Link } from "react-router-dom";

const tabList = [{ title: "REACT-SORTABLE-JS", path: "/react-sortable-js" }];

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
