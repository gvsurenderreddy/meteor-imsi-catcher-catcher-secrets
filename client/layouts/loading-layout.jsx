LoadingLayout = React.createClass({
  propTypes: {
    ready: React.PropTypes.bool.isRequired
  },

  render() {
    if(this.props.ready) {
      return this.props.children;
    } else {
      return <LoadingPage />
    }
  }
})
