USE DATABASE oauth_provider_db;

INSERT INTO oauth_clients (client_id, client_secret, redirect_uri) VALUES ('test', 'test', 'http://test/');
INSERT INTO oauth_users (username, password) VALUES ('test', 'test');