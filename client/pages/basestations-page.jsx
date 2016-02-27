BasestationsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    var data = {
      ready: false,
      basestations: Catcher.Basestations.find({}, {sort: {createdAt: -1}}).fetch()
    };

    var handles = [
      Meteor.subscribe('catcher/secrets/basestations', Session.get(SESSION_SECRET)),
    ];

    var handlesReady = _.every(handles, handle => {return handle.ready();})
    if(handlesReady) {
      data.ready = true;
    }

    return data;
  },

  basestation(bts) {
    return (
      <tr key={bts._id}>
        <th scope="row">{bts.cid}</th>
        <td>{bts.mnc}</td>
        <td>{bts.mcc}</td>
        <td>{bts.lac}</td>
        <td>{bts.hasNeighbors}</td>
        <td>{dateToString(bts.createdAt)}</td>
      </tr>
    )
  },

  render() {
    return (
      <LoadingLayout ready={this.data.ready}>
        <TableLayout>
          <h3>Basestations</h3>
          <table className="table">
            <thead>
              <tr>
                <th>CID</th>
                <th>MNC</th>
                <th>MCC</th>
                <th>LAC</th>
                <th>Has Neighbors</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {this.data.basestations.map(this.basestation)}
            </tbody>
          </table>
        </TableLayout>
      </LoadingLayout>
    )
  }
})
