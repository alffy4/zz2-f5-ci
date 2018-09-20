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
import gitlabCiExempleImg from './gitlabCiExempleImg.png'
import agileImg from './agile.jpg'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Intégration Continue</Heading>
      <Text fit textAlign="center">
        Tester, c'est douter
      </Text>
    </Slide>
    <Slide>
      <BlockQuote>
        <Quote>
          L'intégration continue est un ensemble de pratiques utilisées en génie
          logiciel consistant à vérifier à chaque modification de code source
          que le résultat des modifications ne produit pas de régression dans
          l'application développée.
        </Quote>
        <Cite>Wikipédia</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Heading fit>Qu'est ce que l'intégration continue en pratique ?</Heading>
    </Slide>
    <Slide>
      <List>
        <ListItem>Lancer des scripts via des Git hooks</ListItem>
        <ListItem>Exécuter des tests</ListItem>
        <ListItem>Analyses statiques de code</ListItem>
        <ListItem>...</ListItem>
        <ListItem>Alerte si une étape échoue</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Les serveurs de CI</Heading>
      <List>
        <ListItem>Gitlab CI</ListItem>
        <ListItem>Circle CI</ListItem>
        <ListItem>Travis CI</ListItem>
        <ListItem>Jenkins</ListItem>
        <ListItem>...</ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={gitlabCiExempleImg} width="100%" />
    </Slide>
    <Slide>
      <Heading fit>Pourquoi utiliser l'intégration continue?</Heading>
    </Slide>
    <Slide>
      <List>
        <ListItem>tests: l'app fonctionne</ListItem>
        <ListItem>lint: le code est ok</ListItem>
        <ListItem>...</ListItem>
      </List>
      <Text textAlign="center" fit>
        La branche est prête a être mergée sans beaucoup de risque !
      </Text>
    </Slide>
    <Slide>
      <Heading fit>Déploiement Continue</Heading>
      <Text fit>Pour être agile comme un chat</Text>
    </Slide>
    <Slide>
      <Image src={agileImg} width="100%" />
    </Slide>
    <Slide>
      <Heading fit>Qu'est ce que le déploiement continue en pratique ?</Heading>
    </Slide>
    <Slide>
      <BlockQuote>
        <Quote>
          Faire un script qui fait les choses qui vont bien quand les tests vont
          bien
        </Quote>
        <Cite>putaindecode.io</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <List>
        <ListItem>Lancer des scripts via des Git hooks</ListItem>
        <ListItem>Uniquement si la CI est ok</ListItem>
        <ListItem>Déployer le code</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Les environnements</Heading>
      <List>
        <ListItem>Dev</ListItem>
        <ListItem>Acceptance</ListItem>
        <ListItem>Pré-production</ListItem>
        <ListItem>Production</ListItem>
      </List>
    </Slide>
    <Slide>
      <Text>
        Il ne faut pas confondre la CI et la CD mais les deux sont
        complémentaires !
      </Text>
    </Slide>
  </Deck>
)

export default {
  Presentation,
}
