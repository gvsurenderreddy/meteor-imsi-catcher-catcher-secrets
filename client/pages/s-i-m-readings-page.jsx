SIMReadingsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    var data = {
      ready: false,
      readings: Catcher.SIMReadings.find().fetch()
    };

    var handles = [
      Meteor.subscribe('cathcer/secrets/sim-readings', Session.get(SESSION_SECRET)),
    ];

    var handlesReady = _.every(handles, handle => {return handle.ready();})
    if(handlesReady) {
      data.ready = true;
    }

    return data;
  },

  reading(doc) {
    return <h1>{doc.mcc}</h1>
  },

  render() {
    return (
      <LoadingLayout ready={this.data.ready}>
        <div className="container text-xs-center">
          <h3>SIM Readings</h3>
          {this.data.readings.map(this.reading)}
        </div>
      </LoadingLayout>
    )
  }
})
