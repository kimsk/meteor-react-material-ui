if (Meteor.isClient) {

  const {
      RaisedButton,
      Avatar,
      SvgIcon
      } = mui;

  let Content = React.createClass({
    // Material UI
    getChildContext() {
      return {
        muiTheme: mui.Styles.ThemeManager.getMuiTheme(mui.Styles.LightRawTheme)
      };
    },

    childContextTypes: {
      muiTheme: React.PropTypes.object
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
            <FontIcon className="material-icons">face</FontIcon>
            <SvgIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            </SvgIcon>
          </div>
      )
    }

  });

  Meteor.startup(function(){
    injectTapEventPlugin();
    React.render(<Content/>, document.body);
  });
}

