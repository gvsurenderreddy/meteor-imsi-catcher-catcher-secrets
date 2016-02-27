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

secretsRoute.route("/telephony-readings", {
  name: "catcherSecretsTelephonyReadings",
  action: function(params) {
    ReactLayout.render(App, {
      content: <TelephonyReadingsPage />
    });
  },
})
TELEPHONY_PATH = FlowRouter.path('catcherSecretsTelephonyReadings')

secretsRoute.route("/neighbor-readings", {
  name: "catcherSecretsNeighborReadings",
  action: function(params) {
    ReactLayout.render(App, {
      content: <NeighborReadingsPage />
    });
  },
})
NEIGHBOR_PATH = FlowRouter.path('catcherSecretsNeighborReadings')

secretsRoute.route("/basestations", {
  name: "catcherSecretsBasestations",
  action: function(params) {
    ReactLayout.render(App, {
      content: <BasestationsPage />
    });
  },
})
BASESTATIONS_PATH = FlowRouter.path('catcherSecretsBasestations')
