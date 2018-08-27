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
  Table,
  TableBody,
  TableRow,
  TableItem,
} from 'spectacle'
import httpImg from './http.png'
import getImg from './get.png'
import postImg from './post.png'
import monolithImg from './monolith.png'
import frontBackImg from './frontBack.png'
import microservicesImg from './microservices.png'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Les applications web</Heading>
      <Text fit textAlign="center">
        GET /cours HTTP/1.1
      </Text>
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
      <Image src={httpImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4">Une requête HTTP</Heading>
      <List>
        <ListItem>Une action : GET,POST,...</ListItem>
        <ListItem>Une ressource : /ressource</ListItem>
        <ListItem>Des paramètres : url ou body</ListItem>
        <ListItem>Une config : les headers</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4" textAlign="center">
        Les mots-clés HTTP
      </Heading>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>GET</TableItem>
            <TableItem>Lecture d'une ressource</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>POST</TableItem>
            <TableItem>Création d'une ressource</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>PUT</TableItem>
            <TableItem>Mise à jour d'une ressource</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>PATCH</TableItem>
            <TableItem>Mise à jour d'une ressource</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>DELETE</TableItem>
            <TableItem>Suppression d'une ressource</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>
    <Slide>
      <Heading size="4" textAlign="center">
        Les headers HTTP
      </Heading>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>Authorization</TableItem>
            <TableItem>Token d'authentification</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Cache-Control</TableItem>
            <TableItem>Politique de cache</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Accept</TableItem>
            <TableItem>Format des données attendus</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Cookie</TableItem>
            <TableItem>Les cookies du client au serveur</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Origin</TableItem>
            <TableItem>L'origine de la consultation</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>...</TableItem>
            <TableItem>Et beaucoup d'autres</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>
    <Slide>
      <Image src={getImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={postImg} width="100%" />
    </Slide>
    <Slide>
      <Heading fit>Les architectures web</Heading>
    </Slide>
    <Slide>
      <Heading size="4" textAlign="center">
        Le monolithe
      </Heading>
      <Image src={monolithImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4" textAlign="center">
        Séparation front/back
      </Heading>
      <Image src={frontBackImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4" textAlign="center">
        Les micro services
      </Heading>
      <Image src={microservicesImg} width="100%" />
    </Slide>
  </Deck>
)

export default {
  Presentation,
}
