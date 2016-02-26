var options = {sort: {"commonReading.createdAt": -1}, limit: 100}
Meteor.publish("cathcer/secrets/sim-readings", function(secretKey) {
  check(secretKey, String)

  if(correctSecret(secretKey)) {
    return Catcher.SIMReadings.find({}, options)
  } else {
    this.ready();
  }
});

Meteor.publish("cathcer/secrets/telephony-readings", function(secretKey) {
  check(secretKey, String)

  if(correctSecret(secretKey)) {
    return Catcher.TelephonyReadings.find({}, options)
  } else {
    this.ready();
  }
});
