
# How to Get Started with React & Electron

## Prerequisites

- Install Node & npm, git
- ~~Install create-react-app~~ (project has drifted away from single bundle.js)
- clone this project, use the webpack.config.js and package.json from this project as a starting point


## Starting the project from scratch

```
cd ~/projects
```

create a new project
```
git clone https://github.com/martinjackson/Getting-Started-With-React.git your-project-name
cd your-project-name
```

run the shell of an example
```
cd node-example/   
yarn
yarn start
open http://localhost:3000
```
**OR**
```
cd electron-example/
yarn
yarn start
```

You have running react project with live-reload.  Modify your components and when you save them the MHR will reload your browser and show you the changes.
Now, lets add Electron and make this a stand-alone app.

# Adding Electrion to your application

#### 1) Add Electron (and set-env) to the project dependancies
```
npm install electron --save
npm install cross-env --save-dev
```

#### 2) Create a [main.js](main.js) (like the one from electron-quick-start with these lines changed)
```
var url = (process.env.NODE_ENV == 'live') ?
      'http://localhost:3000/index.html' :
      'file://' + __dirname + '/build/index.html';
mainWindow.loadURL(url);
```

#### 3) Add the following to package.json

```
"main": "main.js",
"homepage": "./",

"scripts": {
    "dev":  "cross-env NODE_ENV=live electron .",
    "prod": "cross-env NODE_ENV=prod electron .",   
    "packager": "electron-packager . $npm_package_name --icon=img/icon --overwrite --prune=true --ignore=src --ignore=public --out=./dist/ --asar=true",
    "makeEXE": "npm run build && npm run packager"

```

Remember: `npm run dev` requires that you have `npm start` already running in
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

The index.html will be the same as the production one, webpack-dev-server does not modify it (like some tutorials).  You also do not need the following.
```
  <script type="text/javascript" src="/webpack-dev-server.js"></script>
```



##### electron-prebuilt is phased out in favor of electron
As of Electron version 1.3.1, you can `npm install electron --save-dev` to install the latest precompiled version of Electron in your app. [read more here](http://electron.atom.io/blog/2016/08/16/npm-install-electron)


#### References

electron-userland/electron-packager: Package and distribute your Electron app with OS-specific bundles (.app, .exe etc) via JS or CLI
https://github.com/electron-userland/electron-packager

electron-packager/usage.txt at master · electron-userland/electron-packager
https://github.com/electron-userland/electron-packager/blob/master/usage.txt

Usage | Yarn
https://yarnpkg.com/en/docs/usage

Migrating from npm | Yarn
https://yarnpkg.com/en/docs/migrating-from-npm


#### Articles

Releasing Electron for Windows - Josh Bavari's Ramblings
http://jbavari.github.io/blog/2015/09/09/releasing-electron-for-windows/
