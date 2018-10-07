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
import Exercice from '../../exercices/FirstApp'
import introImg from './intro.png'
import routageImg from './routage.png'
import middlewareSchemaImg from './middleware-schema.png'
import middlewareImg from './middleware.png'
import ejsImg from './ejs.png'
import mvcsImg from './mvcs.png'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Une première application web</Heading>
      <Text textAlign="center">NodeJS / ExpressJS / whateverJS</Text>
    </Slide>
    <Slide>
      <Image src={introImg} />
    </Slide>
    <Slide>
      <Image src={routageImg} />
    </Slide>
    <Slide>
      <Heading textAlign="center" size="4">
        Les middlewares
      </Heading>
      <Image src={middlewareSchemaImg} />
    </Slide>
    <Slide>
      <Image src={middlewareImg} />
    </Slide>
    <Slide>
      <Heading textAlign="center" size="4">
        Les moteurs de templates
      </Heading>
      <Image src={ejsImg} />
    </Slide>
    <Slide>
      <Heading textAlign="center" size="4">
        Organisation du code
      </Heading>
      <Image src={mvcsImg} />
    </Slide>
  </Deck>
)

export default {
  Presentation,
  Exercice,
}
