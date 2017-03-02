'use strict';

System.register('sebble/auth/gitlab/components/GitlabSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, GitlabSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      GitlabSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(GitlabSettingsModal, _SettingsModal);

        function GitlabSettingsModal() {
          babelHelpers.classCallCheck(this, GitlabSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (GitlabSettingsModal.__proto__ || Object.getPrototypeOf(GitlabSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(GitlabSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'GitlabSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('sebble-auth-gitlab.admin.gitlab_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('sebble-auth-gitlab.admin.gitlab_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('sebble-auth-gitlab.client_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('sebble-auth-gitlab.admin.gitlab_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('sebble-auth-gitlab.client_secret') })
            )];
          }
        }]);
        return GitlabSettingsModal;
      }(SettingsModal);

      _export('default', GitlabSettingsModal);
    }
  };
});;
'use strict';

System.register('sebble/auth/gitlab/main', ['flarum/app', 'sebble/auth/gitlab/components/GitlabSettingsModal'], function (_export, _context) {
  "use strict";

  var app, GitlabSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_sebbleAuthGitlabComponentsGitlabSettingsModal) {
      GitlabSettingsModal = _sebbleAuthGitlabComponentsGitlabSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('sebble-auth-gitlab', function () {
        app.extensionSettings['sebble-auth-gitlab'] = function () {
          return app.modal.show(new GitlabSettingsModal());
        };
      });
    }
  };
});