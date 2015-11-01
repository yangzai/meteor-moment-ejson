Package.describe({
  name: 'yangzai:moment-ejson',
  version: '0.0.1',
  summary: 'EJSON support for Moment.js',
  git: 'https://github.com/yangzai/meteor-moment-ejson.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
      'coffeescript',
      'ejson',
      'momentjs:moment',
  ]);
  api.addFiles('moment-ejson.coffee');
});