import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./features/navbar/NavBar.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import { useHamburgerMenu } from "./context/HamburgerMenuContext.tsx";
import Contact from "./pages/contact/Contact.tsx";

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
          <span
            className={
              isOpen ? "hamburger-menu-item one" : "hamburger-menu-item"
            }
          ></span>
          <span
            className={
              isOpen ? "hamburger-menu-item two" : "hamburger-menu-item"
            }
          ></span>
          <span
            className={
              isOpen ? "hamburger-menu-item three" : "hamburger-menu-item"
            }
          ></span>
        </div>
        <div className={isOpen ? "site-nav open" : "site-nav"}>
          <NavBar />
        </div>
        <div className="site-info">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
