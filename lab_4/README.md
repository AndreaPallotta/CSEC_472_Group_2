# O-Kerberos Implementation

- `Client`
  - Sends credentials to auth server
  - Receives encrypted request with encrypted token from auth server
  - Decrypts response json from auth server and sends encrypted token to app server

<br />

- `Authentication Server`
  - Receives credentials from client
  - Sends request to Oauth Provider to request for a token
  - Encrypts token with AES using secret only known to app and auth servers
  - Encrypts API response with SHA-2 hashed user password

<br />

- `OAuth Provider`
  - Receives request from auth server
  - Validates user credentials
  - Sends authentication token to auth server

<br />

- `Application Server`
  - Receives encrypted token from client
  - Decrypts token with AES using secret
  - Sends success message back to client
