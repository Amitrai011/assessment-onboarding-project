import styles from "../styles/verifyInstall.module.css";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import Snippet from "./Snippet";
import Button from "./Button";
import VerifyInstallRightPane from "./VerifyInstallRightPane";

const VerifyInstall = ({ handleContinueClick, handleBackClick }) => {
  return (
    <div className={styles.verifyInstall}>
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
            Step 4 of 4: Verify Install
          </p>
          <ProgressBar defaultWidth="95%" defaultColor="#777E90" />
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
              Multiple installations detected. Please replace
              <br /> the code with the following.
            </span>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                color: "#625DF5",
                letterSpacing: "5px",
                fontSize: "1.2rem",
              }}
            >
              {"</>  "}
            </span>
            <span>Paste the code snippet below before the closing </span>
            <span
              style={{
                color: "#625DF5",
                letterSpacing: "2px",
                fontSize: "1.2rem",
              }}
            >
              {"</body>"}
            </span>
            <span> tag & save</span>
          </div>

          <Snippet show={true} />
          <Button
            handleBackClick={handleBackClick}
            handleContinueClick={handleContinueClick}
            backLabel="Edit Domain"
            continueLabel="Verify Install"
          />
        </div>
      </div>
      <VerifyInstallRightPane />
    </div>
  );
};

export default VerifyInstall;
