Links = React.createClass({
  render() {
    return (
      <ul>
        <li><a href={SIM_PATH}>SIM Readings</a></li>
        <li><a href={TELEPHONY_PATH}>Telephony Readings</a></li>
        <li><a href={NEIGHBOR_PATH}>Neighbor Readings</a></li>
        <li><a href={BASESTATIONS_PATH}>Basestations</a></li>
      </ul>
    )
  }
})
