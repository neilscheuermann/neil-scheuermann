import React, { Fragment } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px solid #dddddd;
`

const TableTemplate = () => (
  <Wrapper>
    <img src="https://picsum.photos/200" alt="Random" />
    <h2>Title</h2>
    <p>mm/dd/yyyy</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla
      malesuada pellentesque. Vulputate mi sit amet mauris commodo quis
      imperdiet massa.
    </p>
  </Wrapper>
)

export default TableTemplate
