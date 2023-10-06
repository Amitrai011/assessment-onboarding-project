import styles from "../styles/verifyInstall.module.css";

const VerifyInstallRightPane = () => {
  return (
    <div className={styles.rightPane}>
      <h1>
        Need Help? Here are some <br />
        resources!
      </h1>
      <div className={styles.resourcesContainer}>
        <div>
          <img src="/assests/youtube-white.svg" alt="Framer Icon" />
          <p>Installation Video</p>
        </div>
        <div>
          <img src="/assests/framer-white.svg" alt="Framer Icon" />
          <p>Framer Guide</p>
        </div>
        <div>
          <img src="/assests/chat-white.svg" alt="Framer Icon" />
          <p>Chat with Expert</p>
        </div>
        <div>
          <img src="/assests/invite-white.svg" alt="Framer Icon" />
          <p>Invite Teammates</p>
        </div>
      </div>
    </div>
  );
};

export default VerifyInstallRightPane;
