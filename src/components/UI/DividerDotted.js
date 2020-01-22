import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

const Dot = styled.div`
  height: 4px;
  width: 5px;
  background-color: rgba(0, 0, 0, 0.84);
  border-radius: 50%;
  display: inline-block;
  margin: 0 10px;
`

const DividerDotted = () => {
  return (
    <Wrapper>
      <Dot />
      <Dot />
      <Dot />
    </Wrapper>
  )
}

export default DividerDotted
