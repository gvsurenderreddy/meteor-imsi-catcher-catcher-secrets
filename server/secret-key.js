correctSecret = function(secretKey) {
  return secretKey === Meteor.settings.CATCHER_SECRETS_KEY
}
