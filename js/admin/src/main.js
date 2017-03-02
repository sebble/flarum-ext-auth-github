import app from 'flarum/app';

import GitlabSettingsModal from 'sebble/auth/gitlab/components/GitlabSettingsModal';

app.initializers.add('sebble-auth-gitlab', () => {
  app.extensionSettings['sebble-auth-gitlab'] = () => app.modal.show(new GitlabSettingsModal());
});
