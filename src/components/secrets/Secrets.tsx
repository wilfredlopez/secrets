import React, { useState } from "react"
// import { useSelector, useDispatch } from "react-redux";
import // decrement,
// increment,
// incrementByAmount,
// incrementAsync,
// selectCount,
"store/reducers"
import styles from "./Secrets.module.css"
import { Input } from "../styled/index"
//@ts-ignore
import { Cipher } from "@wilfredlopez/react-utils/dist/index.es.js"

export function Secrets() {
  // const count = useSelector(selectCount);
  const [password, setPassword] = useState("")
  const [output, setOutput] = useState("")
  const [code, setCode] = useState("")
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");
  //onClick={() => dispatch(decrement())}
  function decode() {
    if (password && code) {
      const decoder = Cipher.Decoder(password)
      try {
        const out = decoder<string>(code)
        console.log(out)
        setOutput(out)
      } catch (error) {
        setOutput("Upps. looks like the password is incorrect.")
      }
    }
  }

  return (
    <div>
      <div className={styles.col}>
        <label>Enter The Passcode</label>
        <div className={styles.row}>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <label>Enter The Code</label>
        <div className={styles.row}>
          <textarea
            value={code}
            rows={8}
            cols={50}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <button
          className={styles.asyncButton}
          aria-label="Increment value"
          onClick={decode}
        >
          Reveal
        </button>
      </div>
      <div className={styles.output}>
        {output && (
          <>
            <h4>The secret is</h4>
            <div>
              <section>
                <textarea value={output} rows={8} cols={50} disabled />
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
