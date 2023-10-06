import Accept from "./Accept";
import styles from "../styles/installModal.module.css";
import Snippet from "./Snippet";
import Platform from "./Platform";
import { platforms, imageSrc } from "../utilities/constants";
import InviteButton from "./InviteButton";
import Button from "./Button";

const InstallModal = ({ handleContinueClick, handleBackClick }) => {
  return (
    <div className={styles.installModal}>
      <Accept line={false} />
      <div style={{ minWidth: "60%", margin: "1.4rem 0" }}>
        <span
          style={{
            letterSpacing: "5px",
            fontSize: "1.5rem",
          }}
        >
          {"</>"}
        </span>{" "}
        Paste the code snippet below before the closing
        <span
          style={{
            letterSpacing: "2px",
            fontSize: "1.2rem",
          }}
        >
          {" "}
          {"</body>"}{" "}
        </span>
        tag & save
      </div>
      <Snippet />
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <span>OR</span>
        <div className={styles.line}></div>
      </div>
      <div className={styles.platformText}>
        <h1>Choose a platform to install Superflow.</h1>
        <p style={{ color: "#4C5366", fontSize: "14px", fontWeight: "400" }}>
          Either copy the code below or select a platform to install superflow
        </p>
      </div>

      <div className={styles.platforms}>
        {platforms.map((platform, index) => {
          return <Platform name={platform} src={imageSrc[index]} />;
        })}
      </div>
      <Button
        handleBackClick={handleBackClick}
        handleContinueClick={handleContinueClick}
      />
      <InviteButton />
    </div>
  );
};

export default InstallModal;
