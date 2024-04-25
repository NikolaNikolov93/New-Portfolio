import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <section className={styles["contact-page"]}>
        <h1>Contact</h1>
        <p>
          If you want to contact me you can use the phone or email listed below
          or you can use the form to wrinte an email directly.
        </p>
        <div className={styles["contacts"]}>
          <div className={styles["contacts-location"]}>
            <div>
              <h3>Location:</h3>
              <p>Pazardzhik city, Bulgaria</p>
            </div>
            <div>
              <h3>Email:</h3>
              <p>niksnikolov93@gmail.com</p>
            </div>
            <div>
              <h3>Call me:</h3>
              <p>+359890303047</p>
            </div>
            <div
              className={styles["contacts-location-img"]}
              style={{ backgroundImage: `url(../../pz.jpg)` }}
            ></div>
          </div>
          <form className={styles["contacts-form"]} action="" method="post">
            <div>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                cols={50}
                required
              />
            </div>
            <input className={styles["button"]} type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
