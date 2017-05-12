

# How to Get Started with React & NodeJS

**Development tools needed**
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Atom Editor](https://atom.io/)


## Starting the project

```
cd ~/projects
```

create a new project
```
git clone https://github.com/martinjackson/Getting-Started-With-React.git your-project-name
cd your-project-name
```

run and play with the Electron Example Live
```
cd node-example/
yarn
atom .
yarn start
```


## How does this work?
The __Webpack Development Server__ running on port 3000 and serving up live changes to the front end.

We just need a few changes to your project:

1) Add the proxy configuration inside package.json
```
"proxy": "http://localhost:3001/",
```
2) add the `babel-node` command to launch the server.js **(with ES6!)**
```
yarn add babel-cli    (npm install --save babel-cli)
yarn add --dev babel-watch  (npm install --save-dev babel-watch)
```

3) Since we will need two thing running at the same time.
```
yarn add npm-run-all --dev    (npm install --save-dev npm-run-all)
```
4) In the `package.json`'s script section, change

 ~~"start"~~"run:react": "react-scripts start", <br/>
 "run:server": "cd server ; babel-watch server.js", <br/>
 "start": "npm-run-all --parallel run:*",



#### Notes:
[using-create-react-app-with-a-server]: https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/


Yarn is a faster version of the npm command. Both go to the NPM repository.

| NPM | Yarn |
| ---------- | ------------ |
npm install  | yarn install
npm install --save [package] | yarn add [package]
npm install --save-dev [package] | yarn add [package] --dev
npm install --global [package] | yarn global add [package]
npm start | yarn run start |
