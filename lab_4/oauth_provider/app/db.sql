CREATE DATABASE IF NOT EXISTS oauth_provider_db;

USE oauth_provider_db;

CREATE TABLE oauth_clients (
  client_id VARCHAR(80) NOT NULL,
  client_secret VARCHAR(80) NOT NULL,
  redirect_uri VARCHAR(2000) NOT NULL,
  grant_types VARCHAR(80),
  scope VARCHAR(2000),
  user_id VARCHAR(80),
  CONSTRAINT client_id_pk PRIMARY KEY (client_id)
);

CREATE TABLE oauth_access_tokens (
  access_token VARCHAR(40) NOT NULL,
  client_id VARCHAR(80) NOT NULL,
  user_id VARCHAR(255),
  expires TIMESTAMP NOT NULL,
  scope VARCHAR(2000),
  CONSTRAINT access_token_pk PRIMARY KEY (access_token)
);

CREATE TABLE oauth_authorization_codes (
  authorization_code VARCHAR(40) NOT NULL,
  client_id VARCHAR(80) NOT NULL,
  user_id VARCHAR(255),
  redirect_uri VARCHAR(2000) NOT NULL,
  expires TIMESTAMP NOT NULL,
  scope VARCHAR(2000),
  id_token VARCHAR(1000),
  CONSTRAINT auth_code_pk PRIMARY KEY (authorization_code)
);

CREATE TABLE oauth_refresh_tokens (
  refresh_token VARCHAR(40) NOT NULL,
  client_id VARCHAR(80) NOT NULL,
  user_id VARCHAR(255),
  expires TIMESTAMP NOT NULL,
  scope VARCHAR(2000), 
  CONSTRAINT refresh_token_pk PRIMARY KEY (refresh_token)
);

CREATE TABLE oauth_users (
  username VARCHAR(255) NOT NULL,
  password VARCHAR(2000),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  email_verified BOOLEAN,
  scope VARCHAR(4000),
  CONSTRAINT username_pk PRIMARY KEY (username)
);

CREATE TABLE oauth_scopes (
  scope VARCHAR(80) NOT NULL,
  is_default BOOLEAN,
  CONSTRAINT scope_pk PRIMARY KEY (scope)
);

CREATE TABLE oauth_jwt (
  client_id VARCHAR(80) NOT NULL,
  subject VARCHAR(80),
  public_key VARCHAR(2000) NOT NULL
);

source ./insert.sql;

