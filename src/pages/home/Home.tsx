import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
const Home = () => {
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
