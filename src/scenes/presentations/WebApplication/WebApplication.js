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
import httpImg from './http.png'
import getImg from './get.png'
import postImg from './post.png'
import htmlImg from './html.png'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Les applications web</Heading>
      <Text fit>GET /cours HTTP/1.1</Text>
    </Slide>
    <Slide>
      <BlockQuote>
        <Quote>
          une application web est une application manipulable directement en
          ligne grâce à un navigateur web et qui ne nécessite donc pas
          d'installation sur les machines clientes.
        </Quote>
        <Cite>Wikipédia</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Heading fit>Comment fonctionne une application web ?</Heading>
    </Slide>
    <Slide>
      <Image src={httpImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={getImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={postImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={htmlImg} width="100%" />
    </Slide>
  </Deck>
)

export default {
  Presentation,
}
