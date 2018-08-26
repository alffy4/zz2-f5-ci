import React from 'react'
import theme from 'theme'
import {
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text,
  Table,
  TableBody,
  TableRow,
  TableItem,
} from 'spectacle'
import htmlImg from './html.png'
import cssImg from './css.png'
import materializeImg from './materialize.gif'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>HTML / CSS</Heading>
      <Text textAlign="center">Les bases du web</Text>
    </Slide>
    <Slide>
      <Heading size="4" textAlign="center">
        L'HTML
      </Heading>
      <Image src={htmlImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4">{'<head>...</head>'}</Heading>
      <List>
        <ListItem>
          Contient les informations liées a la page (metadata)
        </ListItem>
        <ListItem>Le titre</ListItem>
        <ListItem>Les scripts à importés</ListItem>
        <ListItem>D'autres infos (auteur, description, mot-clés)</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">{'<body>...</body>'}</Heading>
      <List>
        <ListItem>Contient les informations à afficher</ListItem>
        <ListItem>Du texte, des paragraphes, des titres</ListItem>
        <ListItem>Des tableaux, des listes</ListItem>
        <ListItem>Des liens</ListItem>
        <ListItem>Des images</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Les éléments HTML</Heading>
      <Text>Ce sont des balises XML représentant des composants</Text>
      <CodePane
        lang="html"
        source="<nom-de-l-element>contenue...</nom-de-l-element>"
      />
      <Text>où lorsqu'ils sont vide</Text>
      <CodePane lang="html" source="<nom-de-l-element />" />
    </Slide>
    <Slide>
      <Heading size="4">Les attributs HTML</Heading>
      <Text>
        Les attributs permettent de configurer ou d'ajouter des informations sur
        un élément HTML
      </Text>
      <CodePane
        lang="html"
        source={`<nom-de-l-element attribut-1="val1" attribut-2="val2">
  contenue...
</nom-de-l-element>`}
      />
    </Slide>
    <Slide>
      <Heading fit>Quelques balises HTML</Heading>
    </Slide>
    <Slide>
      <Text>Les paragraphes</Text>
      <CodePane
        lang="html"
        source={`<p>Laborum est commodo anim qui. Commodo qui sunt duis minim excepteur aliquip consectetur.</p>`}
      />
      <Text>Les titles</Text>
      <CodePane
        lang="html"
        source={
          '<h1>Laborum est commodo anim qui</h1>\n...\n<h6>Laborum est commodo anim qui</h6>'
        }
      />
    </Slide>
    <Slide>
      <Text>Les listes</Text>
      <CodePane
        lang="html"
        source={`\
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>`}
      />
      <Text>Les images</Text>
      <CodePane
        lang="html"
        source={`<img src="image.jpg" alt="description">`}
      />
    </Slide>
    <Slide>
      <Text>Les listes</Text>
      <CodePane
        lang="html"
        source={`\
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>`}
      />
      <Text>Les images</Text>
      <CodePane
        lang="html"
        source={`<img src="image.jpg" alt="description">`}
      />
    </Slide>
    <Slide>
      <Text>Les formulaires</Text>
      <CodePane
        lang="html"
        source={`\
<form action="/action_page" method="post">
    <input type="text" name="firstname">
    <input type="text" name="lastname">
    <button type="submit">Envoyer</button>
</form>`}
      />
    </Slide>
    <Slide>
      <Heading fit>Et pleins d'autres...</Heading>
    </Slide>
    <Slide>
      <Heading size="4" textAlign="center">
        Le CSS
      </Heading>
      <Image src={cssImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4">Comment appliquer le style</Heading>
      <Text>Dans l'attribut style</Text>
      <CodePane
        lang="html"
        source={`<p style="color: red;">Lorem ipsum.</p>`}
      />
      <Text>Dans la balise style</Text>
      <CodePane
        lang="html"
        source={`\
<head>
    ...
    <style>
        p { 
            color: red; 
        }
    </style>
</head>`}
      />
    </Slide>
    <Slide>
      <Text>Dans une feuille de style</Text>
      <CodePane
        lang="css"
        source={`\
p {
    color: red;
}`}
      />
      <CodePane
        lang="html"
        source={`\
<head>
    ...
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>`}
      />
    </Slide>
    <Slide>
      <Heading size="4">Les sélecteurs</Heading>
      <Text>Via l'attribut id</Text>
      <CodePane lang="css" source={`#mon-id { color: red; }`} />
      <CodePane lang="html" source={`<p id="mon-id">Lorem ipsum.</p>`} />
      <Text>Via les classes</Text>
      <CodePane lang="css" source={`.ma-classe { color: red; }`} />
      <CodePane lang="html" source={`<p class="ma-classe">Lorem ipsum.</p>`} />
      <Text>Via le nom de l'élément</Text>
      <CodePane lang="css" source={`p { color: red; }`} />
      <CodePane lang="html" source={`<p>Lorem ipsum.</p>`} />
    </Slide>
    <Slide>
      <Heading size="4" textAlign="center">
        Les règles CSS
      </Heading>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>color</TableItem>
            <TableItem>Couleur du texte</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>padding</TableItem>
            <TableItem>Marges intérieurs (px, %)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>padding-top</TableItem>
            <TableItem>Marge haute intérieur (px, %)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>margin</TableItem>
            <TableItem>Marges extérieurs (px, %)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>width</TableItem>
            <TableItem>Largeur de l'élément (px, %)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>...</TableItem>
            <TableItem>Et beaucoup d'autres</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>
    <Slide>
      <Heading fit>Les frameworks CSS</Heading>
    </Slide>
    <Slide>
      <Image src={materializeImg} />
    </Slide>
  </Deck>
)

export default {
  Presentation,
}
