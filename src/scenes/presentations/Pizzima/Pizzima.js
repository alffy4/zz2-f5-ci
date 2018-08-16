import React from 'react'
import theme from 'theme'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>PiZZima</Heading>
      <Text fit>Une app pour les ZZ par les ZZ</Text>
    </Slide>
  </Deck>
)

export default {
  Presentation,
}
