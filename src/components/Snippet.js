import { useRef, useState } from "react";
import styles from "../styles/snippet.module.css";

const Snippet = ({ show = false }) => {
  const ref = useRef();
  const [copyText, setCopyText] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ref?.current.innerText);
    setCopyText(true);

    setTimeout(() => {
      setCopyText(false);
    }, 1500);
  };

  return (
    <div style={{ position: "relative" }} className={styles.snippet}>
      <div ref={ref} style={{ display: "flex", flexDirection: "column" }}>
        {show ? (
          <div style={{ lineHeight: "1.2rem", letterSpacing: "1px" }}>
            <span>{`<snippyly-plugin`}</span>
            <br />
            <span>{`apiKey="aU1MxKP0rca2UXwKi8bl"></snippyly-plugin>`}</span>
            <br />
            <span>{`<script type="module" src="https://`}</span>
            <br />
            <span>{`cdn.jsdelivr.net/`}</span>
          </div>
        ) : (
          <div
            style={{
              lineHeight: "1.2rem",
              letterSpacing: "1px",
            }}
          >
            <span>{`<snippyly-plugin apiKey="aU1MxKP0rca2UXwKi8bl"></`}</span>
            <br />
            <span>{`snippyly-plugin>`}</span>
            <br />
            <span>
              {'<script type="module" src="https://cdn.jsdelivr.net/'}
            </span>
          </div>
        )}
      </div>
      <div className={styles.copy} onClick={handleCopy}>
        <img src="/assests/copy.svg" alt="copy" />
      </div>

      {copyText && <div className={styles.copyCodeToolTip}>Code Copied!</div>}
    </div>
  );
};

export default Snippet;
