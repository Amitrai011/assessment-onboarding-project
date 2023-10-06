import styles from "../styles/platform.module.css";

const Platform = ({ name, src }) => {
  return (
    <div className={styles.platform}>
      <div>
        <img src={"/assests/" + src} alt={name} />
      </div>
      <span>{name}</span>
    </div>
  );
};

export default Platform;
