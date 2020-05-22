import React, { useState } from "react"
// import { useSelector, useDispatch } from "react-redux";
import // decrement,
// increment,
// incrementByAmount,
// incrementAsync,
// selectCount,
"store/reducers"
import styles from "./Secrets.module.css"
import { Input, Label, TextArea, Button } from "../styled/index"
//@ts-ignore
// import { Cipher } from "@wilfredlopez/react-utils/dist/index.es.js"
import { Cipher } from "@wilfredlopez/react-utils/dist"

export function Secrets() {
  // const count = useSelector(selectCount);
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const codeRef = React.useRef<HTMLTextAreaElement>(null)
  const [output, setOutput] = useState("")
  const [code, setCode] = useState("")
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");
  //onClick={() => dispatch(decrement())}
  function decode() {
    setOutput("")
    const password = passwordRef.current!.value
    if (!password) {
      passwordRef.current!.focus()
      return
    }
    if (!code) {
      codeRef.current!.focus()
      return
    }
    if (password && code) {
      const decoder = Cipher.GenerateDecoder(password)
      try {
        const out = decoder<string>(code)
        console.log(out)
        setOutput(out)
      } catch (error) {
        setOutput("Upps. looks like the password is incorrect.")
      }
    } else {
      passwordRef.current!.focus()
    }
  }

  return (
    <div>
      <div className={styles.col}>
        <Label>Passcode:</Label>
        <div className={styles.row}>
          <Input placeholder="Passcode" type="password" ref={passwordRef} />
        </div>
        <Label>What's the Secret Code?</Label>
        <div className={styles.row}>
          <TextArea
            placeholder="Enter the secret code that was given to you."
            ref={codeRef}
            value={code}
            rows={2}
            cols={25}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <Button aria-label="Reviel secret" onClick={decode}>
          Reveal
        </Button>
      </div>
      <div className={styles.output}>
        {output && (
          <>
            <div>
              <section>
                <TextArea value={output} cols={50} disabled />
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
