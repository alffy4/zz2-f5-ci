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
import Exercice from '../../exercices/Testing'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Les tests</Heading>
      <Text textAlign="center" fit>
        Tester, c'est douter
      </Text>
    </Slide>
    <Slide>
      <Heading fit>Tester c'est quoi?</Heading>
    </Slide>
  </Deck>
)

export default {
  Presentation,
  Exercice,
}
