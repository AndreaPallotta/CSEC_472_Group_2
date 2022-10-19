# SELinux changes to prevent injections

## Prerequisites

- SELinux enabled (sudo setenforce 1)

## Command Injection (Temporary solution to check if the logic works as expected)

- Run this command in the CLI: `sudo chcon --reference=/etc/shadow /etc/passwd`
- From the website, navigate to the "Commmand Injection" page
- Try executing the injection again by typing `127.0.0.1 ; cat /etc/passwd` in the IP address textfield

## Malicious File Upload

- Run the following command: `sudo setsebool httpd_builtin_scripting off`
- From the website, navigate to the "File Upload" page
- If not already there, update the `file_upload.php` using the `Browse...` and `Upload` button
- Navigate to `{IP}/hackable/uploads/file_upload.php`. Now you should not be able to see the result of `ls -la`

## Local File Inclusion

- Since the injection targets `/etc/passwd`, it's already prevented by the solution for Command Injection

## Remote File Inclusion

- Run this command in the CLI: `sudo setsebool httpd_can_network_connect off`
- From the website, navigate to the "File Inclusion" page
- Change the URL params from `page=include.php` to `https://google.com`
- The Google search bar should now NOT appear 

## SQL Injection + backdoor

> Waiting for working sql injection
