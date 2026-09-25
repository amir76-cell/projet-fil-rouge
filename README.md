# Projet Fil Rouge — Solène Avril

## Amir Hossein RIAZI

Portfolio de photographe réalisé en HTML / CSS, avec une touche de JavaScript en bonus. Le site reprend la maquette fournie (vues ordinateur, tablette et mobile) : un en-tête, une section de présentation avec un menu de filtres, une galerie de photos, et un pied de page.

## Langages utilisés

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (vanilla)

## Polices

Les polices **Yeseva One** (titres) et **Montserrat** (texte courant) sont importées via l'API Google Fonts, intégrée dans le `<head>` du fichier HTML.

## Icônes

Les icônes (réseaux sociaux) viennent de **Font Awesome**, intégré via mon kit personnel, chargé lui aussi dans le `<head>`.

## Structure HTML

Le fichier `index.html` suit une structure sémantique classique :

- **`<header>`** : logo du site et icônes des réseaux sociaux.
- **`<main>`**, qui contient deux sections :
  - **`.intro`** : le titre d'accroche, un court texte de présentation, et le menu de filtres (`<nav>`) permettant de trier la galerie par catégorie (Nature, Portrait, Art, Urbain, Animaux).
  - **`.galerie`** : la grille de photos, chaque photo étant une `<article>` avec une catégorie associée (`data-categorie`).
- **`<footer>`** : mentions de copyright.

## Mise en forme CSS

- Le **header** et le **menu de filtres** sont mis en page avec **Flexbox**, pour aligner leurs éléments en ligne.
- La **galerie de photos** utilise **CSS Grid**, pour organiser les photos en colonnes et lignes (4 colonnes sur ordinateur, adapté ensuite en responsive).
- Des **media queries** adaptent l'affichage sur tablette et mobile : le nombre de colonnes de la galerie change, et le nombre de photos affichées est réduit sur mobile pour coller à la maquette.

## JavaScript

En plus du rendu demandé, j'ai ajouté un petit script JavaScript pour rendre le menu de filtres interactif : cliquer sur une catégorie affiche uniquement les photos correspondantes dans la galerie, pour une meilleure visualisation du projet.

## Hébergement

Le site est hébergé via GitHub Pages : "https://amir76-cell.github.io/projet-fil-rouge/"
