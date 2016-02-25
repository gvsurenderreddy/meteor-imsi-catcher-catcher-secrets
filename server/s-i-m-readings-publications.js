Meteor.publish("cathcer/secrets/sim-readings", function(secretKey) {
  check(secretKey, String)

  if(correctSecret(secretKey)) {
    return Catcher.SIMReadings.find()
  } else {
    this.ready();
  }
});
