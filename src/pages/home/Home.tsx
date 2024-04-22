import { useEffect } from "react";
import { useHamburgerMenu } from "../../context/HamburgerMenuContext";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  /**
   *  Checks if hamburger menu is Open and closes is on page redirection from navigation
   */
  const { isOpen, setIsOpen } = useHamburgerMenu();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(../../home.jpg)` }}
      className={styles["home"]}
    >
      <p>I'm</p>
      <Typewriter
        options={{
          strings: [
            "a web developer!",
            "an enthusiast!",
            "a hobby photographer!",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Home;
