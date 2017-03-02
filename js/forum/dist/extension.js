'use strict';

System.register('sebble/auth/gitlab/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('sebble-auth-gitlab', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('gitlab', m(
            LogInButton,
            {
              className: 'Button LogInButton--gitlab',
              icon: 'gitlab',
              path: '/auth/gitlab' },
            app.translator.trans('sebble-auth-gitlab.forum.log_in.with_gitlab_button')
          ));
        });
      });
    }
  };
});