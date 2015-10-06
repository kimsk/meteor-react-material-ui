# meteor-react-material-ui

#### Create Meteor 1.2 RC app
1. Create Meteor app normally by `meteor create {app}`.
2. Update to Meteor 1.2 by `meteor update --release METEOR@1.2-rc.11` (RC11 is the latest version as of 9/7/2015).

#### ES6 and React
- `meteor add ecmascript`
- `meteor add react`

![Normal](https://raw.github.com/kimsk/meteor-react-material-ui/master/docs/normal.png)

#### Material UI
Material UI and React-related modules are available on NPM, and can be bundled for the client with Browserify tool, so we need to download [material ui](http://material-ui.com/#/home) via NPM.

1. `meteor add meteorhacks:npm cosmos:browserify`
2. Include `material-ui` and `react-tap-event-plugin` in [packages.json](https://github.com/kimsk/meteor-react-material-ui/blob/master/app/packages.json)
3. Add a file, [lib/app.browserify.js](https://github.com/kimsk/meteor-react-material-ui/blob/master/app/lib/app.browserify.js) and add required modules.
4. See sample [jsx](https://github.com/kimsk/meteor-react-material-ui/blob/master/app/app.jsx).

![Material UI](https://raw.github.com/kimsk/meteor-react-material-ui/master/docs/material-ui.png)

#### References:
- [Using client-side modules from NPM with Browserify](http://react-in-meteor.readthedocs.org/en/latest/client-npm/)
- [Meteor, React and Material UI the easy way](https://grigio.org/meteor-react-and-material-ui-the-easy-way/)
- [Material UI Leaderboard](https://github.com/meteor/react-packages/tree/master/examples/material-ui-leaderboard)
