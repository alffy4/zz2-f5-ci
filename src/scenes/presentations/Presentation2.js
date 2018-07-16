import React from 'react'
import theme from 'theme'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle'

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Spectacle Boilerplate
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        open the presentation/index.js file to get started
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Typography
      </Heading>
      <Heading size={1} textColor="secondary">
        Heading 1
      </Heading>
      <Heading size={2} textColor="secondary">
        Heading 2
      </Heading>
      <Heading size={3} textColor="secondary">
        Heading 3
      </Heading>
      <Heading size={4} textColor="secondary">
        Heading 4
      </Heading>
      <Heading size={5} textColor="secondary">
        Heading 5
      </Heading>
      <Text size={6} textColor="secondary">
        Standard text
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Standard List
      </Heading>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
      </BlockQuote>
    </Slide>
  </Deck>
)

export default {
  name: 'presentation2',
  url: '/presentation-two',
  title: 'Presentation 1',
  description: 'An example presentation',
  Presentation,
}
