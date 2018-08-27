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
import commitImg from './commit.png'
import diffImg from './diff.png'
import revertImg from './revert.png'
import decentralizedImg from './decentralized.png'
import pushImg from './push.png'
import pullImg from './pull.png'
import branchImg from './branch.png'
import mergeImg from './merge.png'
import rebaseImg from './rebase.png'
import gitflowImg from './gitflow.png'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading>Git</Heading>
      <Text textAlign="center">fichier.old.older.oldest</Text>
    </Slide>
    <Slide>
      <BlockQuote>
        <Quote>
          Git est un logiciel de gestion de versions décentralisé. C'est un
          logiciel libre créé par Linus Torvalds, [...] il s’agit du logiciel de
          gestion de versions le plus populaire qui est utilisé par plus de
          douze millions de personnes.
        </Quote>
        <Cite>Wikipedia</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Heading size="4">Les alternatives</Heading>
      <List>
        <ListItem>SubVersion</ListItem>
        <ListItem>Mercurial</ListItem>
        <ListItem>Bazaar</ListItem>
        <ListItem>...</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading fit>
        Pourquoi utiliser un logiciel de gestion de versions (vcs) ?
      </Heading>
    </Slide>
    <Slide>
      <List>
        <ListItem>Collaboration</ListItem>
        <ListItem>Audit du code</ListItem>
        <ListItem>Retour en arrière</ListItem>
        <ListItem>Gestion de tags/versions</ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={commitImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={diffImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={revertImg} width="100%" />
    </Slide>
    <Slide>
      <Text>Git est décentralisé</Text>
    </Slide>
    <Slide>
      <Image src={decentralizedImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={pushImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={pullImg} width="100%" />
    </Slide>
    <Slide>
      <Text>Organiser ses modifications avec les branches</Text>
    </Slide>
    <Slide>
      <Image src={branchImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={mergeImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={rebaseImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4">Où héberger son dépôt</Heading>
      <List>
        <ListItem>GitHub</ListItem>
        <ListItem>GitLab</ListItem>
        <ListItem>BitBucket</ListItem>
        <ListItem>...</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Les interfaces graphiques</Heading>
      <List>
        <ListItem>GitKraken</ListItem>
        <ListItem>TortoiseGit</ListItem>
        <ListItem>SourceTree</ListItem>
        <ListItem>Aucune </ListItem>
        <ListItem>...</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>Git Flow (light)</Heading>
      <Text>Structurer ses branches efficacement</Text>
    </Slide>
    <Slide>
      <Image src={gitflowImg} width="100%" />
    </Slide>
  </Deck>
)

export default {
  Presentation,
}
