# API de Gestion des Recettes

## Description

Cette API permet de gérer des recettes, en fournissant des fonctionnalités CRUD (Create, Read, Update, Delete). Elle est construite avec Express.js et utilise MySQL pour la gestion de la base de données.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

    Node.js
    Mysql
    Postman (pour tester l'API)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

**Clonez le repository :**

```bash
 git clone https://github.com/HarounaTraore/API-gestion-recette.git
```

**Accédez au dossier du projet :**

```bash
  cd order-manager-app
```

**Installez les dépendances :**

```bash
   npm install
```

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
  npm start
```

## Endpoints de l'API

### GET /recettes

- Description : Récupère toutes les recettes.
- Réponse :

```bash
[
  {
    "id": 1,
    "titre": "Tarte aux pommes",
    "type": "Dessert",
    "ingrédients": "Pommes, Sucre, Pâte"
  }
]
```

### POST /recettes

- Description : Crée une nouvelle recette.
- Corps de la requête :

```bash
{
  "titre": "Salade César",
  "type": "Entrée",
  "ingrédients": "Laitue, Poulet, Parmesan, Croutons"
}

```

- Réponse :

```bash
{
  "message": "Recette ajouter avec succès"
}

```

### PUT /recettes/id

- Description : Met à jour une recette existante.
- Corps de la requête :

```bash
{
  "titre": "Pizza améliorée",
  "type": "Plat principal",
  "ingrédients": "Tomates, Fromage, Pâte, Basilic"
}

```

- Réponse :

```bash
{
  "message": "Recette mise à jour avec succès"
}

```

### DELETE /recettes/id

- Description : Supprime une recette par ID.
- Réponse :

```bash
{
  "message": "Recette supprimée avec succès"
}

```

## les tests unitaires

Pour effectuer des testes unitaires exécutez la commande suivante :

```bash
  npm test
```

##

## Auteur

[Harouna Traoré](https://github.com/HarounaTraore)

## Contributeur

[Abderahmane Thimbo](https://github.com/AbderahmaneThimbo)
