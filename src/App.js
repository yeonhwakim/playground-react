import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header>
        {location.pathname === "/"
          ? "REACT LIBRARY JS"
          : location.pathname.replace("/", "")}
      </header>
      {location.pathname === "/" && <Navbar />}
      <Outlet />
    </div>
  );
}

export default App;
