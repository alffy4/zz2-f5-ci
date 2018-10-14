/* eslint-disable no-irregular-whitespace */
import React from 'react'
import Markdown from 'components/Markdown'

export default () => (
  <Markdown>{`
# TP n°4 : Une première application web !

## Partie 1 : Création du projet

 * Récupérer le projet de base [ici](https://github.com/JulienUsson/zz2-f5-ci-bootstrap)
 * Suivre les instructions du README.md et lancer le projet.
 * Intégrer la page créée dans le TP n°2.

## Partie 2 : Récupération des données

Nous n'allons pas utiliser de base de données par facilité (pas d'installation, pas de langage compliquée).
Nous allons à la place utiliser des fichiers. Comme toujours Google, Stackoverflow, les documentations sont vos amis :)

 * Réfléchir au format JSON de stockage des pizzas.
 * Récupérer les pizzas d'une "base de données" fichier.

Utiliser [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse) et [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify).
[FS](https://nodejs.org/api/fs.html) permet d'écrire et de lire sur le système de fichier.

## Partie 3 : Stockage des données

 * Faire un formulaire d'ajout de pizza (pas d'authentification pour le moment)
 * Stocker la pizza fraîchement créée dans le fichier "base de données"

## Partie 4 : Have fun !

 * Continuer la création du site :) (En espérant que vous utilisez Git et GitFlow...)

## Autres ressources

 * [NodeJS](https://nodejs.org/api) [EN]
 * [ExpressJS](https://expressjs.com/fr/) [FR]
 * [EJS](http://ejs.co/) [EN]
 * [OpenClassroom](https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1057503-le-framework-express-js) [FR]
`}</Markdown>
)
