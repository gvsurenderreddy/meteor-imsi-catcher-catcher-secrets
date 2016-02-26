SecretsPage = React.createClass({
  render() {
    return (
      <div className="container text-xs-center">
        <h3>Secret Views</h3>
        <ul>
          <li><a href={SIM_PATH}>SIM Readings</a></li>
          <li><a href={TELEPHONY_PATH}>Telephony Readings</a></li>
        </ul>
      </div>
    )
  }
})
