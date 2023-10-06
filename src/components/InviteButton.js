import styles from "../styles/installModal.module.css";

const InviteButton = () => {
  return (
    <div className={`${styles.btns} ${styles.btnsSecond}`}>
      <button className={styles.inviteBtn}>
        <img src="/assests/email.svg" alt="Email" /> Invite Teammate
      </button>
      <button className={styles.chatBtn}>
        <img src="/assests/message.svg" alt="Message" /> Chat with expert
      </button>
    </div>
  );
};

export default InviteButton;
