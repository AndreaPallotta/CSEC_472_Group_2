# SELinux changes to prevent injections

## Prerequisites

- SELinux enabled (sudo setenforce 1)

## Command Injection (Temporary solution to check if the logic works as expected)

- Run this command in the CLI: `sudo chcon --reference=/etc/shadow /etc/passwd`
- From the website, navigate to the "Commmand Injection" page
- Try executing the injection again by typing `127.0.0.1 ; cat /etc/passwd` in the IP address textfield

## Malicious File Upload



## Local File Inclusion

## Remote File Inclusion

## SQL Injection + backdoor

> Waiting for working sql injection
