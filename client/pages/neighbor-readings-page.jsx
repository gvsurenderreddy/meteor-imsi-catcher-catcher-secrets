NeighborReadingsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    var data = {
      ready: false,
      readings: Catcher.NeighborReadings.find({}, {sort: {"commonReading.createdAt": -1}}).fetch()
    };

    var handles = [
      Meteor.subscribe('cathcer/secrets/neighbor-readings', Session.get(SESSION_SECRET)),
    ];

    var handlesReady = _.every(handles, handle => {return handle.ready();})
    if(handlesReady) {
      data.ready = true;
    }

    return data;
  },

  reading(reading) {
    return (
      <tr key={reading._id}>
        <th scope="row">{reading.commonReading.deviceId}</th>
        <td>{reading.commonReading.readingType}</td>
        <td>{reading.networkType}</td>
        <td>{reading.cid}</td>
        <td>{reading.lac}</td>
        <td>{reading.psc}</td>
        <td>{reading.signalStrengthDBM}</td>
        <td>{dateToString(reading.commonReading.createdAt)}</td>
      </tr>
    )
  },

  render() {
    return (
      <LoadingLayout ready={this.data.ready}>
        <TableLayout>
          <h3>Neighbor Readings</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Device ID</th>
                <th>Reading Type</th>
                <th>Network Type</th>
                <th>CID</th>
                <th>LAC</th>
                <th>PSC</th>
                <th>Signal Strength</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {this.data.readings.map(this.reading)}
            </tbody>
          </table>
        </TableLayout>
      </LoadingLayout>
    )
  }
})
