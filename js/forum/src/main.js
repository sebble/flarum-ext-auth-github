import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('flarum-auth-gitlab', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('gitlab',
      <LogInButton
        className="Button LogInButton--gitlab"
        icon="gitlab"
        path="/auth/gitlab">
        {app.translator.trans('flarum-auth-gitlab.forum.log_in.with_gitlab_button')}
      </LogInButton>
    );
  });
});
