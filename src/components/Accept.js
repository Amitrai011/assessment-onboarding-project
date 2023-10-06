import styles from "../styles/accept.module.css";

const Accept = ({ line }) => {
  return (
    <div className={styles.accept}>
      <div className={styles.update}>
        <div>
          <img src="/assests/network.svg" alt="Network" />
        </div>
        <div className={styles.textBox}>
          <p className={styles.link}>https://tester.velt.dev</p>
          <p className={styles.text}>
            Is this you? We got a ping from{line && <br />} this URL. Want to
            update it?
          </p>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={styles.acceptBtn}>Accept</button>
        <button className={styles.ignoreBtn}>Ignore</button>
      </div>
    </div>
  );
};

export default Accept;
