import { Link, Routes, Route } from "react-router-dom";
import styles from "./App.scss";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";

function App() {
  return (
    <div>

<header>
      <div className={styles.menu}>
        <ul>
          <li>

            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/shop">Shop</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        
      </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
     
    </div>
  );
}

export default App;
