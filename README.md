# ToDo-Assistant
![Logo](https://github.com/mannycolon/toDo-Assistant/blob/master/app/img/logo.png "ToDo-Assistant")

to-do list application.

Web Technologies
---
- Javascript (Programming Language)
- NodeJs (JavaScript runtime)
- ReactJS
- Electron (Framework)
- Flux (Application architecture)
- Babel (Compiler)

Features
---
- Multi-user.

- Categorizing items by toDo Books. 

- Add, edit, remove or complete a to-do items.

- Data persistence (Data is saved locally in the file system in a json file).

- Due dates for items (Not yet supported)

- Add labels to to-do items. (Not yet supported)

- Ability to nest to-do items (Not yet supported)


Application Architecture: Flux
---
**Overview:**

Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code. Read more at [Flux Homepage](https://facebook.github.io/flux/ "Flux Homepage")

![Flux Image Description](https://github.com/mannycolon/toDo-Assistant/blob/master/app/img/flux-simple-diagram-explained.png "Flux architecture")


Instructions
---
**Follow this instructions in order to install all dependencies in order
to be able to open the app**

- Download node at https://nodejs.org/en/ or https://nodejs.org/en/download/
- If you already have node make sure you have the latest version since old versions used to require to install npm separately.

npm
---

The best way to install npm is to install node using the node.js installer. npm is installed as part of node.

It’s over at nodejs.org. It will give you a recent, working version of npm with all the paths in the expected places. This is the version that npm Inc and the Node.js project both support.

Once you’ve installed Node.js, you can make sure you’ve got the very most recent version of npm using npm itself:

```
sudo npm install npm -g
```
(on Windows, you can drop the “sudo” but you should run it as administrator). Running this update will give you the most recent stable version of npm, also supported by npm Inc.


**After Installing node and npm**
---
Type the following in your terminal

```
npm install 
```
This will install all dependencies

**To run/open the app**
---
```
npm run start,
```
This should open the app.

- Make sure you check the package.json file to make sure all dependencies and devDependencies were download to a node_modules folder if you get any error feel free to create an issue at https://github.com/mannycolon/toDo-Assistant/issues
