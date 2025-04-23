### If you haven't installed chocolatey then do this step
Run powershell administrator
- Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

## Install K6
choco install k6

### Check Version
K6 version

### Run the test and output JSON results
k6 run filename --out json=report.json

### Output html results Install k6-html-reporter
1. npm install k6-html-reporter --save-dev
2. k6 run filename
3. Open location file and then klik file summaryk6.html

### Output html results real-time
1. $env:K6_WEB_DASHBOARD="true"
2. k6 run filename
3. Klik value URL web dashboard: http://127.0.0.1:xxxx