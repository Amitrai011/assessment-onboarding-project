import styles from "../styles/installCard.module.css";

const InstallCard = () => {
  return (
    <div className={styles.recommendedCard}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <img src="/assests/shopify-icon.svg" alt="Shopify" />
          <span>Install with Shopify Plugin</span>
        </div>
        <p className={styles.recommendedLabel}>Recommended</p>
      </div>
      <p className={styles.installText}>
        Install Superflow in just a few clicks with the <br /> shopify plugin
      </p>
    </div>
  );
};

export default InstallCard;
