Instructions
---
**Follow this instructions in order to install all dependencies in order
to be able to open the app**

- Download node at https://nodejs.org/en/ or https://nodejs.org/en/download/
- If you already have node make sure you have the latest version since old version used to require to install npm separately.

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

type the following in your terminal
```
npm install 
```
this will install all dependencies

**To run/open the app**
---
```
npm run start,
```
this should open the app.

- Make sure you check the package.json file to make sure all dependencies and devDependencies were download to a node_modules folder if you get any error feel free to create an issue at 
