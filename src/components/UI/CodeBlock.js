import React from "react"
import styled from "styled-components"
import { MONOSPACE_FONT } from "../../data/constants"

const CodeBlockBackground = styled.pre`
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 3px solid #7b7b7b;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  font-family: ${MONOSPACE_FONT};
`

const Code = styled.code`
  color: rgba(0, 0, 0, 0.84);
  font-size: 16px;
  line-height: 40px;
  margin-left: 20px;
`

const CodeBlock = props => {
  return (
    <CodeBlockBackground>
      <Code>{props.children}</Code>
    </CodeBlockBackground>
  )
}

export default CodeBlock
