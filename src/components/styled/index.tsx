import styled from "styled-components"

interface InputProps {
  readonly isActive?: boolean
}

export const Input = styled.input<InputProps>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.secondary};
`
