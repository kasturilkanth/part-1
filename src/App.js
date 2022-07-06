import "./styles.css";
import NavBar from "./components/NavBar/NavBar.component";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}
