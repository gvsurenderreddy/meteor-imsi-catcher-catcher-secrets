var methods = [
  {name: "catcher/secrets/sim-readings", kollection: Catcher.SIMReadings},
  {name: "catcher/secrets/telephony-readings", kollection: Catcher.TelephonyReadings},
  {name: "catcher/secrets/neighbor-readings", kollection: Catcher.NeighborReadings},
]

_.each(methods, method => {
  Meteor.publish(method.name, secretKey => {
    check(secretKey, String)

    if(correctSecret(secretKey)) {
      var options = {sort: {"commonReading.createdAt": -1}, limit: 100}

      return method.kollection.find({}, options)
    } else {
      this.ready();
    }
  })
})

Meteor.publish('catcher/secrets/basestations', secretKey => {
  check(secretKey, String)

  if(correctSecret(secretKey)) {
    var options = {sort: {createdAt: -1}, limit: 100}

    return Catcher.Basestations.find({}, options)
  } else {
    this.ready();
  }
})
