import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ReactSortableJSByUseSatus() {
  const [state, setState] = useState([
    { id: "1", name: "red" },
    { id: "2", name: "green" },
    { id: "3", name: "orange" },
    { id: "4", name: "yellow" },
    { id: "5", name: "blue" },
  ]);

  return (
    <ReactSortable
      tag="ul"
      list={state}
      setList={setState}
      animation="200"
      easing="ease-out"
      handle=".my-handle"
    >
      {state.map((item) => (
        <li key={item.id} className="item">
          <FontAwesomeIcon icon={faBars} className="my-handle" />
          <span>{item.name}</span>
        </li>
      ))}
    </ReactSortable>
  );
}
