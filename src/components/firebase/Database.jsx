import React from "react";

import app from "./firebase";

import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "firebase/database";

const db = getDatabase(app);

function Database() {
  const handleClickCreate = () => {
    set(ref(db, "users/"), {
      email: "yeonhwa6717@gmail.com",
      isAdmin: true,
    });
  };
  const handleClickRead = () => {
    const dbRef = ref(db);
    get(child(dbRef, "/users"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleClickUpdate = () => {
    return update(ref(db, "/users"), {
      email: "yeonhwa67172@gmail.com",
      isAdmin: false,
    });
  };
  const handleClickDelete = () => {
    remove(ref(db, "/users"));
  };
  return (
    <div>
      <button onClick={handleClickCreate}>CREATE</button>
      <button onClick={handleClickRead}>READ</button>
      <button onClick={handleClickUpdate}>UPDATE</button>
      <button onClick={handleClickDelete}>DELETE</button>
    </div>
  );
}

export default Database;
