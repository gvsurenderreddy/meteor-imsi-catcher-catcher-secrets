TableLayout = React.createClass({
  render() {
    return (
      <div className='container-fluid text-xs-center'>
        <Links />
        {this.props.children}
      </div>
    )
  }
})
