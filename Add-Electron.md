
# How to Get Started with React & Electron

## Prerequisites

- Install Node & npm

- Install create-react-app
```
sudo npm install create-react-app -g
```

## Starting the project from scratch

```
cd ~/projects
```

create a new project
```
create-react-app your-project-name
cd your-project-name
```

run the shell of an example
```
npm install
npm start
open http://localhost:3000
```

You have running react project with live-reload.  Modify your components and when you save them the MHR will reload your browser and show you the changes.
Now, lets add Electron and make this a stand-alone app.

# Adding Electrion to your application

### 1) Add Electron (and set-env) to the project dependancies
```
npm install electron set-env --save
```

### 2) Create a [main.js](main.js) (like the one from electron-quick-start with these lines changed)
```
var url = (process.env.NODE_ENV == 'live') ?
      'http://localhost:3000/index.html' :
      'file://' + __dirname + '/build/index.html';
mainWindow.loadURL(url);
```

### 3) Add the following to package.json

```
"main": "main.js",

"scripts": {
    "dev":  "set-env NODE_ENV=live electron .",
    "prod": "set-env NODE_ENV=prod electron .",    
```

Remeber: `npm run dev` requires that you have `npm start` already running in
another shell.


Note: npm scripts search in ```./node_modules/.bin/``` for commands, so to run these independently of npm  ```./node_modules/.bin/electron .```



# This works !!!
- perfect in dev mode
    npm run launch-dev (while npm start is running webpack-dev-server)
- ALMOST in PROD mode
    - need to modify the build/index.html
         it has absolute paths "/main.7cbecfc~~~.css"
         where  "main.7cbecfc~~~.css" would have worked
    - the imported svg in App.js turns into
    file:///84287d09b8053c6fa598893b8910786a.svg Failed to load resource: net::ERR_FILE_NOT_FOUND
    looks like main.js needs to change the working directory ???

#### Notes

The development index.html does not need
```
  <script type="text/javascript" src="/webpack-dev-server.js"></script>
  <script type="text/javascript" src="/bundle.js"></script>
```
as create-react-app will dynamically add these at runtime


##### create-react-app by default no longer builds a bundle.js but seperate js and css files.

##### electron-prebuilt is phased out in favor of electron
As of Electron version 1.3.1, you can `npm install electron --save-dev` to install the latest precompiled version of Electron in your app. [read more here](http://electron.atom.io/blog/2016/08/16/npm-install-electron)
