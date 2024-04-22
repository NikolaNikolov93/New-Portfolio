import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./features/navbar/NavBar.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import { useHamburgerMenu } from "./context/HamburgerMenuContext.tsx";

function App() {
  const { isOpen, setIsOpen } = useHamburgerMenu();

  return (
    <>
      <div className="site">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hamburger-menu"
        >
          <span className="hamburger-menu-item one"></span>
          <span className="hamburger-menu-item two"></span>
          <span className="hamburger-menu-item three"></span>
        </div>
        <div className={isOpen ? "site-nav open" : "site-nav"}>
          <NavBar />
        </div>
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
