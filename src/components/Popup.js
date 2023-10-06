import styles from "../styles/popup.module.css";

const Popup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <img
          className={styles.backgroundImage}
          src="/assests/rectangle.png"
          alt="Background"
        />
      </div>
      <div className={styles.popupContent}>
        <h1>Drop your first comment</h1>
        <div>
          Click on
          <img src="/assests/message-icon.svg" alt="message" /> to add comments
        </div>
        <img src="/assests/first-comment.svg" alt="message" />
        <button>Add Comment</button>
      </div>
    </div>
  );
};

export default Popup;
