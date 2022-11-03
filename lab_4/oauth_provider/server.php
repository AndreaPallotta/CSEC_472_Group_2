<?php
    $dns = 'mysql:host=localhost;dbname=oauth_provider_db';
    $username = 'root';
    $password = 'root';

    require_once('oauth2-server-php/src/OAuth2/Autoloader.php');
    OAuth2\Autoloader::register();
    
    $storage = new OAuth2\Storage\Pdo(array('dsn' => $dns, 'username' => $username, 'password' => $password));
    $server = new OAuth2\Server($storage);

    $server->addGrantType(new OAuth2\GrantType\ClientCredentials($storage));
    $server->addGrantType(new OAuth2\GrantType\AuthorizationCode($storage));
?>