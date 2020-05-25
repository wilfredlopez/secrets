import React from "react"
import { Secrets } from "components"
import { Title } from "components/styled"
import { Link } from "react-router-dom"

interface Props {}

const Reviel = (props: Props) => {
  return (
    <div className="text-center">
      <Title>Reviel The Secret</Title>
      <Secrets />
      <div>
        <Link to="/reveal/CODEEEEE">TEST LINK</Link>
      </div>
    </div>
  )
}

export default Reviel
