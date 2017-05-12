
# How to Get Started with React & Electron

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
cd electron-example/
yarn
atom .
yarn start
```

You have running react project with live-reload.  Modify your components and when you save them the MHR will reload your browser and show you the changes.
Now, lets add Electron and make this a stand-alone app.



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
