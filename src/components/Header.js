import styles from "../styles/header.module.css";

const Header = ({ name = "Docs" }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/assests/logo.svg" alt="Superflow" />
      </div>
      <div className={styles.btns}>
        <button className={styles.docs}>
          <img src="/assests/docs.svg" alt="Superflow" />
          {name}
        </button>
        <button className={styles.signOut}>
          <img src="/assests/signout.svg" alt="SignOut" />
        </button>
      </div>
    </div>
  );
};

export default Header;
