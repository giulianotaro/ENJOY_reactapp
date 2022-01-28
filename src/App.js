import { Link, Routes, Route } from "react-router-dom";
import styles from "./App.scss";
import Home from "./pages/Home";
import Dispensa from "./pages/Dispensa";
import About from "./pages/About";

function App() {
  return (
    <div>
      <div>
        <ul className={styles.ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dispensa">Dispensa</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dispensa" element={<Dispensa />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
