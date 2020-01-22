import React from "react"
import Gist from "../../components/UI/StyledGist"
import CodeBlock from "../../components/UI/CodeBlock"
import DividerDotted from "../../components/UI/DividerDotted"
// >>> IMPORTING THE STYLED COMPONENTS BREAKS HOT RELOADING.
// import {
//   ArticleTitle,
//   ArticleWrapper,
//   Content,
//   Code,
//   GifOrImg,
//   Heading,
//   LI,
//   Link,
//   UL,
//   P,
//   Subheading,
// } from "../../components/styledComponents/BlogArticleStyles"
import styled from "styled-components"
import { BOX_SHADOW, SERIF_FONT } from "../../data/constants"

export const ArticleTitle = styled.h1`
  color: rgba(0, 0, 0, 0.84);
  font-family: ${SERIF_FONT};
  font-weight: 400;
  font-size: 40px;
  margin-top: 36px;
  margin-bottom: 0;
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
  box-shadow: ${BOX_SHADOW};
  margin: 0 4px;
`
export const GifOrImg = styled.img`
  width: 680px;
  box-shadow: ${BOX_SHADOW};
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
  margin-top: 48px;
`

const formattedCodeA = `const arr = [1, 2, 3]
console.log(...arr) // 1 2 3
// Using our sum function from above.
sum(...arr) // returns 6
`

const Article = () => (
  <ArticleWrapper>
    <Content>
      <ArticleTitle>Modern JavaScript Fundamentals</ArticleTitle>
      <GifOrImg src="https://miro.medium.com/max/1570/1*H-25KB7EbSHjv70HXrdl6w.png" />
      <P>
        Once you get the basics of JavaScript down, you’ll start to pick up tips
        and tricks that will save you time and make your code cleaner. These
        modern JavaScript fundamentals do just that! They may seem a little
        challenging to grasp at first, but as you keep practicing they’ll become
        second nature. I’ll briefly introduce you to the following topics in
        this article.
      </P>
      <UL>
        <LI>
          <strong>Arrow functions</strong>
        </LI>
        <LI>
          <strong>Template literals</strong>
        </LI>
        <LI>
          <strong>Rest parameter</strong>
        </LI>
        <LI>
          <strong>Spread operator</strong>
        </LI>
        <LI>
          <strong>Destructuring</strong>
        </LI>
        <LI>
          <strong>Ternary operator</strong>
        </LI>
      </UL>
      <DividerDotted />
      <GifOrImg src="https://media.giphy.com/media/jGJDLV1kZzYl2/giphy.gif" />
      <Heading>Arrow Functions</Heading>
      <CodeBlock>const myArrowFunc = () => {}</CodeBlock>
      <P>
        <strong>Arrow functions</strong> have a shorter syntax than{" "}
        <strong>function expressions</strong>, and the parentheses are optional
        if there’s only one parameter. Also, if your function only has one line
        of code to return, you don’t need <Code>{`{}`}</Code> brackets or a{" "}
        <Code>return</Code> key word, but can implicitly return whatever follows
        the arrow <Code>=></Code>. Lets look at a simple example.
      </P>
      <Gist gistId="b0064f9da781b48853e25182ac207827" />
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
      <DividerDotted />
      <Heading>Template Literals</Heading>
      <P>
        I found concatenating strings and variables together using{" "}
        <Code>+</Code> to be very tedious, hard to read, and error prone. I
        always seemed to be left with the wrong number of spaces. For example…
      </P>
      <Gist gistId="73cf2b538b635bc5cf69d8e1c71446e0" />
      <P>
        See the incorrect spacing because I didn’t remember to add spaces before
        and after the <Code>+</Code>? Also, you’ll notice I prefer to use single
        quotes for strings, but had to switch to double quotes with{" "}
        <Code>", I'm"</Code> since I needed a single quote for an apostrophe.
        Well, cue <strong>template literals!!!</strong>
      </P>
      <GifOrImg src="https://media.giphy.com/media/MGdfeiKtEiEPS/giphy.gif" />
      <P>
        By using <strong>back ticks</strong> (<Code>` `</Code>) instead of
        quotes you can insert variables directly into the string by using{" "}
        <Code>${"{}"}</Code>, and can even perform JavaScript logic inside the
        curly brackets too! Whaaaaat?? Let’s check it out using the same example
        above.
      </P>
      <Gist gistId="7d58fb1db11f7601595e9954d59f24ad" />
      <P>
        Notice how much cleaner it looks and how much easier it is to read while
        coding it out? Ahhh… gotta love <strong>template literals</strong>…
      </P>
      <DividerDotted />
      <GifOrImg src="https://media.giphy.com/media/vzO0Vc8b2VBLi/giphy.gif" />
      <Heading>Rest Parameter</Heading>
      <P>
        Functions are allowed to take as many arguments as you pass them, even
        if it doesn’t change the result. If you have extra, unused arguments the
        function won’t throw an error, it will just ignore them. For example…
      </P>
      <Gist gistId="24cc5af93079ccea103b634ca1d25fd1" />
      <P>
        But what if you DO want a way to sum all the numbers passed into that
        function, no matter how many there are? Maybe we can put all the
        arguments into an array? That’s exactly what the{" "}
        <strong>rest parameter</strong> (<Code>...</Code>) does! It tells your
        function to gather all the parameters following the <Code>...</Code> and
        put them into an array. Lets make a better sum function.
      </P>
      <Gist gistId="f195c7cd611dd83e64d2736ba0d000cd" />
      <P>
        <strong>Bonus</strong>: the above <Code>sum</Code> function could be
        refactored to one line using the Array method <Code>.reduce()</Code>, as
        so…
      </P>
      <CodeBlock>
        const sum = (...args) => args.reduce((total, num) => total + num, 0)
      </CodeBlock>
      <P>
        To learn more about the magical powers of <Code>.reduce()</Code>, see{" "}
        <Link
          target="_blank"
          href="https://medium.com/@lionarons/e-pluribus-unum-6909608c43a7"
        >
          this article
        </Link>{" "}
        written by a fellow classmate of mine from{" "}
        <Link target="_blank" href="https://www.fullstackacademy.com/">
          Fullstack Academy
        </Link>
        .
      </P>
      <DividerDotted />
      <GifOrImg src="https://media.giphy.com/media/HYVqcbJpEH5h6/giphy.gif" />
      <Heading>Spread Operator</Heading>
      <Subheading>Array Spread</Subheading>
      <P>
        The <strong>spread operator</strong> (also denoted by an ellipsis
        <Code>...</Code>) essentially behaves opposite of the{" "}
        <strong>rest parameter</strong>. Instead of condensing multiple items
        into an array, it can expand an array’s elements into a list.
      </P>
      <CodeBlock>{formattedCodeA}</CodeBlock>
      <P>
        Here are a few cool things the <strong>spread operator</strong> can do
        with arrays.
      </P>
      <Gist gistId="3ac3958b025ae92b26be7d56d9b08ed7" />
      <Subheading>Object Spread</Subheading>
      <P>
        The <strong>spread operator</strong> can also be used for objects to
        create copies and prevent mutation of the original object. Here’s an
        example where I copy the object <Code>utahAlumBio</Code>, modify some
        existing properties, and add my own properties while leaving the
        original object unchanged. You’ll find this comes in very handy when
        trying to preserve the state of previous information.
      </P>
      <Gist gistId="730076538748ba3c82a115b9ca85d602" />
      <DividerDotted />
      <GifOrImg src="https://media.giphy.com/media/VvXg0yjJQgfEQ/giphy.gif" />
      <Heading>Destructuring</Heading>
      <P>
        This is a concept that was kind of difficult for me to wrap my head
        around originally, but is now a tool that I use all the time!{" "}
        <strong>Destructuring</strong> works with both objects and arrays,
        although I find myself using it more often with objects.
      </P>
      <Subheading>Object Destructuring</Subheading>
      <P>
        Before <strong>destructuring</strong>, you would need to pull out values
        from an object using dot notation or bracket notation and assign them to
        a variable, as seen on lines 8–10…
      </P>
      <Gist gistId="6474bc352aa4b1864e42204a6579e7cf" />
      <P>
        But we can make this process much easier with{" "}
        <strong>destructuring</strong>! To <strong>destructure</strong> an
        object, follow these steps:
      </P>
      <UL>
        <LI>
          place the object on the right side of the <Code>=</Code> sign.
        </LI>
        <LI>
          place the name of the variables you want to create on the left side of
          the <Code>=</Code> sign inside <Code>{"{ }"}</Code> brackets.
        </LI>
      </UL>
      <CodeBlock>{`const {keyName1, keyName2} = object`}</CodeBlock>
      <P>
        It’s that easy! You just have to make sure that the names of the
        variables you create match up with the keys’ names from the object. See
        line 8…
      </P>
      <Gist gistId="77d74a90ba069749d7e8da2351ac6772" />
      <P>
        While <strong>destructuring</strong>, if you want to{" "}
        <strong>rename a variable</strong> to something other than the key name,
        you can do so by placing a <strong>colon and the new name</strong> after
        the key’s name inside the brackets, like so.{" "}
        <Code>{"{name: newName}"}</Code>. For example, if we had written this on
        line 8 instead…
      </P>
      <CodeBlock>const {"{name: user, age, favoriteGame}"} = me</CodeBlock>
      <P>
        <Code>name</Code> would be undefined, but <Code>user</Code> would hold
        the value <Code>'Neil Scheuermann'</Code>.
      </P>
      <Subheading>Array Destructuring</Subheading>
      <P>
        <strong>Array destructing</strong> is written the same way as{" "}
        <strong>object destructuring</strong>, but using <Code>[]</Code>{" "}
        brackets on the left side of the <Code>=</Code> sign, and placing an
        array on the right side, like so.
      </P>
      <CodeBlock>const [var1, var2] = array</CodeBlock>
      <P>
        However, the order of the variables you’re creating{" "}
        <strong>does</strong> matter here, unlike{" "}
        <strong>object destructuring</strong>. The variable must correspond to
        the position of the value you’re pulling out of the array. But since the
        variables correspond to the position of the value in the array, you can
        name your variables whatever you’d like. Here are some examples.
      </P>
      <Gist gistId="d97ce6f6fa1c7173cfaadd871876b32c" />
      <DividerDotted />
      <Heading>Ternary Operator</Heading>
      <P>
        The <strong>ternary operator</strong> is a condensed way of writing
        conditional logic. In some cases, instead of writing a chunky{" "}
        <Code>if ... else</Code> statement, you can write it in one line using a
        question mark <Code>?</Code> and a colon <Code>:</Code>. The syntax is
        as follows.
      </P>
      <CodeBlock>condition ? value1 : value2</CodeBlock>
      <P>
        The <strong>ternary operator</strong> will look at the{" "}
        <Code>condition</Code> and return <Code>value1</Code> if it’s true, or{" "}
        <Code>value2</Code> if it’s false. Let’s look at a simple example of
        this.
      </P>
      <Gist gistId="96766b56ba1e4014914c900c61677044" />
      <P>
        Combining the <strong>ternary operator</strong> with{" "}
        <strong>arrow functions</strong> can really slim down your code! Here’s
        an example.
      </P>
      <Gist gistId="2979da030e6db73a2b1c4449d36770c1" />
      <P>
        That’s pretty amazing huh?! We just slimmed our code down from{" "}
        <strong>7</strong> lines and <strong>112</strong> characters/spaces, to
        <strong>1</strong> line and <strong>67</strong> characters/spaces!
      </P>
      <DividerDotted />
      <GifOrImg src="https://media.giphy.com/media/LpLd2NGvpaiys/giphy.gif" />
      <Heading>Conclusion</Heading>
      <P>
        Hopefully this article helped you better understand some very valuable
        JavaScript tools. You’re on your way to becoming a more efficient and
        skilled programmer! You just learned how to use{" "}
        <strong>arrow functions</strong>, <strong>template literals</strong>,
        the <strong>rest parameter</strong>, the{" "}
        <strong>spread operator</strong>, <strong>destructuring</strong>, and
        the <strong>ternary operator</strong>. Keep practicing and these will
        become second nature, I promise!
      </P>
    </Content>
  </ArticleWrapper>
)

export default Article
