import React, { useState } from "react";

import styles from "./Bugs.module.css";
import classes from "./Bugs.module.css";
//@ts-ignore
import { Cipher } from "@wilfredlopez/react-utils/dist/index.es.js";

interface Props {}

const Create = (_props: Props) => {
  const passRef = React.useRef<HTMLInputElement>(null);
  const [textToEncode, setTextToEncode] = useState("");
  const [code, setCode] = useState("");

  function encode() {
    const password = passRef.current!.value;
    if (!password || !textToEncode) {
      passRef.current!.focus();
      return;
    }
    const encoder = Cipher.Encoder(password);
    const code = encoder(textToEncode);
    setCode(code);
  }

  return (
    <div className={classes.bugsPageContainer}>
      <div>
        <section>
          <label>Password</label>
          <div>
            <input type="password" ref={passRef}></input>
          </div>
        </section>
        <section>
          <label>Secret Message</label>
          <div>
            <textarea
              value={textToEncode}
              onChange={(e) => setTextToEncode(e.target.value)}
              rows={8}
              cols={50}
            />
          </div>
        </section>
        <button className={styles.asyncButton} onClick={encode}>
          Add <span role="img" aria-label="new">🆕</span>
        </button>
        {code &&
          <section className={styles.section}>
            <label>HERE IS YOUR CODE</label>
            <div>
              <textarea
                disabled
                value={code}
                rows={8}
                cols={50}
              />
            </div>
          </section>}
      </div>
    </div>
  );
};

export default Create;
