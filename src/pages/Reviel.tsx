import React from "react"
import { Secrets } from "components"
import { Title } from "components/styled"

interface Props {}

const Reviel = (props: Props) => {
  return (
    <div className="text-center">
      <Title>Reviel The Secret</Title>
      <Secrets />
    </div>
  )
}

export default Reviel
