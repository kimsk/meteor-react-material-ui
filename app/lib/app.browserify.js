React = require('react');
mui = require('material-ui');
injectTapEventPlugin = require('react-tap-event-plugin');
Colors = mui.Styles.Colors;
FontIcon = require('material-ui/lib/font-icon');

if (Meteor.isClient) {
  var head = document.getElementsByTagName('head')[0];
  //Generate a style tag
  var style = document.createElement('link');
  style.type = 'text/css';
  style.rel = "stylesheet";
  style.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';

  head.appendChild(style);
}