import Header from "./Header";
import styles from "../styles/install.module.css";
import ProgressBar from "./ProgressBar";
import InstallCard from "./InstallCard";
import buttonStyles from "../styles/installModal.module.css";
import InviteButton from "./InviteButton";
import Button from "./Button";

const Install = ({ handleContinueClick, handleBackClick }) => {
  return (
    <div className={styles.install}>
      <div className={styles.header}>
        <Header name="Shopify Docs" />
      </div>
      <div className={styles.leftPane}>
        <div className={styles.container}>
          <p
            style={{
              color: "#8F95B2",
              alignSelf: "flex-start",
              marginBottom: "1rem",
            }}
          >
            Step 2 of 4: Install Superflow
          </p>
          <ProgressBar />
          <InstallCard />
          <div className={styles.installManually}>
            <span className={styles.installText}>
              Continue to Install Manually
            </span>
            <img src="/assests/icon-arrow-right.svg" alt="" />
          </div>
          <Button
            handleBackClick={handleBackClick}
            handleContinueClick={handleContinueClick}
          />
        </div>
        <div style={{ position: "absolute", bottom: "0" }}>
          <InviteButton />
        </div>
      </div>
      <div className={styles.rightPane}>
        <img src="/assests/video.svg" alt="Installation Video" />
      </div>
    </div>
  );
};

export default Install;
