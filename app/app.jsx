if (Meteor.isClient) {

  const {
      RaisedButton,
      Avatar
      } = mui;

  let Colors = mui.Styles.Colors;

  const ThemeManager = new mui.Styles.ThemeManager();

  var Content = React.createClass({
    // Material UI
    childContextTypes: {
      muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    },

    getInitialState: function() {
      return {counter: 0};
    },

    click(){
      this.setState({counter: this.state.counter+1});
    },

    render(){
      return (
          <div>
            <RaisedButton label="Click Me" primary={true} onClick={this.click}/>
            <br/>
            You've pressed the button
              <Avatar
                  color={Colors.deepOrange300}
                  backgroundColor={Colors.purple500}>
                {this.state.counter}
              </Avatar> times.
          </div>
      )
    }

  });
  Meteor.startup(function(){
    React.render(<Content/>, document.body);
  });
}

