Package.describe({
  name: 'marvin:imsi-catcher-catcher-secrets',
  version: '0.0.1',
  summary: 'Add a path to meteor-imsi-catcher-catcher that makes the data viewable through a secret path.',
  git: 'https://github.com/marvinmarnold/meteor-imsi-catcher-catcher-secrets',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'react', 'check', 'underscore']);
  api.use([
    'kadira:flow-router@2.10.1',
    'kadira:react-layout@1.5.3',
    'twbs:bootstrap@4.0.0-alpha.2',
    'fortawesome:fontawesome@4.5.0',
    'momentjs:moment@2.11.2'
  ])
  api.use(['marvin:imsi-catcher-catcher@0.0.1'])

  api.addFiles('client/constants.js', 'client');

  api.addFiles('client/app.jsx', 'client');
  api.addFiles('client/routes.jsx', 'client');

  api.addFiles('client/pages/loading-page.jsx', 'client');
  api.addFiles('client/pages/secrets-page.jsx', 'client');
  api.addFiles('client/pages/s-i-m-readings-page.jsx', 'client');
  api.addFiles('client/pages/telephony-readings-page.jsx', 'client');

  api.addFiles('client/layouts/loading-layout.jsx', 'client');

  api.addFiles('server/secret-key.js', 'server');
  api.addFiles('server/readings-publications.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('marvin:imsi-catcher-catcher-secrets');
});
