TelephonyReadingsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    var data = {
      ready: false,
      readings: Catcher.TelephonyReadings.find().fetch()
    };

    var handles = [
      Meteor.subscribe('cathcer/secrets/telephony-readings', Session.get(SESSION_SECRET)),
    ];

    var handlesReady = _.every(handles, handle => {return handle.ready();})
    if(handlesReady) {
      data.ready = true;
    }

    return data;
  },

  reading(reading) {
    return (
      <tr>
        <th scope="row">{reading.commonReading.deviceId}</th>
        <td>{reading.commonReading.readingType}</td>
        <td>{reading.cid}</td>
        <td>{reading.lac}</td>
        <td>{reading.mcc}</td>
        <td>{reading.mnc}</td>
        <td>{reading.psc}</td>
        <td>{reading.signalStrengthDBM}</td>
        <td>{reading.latitude}</td>
        <td>{reading.longitude}</td>
        <td>{reading.commonReading.createdAt}</td>
      </tr>
    )
  },

  render() {
    return (
      <LoadingLayout ready={this.data.ready}>
        <div className="container text-xs-center">
          <h3>Telephony Readings</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Device ID</th>
                <th>Reading Type</th>
                <th>CID</th>
                <th>LAC</th>
                <th>MCC</th>
                <th>MNC</th>
                <th>PSC</th>
                <th>Signal Strength</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {this.data.readings.map(this.reading)}
            </tbody>
          </table>

        </div>
      </LoadingLayout>
    )
  }
})
