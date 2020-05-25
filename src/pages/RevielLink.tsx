import React from "react"
import { useParams } from "react-router-dom"
import { Label, Input } from "components/styled"
import { Cipher } from "@wilfredlopez/react-utils/dist"
import classes from "./RevielLink.module.css"
interface Props {}

const RevielLink = (props: Props) => {
  const { code } = useParams<{ code: string }>()
  const [decoded, setDecoded] = React.useState(code)
  const [password, setPassword] = React.useState("")
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setPassword(value)
    if (value && code) {
      //@ts-ignore
      getSecret(value, code)
    }
  }

  const getSecret = React.useCallback((password: string, code: string) => {
    const decoded = Cipher.Decoder<string>(password, code)
    setDecoded(decoded)
  }, [])

  return (
    <div className="text-center">
      <Label style={{ fontWeight: "bold" }}>Password</Label>
      <Input
        placeholder="Type the password here..."
        type="password"
        value={password}
        onChange={handleChange}
      ></Input>
      <div>
        <Label style={{ fontWeight: "bold" }}>Secret</Label>
      </div>
      <pre className={classes.pre}>
        <code className={classes.code}>
          <div
            dangerouslySetInnerHTML={{
              __html: decoded,
            }}
          ></div>
        </code>
      </pre>
      <Label>
        The text will be accurate as long as you enter the correct password.
      </Label>
    </div>
  )
}

export default RevielLink
