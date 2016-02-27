var methods = [
  {name: "cathcer/secrets/sim-readings", kollection: Catcher.SIMReadings},
  {name: "cathcer/secrets/telephony-readings", kollection: Catcher.TelephonyReadings},
  {name: "cathcer/secrets/neighbor-readings", kollection: Catcher.NeighborReadings},
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
