import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./features/navbar/NavBar.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";

function App() {
  return (
    <>
      <div className="site">
        <NavBar />
        <div className="site-info">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
