import styles from "../styles/progressBar.module.css";

const ProgressBar = ({ defaultWidth = "50%", defaultColor = "#625DF5" }) => {
  return (
    <div>
      <div className={styles.progressBar}>
        <div
          style={{ width: defaultWidth, backgroundColor: defaultColor }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
