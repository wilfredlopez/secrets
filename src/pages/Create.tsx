import { Cipher } from "@wilfredlopez/react-utils/dist"
import {
  Button,
  FlexDiv,
  Input,
  Label,
  RevielText,
  TextArea,
  Title,
} from "components/styled"
import { FRONT_END_URL } from "config"
import React, { useState } from "react"
import { default as classes, default as styles } from "./Bugs.module.css"

interface Props {}

const Create = (_props: Props) => {
  const passRef = React.useRef<HTMLInputElement>(null)
  const [textToEncode, setTextToEncode] = useState("")
  const [code, setCode] = useState("")
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null)
  const [flashMessage, setFlashMessage] = React.useState("")
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
      setFlashMessage("The code has been copied to clipboard.")
      setTimeout(() => {
        setFlashMessage("")
      }, 2000)
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
          <Button onClick={resetAll} color="tertiary">
            Reset
          </Button>
        </FlexDiv>
        {code && (
          <section className={styles.section}>
            <RevielText>Share this code safely</RevielText>
            <div onClick={copyClipBoard}>
              <TextArea ref={textAreaRef} disabled value={code} cols={50} />
            </div>
            <FlexDiv justify="flex-end">
              <a
                href={`mailto:example@example.com?subject=secret&body=${FRONT_END_URL}/reveal/${code}`}
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
      {code && (
        <div>
          <p>You can also share this link to reveal it:</p>
          <FlexDiv>
            <a href={`${FRONT_END_URL}/reveal/${code}`}>
              {FRONT_END_URL}/reveal/{code}
            </a>
          </FlexDiv>
        </div>
      )}
      <FlexDiv>
        <p className={classes.flashText}>{flashMessage}</p>
      </FlexDiv>
    </div>
  )
}

export default Create
