import styles from "../styles/comment.module.css";
import Popup from "./Popup";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Popup />
      <div className={styles.arrow}>
        <img src="/assests/rotate-arrow.svg" alt="arrow" />
      </div>
      <div className={styles.menu}>
        <img src="/assests/company-logo.svg" alt="logo" />
        <div></div>
        <img src="/assests/message-icon.svg" alt="message" width="30px" />
        <img src="/assests/headphone.svg" alt="logo" />
        <img src="/assests/recording.svg" alt="logo" />
        <div></div>
        <img src="/assests/share.svg" alt="logo" />
        <img src="/assests/avatar.png" alt="logo" />
        <img src="/assests/more.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Comment;
