import styled from "styled-components"
import { MAIN_FONT_FAMILY } from "../../data/constants"

export const Wrapper = styled.div`
  height: calc(100vh + 48px);
`

export const DefaultHeader = styled.h1`
  font-family: ${MAIN_FONT_FAMILY};
  line-height: 1.8em;
  font-size: 3em;
`
