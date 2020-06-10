# Les ateliers

## 1. Hello world

Vérifier que votre configuration docker fonctionne correctement

```bash
docker images

docker ps

docker ps -a

docker run hello-world

docker run -d hello-world
```

[![asciicast](https://asciinema.org/a/81697.svg)](https://asciinema.org/a/81697)

## 2. Server nginx

```bash
docker pull nginx

docker run -d --name nginx -p 80:80 nginx

docker exec -it nginx bash
```

[![asciicast](https://asciinema.org/a/81700.svg)](https://asciinema.org/a/81700)

## 3. Votre première image Docker (au choix)

### Java
Utiliser la base de code https://github.com/Slashgear/spring-example-docker

- Définir un fichier Dockerfile qui
  - build votre code
  - lance le server associé a springboot
- Accéder à votre server depuis votre machine hôte

[![asciicast](https://asciinema.org/a/81848.svg)](https://asciinema.org/a/81848)

### NodeJS
Utiliser la base de code https://github.m6web.fr/a-caron/node-docker-example
- Définir un fichier Dockerfile qui télécharge les dépendances
- Démarrer un conteneur en se basant sur votre image
- Accéder à votre server depuis votre machine hôte

### Php

Dans un autre dossier, créer un fichier `index.php` contenant:

```php
<html>
 <head>
  <title>Test PHP</title>
 </head>
 <body>
 <?php phpinfo(); ?>
 </body>
</html>
```

- Définir un fichier Dockerfile qui se base sur l'image `php:7-apache`
- Ajouter votre fichier dans l'image
- Démarrer votre conteneur et accéder à votre server

## 4. Partager des fichiers entre l'hôte et le conteneur

- Ajouter un fichier à un conteneur nginx
- Supprimer le conteneur
- Lancer un deuxième conteneur

> Votre fichier existe-t-il ? Pourquoi ?

- Faire en sorte de monter un volume sur un conteneur nginx vous permettant de persister vos fichiers.

## 5. Faire communiquer vos conteneurs

```bash
docker network create workshop
```

- Associer votre réseau à deux conteneurs nginx
- Faites en sorte que les deux conteneurs puissent se pinguer

## 6. Docker compose

> A quoi sert docker compose ?

Faite en sorte de faire tourner [l'application d'exemple de docker compose](https://docs.docker.com/compose/gettingstarted/)
