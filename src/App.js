import { Link, Routes, Route } from "react-router-dom";
import styles from "./App.scss";
import Home from "./pages/Home";
import Dispensa from "./pages/Dispensa";
import ListaSpesa from "./pages/Lista spesa";

function App() {
  return (
    <div>
      <div>
        <ul className={styles.ul}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dispensa">Dispensa</Link>
          </li>
          <li>
            <Link to="/listaspesa">Lista Spesa</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dispensa" element={<Dispensa />} />
        <Route path="/listaspesa" element={<ListaSpesa />} />
      </Routes>
    </div>
  );
}

export default App;
