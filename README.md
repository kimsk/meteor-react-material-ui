# NOTES:
Use [meteor-webpack-react](https://github.com/kimsk/meteor-webpack-react/tree/karlkim) instead.

# meteor-react-material-ui

1). Create Meteor app: `meteor create {app}`

2).  Add React: `meteor add react`

3). Remove Blaze: `meteor remove blaze-html-templates`

4). Add npm for meteor: `meteor add meteorhacks:npm cosmos:browserify`

>Material UI and React-related modules are available on NPM, and can be bundled for the client with Browserify tool, so we need to download [material ui](http://material-ui.com/#/home) via NPM.

5). Include `material-ui` and `externalify` in [packages.json](https://github.com/kimsk/meteor-react-material-ui/blob/master/app/packages.json)

6). Add a file, [lib/app.browserify.js](https://github.com/kimsk/meteor-react-material-ui/blob/master/app/lib/app.browserify.js) and [lib/app.browserify.options.js](https://github.com/kimsk/meteor-react-material-ui/blob/master/app/lib/app.browserify.options.json) and add required modules.

7). See sample [jsx](https://github.com/kimsk/meteor-react-material-ui/blob/master/app/app.jsx).

#### Default Meteor App
![Normal](https://raw.github.com/kimsk/meteor-react-material-ui/master/docs/normal.png)

#### React/Material UI 
![Material UI](https://raw.github.com/kimsk/meteor-react-material-ui/master/docs/material-ui.png)

#### References:
- [Using client-side modules from NPM with Browserify](http://react-in-meteor.readthedocs.org/en/latest/client-npm/)
- [Meteor, React and Material UI the easy way](https://grigio.org/meteor-react-and-material-ui-the-easy-way/)
- [Material UI Leaderboard](https://github.com/meteor/react-packages/tree/master/examples/material-ui-leaderboard)
- [Getting started with Material UI](https://forums.meteor.com/t/getting-started-with-material-ui/11800)
- [meteor-material-ui-example](https://github.com/rkstar/meteor-material-ui-example)
