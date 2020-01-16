import React from "react"
import styled from "styled-components"
import Gist from "react-gist"
import { SANS_SERIF_FONT, SERIF_FONT } from "../../data/constants"
import CodeBlock from "../../components/UI/CodeBlock"
import Divider from "../../components/UI/Divider"
// Title
// Heading
// Subheading
// InlineCode

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  max-width: 680px;
  width: 100%;
`

const Code = styled.code`
  background-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
`

const Heading = styled.h2`
  font-size: 32px;
`

const LI = styled.li`
  font-size: 21px;
  font-weight: 800;
  line-height: 2em;
  list-style-type: disc;
  letter-spacing: 0.2px;
`

const UL = styled.ul`
  list-style: none;
`

const P = styled.p`
  color: rgba(0, 0, 0, 0.84);
  font-family: ${SERIF_FONT};
  font-size: 21px;
  font-weight: 400;
`

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.84);
  font-family: ${SERIF_FONT};
  font-weight: 400;
  font-size: 40px;
`

const Entry = () => (
  <ArticleWrapper>
    <Content>
      <Title>Modern JavaScript Fundamentals</Title>
      <hr />
      <P>
        Once you get the basics of JavaScript down, you’ll start to pick up tips
        and tricks that will save you time and make your code cleaner. These
        modern JavaScript fundamentals do just that! They may seem a little
        challenging to grasp at first, but as you keep practicing they’ll become
        second nature. I’ll briefly introduce you to the following topics in
        this article.
      </P>
      <UL>
        <LI>Arrow functions</LI>
        <LI>Template literals</LI>
        <LI>Rest parameter</LI>
        <LI>Spread operator</LI>
        <LI>Destructuring</LI>
        <LI>Ternary operator</LI>
      </UL>
      <Divider />
      <Heading>Arrow Functions</Heading>
      <CodeBlock>const myArrowFunc = () => {}</CodeBlock>
      <P>
        <strong>Arrow functions</strong> have a shorter syntax than{" "}
        <strong>function expressions</strong>, and the parentheses are optional
        if there’s only one parameter. Also, if your function only has one line
        of code to return, you don’t need <Code>{`{}`}</Code> brackets or a
        <Code>return</Code> key word, but can implicitly return whatever follows
        the arrow <Code>=></Code>. Lets look at a simple example.
      </P>
      <Gist id="b0064f9da781b48853e25182ac207827" />
      <P>
        That’s pretty neat huh? <strong>Arrow functions</strong> will greatly
        reduce the amount of code you need to write.
      </P>
      <P>
        (Note: the this keyword behaves differently with arrow functions
        compared to function declarations, which can be very beneficial in
        certain situations. Arrow functions don’t have their own this, but
        rather use the this of the closest surrounding scope. See the docs for
        more information.)
      </P>
      <Divider />
      <Heading>Template Literals</Heading>
      <P>
        I found concatenating strings and variables together using{" "}
        <Code>+</Code> to be very tedious, hard to read, and error prone. I
        always seemed to be left with the wrong number of spaces. For example…
      </P>
      <Gist id="73cf2b538b635bc5cf69d8e1c71446e0" />
      <P>
        See the incorrect spacing because I didn’t remember to add spaces before
        and after the <Code>+</Code>? Also, you’ll notice I prefer to use single
        quotes for strings, but had to switch to double quotes with{" "}
        <Code>", I'm"</Code>
        since I needed a single quote for an apostrophe. Well, cue{" "}
        <strong>template literals!!!</strong>
      </P>
      <P>
        By using <strong>back ticks</strong> (<Code>` `</Code>) instead of
        quotes you can insert variables directly into the string by using{" "}
        <Code>${"{}"}</Code>, and can even perform JavaScript logic inside the
        curly brackets too! Whaaaaat?? Let’s check it out using the same example
        above.
      </P>
      <Gist id="7d58fb1db11f7601595e9954d59f24ad" />
      <P>
        Notice how much cleaner it looks and how much easier it is to read while
        coding it out? Ahhh… gotta love <strong>template literals</strong>…
      </P>
    </Content>
  </ArticleWrapper>
)

export default Entry
