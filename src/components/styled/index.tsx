import styled, { css, keyframes } from "styled-components"
import { NavLink } from "react-router-dom"
import React, { ButtonHTMLAttributes } from "react"
const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

interface TitleProps {
  color?: "primary" | "secondary"
}

export const Title = styled.h1<TitleProps>`
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  ${css`
    font-size: 27px;
    font-family: "roboto";
  `}
`

export const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  display: flex;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`

export const RevielText = styled.p`
  color: green;
  margin-bottom: 0;
  font-weight: 500;
  animation: ${pulse} 2s;
`
interface InputProps {
  readonly isActive?: boolean
}
export const Input = styled.input<InputProps>`
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: gray;
  }
  :focus {
    border-bottom: 2px solid #ff00007a;
  }
`

interface FlexDivProps {
  justify?:
    | "space-evenly"
    | "space-around"
    | "space-between"
    | "flex-end"
    | "flex-start"
    | "center"
}

export const FlexDiv = styled.div<FlexDivProps>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.justify
      ? css`
          justify-content: ${props.justify};
        `
      : css`
          justify-content: space-around;
        `}
`

export const CopyButton = styled.button`
  background: #6b7585;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  padding: 10px 12px;
  color: white;
  &:hover {
    background: #8a929e;
  }
`

export const TextArea = styled.textarea`
  background: papayawhip;
  /* border: 1.5px solid rgba(116, 102, 177, 0.5); */
  border: none;
  padding: 0.5rem;
  animation: ${pulse} 2s;
  overflow: hidden;
  text-align: center;
  &:disabled {
    background: black;
    color: white;
  }
`

export const StyledLink = styled(NavLink)`
  display: flex;
  font-family: 'roboto';
  width: 100%;
  align-items: center;
  /* padding: 5px 10px; */
  padding: 10px 15px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  /* border: 1px solid rgba(222, 211, 211, 0.55); */
  border-radius: 0.3rem;
  color: ${(props) => props.theme.colors.tertiaryContrast};
  /* background: ${(props) => props.theme.colors.tertiary}; */
  background: rgba(162, 163, 168, 0.4);
  font-weight: bold;
  line-height: 1;
  letter-spacing: 0.02857em;
  user-select: none;
  position: relative;
  align-items: center;
  display: inline-flex;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  -webkit-appearance: none;
  /* text-transform: uppercase; */
  &.active {
    text-decoration: underline;
    /* background: rgba(162, 163, 168, 0.4); */
    background: ${(props) => props.theme.colors.tertiary};
  }
  &:hover {
    /* background: rgba(210, 211, 220, 0.4); */
    background: ${(props) => props.theme.colors.tertiaryTint};
  }
`

export const ButtonInner = styled.div`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`

type ColorProps = "primary" | "secondary" | "tertiary"

interface ButtonWrapperProps {
  color?: ColorProps
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  font-family: "roboto";
  margin: 8px;
  padding: 6px 16px;
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  -webkit-tap-highlight-color: transparent;

  color: ${(props) =>
    props.color
      ? props.color === "secondary"
        ? props.theme.colors.secondaryContrast
        : props.color === "primary"
        ? props.theme.colors.primaryContrast
        : props.theme.colors.tertiaryContrast
      : props.theme.colors.primaryContrast};
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 3px;
  user-select: none;
  position: relative;
  align-items: center;
  display: inline-flex;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  -webkit-appearance: none;
  &:hover {
    background-color: ${(props) =>
      props.color
        ? props.color === "primary"
          ? props.theme.colors.primaryTint
          : props.color === "secondary"
          ? props.theme.colors.secondaryTint
          : props.theme.colors.tertiaryTint
        : props.theme.colors.primaryTint};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`

const ButtonSpan = styled.span`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
`

interface ButtonProps extends ButtonHTMLAttributes<{}> {
  color?: ColorProps
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  ...props
}) => {
  return (
    <ButtonWrapper color={color} {...props}>
      <ButtonInner>{children}</ButtonInner>
      <ButtonSpan />
    </ButtonWrapper>
  )
}
