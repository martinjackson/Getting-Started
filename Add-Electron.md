
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
```

# Adding Electrion to your example app

## You have used create-react-app to create your project and your React components working in the the browser (localhost:3000), now lets add Electron and make this a stand-alone app

### 1) Add the following to package.json

```
"main": "src/main.js",

"scripts": {
    "launch-dev": "electron .",
    "launch-prod": "export NODE_ENV=production ; electron .",    
```
npm scripts search in ```./node_modules/.bin/``` for commands, so
to run manually ```./node_modules/.bin/electron .```

### 2) Create the standard main.js (change 1 line)
```
// win.loadURL(`file://${__dirname}/index.html`)
win.loadURL('http://localhost:3000/index.html');
```

### 3) Add Electron to the project
```
npm install electron-prebuilt --save
```

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
