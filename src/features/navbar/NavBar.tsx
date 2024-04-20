import { CiHome } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { GiSpellBook } from "react-icons/gi";
import { CiServer } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className={styles["site-nav"]}>
      <ul>
        <li>
          <Link to="/">
            <CiHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <IoPersonOutline />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <CiFileOn />
            <span>Resume</span>
          </Link>
        </li>{" "}
        <li>
          <Link to="/">
            <GiSpellBook />
            <span>Portfolio</span>
          </Link>
        </li>{" "}
        <li>
          <Link to="/">
            <CiServer />
            <span>Services</span>
          </Link>
        </li>{" "}
        <li>
          <Link to="/">
            <CiMail />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
