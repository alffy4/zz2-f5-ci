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
import transpilateurImg from './transpilateur.png'
import asyncImg from './async.png'
import varsImg from './vars.png'
import conditionImg from './condition.png'
import bouclesImg from './boucles.png'
import structuresImg from './structures.png'
import fonctionsImg from './fonctions.png'
import promisesImg from './promises.png'
import functionalImg from './functional.png'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Javascript</Heading>
      <Text fit textAlign="center">
        JavaScript everywhere
      </Text>
    </Slide>
    <Slide>
      <Heading size="4">Javascript en quelques mots</Heading>
      <List>
        <ListItem>Langage interprété</ListItem>
        <ListItem>Orienté objet, impératif, fonctionnel</ListItem>
        <ListItem>Créé le 4 decembre 1995</ListItem>
        <ListItem>Standardisé sous le nom d'ECMAScript</ListItem>
        <ListItem>N'a AUCUN rapport avec Java !!!!!!!!!!!</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Pourquoi JavaScript?</Heading>
      <List>
        <ListItem>Code côté client</ListItem>
        <ListItem>Code côté serveur (NodeJS)</ListItem>
        <ListItem>Scripts (NodeJS)</ListItem>
        <ListItem>Application mobiles (React Native, Cordova, ...)</ListItem>
        <ListItem>Application desktop (Electron, React Native)</ListItem>
        <ListItem>IOT</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">l'ECMAScript</Heading>
      <List>
        <ListItem>Avant ES5, une version tous les 3-5ans</ListItem>
        <ListItem>Tous les navigateurs modernes supportent ES5</ListItem>
        <ListItem>A partir d'ES6 (ES2015), une version tous les ans</ListItem>
        <ListItem>Quelques navigateurs supportent ES6</ListItem>
        <ListItem>Aujourd'hui ES2018</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading fit>Comment utiliser les dernières versions de JS ?</Heading>
    </Slide>
    <Slide>
      <Heading size="4">les transpilleurs !</Heading>
      <List>
        <ListItem>Le plus utilisé est BabelJS</ListItem>
        <ListItem>Permet de transformer un langage en un autre</ListItem>
        <ListItem>Ne pas confondre avec un compilateur</ListItem>
        <ListItem>ES2018 => ES5, plus de soucis de compatibilité !</ListItem>
        <ListItem>
          Les polyfills permettent également une meilleure rétrocompatibilité
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={transpilateurImg} />
    </Slide>
    <Slide>
      <Heading size="4">Quelques langages</Heading>
      <List>
        <ListItem>TypeScript</ListItem>
        <ListItem>ReasonML</ListItem>
        <ListItem>CoffeeScript</ListItem>
        <ListItem>Kotlin</ListItem>
        <ListItem>...</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">L'asynchronicité et les promesses</Heading>
      <List>
        <ListItem>Spécificité de JS</ListItem>
        <ListItem>Un seul thread</ListItem>
        <ListItem>Ne pas bloquer l'interface utilisateur</ListItem>
        <ListItem>Appels réseaux, accès disque, ...</ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={asyncImg} />
    </Slide>
    <Slide>
      <Heading fit>La syntaxe</Heading>
    </Slide>
    <Slide>
      <Image src={varsImg} />
    </Slide>
    <Slide>
      <Image src={conditionImg} />
    </Slide>
    <Slide>
      <Image src={bouclesImg} />
    </Slide>
    <Slide>
      <Image src={structuresImg} />
    </Slide>
    <Slide>
      <Image src={fonctionsImg} />
    </Slide>
    <Slide>
      <Image src={promisesImg} />
    </Slide>
    <Slide>
      <Image src={functionalImg} />
    </Slide>
    <Slide>
      <Heading size="4">Quelques liens utiles</Heading>
      <List>
        <ListItem>
          https://developer.mozilla.org/fr/docs/Web/JavaScript
        </ListItem>
        <ListItem>https://www.w3schools.com/js/default.asp</ListItem>
        <ListItem>https://codesandbox.io/s/vanilla</ListItem>
      </List>
    </Slide>
  </Deck>
)

export default {
  Presentation,
}
