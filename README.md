# Vocabulometer app

Cette application utilise le framework expo (Expo is a set of tools, libraries and services which let you build native iOS and Android apps by writing JavaScript, precisely React-Native)  : https://docs.expo.io/versions/v28.0.0/#introduction

## **Etapes pour configurer l'environnement et lancer le projet :**

La procédure de expo:
https://docs.expo.io/versions/v28.0.0/introduction/installation


### 1. Installer Expo XDE **OU** le CLI expo

Expo XDE est une interface graphique pour gérer, lancer sur émulateur, et publier les projets expo  https://expo.io/tools#xde

Le CLI Expo fournit les mêmes fonctionnalités en ligne de commande mais requiert l'acces root car ce package doit s'install en global. Pour l'installer :

    npm install -g exp

### 2. Cloner le dépot et installer les dépendances

    git clone https://github.com/ArnaudRm/vocabulometer.git

    cd vocabulometer && npm i


### 3. Run le projet

#### **Sur Android:**
Sur android, il y existe deux possibilités :

 - Utiliser l'émulatr de Android studio
 - Utiliser un émulateur Genymotion (conseillé par expo, procédure expliqué ici : https://docs.genymotion.com/latest/Content/01_Get_Started/Installation.htm)

Pour run le projet:

 1. Lancer un émulateur (android studio / genymotion)
 2. **Pour ceux qui utilisent XDE :**

Ouvrir expo XDE , open existing project, choisir le projet cloné plus tot, puis cliquer sur device > open on android

 2. **Pour ceux qui utilisent exp CLI:**

	    cd vocabulometer
	    exp start
	Puis dans un autre onglet de terminal :

	    exp android

#### **Sur IOS:**
Pour lancer le projet sur IOS , vous aurez seulement besoin de Xcode sur MacOSX ( je sais pas si y'a des procédure spécifiques a linux, windows j'en parle pas )

 2. **Pour ceux qui utilisent XDE :**

Ouvrir expo XDE , open existing project, choisir le projet cloné plus tot, puis cliquer sur device > open on ios

**C'est TOUT**

 2. **Pour ceux qui utilisent exp CLI:**

	    cd vocabulometer
	    exp start
	Puis dans un autre onglet de terminal :

	    exp ios
