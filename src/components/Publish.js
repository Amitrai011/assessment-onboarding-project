import styles from "../styles/publish.module.css";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import Accept from "./Accept";
import buttonStyles from "../styles/installModal.module.css";
import InviteButton from "./InviteButton";
import Button from "./Button";

const Publish = ({ handleContinueClick, handleBackClick }) => {
  return (
    <div className={styles.publish}>
      <div className={styles.header}>
        <Header name="Framer Docs" />
      </div>
      <div className={styles.leftPane}>
        <div className={styles.container}>
          <p
            style={{
              color: "#8F95B2",
              marginBottom: "1rem",
            }}
          >
            Step 3 of 4: Publish your Website
          </p>
          <ProgressBar defaultWidth="70%" defaultColor="#777E90" />
          <div className={styles.websiteURL}>
            <img src="/assests/framerApp-icon.svg" alt="Framer Icon" />
            <span style={{ color: "#625DF5", fontWeight: "400" }}>
              <span style={{ color: "#4C5366" }}>Website URL :</span>{" "}
              www.framerncells.io/?review=true
            </span>
          </div>
          <div className={styles.warning}>
            <img src="/assests/warning-circle.svg" alt="Warning Icon" />
            <span style={{ color: "#FF7162", fontSize: "18px" }}>
              Alternate URL detected, would you like to replace it?
            </span>
          </div>
          <Accept line={true} />
          <Button
            handleBackClick={handleBackClick}
            handleContinueClick={handleContinueClick}
            backLabel="Edit Domain"
          />
          <div style={{ position: "absolute", bottom: "0" }}>
            <InviteButton />
          </div>
        </div>
      </div>
      <div className={styles.rightPane}>
        <div>
          <img src="/assests/mobile-support.svg" alt="Mobile Support" />
        </div>
      </div>
    </div>
  );
};

export default Publish;
