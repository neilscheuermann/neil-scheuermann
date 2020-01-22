import React from "react"
import styled from "styled-components"
import Gist from "react-gist"
import { BOX_SHADOW } from "../../data/constants"

const GistWrapper = styled.div`
  margin-top: 56px;
`

const StyledGist = ({ gistId }) => {
  return (
    <GistWrapper>
      <Gist id={gistId} style={{ boxShadow: BOX_SHADOW }} />
    </GistWrapper>
  )
}

export default StyledGist
