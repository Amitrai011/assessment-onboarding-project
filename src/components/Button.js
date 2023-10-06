import styles from "../styles/installModal.module.css";

const Button = ({
  handleContinueClick,
  handleBackClick,
  backLabel = "Back",
  continueLabel = "Continue",
}) => {
  return (
    <div className={styles.btns}>
      <button className={styles.backBtn} onClick={handleBackClick}>
        <img src="/assests/back-arrow.svg" alt="Back" />
        {backLabel}
      </button>
      <button className={styles.continueBtn} onClick={handleContinueClick}>
        {continueLabel}
      </button>
    </div>
  );
};

export default Button;
