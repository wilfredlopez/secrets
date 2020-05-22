import React, { useState } from "react"

import styles from "./Bugs.module.css"
import classes from "./Bugs.module.css"
import { Cipher } from "@wilfredlopez/react-utils/dist"
import {
  Label,
  Input,
  TextArea,
  RevielText,
  Title,
  FlexDiv,
  Button,
} from "components/styled"

interface Props {}

const Create = (_props: Props) => {
  const passRef = React.useRef<HTMLInputElement>(null)
  const [textToEncode, setTextToEncode] = useState("")
  const [code, setCode] = useState("")
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null)

  function encode() {
    setCode("")
    const password = passRef.current!.value
    if (!password || !textToEncode) {
      passRef.current!.focus()
      return
    }
    const encoder = Cipher.GenerateEncoder(password)
    const code = encoder(textToEncode)
    setCode(code)
  }

  function copyClipBoard() {
    if (textAreaRef.current) {
      console.log("MAKING COPY")
      const el = textAreaRef.current
      el.disabled = false
      el.select()
      document.execCommand("copy")
      el.disabled = true
    }
  }

  function resetAll() {
    setTextToEncode("")
    passRef.current!.value = ""
  }

  return (
    <div className={classes.bugsPageContainer}>
      <Title>Generate Secret</Title>
      <div>
        <section>
          <Label>Password</Label>
          <div>
            <Input
              placeholder="Your secret password"
              type="password"
              ref={passRef}
            ></Input>
          </div>
        </section>
        <section>
          <Label>Secret Message</Label>
          <div>
            <TextArea
              placeholder="Type your message here."
              value={textToEncode}
              onChange={(e) => setTextToEncode(e.target.value)}
              // rows={8}
              cols={50}
            />
          </div>
        </section>
        <FlexDiv justify="flex-end">
          <Button className={styles.asyncButton} onClick={encode}>
            Generate
          </Button>
          <Button
            onClick={resetAll}
            color="tertiary"
            // className={styles.button.concat(" " + styles.secondary)}
          >
            Reset
          </Button>
        </FlexDiv>
        {code && (
          <section className={styles.section}>
            <RevielText>Share this code safely</RevielText>
            <div>
              <TextArea ref={textAreaRef} disabled value={code} cols={50} />
            </div>
            <FlexDiv justify="flex-end">
              <a
                href={`mailto:example@example.com?subject=secret&body=${code}`}
                className={classes.share}
              >
                Send Via Email
              </a>
              <Button
                color="tertiary"
                onClick={copyClipBoard}
                className={styles.button.concat(" " + styles.secondary)}
              >
                Copy to Clipboard
              </Button>
            </FlexDiv>
          </section>
        )}
      </div>
    </div>
  )
}

export default Create
