import React from 'react'
import theme from 'theme'
import { Deck, Heading, Image, List, ListItem, Slide, Text } from 'spectacle'
import pizzaImg from './pizza.jpg'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>PiZZima</Heading>
      <Text fit textAlign="center">
        Une app pour les ZZ par les ZZ
      </Text>
    </Slide>
    <Slide>
      <Image src={pizzaImg} height="100%" />
    </Slide>
    <Slide>
      <Heading size="4">Sprint n°1</Heading>
      <List>
        <ListItem>Front: entête</ListItem>
        <ListItem>Front: pied de page</ListItem>
        <ListItem>Front: page de login</ListItem>
        <ListItem>Front: Affichage des pizzas</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Sprint n°2</Heading>
      <List>
        <ListItem>Back: Création du projet web</ListItem>
        <ListItem>Back: Pizzas depuis bdd</ListItem>
        <ListItem>Back: Gestion du panier</ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading size="4">Sprint n°3</Heading>
      <List>
        <ListItem>Back: Connexion</ListItem>
        <ListItem>Back/Front: Création de compte</ListItem>
        <ListItem>Back/Front: Gestion du compte</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Sprint n°4</Heading>
      <List>
        <ListItem>Back: Compte admin</ListItem>
        <ListItem>Back/Front: Gestion des commandes</ListItem>
        <ListItem>Back/Front: Récapitulatif commandes</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Sprint n°5</Heading>
      <List>
        <ListItem>Back/Front: Configuration des pizzas</ListItem>
        <ListItem>Back/Front: gestion des favoris</ListItem>
        <ListItem>Back/Front: Historique</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Sprint n°6</Heading>
      <List>
        <ListItem>???: Have fun</ListItem>
      </List>
    </Slide>
  </Deck>
)

export default {
  Presentation,
}
