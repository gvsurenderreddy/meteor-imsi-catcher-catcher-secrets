var secretsRoute = FlowRouter.group({
  prefix: '/secrets',
  name: 'secretsGroup',
  triggersEnter: [function(context, redirect) {
    var query = context.queryParams
    if(query.secret) {
      Session.set(SESSION_SECRET, query.secret)
    }
  }]
});

secretsRoute.route("/", {
  name: "catcherSecrets",
  action: function(params) {
    ReactLayout.render(App, {
      content: <SecretsPage />
    });
  },
})
SECRETS_PATH = FlowRouter.path('catcherSecrets')

secretsRoute.route("/sim-readings", {
  name: "catcherSecretsSIMReadings",
  action: function(params) {
    ReactLayout.render(App, {
      content: <SIMReadingsPage />
    });
  },
})
SIM_PATH = FlowRouter.path('catcherSecretsSIMReadings')
