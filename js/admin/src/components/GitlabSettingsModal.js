import SettingsModal from 'flarum/components/SettingsModal';

export default class GitlabSettingsModal extends SettingsModal {
  className() {
    return 'GitlabSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('flarum-auth-gitlab.admin.gitlab_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('flarum-auth-gitlab.admin.gitlab_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('flarum-auth-gitlab.client_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('flarum-auth-gitlab.admin.gitlab_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('flarum-auth-gitlab.client_secret')}/>
      </div>
    ];
  }
}
