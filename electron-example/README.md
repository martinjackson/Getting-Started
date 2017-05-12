
# Getting Started with React, Electron Example

![electron-react-babel-webpack](icons/erb-logo.png)


 Fully configured for [ECMAScript 6](http://es6-features.org) support both in the React components and in the Electron modules

- **Clone this project** for a quick start
- `yarn start` to run the project with Live Reload as you edit the [React](https://facebook.github.io/react/) components or the main.js [Electron](http://electron.atom.io/) app ---- see the changed immediately!!
- `yarn run prep` and `yarn run packager` will build a Windows EXE, Mac APP, and/or Linux Execuable.

**Development tools needed**
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Atom Editor](https://atom.io/)

**How it works**

The NPM scripts in package.json bundle your code via [webpack](https://webpack.github.io/). It uses [`gulp`](https://github.com/gulpjs/gulp) to check for changes in your `src` folder and live-reloads it with [`electron-connect`](https://github.com/Quramy/electron-connect).
The babel preset is `latest` and `react`.

## Editor Configuration
**Atom**
```bash
apm install editorconfig es6-javascript atom-ternjs javascript-snippets linter linter-eslint language-babel autocomplete-modules file-icons
```

**Adding eslint to Atom**
```
apm install linter-eslint
```
**Adding eslint to your project for command line**
```
npm i --save-dev eslint eslint-plugin-react
```
Hope this starter helps!



## Quick Start

```bash
# Clone this repository
git clone https://github.com/martinjackson/Getting-Started-With-React.git <your project name>
# Go into the repository
cd <your project name>
# Install dependencies
yarn
# launch your editor
atom .
# Run the app
yarn start
```

The `gulpfile` handles bundling and live-reloading.
Check `main.js` on function `createWindow()` for `electron-connect`'s client


## Special Thanks
- [Quramy for electron-connect](https://github.com/Quramy/electron-connect)
- [Gulp](https://github.com/gulpjs/gulp)



## Table Of Contents

<!-- toc orderedList:0 depthFrom:1 depthTo:6 -->

* [Getting Started with React, Electron Example](#getting-started-with-react-electron-example)
  * [Editor Configuration](#editor-configuration)
  * [Quick Start](#quick-start)
  * [Special Thanks](#special-thanks)
  * [Table Of Contents](#table-of-contents)
  * [Folder Structure](#folder-structure)
  * [Available Scripts](#available-scripts)
    * [`npm start`](#npm-start)
    * [`npm run prod`](#npm-run-prod)
    * [`npm run build`](#npm-run-build)
  * [Installing a Dependency](#installing-a-dependency)
  * [Importing a Component](#importing-a-component)
    * [`Button.js`](#buttonjs)
    * [`DangerButton.js`](#dangerbuttonjs)
  * [Adding a Stylesheet](#adding-a-stylesheet)
    * [`Button.css`](#buttoncss)
    * [`Button.js`](#buttonjs-1)
  * [Adding Images and Fonts](#adding-images-and-fonts)
  * [Something Missing?](#something-missing)

<!-- tocstop -->

## Folder Structure

- **src**  a place for all your front-end React components
- **main** where all the modules for your Electron application
- **main/public** the web pages associated with each Electron Windows
- **dist** is empted ans rebuilt during the Electron EXE creatation



* `public/index.html` is the main window displaying the App.js conponent
* `public/example.html` is the 2nd window template
* `src/entry.js` is the JavaScript entry point for the front-end code, it looks to see which div elements are defined in a page in order to know which React component to DOMrender.

main.js is coded to open windows with `index.html` and `example.html` -- if you rename these files, change the code in main.js

gulp is watching:
- everything in `main` directory to **Restart** the application
- everything in `main/public` to **Reload** all windows
- everything under `src` directory to **Build** the `main/public/bundle.js` (this will triggers all window reloads)


You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
This will run the application with all file changes triggering a reload.
You will also see any lint errors in the console.

### `npm run prod`

Runs this application without the right-click debug menu
Your app is ready to be deployed!

### `npm run build`

Compresses all the application code into an app.asar, and Electron executable for the target platform.
Your Windows Exe/Mac App/Linux App is ready to be deployed!

See the section about [deployment](#deployment) for more information.



## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```
npm install --save <library-name>
```

## Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

### `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
```

### `DangerButton.js`


```js
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

Be aware of the [difference between default and named exports](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

Learn more about ES6 modules:

* [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
* [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## Adding a Stylesheet

This project setup uses [Webpack](https://webpack.github.io/) for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**:

### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

**This is not required for React** but many people find this feature convenient. You can read about the benefits of this approach [here](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b). However you should be aware that this makes your code less portable to other build tools and environments than Webpack.

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified `.css` file in the build output.

If you are concerned about using Webpack-specific semantics, you can put all your CSS right into `src/index.css`. It would still be imported from `src/index.js`, but you could always remove that import if you later migrate to a different build tool.

## Adding Images and Fonts

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` an image right in a JavaScript module**. This tells Webpack to include that image in the bundle. Unlike CSS imports, importing an image or a font gives you a string value. This value is the final image path you can reference in your code.

Here is an example:

```js
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack finds all relative module references in CSS (they start with `./`) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.

Please be advised that this is also a custom feature of Webpack.

**It is not required for React** but many people enjoy it (and React Native uses a similar mechanism for images).<br>
An alternative way of handling static assets is described in the next section.

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/facebookincubator/create-react-app/issues) or [contribute some!](https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)
