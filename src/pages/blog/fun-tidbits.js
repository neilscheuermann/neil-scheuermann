import React from "react"
import Gist from "../../components/UI/StyledGist"
import CodeBlock from "../../components/UI/CodeBlock"
import DividerDotted from "../../components/UI/DividerDotted"
// >>> IMPORTING THE STYLED COMPONENTS BREAKS HOT RELOADING.
import {
  ArticleTitle,
  ArticleWrapper,
  Content,
  Code,
  GifOrImg,
  Heading,
  LI,
  Link,
  UL,
  P,
  Subheading,
} from "./2020-01-12"

const formattedCodeA = `const arr = [1, 2, 3]
console.log(...arr) // 1 2 3
// Using our sum function from above.
sum(...arr) // returns 6
`

const FunTidbits = () => (
  <ArticleWrapper>
    <Content>
      <ArticleTitle>Fun Tidbits</ArticleTitle>

      <div>
        <Subheading>Mac</Subheading>
        <UL>
          <LI>
            click <strong>control + command + space</strong> to open the Mac
            emoji picker where ever you're typing. <span>💩</span>
          </LI>
        </UL>
      </div>

      <div>
        <Subheading>Chrome</Subheading>
        <UL>
          <LI>
            <strong>command + option + j</strong> to open the Chrome devtools.
          </LI>
          <LI>
            <strong>command + shift + c</strong> to open the element selector.
          </LI>
        </UL>
      </div>

      <div>
        <Subheading>iTerm</Subheading>
        <UL>
          <LI>
            <strong>command + shift + a</strong> to type the same command for
            each open pane.
          </LI>
          <LI>
            <strong>command + option + w</strong> to close all panes in that
            tab.
          </LI>
        </UL>
      </div>
    </Content>
  </ArticleWrapper>
)

export default FunTidbits
