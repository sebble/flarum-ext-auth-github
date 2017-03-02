<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Sebble\Auth\GitLab;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use Omines\OAuth2\Client\Provider\Gitlab;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class GitLabAuthController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * {@inheritdoc}
     */
    protected function getProvider($redirectUri)
    {
        return new Gitlab([
            'clientId'     => $this->settings->get('sebble-auth-gitlab.client_id'),
            'clientSecret' => $this->settings->get('sebble-auth-gitlab.client_secret'),
            'redirectUri'  => $redirectUri,
            'domain'       => $this->settings->get('sebble-auth-gitlab.client_domain')
        ]);
    }

    /**
     * {@inheritdoc}
     */
    protected function getAuthorizationUrlOptions()
    {
        return ['scope' => ['read_user']];
    }

    /**
     * {@inheritdoc}
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'email' => $resourceOwner->getEmail()
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'username' => $resourceOwner->getUsername()
            //'avatarUrl' => array_get($resourceOwner->toArray(), 'avatar_url')
        ];
    }
}
