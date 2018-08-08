import React from 'react'
import theme from 'theme'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Quote,
  Slide,
  Text,
} from 'spectacle'
import introImg from './intro.jpg'

const Presentation = () => (
  <Deck theme={theme} contentWidth={1300}>
    <Slide bgColor="dark">
      <Heading textColor="light" fit>
        Continuous integration
      </Heading>
    </Slide>
    <Slide bgColor="dark">
      <Image src={introImg} />
    </Slide>
    <Slide>
      <Heading fit>WTF is this shit?</Heading>
    </Slide>
    <Slide>
      <BlockQuote>
        <Quote textColor="tertiary" textSize="3rem">
          Continuous integration (CI) is the practice of merging all developer
          working copies to a shared mainline several times a day.
        </Quote>
        <Cite textColor="dark">Wikipedia</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Text>test</Text>
    </Slide>
  </Deck>
)

export default {
  name: 'continuous-integration-introduction',
  Presentation,
}
