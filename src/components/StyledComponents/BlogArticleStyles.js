import styled from "styled-components"
import { SERIF_FONT } from "../../data/constants"
// TODO: FOR SOME REASON, HOT RELOADING IS NOT WORKING IF
// THESE STYLED COMPONENTS ARE EXPORTED FROM HERE TO THE RIGHT
// PLACE, SO I'VE MOVED THESE TEMPORARILY TO THE BLOG FILE
// THEY'RE IN AND WILL TRY TO FIND A FIX LATER.

export const ArticleTitle = styled.h1`
  color: rgba(0, 0, 0, 0.84);
  font-family: ${SERIF_FONT};
  font-weight: 400;
  font-size: 40px;
`

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
export const GifOrImg = styled.img`
  width: 680px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 48px;
`

export const Heading = styled.h2`
  font-size: 32px;
  margin-top: 64px;
`

export const LI = styled.li`
  font-size: 21px;
  line-height: 2em;
  list-style-type: disc;
  letter-spacing: 0.2px;
`

export const Link = styled.a`
  text-decoration: none;
`

export const UL = styled.ul`
  list-style: none;
  margin-top: 40px;
`

export const P = styled.p`
  color: rgba(0, 0, 0, 0.84);
  font-family: ${SERIF_FONT};
  font-size: 21px;
  font-weight: 400;
  margin-top: 40px;
`

export const Subheading = styled.h3`
  font-size: 26px;
`
