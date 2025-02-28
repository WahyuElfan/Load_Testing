### If you haven't installed chocolatey then do this step
Run powershell administrator
- Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

## Install K6
choco install k6

### Check Version
K6 version

### Run the test and output JSON results
k6 run filename --out json=report.json

## Output html results
### Install k6-html-reporter
npm install k6-html-reporter --save-dev

### Run Script
k6 run filename