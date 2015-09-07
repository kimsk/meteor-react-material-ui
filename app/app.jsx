if (Meteor.isClient) {

  var Content = React.createClass({
    getInitialState: function() {
      return {counter: 0};
    },

    click(){
      this.setState({counter: this.state.counter+1});
    },

    render(){
      return (
          <div>
            <button onClick={this.click}>Click Me</button>
            <p>You've pressed the button {this.state.counter} times.</p>
          </div>
      )
    }

  });
  Meteor.startup(function(){
    React.render(<Content/>, document.body);
  });
}

