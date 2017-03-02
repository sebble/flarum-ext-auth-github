'use strict';

System.register('flarum/auth/gitlab/components/GitlabSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
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
            return app.translator.trans('flarum-auth-gitlab.admin.gitlab_settings.title');
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
                app.translator.trans('flarum-auth-gitlab.admin.gitlab_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-auth-gitlab.client_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-auth-gitlab.admin.gitlab_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-auth-gitlab.client_secret') })
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

System.register('flarum/auth/gitlab/main', ['flarum/app', 'flarum/auth/gitlab/components/GitlabSettingsModal'], function (_export, _context) {
  "use strict";

  var app, GitlabSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumAuthGitlabComponentsGitlabSettingsModal) {
      GitlabSettingsModal = _flarumAuthGitlabComponentsGitlabSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('flarum-auth-gitlab', function () {
        app.extensionSettings['flarum-auth-gitlab'] = function () {
          return app.modal.show(new GitlabSettingsModal());
        };
      });
    }
  };
});