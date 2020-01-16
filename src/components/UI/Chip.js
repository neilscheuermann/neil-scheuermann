import React from "react"
import styled from "styled-components"
import { HEADER_TEXT_COLOR, MAIN_FONT_FAMILY } from "../../data/constants"

const ChipStyled = styled.div`
  background-color: ${HEADER_TEXT_COLOR};
  border-radius: 25px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  color: white;
  display: inline-block;
  font-family: ${MAIN_FONT_FAMILY};
  font-size: 0.8em;
  font-weight: 400;
  height: 24px;
  line-height: 24px;
  margin: 10px 0 10px 10px;
  padding: 0 12px;
`

const Chip = props => {
  return <ChipStyled>{props.children}</ChipStyled>
}

export default Chip
