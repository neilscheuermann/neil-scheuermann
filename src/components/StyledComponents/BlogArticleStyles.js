import styled from "styled-components"
import { SANS_SERIF_FONT, SERIF_FONT } from "../../data/constants"

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 680px;
  width: 100%;
`

export const Code = styled.code`
  background-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
`

export const Heading = styled.h2`
  font-size: 32px;
`

export const LI = styled.li`
  font-size: 21px;
  font-weight: 800;
  line-height: 2em;
  list-style-type: disc;
  letter-spacing: 0.2px;
`

export const UL = styled.ul`
  list-style: none;
`

export const P = styled.p`
  color: rgba(0, 0, 0, 0.84);
  font-family: ${SERIF_FONT};
  font-size: 21px;
  font-weight: 400;
`

export const ArticleTitle = styled.h1`
  color: rgba(0, 0, 0, 0.84);
  font-family: ${SERIF_FONT};
  font-weight: 400;
  font-size: 40px;
`
