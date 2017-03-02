var gulp = require('flarum-gulp');

gulp({
  modules: {
    'flarum/auth/gitlab': 'src/**/*.js'
  }
});
