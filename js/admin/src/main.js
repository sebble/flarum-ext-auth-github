import app from 'flarum/app';

import GitlabSettingsModal from 'flarum/auth/gitlab/components/GitlabSettingsModal';

app.initializers.add('flarum-auth-gitlab', () => {
  app.extensionSettings['flarum-auth-gitlab'] = () => app.modal.show(new GitlabSettingsModal());
});
