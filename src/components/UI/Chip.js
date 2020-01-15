import React from "react"
import styled from "styled-components"
import { HEADER_TEXT_COLOR } from "../../data/constants"

const ChipWrapper = styled.div`
  background-color: ${HEADER_TEXT_COLOR};
  height: 24px;
  width: 32px;
  border-radius: 25px;
  margin: 10px;
`

const Chip = () => {
  return <ChipWrapper />
}

export default Chip
