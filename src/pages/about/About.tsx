import { useEffect } from "react";
import styles from "./About.module.css";
import { useHamburgerMenu } from "../../context/HamburgerMenuContext";

const About = () => {
  /**
   *  Checks if hamburger menu is Open and closes is on page redirection from navigation
   */
  const { isOpen, setIsOpen } = useHamburgerMenu();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, []);
  /** End */
  return (
    <>
      <section className={styles["about"]}>
        <h1>About</h1>
        <p>
          I was born and grew up in Pazardzhik city, Bulgaria. I went to school
          in "Konstantin Velichkov" High school of Mathematics that is located
          in my hometown. I love playing football and going in the nature. There
          aren't many places that I haven't been in Bulgaria. I also like the
          adrenaline rush experiences. I have been to multiple mountain hikes,
          bungee jump and etc. I love playing video games even though I can't
          find time to play them that much anymore.
        </p>
        <div className={styles["detailed-info"]}>
          <div
            className={styles["detailed-info-img"]}
            style={{ backgroundImage: `url(../../cvp2.jpg)` }}
          ></div>
          <div className={styles["my-info"]}>
            <h2>JavaScript/React Developer</h2>
            <p>I studied JavaScript and React at SoftUni</p>
            <ul>
              <li className={styles["ul-flex-item"]}>
                Brithday: 28 October 1993
              </li>
              <li className={styles["ul-flex-item"]}>Website: example.com</li>
              <li className={styles["ul-flex-item"]}>Phone: +359890303047</li>
              <li className={styles["ul-flex-item"]}>Country: Bulgaria</li>
              <li className={styles["ul-flex-item"]}>City: Pazardzhik</li>
              <li className={styles["ul-flex-item"]}>Age: 30</li>
              <li className={styles["ul-flex-item"]}>Degree: High school</li>
              <li className={styles["ul-flex-item"]}>
                Email: niksnikolov93@gmail.com
              </li>
            </ul>
            <p>
              I'm a hard working, honest individual. I'm always willing to learn
              new skills. I'm friendly, helpful and polite. I'm able to work
              independently in busy environments and also within a team setting.
              I'm able to listen effectively when solving problems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
