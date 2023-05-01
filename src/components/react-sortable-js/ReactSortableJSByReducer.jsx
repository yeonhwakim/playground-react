import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ReactSortable } from "react-sortablejs";

import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import reactSortableReducer from "./react-sortble-reducer";

const color = [
  { id: "1", name: "red", index: 3, checked: true },
  { id: "2", name: "green", index: 2, checked: false },
  { id: "3", name: "orange", index: 1, checked: true },
  { id: "4", name: "yellow", index: 1, checked: false },
  { id: "5", name: "blue", index: 2, checked: true },
];

export default function ReactSortableJSByReducer() {
  const [list, dispatch] = useReducer(reactSortableReducer, color);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(list));
  }, [list]);

  const handleSorted = useCallback((state) => {
    dispatch({
      type: "change",
      sortedList: state.map((item, index) => {
        return { ...item, index };
      }),
    });
  }, []);

  return <List color={color} handleSorted={handleSorted} />;
}

function List({ color, handleSorted }) {
  const [state, setState] = useState(filterCheckedLsit(color));

  useEffect(() => {
    handleSorted(state);
  }, [handleSorted, state]);

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

function compareIndex(a, b) {
  return a.index - b.index;
}

function filterCheckedLsit(list) {
  return list.filter(({ checked }) => checked).sort(compareIndex);
}
