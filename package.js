Package.describe({
  name: 'marvin:imsi-catcher-catcher-secrets',
  version: '0.0.1',
  summary: 'Add a path with a secret key to browse data.',
  git: 'https://github.com/marvinmarnold/meteor-imsi-catcher-catcher-secrets',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('imsi-catcher-catcher-secrets.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('marvin:imsi-catcher-catcher-secrets');
  api.addFiles('imsi-catcher-catcher-secrets-tests.js');
});
