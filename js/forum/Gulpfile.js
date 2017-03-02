var gulp = require('flarum-gulp');

gulp({
  modules: {
    'sebble/auth/gitlab': 'src/**/*.js'
  }
});
