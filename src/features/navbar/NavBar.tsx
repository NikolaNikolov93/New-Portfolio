import { CiHome } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { GiSpellBook } from "react-icons/gi";
import { CiServer } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useHamburgerMenu } from "../../context/HamburgerMenuContext";

const NavBar = () => {
  const { isOpen, setIsOpen } = useHamburgerMenu();
  /**
   * Using hamburger context to check if navigation link is clicked --> close the navigtion bar
   */

  return (
    <section className={styles["header"]}>
      <div className={styles["header-profile"]}>
        <img src="../../cvp2.jpg" alt="" />
        <h2>Nikola Nikolov</h2>
        <ul>
          <li>
            <a
              href="https://github.com/NikolaNikolov93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub />
            </a>
          </li>{" "}
          <li>
            <a
              href="https://www.facebook.com/nikola.nikolov.77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nikola-nikolov-a53b2925a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <ul className={styles["nav"]}>
        <li>
          <NavLink
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to="/"
          >
            <CiHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to="/about"
          >
            <IoPersonOutline />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to="/"
          >
            <CiFileOn />
            <span>Resume</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to="/"
          >
            <GiSpellBook />
            <span>Portfolio</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to="/"
          >
            <CiServer />
            <span>Services</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to="/"
          >
            <CiMail />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
      <footer>
        <span>&copy; Designed by Nikola Nikolov</span>
      </footer>
    </section>
  );
};

export default NavBar;
