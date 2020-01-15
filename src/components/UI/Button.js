import React from "react"
import styled from "styled-components"
import { HEADER_TEXT_COLOR } from "../../data/constants"

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  color: ${HEADER_TEXT_COLOR};
  font-size: 0.8125em;
  padding: 4px 5px;

  :hover {
    background-color: rgba(63, 81, 181, 0.08);
    border-radius: 4px;
  }
`

const Button = props => {
  return <ButtonStyled className="button">{props.children}</ButtonStyled>
}

export default Button
