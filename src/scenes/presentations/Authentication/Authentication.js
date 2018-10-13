import React from 'react'
import theme from 'theme'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle'
import Exercice from '../../exercices/Authentication'
import sessionImg from './session.png'
import oauth2Img from './oauth2.png'
import jwtImg from './jwt.png'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Authentification</Heading>
      <Text textAlign="center" fit>
        YOU SHALL NOT PASS !!!
      </Text>
    </Slide>
    <Slide>
      <Heading fit>Pourquoi mettre en place une authentification?</Heading>
    </Slide>
    <Slide>
      <Heading fit>La session</Heading>
    </Slide>
    <Slide>
      <List>
        <ListItem>Simple à implémenter</ListItem>
        <ListItem>Utilise la session (cookie server-side)</ListItem>
        <ListItem>Statefull => difficilement scalable</ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={sessionImg} />
    </Slide>
    <Slide>
      <Heading fit>OAuth2</Heading>
    </Slide>
    <Slide>
      <List>
        <ListItem>Difficile à implémenter</ListItem>
        <List>
          <ListItem>Mais il existe beaucoup d'implémentations</ListItem>
        </List>
        <ListItem>Utilisé par Facebook et Google</ListItem>
        <ListItem>Utilise des tokens JWT</ListItem>
        <ListItem>Stateless => Scalable</ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={oauth2Img} />
    </Slide>
    <Slide>
      <Image src={jwtImg} />
    </Slide>
  </Deck>
)

export default {
  Presentation,
  Exercice,
}
