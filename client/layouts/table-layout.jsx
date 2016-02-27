LoadingLayout = React.createClass({
  render() {
    return (
      <div className='container-fluid text-xs-center'>
        {this.props.children}
      </div>
    )
  }
})
