/* eslint-disable no-irregular-whitespace */
import React from 'react'
import Markdown from 'components/Markdown'

export default () => (
  <Markdown>{`
# TP n°3 : Javascript !

## Introduction

Avant de commencer, quelques liens utiles.

### Documentation
 - https://developer.mozilla.org/fr/docs/Web/JavaScript
 - https://www.w3schools.com/js/default.asp

### Environnement de développement en ligne
 - https://codesandbox.io/s/vanilla

## Exercice 1 :

Ecrire un script qui ajoute 42 à chaque élément du tableau.

\`\`\`const numbers = [20, 30, 42, 66, 99] \`\`\`

* En utilisant while
* En utilisant for
* En utilisant for of
* En utilisant .map()

## Exercice 2 : 

Ecrire un script qui calcule la somme d'un tableau.

\`\`\`const numbers = [20, 30, 42, 66, 99] \`\`\`

* En utilisant for of
* En utilisant .reduce()

## Exercice 3 : 

Ecrire un script utilisant la bibliothèque [Chalk](https://github.com/chalk/chalk) qui écrit chaque élément du tableau suivant dans la couleur de l'élément.

\`\`\`const colors = ["blue", "red", "green", "yellow", "orange"] \`\`\`

  * En utilisant for of
  * En utilisant .forEach()

## Exercice 4 :

Ecrire un script qui récupère 100 users via [randomuser](https://randomuser.me/api/?results=100) avec [axios](https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237) et qui les affichent.
Attention à l'aspect asynchrone du code ! Mettez des logs un peu partout et regarder l'ordre d'affichage.

## Exercice 5 :

Ecrire un script qui récupère 1000 users et qui affiche les users dont la timezone est Paris. (Utiliser filter)

## Exercice 6 :

Ecrire un script qui récupère 1000 users et qui affiche le premier utilisateur dont la timezone est Paris.

## Exercice 7 :

Ecrire un script qui récupère 1000 users et qui sauvegarde dans un second tableau uniquement le prénom et le nom de tous les users dont le timezone est Paris.
`}</Markdown>
)
