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
  push,
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
  const handleClickAddList = () => {
    const userListRef = ref(db, "users");
    const newProductsRef = push(userListRef);
    set(newProductsRef, {
      email: "yeonhwa67172@gmail.com",
      isAdmin: false,
    });
  };
  const handleClickDelete = () => {
    remove(ref(db, "/users"));
  };
  const handleClickNotExist = () => {
    const dbRef = ref(db);
    get(child(dbRef, "/users/-NYi3hGUVCkUck15q65a"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          update(ref(db, "/users/-NYi3hGUVCkUck15q65a"), {
            email: "yeonhwa67172@gmail.com",
            isAdmin: false,
          });
        } else {
          set(ref(db, "/users/-NYi3hGUVCkUck15q65a"), {
            email: "yeonhwa67173@gmail.com",
            isAdmin: false,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleClickIsExist = () => {
    const dbRef = ref(db);
    get(child(dbRef, "/users/-NYi3hGUVCkUck15q65t"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          update(ref(db, "/users/-NYi3hGUVCkUck15q65t"), {
            email: "yeonhwa67172@gmail.com",
            isAdmin: true,
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={handleClickCreate}>CREATE</button>
      <button onClick={handleClickRead}>READ</button>
      <button onClick={handleClickUpdate}>UPDATE</button>
      <button onClick={handleClickAddList}>ADDLIST</button>
      <button onClick={handleClickDelete}>DELETE</button>
      <button onClick={handleClickNotExist}>IFNOTEXIST,INSERT</button>
      <button onClick={handleClickIsExist}>IFEXIST,UPDATE</button>
    </div>
  );
}

export default Database;
