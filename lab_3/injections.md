# Injections

## Prerequisites

- DVWA setup and accessible
- Login as `admin:password`
- From the side navbar, navigate to `DVWA Security` and set security level to `low`

## Command Injection

- From the website, navigate to `Command Injection`.
- In the IP address textfield, type `127.0.0.1 ; cat /etc/passwd`.
- Click the submit button

<img src="/screenshots/command_injection.PNG" alt="command_injection_screenshot" />

## Malicious File Upload

- From the website, navigate to `File Upload`
- Click the `Browse` button
- Select [file_upload.php](utils/file_upload.php)
- Click the upload button and way for the success message
- Navigate to `{IP}/hackable/uploads/file_upload.php`
- If the php script is successfully executed, you should see the following output

<img src="/screenshots/file_upload.PNG" alt="file_upload_screenshot" />

## Local File Inclusion

## Remote File Inclusion

## SQL Injection + backdoor
